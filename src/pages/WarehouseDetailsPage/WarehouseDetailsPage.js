import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import { axiosInstance } from "../../helpers/axiosInstance";

import WarehouseInventoryList from '../../components/WarehouseInventoryList/WarehouseInventoryList';
import WarehouseInventoryListHeadings from "../../components/WarehouseInventoryListHeadings/WarehouseInventoryListHeadings";

function WarehouseDetailsPage() {

  const [warehouseData, setWarehouseData] = useState([])

  useEffect(() => {
    axiosInstance.get(`/warehouse/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9`)
      .then((response) => {
        setWarehouseData(response.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <>
      <PageHeader type={'details'} text={warehouseData.warehouse_name} />
      <WarehouseDetails
        key={warehouseData.id}
        name={warehouseData.warehouse_name}
        id={warehouseData.id}
        address={warehouseData.address}
        contact_name={warehouseData.contact_name}
        contact_position={warehouseData.contact_position}
        contact_phone={warehouseData.contact_phone}
        contact_email={warehouseData.contact_email}
      />
      <WarehouseInventoryListHeadings />
      <WarehouseInventoryList />

    </>
  )
}

export default WarehouseDetailsPage