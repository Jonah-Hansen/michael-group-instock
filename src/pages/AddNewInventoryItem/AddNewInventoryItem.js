import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import './AddNewInventoryItem.scss'
import NewInventoryItemForm from '../../components/NewInventoryItemForm/NewInventoryItemForm'
import Footer from '../../components/Footer/Footer'

export default function AddNewInventoryItem() {
  return (
      <div className='background'>
        <div className='page'>              
            <PageHeader text={'add new inventory item'} />
            <NewInventoryItemForm />
        </div>
        <Footer />
    </div>
  )
}