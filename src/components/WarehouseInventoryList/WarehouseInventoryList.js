import { useEffect, useState } from 'react';
import { axiosInstance } from "../../helpers/axiosInstance";
import WarehouseInventoryListItem from "../WarehouseInventoryListItem/WarehouseInventoryListItem";
import "./WarehouseInventoryList.scss";

function WarehouseInventoryList() {

  const [inventoryData, setInventoryData] = useState([])

  useEffect(() => {
    axiosInstance.get(`/warehouse/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9/inventory`)
      .then((response) => {
        setInventoryData(response.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <section className="warehouse-list">
      {inventoryData?.map(inventoryData => <WarehouseInventoryListItem
        key={inventoryData.id}
        name={inventoryData.item_name}
        id={inventoryData.id}
        warehouse_id={inventoryData.warehouse_id}
        category={inventoryData.category}
        status={inventoryData.status}
        quantity={inventoryData.quantity}
      />)}
    </section>
  )
}

export default WarehouseInventoryList;