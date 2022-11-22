import TextInput from '../TextInput/TextInput'
import './WarehouseForm.scss'
function WarehouseForm({ type }) {
  return (
    <form className='warehouse-form'>
      <div className='warehouse-form__details'>
        <section className='warehouse-form__details-warehouse'>
          <h2>Warehouse Details</h2>

          <TextInput type='small'
            label='Warehouse Name'
            placeholder='Warehouse Name'
          />
          <TextInput type='large' label='large' placeholder='large please enter the item description hjere' />
          <TextInput type='search' />
          <TextInput type='tel' label='phone' />
          <TextInput type='email' className='other-class' label='email' />
          <TextInput />
        </section>
        <section className='warehouse-form__details-contact'>
          <h2>Contact Details</h2>

        </section>
      </div>
      <div className='warehouse-form__buttons'>
        <button className='button--cancel'>Cancel</button>
        <button className='button--confirm'>+ Add Warehouse</button>
      </div>
    </form>
  )
}

export default WarehouseForm