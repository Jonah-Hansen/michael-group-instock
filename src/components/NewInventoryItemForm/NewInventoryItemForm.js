import React from 'react'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import RadioButton from '../RadioButton/RadioButton'
import './NewInventoryItemForm.scss'

export default function NewInventoryItemForm() {
    const categoryItems = []
  return (
   <form className='new-inventory-form new-inventory-form'>
        <div className='new-inventory-form new-inventory-form-top'>                      
        <section className='new-inventory-form-section'>
            <h2 className='new-inventory-form-section__title'>Item Details</h2>
            <TextInput type="small" label="item name" placeholder="Item Name"/>
            <TextInput type="large" label="description" placeholder="Please enter a brief item description..."/>
            <div className='new-inventory-form-group'>
                <label className='new-inventory-form-section__label'>Category</label>
                <DropDownMenu items={categoryItems}/>  
            </div>       
        </section>
        <section className='new-inventory-form-section'>
            <h2 className='new-inventory-form-section__title'>Item Availability</h2>
            <div className='new-inventory-form-group'>
                <label className='new-inventory-form-section__label'>Status</label>
                <div className='new-inventory-form-section__radio-buttons'>
                    <RadioButton text='In stock'/>
                    <RadioButton text="Out of stock"/>
                </div>  
            </div>
            <TextInput type="small" label="Quantity" placeholder="0" />
                <div className='new-inventory-form-group'>
                    <label className='new-inventory-form-section__label'>Warehouse</label>
                <DropDownMenu items={categoryItems}/>  
            </div>
        </section>
        </div>
        <div className='new-inventory-form-buttons'>
            <Button type='cancel' text={'cancel'}/>
            <Button text={'+ add item'}/>
        </div>
    </form>
  )
}