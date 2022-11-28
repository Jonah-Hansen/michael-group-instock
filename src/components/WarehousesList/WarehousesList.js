import WarehousesListItem from "../WarehousesListItem/WarehousesListItem";
import "./WarehousesList.scss";
import { useEffect } from "react";
import { axiosInstance } from "../../helpers/axiosInstance";

function WarehousesList({ handleClick, warehouseOrdered, addressOrdered, contactNameOrdered, contactInfoOrdered, warehousesData, setWarehousesData }) {

  
  useEffect(() => {
    sortByWarehouse()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [warehouseOrdered])

    useEffect(() => {
    sortByAddress()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addressOrdered])
  
    useEffect(() => {
    sortByContactName()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contactNameOrdered])
  
    useEffect(() => {
    sortByContactInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactInfoOrdered])

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