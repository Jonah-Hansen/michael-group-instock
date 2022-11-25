import React from 'react'
import './InventoryItemDetail.scss'

export default function InventoryItemDetail({ item }) {

  return (
    <div className='item-detail'>
        <section className='item-detail-section'>
            <div className='item-detail-section-group'>
                <label className='item-detail-section-group__label'>item description</label>
                <p className='item-detail-section-group__info'>{item.description }</p>
            </div>
            <div className='item-detail-section-group'>
                <label className='item-detail-section-group__label'>category</label>
                <p className='item-detail-section-group__info'>{item.category }</p>
            </div>
        </section>
        <section className='item-detail-section'>
            <div className='item-detail-section-double-group'>
            <div className='item-detail-section-group'>
                <label className='item-detail-section-group__label'>status</label>
                        <p className={`item-detail-section-group__info
                        ${item.status === 'IN STOCK' ?
                                'item-detail-section-group__info--in-stock'
                                : 'item-detail-section-group__info--out-of-stock'}`}>{item.status}</p>
            </div>
            <div className='item-detail-section-group'>
                <label className='item-detail-section-group__label'>quantity</label>
                <p className='item-detail-section-group__info'>{item.quantity }</p>
            </div>
            </div>
            <div className='item-detail-section-group'>
                <label className='item-detail-section-group__label'>warehouse</label>
                <p className='item-detail-section-group__info'>{item.warehouse_name }</p>
            </div>
        </section>
    </div>
  )
}