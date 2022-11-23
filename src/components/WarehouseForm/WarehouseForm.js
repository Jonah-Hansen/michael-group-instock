import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { emptyValues } from '../../helpers/validation'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import './WarehouseForm.scss'

const {
  REACT_APP_PORT: PORT = "8080",
  REACT_APP_BACKEND_URL: URL = "http://localhost"
} = process.env;

function WarehouseForm() {
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
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

    console.log(emptyValues(newWarehouse));

    //   axios.post(`${URL}:${PORT}/warehouse`, newWarehouse)
    //     .catch(err => console.error(err.response.data))
  }


  return (
    <form className='warehouse-form' onSubmit={handleSubmit} noValidate >
      <div className='warehouse-form__details-container'>
        <section className='warehouse-form__details--first'>
          <h2 className='warehouse-form__heading'>Warehouse Details</h2>
          <TextInput type='small' label='Warehouse Name' name={'whName'} />
          <TextInput type='small' label='street address' name={'addr'} />
          <TextInput type='small' label='city' name={'city'} />
          <TextInput type='small' label='country' name={'country'} />
        </section>
        <section className='warehouse-form__details'>
          <h2 className='warehouse-form__heading'>Contact Details</h2>
          <TextInput type='small' label='contact name' name={'cName'} />
          <TextInput type='small' label='position' name={'position'} />
          <TextInput type='tel' label='phone' name={'phone'} />
          <TextInput type='email' label='email' name={'email'} />
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