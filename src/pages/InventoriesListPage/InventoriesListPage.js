import React from 'react'
import './InventoriesListPage.scss'
import PageHeader from "../../components/PageHeader/PageHeader";
import InventoryListHeadings from '../../components/InventoriesListHeadings/InventoriesListHeadings';
import InventoryList from '../../components/InventoryList/InventoryList';

export default function InventoriesListPage() {
  return (
    <>
          <PageHeader type={'list'} text={'Inventory'} />
          <InventoryListHeadings />
          <InventoryList />
    </>
  )
}
