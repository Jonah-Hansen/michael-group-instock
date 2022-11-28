import PageHeader from "../../components/PageHeader/PageHeader"
import WarehousesHeadings from "../../components/WarehousesHeadings/WarehousesHeadings";
import WarehousesList from "../../components/WarehousesList/WarehousesList";
import DeleteWarehouseModal from "../../components/DeleteWarehouseModal/DeleteWarehouseModal";
import { useState } from "react";
import { axiosInstance } from "../../helpers/axiosInstance";

function WarehousesPage() {

  const [warehousesData, setWarehousesData] = useState([])

  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [warehouseName, setWarehouseName] = useState("")

  const handleClick = (status, warehouseId, name) => {

      setShow(status)
      setId(warehouseId)
      setWarehouseName(name)
      console.log(warehouseId)
      console.log(status)
      console.log(name)
  }

  const close = () => {
    axiosInstance.get(`/warehouse/`)
    .then((response) => {
      console.log(response)
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
    <PageHeader type={"list"} text={"warehouses"} />
    <WarehousesHeadings />
    <WarehousesList 
      handleClick={handleClick}
      warehousesData={warehousesData}
      setWarehousesData={setWarehousesData}/>
    </>
  )
}

export default WarehousesPage