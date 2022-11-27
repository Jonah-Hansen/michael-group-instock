import React, { useState } from 'react'
import './InventoriesListPage.scss'
import PageHeader from "../../components/PageHeader/PageHeader";
import InventoryListHeadings from '../../components/InventoriesListHeadings/InventoriesListHeadings';
import InventoryList from '../../components/InventoryList/InventoryList';

export default function InventoriesListPage() {
  const [itemOrdered, setItemOrdered] = useState(false)
  const [categoryOrdered, setCategoryOrdered] = useState(false)
  const [statusOrdered, setStatusOrdered] = useState(false)
  const [quantityOrdered, setQuantityOrdered] = useState(false)
  const [warehouseOrdered, setWarehouseOrdered] = useState(false)
  return (
    <>
      <PageHeader type={'list'} text={'Inventory'} />
      <div className='mobile'>
          <InventoryList />
      </div>

      <div className='non-mobile'>
        <InventoryListHeadings
                setItemOrdered={setItemOrdered}
                setCategoryOrdered={setCategoryOrdered}
                setStatusOrdered={setStatusOrdered}
                setQuantityOrdered={setQuantityOrdered}
                setWarehouseOrdered={setWarehouseOrdered}
              />
        <InventoryList
          itemOrdered={itemOrdered}
          categoryOrdered={categoryOrdered}
          statusOrdered={statusOrdered}
          quantityOrdered={quantityOrdered}
          warehouseOrdered={warehouseOrdered}
        />
      </div>
      
    </>
  )
}
