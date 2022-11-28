import { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import { axiosInstance } from "../../helpers/axiosInstance";
import { useParams } from "react-router-dom";

import WarehouseInventoryList from '../../components/WarehouseInventoryList/WarehouseInventoryList';
import WarehouseInventoryListHeadings from "../../components/WarehouseInventoryListHeadings/WarehouseInventoryListHeadings";


function WarehouseDetailsPage() {

  const {warehouseid} = useParams();

  const [warehouseData, setWarehouseData] = useState([])

  useEffect(() => {
    axiosInstance.get(`/warehouse/${warehouseid}`)
      .then((response) => {
        setWarehouseData(response.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }, [warehouseid]);

  return (
    <>
      <PageHeader type={'details'} text={warehouseData.warehouse_name} />
      <WarehouseDetails
        key={warehouseData.id}
        name={warehouseData.warehouse_name}
        id={warehouseData.id}
        address={warehouseData.address}
        city={warehouseData.city}
        country={warehouseData.country}
        contact_name={warehouseData.contact_name}
        contact_position={warehouseData.contact_position}
        contact_phone={warehouseData.contact_phone}
        contact_email={warehouseData.contact_email}
      />
      <WarehouseInventoryListHeadings />
      <WarehouseInventoryList />

    </>
  )
};

export default WarehouseDetailsPage;