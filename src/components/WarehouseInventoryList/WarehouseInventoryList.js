import { useEffect, useState } from 'react';
import { axiosInstance } from "../../helpers/axiosInstance";
import WarehouseInventoryListItem from "../WarehouseInventoryListItem/WarehouseInventoryListItem";
import "./WarehouseInventoryList.scss";
import DeleteInventoryModal from '../DeleteInventoryModal/DeleteInventoryModal';
import { useParams } from "react-router-dom";

function WarehouseInventoryList() {

  const {warehouseid}= useParams();
  const [inventoryData, setInventoryData] = useState([])

  console.log(warehouseid);
  useEffect(() => {
    axiosInstance.get(`/warehouse/${warehouseid}/inventory`)
      .then((response) => {
        console.log(response.data)
        setInventoryData(response.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [inventoryName, setInventoryName] = useState("")

  const handleClick = (status, inventoryId, name) => {

      setShow(status)
      setId(inventoryId)
      setInventoryName(name)
  }

  const close = () => {
    axiosInstance.get(`/warehouse/${warehouseid}/inventory`)
    .then((response) => {
      setInventoryData(response.data)
    })
    .catch((error) => {
      console.log(error)
    });
    setShow(false)
  }

  return (
    <section className="warehouse-list">
      <DeleteInventoryModal 
        onClose={close}
        show={show}
        name={inventoryName}
        inventoryId={id}/>

      {inventoryData?.map(inventoryData => <WarehouseInventoryListItem
        key={inventoryData.id}
        name={inventoryData.item_name}
        id={inventoryData.id}
        warehouse_id={inventoryData.warehouse_id}
        category={inventoryData.category}
        status={inventoryData.status}
        quantity={inventoryData.quantity}
        handleClick={handleClick}
      />)}
    </section>
  )
}

export default WarehouseInventoryList;