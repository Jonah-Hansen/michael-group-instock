import { useNavigate } from 'react-router-dom'
import './NewWarehouse.scss'
function NewWarehouse() {
  const navigate = useNavigate()
  return (
    <main className='new-warehouse'>
      <header className='new-warehouse__header'>
        <button className='new-warehouse__back' onClick={() => navigate(-1)} />
        <h1 className='new-warehouse__heading'>Add New Warehouse</h1>
      </header>

      <form className='warehouse-form'>
        <div className='warehouse-form__details'>
          <section className='warehouse-form__details-warehouse'>
            <h2>Warehouse Details</h2>
            <label>
              <h3>Warehouse Name</h3>
              <input type="text" placeholder='Warehouse Name' />
            </label>
            <label>
              <h3>Street Address</h3>
              <input type="text" placeholder='Street Address' />
            </label>
            <label>
              <h3>City</h3>
              <input type="text" placeholder='City' />
            </label>
            <label>
              <h3>Country</h3>
              <input type="text" placeholder='Country' />
            </label>
          </section>
          <section className='warehouse-form__details-contact'>
            <h2>Contact Details</h2>
            <label>
              <h3>Contact Name</h3>
              <input type="text" placeholder='Contact Name' />
            </label>
            <label>
              <h3>Position</h3>
              <input type="text" placeholder='Position' />
            </label>
            <label>
              <h3>Phone Number</h3>
              <input type="text" placeholder='Phone Number' />
            </label>
            <label>
              <h3>Email</h3>
              <input type="text" placeholder='Email' />
            </label>
          </section>
        </div>
        <div className='warehouse-form__buttons'>
          <button className='button--cancel'>Cancel</button>
          <button className='button--confirm'>+ Add Warehouse</button>
        </div>
      </form>

    </main>
  )
}

export default NewWarehouse