import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../helpers/axiosInstance'
import * as validate from '../../helpers/validation'
import Button from '../Button/Button'
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import RadioButton from '../RadioButton/RadioButton'
import TextInput from '../TextInput/TextInput'
import './EditInventoryForm.scss'
import { useParams } from 'react-router-dom'

export default function EditInventoryForm() {
  const [categories, setCategories] = useState([])
    const [warehouses, setWarehouses] = useState([])
    const [quantityShowsUp, setQuantityShowsUp] = useState(true)
  const navigate = useNavigate()
  //piece of state that holds an object of error messages
    const [error, setError] = useState({})
  //piece of state to hold inventory details
  const [details, setDetails] = useState({})
    const { inventoryid } = useParams()
    
    useEffect(() => {
        getInventoryDetails(inventoryid)

    }, [inventoryid])

    const handleSubmit = async (event) => {
        event.preventDefault()
        //reset error
        setError({})
        const { name, description, category, status, quantity, warehouse } = event.target

        //build new warehouse object.
        const newItem = {
            id: inventoryid,
            warehouse_id: await getWarehouseId(warehouse.value),
            item_name: name.value,
            description: description.value,
            category: category.value,
            quantity: quantity?.value || '0',
            status: status.value,
        }
            const err = {}
            //set error for invalid quantity
            if (isNaN(newItem.quantity) || parseInt(newItem.quantity) < 0) 
                err['quantity'] = "Quantity must be a non-negative number"
            if (parseInt(newItem.quantity) > 0 && newItem.status === "Out Of Stock")
                err['quantity'] = "Status does not match quantity in stock"
            if (parseInt(newItem.quantity) === 0 && newItem.status === "In Stock")
                err['quantity'] = "Status does not match quantity in stock"
                //set error for keys with missing values
                validate.values(newItem)
                    .forEach(key => err[key] = 'this field is required')
                setError(err)
                if( validate.values(newItem).length !== 0 ||  err['quantity']) return
            setError({})
            //put modified warehouse
            axiosInstance.put(`/inventory/${inventoryid}`, newItem)
                .then(_res => {
                    event.target.reset()
                    alert(' inventory item modified successfully :)')
                    navigate('/inventories')
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
        if (isNaN(details.quantity)) return "Loading..."
        return (
            <form className='new-inventory-form new-inventory-form' onSubmit={handleSubmit}>
                <div className='new-inventory-form new-inventory-form-top'>
                    <section className='new-inventory-form-section'>
                        <h2 className='new-inventory-form-section__title'>Item Details</h2>
                        <TextInput type="small" label="name" placeholder="Item Name" name='name' error={error.item_name} value={details.item_name} />
                        <TextInput type="large" label="description" placeholder="Please enter a brief item description..." name='description' error={error.description}
                            value={details.description} />
                        <div className='new-inventory-form-group'>
                            <label className='new-inventory-form-section__label'>Category</label>
                            <DropDownMenu items={categories} name='category' error={error.category} value={details.category} selected={details.category} />
                        </div>
                    </section>
                    <section className='new-inventory-form-section'>
                        <h2 className='new-inventory-form-section__title'>Item Availability</h2>
                        <div className='new-inventory-form-group'>
                            <label className='new-inventory-form-section__label'>Status</label>
                            <div className='new-inventory-form-section__radio-buttons'>
                                <RadioButton text='In stock' name='status' value='In Stock' setQuantityShowsUp={setQuantityShowsUp} />
                                <RadioButton text="Out of stock" name='status' value='Out Of Stock' setQuantityShowsUp={setQuantityShowsUp} />
                            </div>
                        </div>
                        { quantityShowsUp && <TextInput type="small" label="Quantity" placeholder="0" name='quantity' error={error.quantity} value={details.quantity} />}
                        <div className='new-inventory-form-group'>
                            <label className='new-inventory-form-section__label'>Warehouse</label>
                            <DropDownMenu items={warehouses} name='warehouse' error={error.warehouse_id} value={details.warehouse} selected={details.warehouse_name} />
                        </div>
                    </section>
                </div>
                <div className='new-inventory-form-buttons'>
                    <Button type='cancel' text={'cancel'} onClick={() => navigate('/inventories')}/>
                    <Button text={'save'} type='submit' />
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
            return response.data
        }
    
        async function getInventoryDetails(id) {
            const response = await axiosInstance.get(`/inventory/joinWarehouse/name/${id}`)
            setDetails(response.data)
        }
}
