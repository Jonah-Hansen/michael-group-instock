import EditWarehouseForm from "../../components/EditWarehouseForm/EditWarehouseForm"
import PageHeader from "../../components/PageHeader/PageHeader"

function EditWarehousePage() {
  document.title = "In Stock | Edit Warehouse"
  return (
    <>
      <PageHeader text={'edit warehouse'} />
      <EditWarehouseForm />
    </>
  )
}

export default EditWarehousePage