import PageHeader from "../../components/PageHeader/PageHeader"
import WarehousesHeadings from "../../components/WarehousesHeadings/WarehousesHeadings";
import WarehousesList from "../../components/WarehousesList/WarehousesList";

function WarehousesPage() {
  return (
    <>
    <PageHeader type={"list"} text={"warehouses"} />
    <WarehousesHeadings />
    <WarehousesList />
    </>
  )
}

export default WarehousesPage