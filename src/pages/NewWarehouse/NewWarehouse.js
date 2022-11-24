import PageHeader from '../../components/PageHeader/PageHeader'
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm'

function NewWarehouse() {
  document.title = "In Stock | New Warehouse"
  return (
    <>
      <PageHeader text='Add New Warehouse' />
      <WarehouseForm />
    </>
  )
}

export default NewWarehouse