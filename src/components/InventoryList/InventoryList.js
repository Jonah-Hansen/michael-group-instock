import { useEffect, useState } from 'react';
import { axiosInstance } from "../../helpers/axiosInstance";
import InventoryListItem from "../InventoryListItem/InventoryListItem";
import "./InventoryList.scss";

function InventoryList() {

  const [inventoryData, setInventoryData] = useState([])

  useEffect(() => {
    populateData()
  }, []);

  return (
    <section className="warehouse-list">
      {inventoryData?.map((item, index) => <InventoryListItem
          key={index}
          item={ item}
      />)}
    </section>
    )

    async function populateData() {
        try {
            const response = await axiosInstance.get('/inventory/joinWarehouse/name')
            setInventoryData(response.data)
        } catch (error) {
            console.log(error)
        }
    }
}

export default InventoryList;