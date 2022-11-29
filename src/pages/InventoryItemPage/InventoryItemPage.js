import React, { useEffect, useState } from 'react'
import InventoryItemDetail from '../../components/InventoryItemDetail/InventoryItemDetail'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../../helpers/axiosInstance'

export default function InventoryItemPage() {
  const [item, setItem] = useState([])
  const { inventoryid: id } = useParams()

  document.title = `In Stock | ${item.item_name} details`

  useEffect(() => {
    populateData(id)
  }, [id])
  if(!item) return "Loading..."
  return (
    <>
      <PageHeader text={`${item?.item_name}`} type={'details'} />
      <InventoryItemDetail item={item} />
    </>
  )

async function populateData(id) {
  try {
        if(!id) return console.log("you must provide an id")
        const response = await axiosInstance.get(`/inventory/joinWarehouse/name/${id}`)
      setItem(response.data)
    } catch (error) {
        console.log(error)
    }
  }
}