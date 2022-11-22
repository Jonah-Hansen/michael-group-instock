import { useNavigate } from 'react-router-dom'
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm'
import './NewWarehouse.scss'
function NewWarehouse() {
  const navigate = useNavigate()
  return (
    <main className='new-warehouse'>
      <header className='new-warehouse__header'>
        <button className='new-warehouse__back' onClick={() => navigate(-1)} />
        <h1 className='new-warehouse__heading'>Add New Warehouse</h1>
      </header>
      <WarehouseForm />
    </main>
  )
}

export default NewWarehouse