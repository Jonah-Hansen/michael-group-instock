import WarehousesListItem from "../WarehousesListItem/WarehousesListItem";
import "./WarehousesList.scss";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../helpers/axiosInstance";

function WarehousesList({ warehouseOrdered, addressOrdered, contactNameOrdered, contactInfoOrdered }) {

  const [warehousesData, setWarehousesData] = useState([])

  useEffect(() => {
    axiosInstance.get(`/warehouse`)
      .then((response) => {
        setWarehousesData(response.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  useEffect(() => {
    sortByWarehouse()
  }, [warehouseOrdered])

    useEffect(() => {
    sortByAddress()
    }, [addressOrdered])
  
    useEffect(() => {
    sortByContactName()
    }, [contactNameOrdered])
  
    useEffect(() => {
    sortByContactInfo()
  }, [contactInfoOrdered])

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

  async function sortByWarehouse() {
    let response;
    try {
      if (warehouseOrdered) response = await axiosInstance.get('/warehouse/sortByWarehouseASC')
      else response = await axiosInstance.get('warehouse/sortByWarehouseDESC')
      setWarehousesData(response.data)

    } catch (error) {
      alert(error)
    }
  }

  async function sortByAddress() {
    let response;
    try {
      if (addressOrdered) response = await axiosInstance.get('/warehouse/sortByAddressASC')
      else response = await axiosInstance.get('warehouse/sortByAddressDESC')
      setWarehousesData(response.data)

    } catch (error) {
      alert(error)
    }
  }

  async function sortByContactName() {
    let response;
    try {
      if (contactNameOrdered) response = await axiosInstance.get('/warehouse/sortByContactNameASC')
      else response = await axiosInstance.get('warehouse/sortByContactNameDESC')
      setWarehousesData(response.data)

    } catch (error) {
      alert(error)
    }
  }

    async function sortByContactInfo() {
    let response;
    try {
      if (contactInfoOrdered) response = await axiosInstance.get('/warehouse/sortByContactInfoASC')
      else response = await axiosInstance.get('warehouse/sortByContactInfoDESC')
      setWarehousesData(response.data)

    } catch (error) {
      alert(error)
    }
  }
}

export default WarehousesList;