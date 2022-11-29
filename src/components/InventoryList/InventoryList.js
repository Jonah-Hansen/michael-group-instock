import { useEffect } from 'react';
import { axiosInstance } from "../../helpers/axiosInstance";
import InventoryListItem from "../InventoryListItem/InventoryListItem";
import InventoryListItemMobile from '../InventoryListItemMobile/InventoryListItemMobile';
import DeleteInventoryModal from '../DeleteInventoryModal/DeleteInventoryModal';
import "./InventoryList.scss";

function InventoryList({ itemOrdered, categoryOrdered, statusOrdered, quantityOrdered, warehouseOrdered, inventoryData, setInventoryData }) {

  useEffect(() => {
    sortByItem()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOrdered])

  useEffect(() => {
    sortByCategory()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryOrdered])

  useEffect(() => {
    sortByQuantity()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantityOrdered])

  useEffect(() => {
    sortByStatus()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusOrdered])

  useEffect(() => {
    sortByWarehouse()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [warehouseOrdered])

  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [inventoryName, setInventoryName] = useState("")

  const handleClick = (status, inventoryId, name) => {
    setShow(status)
    setId(inventoryId)
    setInventoryName(name)
}

const close = () => {
  axiosInstance.get(`/inventory`)
  .then((response) => {
    setInventoryData(response.data)
  })
  .catch((error) => {
    console.log(error)
  });
  setShow(false)
}

  return (
    <>
      <section className="non-mobile-list">

      <DeleteInventoryModal 
        onClose={close}
        show={show}
        name={inventoryName}
        inventoryId={id}/>

        {inventoryData?.map((item, index) => <InventoryListItem
            key={index}
            item={ item}
            handleClick={handleClick}
            />)}
      </section>
      <section className="mobile-list">
        {inventoryData?.map((item, index) => <InventoryListItemMobile
            key={index}
            item={ item}
            handleClick={handleClick}
            />)}
      </section>
    </>
    )

  async function sortByItem() {
    let response;
    try {
      if (itemOrdered) response = await axiosInstance.get('/inventory/sortByItemASC')
      else response = await axiosInstance.get('/inventory/sortByItemDESC')
      setInventoryData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function sortByCategory() {
    let response;
    try {
      if (categoryOrdered) response = await axiosInstance.get('/inventory/sortByCategoryASC')
      else response = await axiosInstance.get('/inventory/sortByCategoryDESC')
      setInventoryData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function sortByStatus() {
    let response;
    try {
      if (statusOrdered) response = await axiosInstance.get('/inventory/sortByStatusASC')
      else response = await axiosInstance.get('/inventory/sortByStatusDESC')
      setInventoryData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function sortByQuantity() {
    let response;
    try {
      if (quantityOrdered) response = await axiosInstance.get('/inventory/sortByQuantityASC')
      else response = await axiosInstance.get('/inventory/sortByQuantityDESC')
      setInventoryData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function sortByWarehouse() {
    let response;
    try {
      if (warehouseOrdered) response = await axiosInstance.get('/inventory/sortByWarehouseASC')
      else response = await axiosInstance.get('/inventory/sortByWarehouseDESC')
      setInventoryData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

}

export default InventoryList;