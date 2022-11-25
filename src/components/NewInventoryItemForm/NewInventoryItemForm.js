import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../helpers/axiosInstance'
import * as validate from '../../helpers/validation'
import Button from '../Button/Button'
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import RadioButton from '../RadioButton/RadioButton'
import TextInput from '../TextInput/TextInput'
import './NewInventoryItemForm.scss'

export default function NewInventoryItemForm() {
  const [categories, setCategories] = useState([])
  const [warehouses, setWarehouses] = useState([])
  const navigate = useNavigate()
  //piece of state that holds an object of error messages
  const [error, setError] = useState({})

  const handleSubmit = async (event) => {
    event.preventDefault()
    //reset error
    setError({})

    const { name, description, status, quantity, category, warehouse } = event.target
    //build new warehouse object.
    const newInventoryItem = {
      item_name: name.value,
      description: description.value,
      status: status.value,
      quantity: quantity.value,
      category: category.value,
      warehouse_id: await getWarehouseId(warehouse.value),
    }

    if (validate.values(newInventoryItem).length !== 0) {
      const err = {}
      //set error for invalid quantity
      if (isNaN(newInventoryItem.quantity))
        err['quantity'] = "Quantity must be a number"
      //set error for keys with missing values
      validate.values(newInventoryItem)
        .forEach(key => err[key] = 'this field is required')
      setError(err)
      return
    }
    setError({})

    axiosInstance.post('/inventory', newInventoryItem)
      .then(_res => {
        event.target.reset()
        alert('new inventory item added successfully :)')
        navigate('/inventory')
      })
      .catch(err => {
        err.response ?
          console.error(err.response.data)
          : alert('cant connect to server')
      })
  }
  useEffect(() => {
    getCategories()
    getWarehouses()
  }, [])

  return (
    <form className='new-inventory-form new-inventory-form' onSubmit={handleSubmit}>
      <div className='new-inventory-form new-inventory-form-top'>
        <section className='new-inventory-form-section'>
          <h2 className='new-inventory-form-section__title'>Item Details</h2>
          <TextInput type="small" label="name" placeholder="Item Name" name='name' error={error.item_name} />
          <TextInput type="large" label="description" placeholder="Please enter a brief item description..." name='description' error={error.description} />
          <div className='new-inventory-form-group'>
            <label className='new-inventory-form-section__label'>Category</label>
            <DropDownMenu items={categories} name='category' error={error.category} />
          </div>
        </section>
        <section className='new-inventory-form-section'>
          <h2 className='new-inventory-form-section__title'>Item Availability</h2>
          <div className='new-inventory-form-group'>
            <label className='new-inventory-form-section__label'>Status</label>
            <div className='new-inventory-form-section__radio-buttons'>
              <RadioButton text='In stock' name='status' checked />
              <RadioButton text="Out of stock" status='status' name='status' />
            </div>
          </div>
          <TextInput type="small" label="Quantity" placeholder="0" name='quantity' error={error.quantity} />
          <div className='new-inventory-form-group'>
            <label className='new-inventory-form-section__label'>Warehouse</label>
            <DropDownMenu items={warehouses} name='warehouse' error={error.warehouse_id} />
          </div>
        </section>
      </div>
      <div className='new-inventory-form-buttons'>
        <Button type='cancel' text={'cancel'} />
        <Button text={'+ add item'} type='submit' />
      </div>
    </form>
  )

  async function getCategories() {
    const response = await axiosInstance('inventory/distinct/category')
    const categories = response.data.map(i => i.category)
    setCategories(categories)
  }

  async function getWarehouses() {
    const response = await axiosInstance('warehouse/distinct/name')
    const warehouse_names = response.data.map(w => w.warehouse_name)
    setWarehouses(warehouse_names)
  }

  async function getWarehouseId(name) {
    const response = await axiosInstance(`warehouse/getId/${name}`)
    console.log(response.data)
    return response.data
  }
}
