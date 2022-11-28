
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader"
import WarehousesHeadings from "../../components/WarehousesHeadings/WarehousesHeadings";
import WarehousesList from "../../components/WarehousesList/WarehousesList";
import { axiosInstance } from "../../helpers/axiosInstance";

function WarehousesPage() {
  const [warehouseOrdered, setWarehouseOrdered] = useState(false)
  const [addressOrdered, setAddressOrdered] = useState(false)
  const [contactNameOrdered, setContactNameOrdered] = useState(false)
  const [contactInfoOrdered, setContactInfoOrdered] = useState(false)

    //piece of state for all inventory
  const [allWarehouses, setAllWarehouses] = useState([])
  //piece of state for inventory to show
  const [warehousesData, setWarehousesData] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()
  //object to hold searchParams to make passing as props easier
  const searchParam = {
    searchValue: searchParams.get('search') || '',
    setSearchParams
  }

  useEffect(() => {
    //clear search params if search bar is ''
    !searchParam.searchValue && setSearchParams()
    //if all inventory is loaded, filter it to only the items that match the search.
    // allInventory &&
    setWarehousesData(allWarehouses.filter(warehouse => (
      warehouse.city?.toLowerCase().includes(searchParam.searchValue) ||
      warehouse.address?.toLowerCase().includes(searchParam.searchValue) ||
      warehouse.warehouse_name?.toLowerCase().includes(searchParam.searchValue) ||
      warehouse.country?.toLowerCase().includes(searchParam.searchValue) ||
      warehouse.contact_name?.toLowerCase().includes(searchParam.searchValue) ||
      warehouse.contact_position?.toLowerCase().includes(searchParam.searchValue) ||
      warehouse.contact_phone?.toLowerCase().includes(searchParam.searchValue) ||
      warehouse.contact_email?.toLowerCase().includes(searchParam.searchValue) 
    )));
  }, [searchParam.searchValue, allWarehouses, setSearchParams])

  useEffect(() => {
    axiosInstance.get(`/warehouse`)
      .then((response) => {
        setAllWarehouses(response.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);
  return (
    <>
      <PageHeader type={"list"} text={"warehouses"}/>
      <WarehousesHeadings
        setWarehouseOrdered={setWarehouseOrdered}
        setAddressOrdered={setAddressOrdered}
        setContactNameOrdered={setContactNameOrdered}
        setContactInfoOrdered={setContactInfoOrdered} />
      <WarehousesList
        warehouseOrdered={warehouseOrdered}
        addressOrdered={addressOrdered}
        contactNameOrdered={contactNameOrdered}
        contactInfoOrdered={contactInfoOrdered}
      />
    </>
  )
}

export default WarehousesPage