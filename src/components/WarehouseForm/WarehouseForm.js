import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as validate from '../../helpers/validation'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import './WarehouseForm.scss'

const {
  REACT_APP_PORT: PORT = "8080",
  REACT_APP_BACKEND_URL: URL = "http://localhost"
} = process.env;

function WarehouseForm() {
  const navigate = useNavigate()
  //piece of state that holds an object of error messages
  const [error, setError] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    //reset error
    setError({})

    const { whName, addr, city, country, cName, position, phone, email } = event.target

    //build new warehouse object.
    const newWarehouse = {
      warehouse_name: whName.value,
      address: addr.value,
      city: city.value,
      country: country.value,
      contact_name: cName.value,
      contact_position: position.value,
      contact_phone: phone.value,
      contact_email: email.value,
    }

    if (validate.values(newWarehouse).length !== 0 || !validate.phone(newWarehouse.contact_phone) || !validate.email(newWarehouse.contact_email)) {
      const err = {}
      //set error for invalid phone number
      if (!validate.phone(newWarehouse.contact_phone)) {
        err['contact_phone'] = 'please enter a valid 10 digit phone number'
      }
      //set error for invalid email
      if (!validate.email(newWarehouse.contact_email)) {
        err['contact_email'] = 'please enter a valid email address'
      }
      //set error for keys with missing values
      validate.values(newWarehouse)
        .forEach(key => err[key] = 'this field is required')
      setError(err)
      return
    }
    setError({})
    //format phone number
    newWarehouse.contact_phone = validate.phone(phone.value)
    //post new warehouse
    axios.post(`${URL}:${PORT}/warehouse`, newWarehouse)
      .then(_res => {
        event.target.reset()
        alert('new warehouse added successfully :)')
        navigate('/warehouses')
      })
      .catch(err => {
        err.response ?
          console.error(err.response.data)
          : alert('cant connect to server')
      })
  }

  return (
    <form className='warehouse-form' onSubmit={handleSubmit} noValidate >
      <div className='warehouse-form__details-container'>
        <section className='warehouse-form__details--first'>
          <h2 className='warehouse-form__heading'>Warehouse Details</h2>
          <TextInput type='small' label='Warehouse Name' name={'whName'} error={error.warehouse_name} />
          <TextInput type='small' label='street address' name={'addr'} error={error.address} />
          <TextInput type='small' label='city' name={'city'} error={error.city} />
          <TextInput type='small' label='country' name={'country'} error={error.country} />
        </section>
        <section className='warehouse-form__details'>
          <h2 className='warehouse-form__heading'>Contact Details</h2>
          <TextInput type='small' label='contact name' name={'cName'} error={error.contact_name} />
          <TextInput type='small' label='position' name={'position'} error={error.contact_position} />
          <TextInput type='tel' label='Phone Number' name={'phone'} error={error.contact_phone} />
          <TextInput type='email' label='Email' name={'email'} error={error.contact_email} />
        </section>
      </div>
      <div className='warehouse-form__buttons'>
        <Button type='cancel' text='cancel' onClick={() => navigate('/warehouses')} />
        <Button type={'submit'} text={'+ add warehouse'} />
      </div>
    </form>
  )
}

export default WarehouseForm