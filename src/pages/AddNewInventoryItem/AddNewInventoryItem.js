import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
// import TextInput from '../../components/TextInput/TextInput'
// import DropDownMenu from '../../components/DropDownMenu/DropDownMenu'
// import RadioButton from '../../components/RadioButton/RadioButton'
// import Button from '../../components/Button/Button'
import './AddNewInventoryItem.scss'
import NewInventoryItemForm from '../../components/NewInventoryItemForm/NewInventoryItemForm'

export default function AddNewInventoryItem() {
  return (
      <div className='background'>
        <div className='page'>              
              <PageHeader text={'add new inventory item'} />
              <NewInventoryItemForm />
        </div>
    </div>
  )
}