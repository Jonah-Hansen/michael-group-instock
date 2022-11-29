import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import InventoryListHeadings from '../../components/InventoriesListHeadings/InventoriesListHeadings';
import InventoryList from '../../components/InventoryList/InventoryList';
import PageHeader from "../../components/PageHeader/PageHeader";
import { axiosInstance } from '../../helpers/axiosInstance';
import './InventoriesListPage.scss';

export default function InventoriesListPage() {
  //piece of state for all inventory
  const [allInventory, setAllInventory] = useState([])
  //piece of state for inventory to show
  const [inventoryData, setInventoryData] = useState([])

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
    setInventoryData(allInventory.filter(item => (
      item.item_name?.toLowerCase().includes(searchParam.searchValue) ||
      item.category?.toLowerCase().includes(searchParam.searchValue) ||
      item.warehouse_name?.toLowerCase().includes(searchParam.searchValue)
    )));
  }, [searchParam.searchValue, allInventory, setSearchParams])

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
      <PageHeader type={'list'} text={'Inventory'} searchParam={searchParam} />
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
