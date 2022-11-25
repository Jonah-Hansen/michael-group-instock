import React from 'react'
import Footer from '../../components/Footer/Footer'
import InventoryItemDetail from '../../components/Header/InventoryItemDetail/InventoryItemDetail'
import PageHeader from '../../components/PageHeader/PageHeader'
import './InventoryItem.scss'

export default function InventoryItem() {
  const item = {
    item_name: "Television",
    description: `This 50", 4K LED TV provides a crystal-clear picture and vivid colors. `,
    category: "Electronics",
    status: "IN STOCK",
    warehouse: "Manhattan",
    quantity: 500
  }
  return (
    <div className='background'>
      <div className='page'>
        <PageHeader text={`${item.item_name}`} type={'details'} />
        <InventoryItemDetail item={item} />
      </div>
      <Footer />
    </div>
  )
}