import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import './WarehouseForm.scss'

function WarehouseForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form className='warehouse-form' onSubmit={handleSubmit} >
      <div className='warehouse-form__details-container'>
        <section className='warehouse-form__details'>
          <h2 className='warehouse-form__heading'>Warehouse Details</h2>
          <TextInput type='small' label='Warehouse Name' />
          <TextInput type='small' label='street address' />
          <TextInput type='small' label='city' />
          <TextInput type='small' label='country' />
        </section>
        <section className='warehouse-form__details'>
          <h2 className='warehouse-form__heading'>Contact Details</h2>
          <TextInput type='small' label='contact name' />
          <TextInput type='small' label='position' />
          <TextInput type='tel' label='phone' />
          <TextInput type='email' label='email' />
        </section>
      </div>
      <div className='warehouse-form__buttons'>
        <Button type='cancel' text='cancel' />
        <Button type={'submit'} text={'+ add warehouse'} />
      </div>
    </form>
  )
}

export default WarehouseForm