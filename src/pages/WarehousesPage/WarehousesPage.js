
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader"
import WarehousesHeadings from "../../components/WarehousesHeadings/WarehousesHeadings";
import WarehousesList from "../../components/WarehousesList/WarehousesList";
import DeleteWarehouseModal from "../../components/DeleteWarehouseModal/DeleteWarehouseModal";
import { axiosInstance } from "../../helpers/axiosInstance";


function WarehousesPage() {
  document.title = "In Stock | Warehouses"
  
  const [warehouseOrdered, setWarehouseOrdered] = useState(false)
  const [addressOrdered, setAddressOrdered] = useState(false)
  const [contactNameOrdered, setContactNameOrdered] = useState(false)
  const [contactInfoOrdered, setContactInfoOrdered] = useState(false)

  //piece of state for delete warehouse modal
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [warehouseName, setWarehouseName] = useState("")

    //piece of state for all warehouses
  const [allWarehouses, setAllWarehouses] = useState([])
  //piece of state for warehouses to show
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


  

  const handleClick = (status, warehouseId, name) => {
      setShow(status)
      setId(warehouseId)
      setWarehouseName(name)
  }

  const close = () => {
    axiosInstance.get(`/warehouse/`)
    .then((response) => {
      setWarehousesData(response.data)
    })
    .catch((error) => {
      console.log(error)
    });
    setShow(false)
  }

  return (
    <>
    <DeleteWarehouseModal
      onClose={close}
      show={show}
      name={warehouseName}
      warehouseId={id} />
      <PageHeader type={"list"} text={"warehouses"} searchParam={searchParam} />
      <WarehousesHeadings
        setWarehouseOrdered={setWarehouseOrdered}
        setAddressOrdered={setAddressOrdered}
        setContactNameOrdered={setContactNameOrdered}
        setContactInfoOrdered={setContactInfoOrdered} />
      <WarehousesList
      warehousesData={warehousesData}
      setWarehousesData={setAllWarehouses}
        warehouseOrdered={warehouseOrdered}
        addressOrdered={addressOrdered}
        contactNameOrdered={contactNameOrdered}
        contactInfoOrdered={contactInfoOrdered}
        handleClick={handleClick}
      />
    </>
  )
}

export default WarehousesPage