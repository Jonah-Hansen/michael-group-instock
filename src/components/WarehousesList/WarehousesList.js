import WarehousesListItem from "../WarehousesListItem/WarehousesListItem";
import "./WarehousesList.scss";

function WarehousesList({warehousesData}) {

  return (
    <section className="warehouse-list">
      {warehousesData?.map(warehouseData => <WarehousesListItem
        key={warehouseData.id}
        name={warehouseData.warehouse_name}
        address={warehouseData.address}
        city={warehouseData.city}
        country={warehouseData.country}
        contactName={warehouseData.contact_name}
        contactPhone={warehouseData.contact_phone}
        contactEmail={warehouseData.contact_email}
        warehouseId={warehouseData.id}
      />)}
    </section>
  )
}

export default WarehousesList;