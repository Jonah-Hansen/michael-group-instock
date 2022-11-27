import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import InventoryListHeadings from '../../components/InventoriesListHeadings/InventoriesListHeadings';
import InventoryList from '../../components/InventoryList/InventoryList';
import PageHeader from "../../components/PageHeader/PageHeader";
import { axiosInstance } from '../../helpers/axiosInstance';
import './InventoriesListPage.scss';

export default function InventoriesListPage() {
  //piece of state for all inventory
  const [allInventory, setAllInventory] = useState(null)
  //piece of state for inventory to show
  const [inventoryData, setInventoryData] = useState([])

  const [urlParams, setUrlParams] = useSearchParams()
  //piece of state for search
  const [searchValue, setSearchValue] = useState('')
  //object to hold searchState
  const searchState = {
    searchValue,
    setSearchValue
  }

  useEffect(() => {
    searchValue ? setUrlParams({ search: searchValue }) : setUrlParams()
    allInventory &&
      setInventoryData(allInventory.filter(item => (
        item.item_name?.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.category?.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.warehouse_name?.toLowerCase().includes(searchValue.toLowerCase())
      )));
  }, [searchValue, allInventory, setUrlParams])

  const [itemOrdered, setItemOrdered] = useState(false)
  const [categoryOrdered, setCategoryOrdered] = useState(false)
  const [statusOrdered, setStatusOrdered] = useState(false)
  const [quantityOrdered, setQuantityOrdered] = useState(false)
  const [warehouseOrdered, setWarehouseOrdered] = useState(false)

  useEffect(() => {
    populateData()
  }, []);

  return (
    <>
      <PageHeader type={'list'} text={'Inventory'} searchState={searchState} />
      <InventoryListHeadings
        setItemOrdered={setItemOrdered}
        setCategoryOrdered={setCategoryOrdered}
        setStatusOrdered={setStatusOrdered}
        setQuantityOrdered={setQuantityOrdered}
        setWarehouseOrdered={setWarehouseOrdered}
      />
      <InventoryList
        inventoryData={inventoryData}
        setInventoryData={setInventoryData}
        itemOrdered={itemOrdered}
        categoryOrdered={categoryOrdered}
        statusOrdered={statusOrdered}
        quantityOrdered={quantityOrdered}
        warehouseOrdered={warehouseOrdered}
      />
    </>
  )

  async function populateData() {
    try {
      const response = await axiosInstance.get('/inventory/joinWarehouse/name')
      setAllInventory(response.data)
      setInventoryData(response.data)
    } catch (error) {
      console.log(error)
    }
  }
}
