import NewWarehouseForm from '../../components/NewWarehouseForm/NewWarehouseForm'
import PageHeader from '../../components/PageHeader/PageHeader'

function NewWarehousePage() {
  document.title = "In Stock | New Warehouse"
  return (
    <>
      <PageHeader text='Add New Warehouse' />
      <NewWarehouseForm />
    </>
  )
}

export default NewWarehousePage