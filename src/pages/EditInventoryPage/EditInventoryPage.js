import React from 'react'
import EditInventoryForm from '../../components/EditInventoryForm/EditInventoryForm'
import PageHeader from '../../components/PageHeader/PageHeader'

export default function EditInventoryPage() {
    document.title = "In Stock | Edit Inventory"
  return (
    <>
          <PageHeader text={'Edit Inventory Item'} />
          <EditInventoryForm />
    </>
  )
}
