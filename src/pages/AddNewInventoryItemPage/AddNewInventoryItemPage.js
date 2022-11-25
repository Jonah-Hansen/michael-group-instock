import React from 'react'
import NewInventoryItemForm from '../../components/NewInventoryItemForm/NewInventoryItemForm'
import PageHeader from '../../components/PageHeader/PageHeader'

export default function AddNewInventoryItem() {
  document.title = "In Stock | New Inventory Item"
  return (
    <>
      <PageHeader text={'add new inventory item'} />
      <NewInventoryItemForm />
    </>
  )
}