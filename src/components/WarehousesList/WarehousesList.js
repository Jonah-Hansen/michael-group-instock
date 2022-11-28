import { useEffect, useState } from 'react';
import { axiosInstance } from "../../helpers/axiosInstance";
import WarehousesListItem from "../WarehousesListItem/WarehousesListItem";
import "./WarehousesList.scss";

function WarehousesList({handleClick, warehousesData , setWarehousesData}) {

  
  useEffect(() => {
    axiosInstance.get(`/warehouse`)
      .then((response) => {
        setWarehousesData(response.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  return (
    <section className="warehouse-list">
      {warehousesData?.map(warehouseData => <WarehousesListItem
        id={warehouseData.id}
        key={warehouseData.id}
        name={warehouseData.warehouse_name}
        address={warehouseData.address}
        city={warehouseData.city}
        country={warehouseData.country}
        contactName={warehouseData.contact_name}
        contactPhone={warehouseData.contact_phone}
        contactEmail={warehouseData.contact_email}
        warehouseId={warehouseData.id}
        handleClick={handleClick}
      />)}
    </section>
  )
}

export default WarehousesList;