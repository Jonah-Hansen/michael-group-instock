import { useEffect, useState } from 'react';
import { axiosInstance } from "../../helpers/axiosInstance";
import InventoryListItem from "../InventoryListItem/InventoryListItem";
import InventoryListItemMobile from '../InventoryListItemMobile/InventoryListItemMobile';
import "./InventoryList.scss";

function InventoryList({ itemOrdered, categoryOrdered, statusOrdered, quantityOrdered, warehouseOrdered, inventoryData, setInventoryData }) {

  useEffect(() => {
    sortByItem()
  }, [itemOrdered])

  useEffect(() => {
    sortByCategory()
  }, [categoryOrdered])

  useEffect(() => {
    sortByQuantity()
  }, [quantityOrdered])

  useEffect(() => {
    sortByStatus()
  }, [statusOrdered])

  useEffect(() => {
    sortByWarehouse()
  }, [warehouseOrdered])

  return (
    <>
      <section className="non-mobile-list">
        {inventoryData?.map((item, index) => <InventoryListItem
            key={index}
            item={ item}
            />)}
      </section>
      <section className="mobile-list">
        {inventoryData?.map((item, index) => <InventoryListItemMobile
            key={index}
            item={ item}
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