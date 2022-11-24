import React from 'react'
import './DropDownMenu.scss'

export default function DropDownMenu({ items }) {
  return (
    <select className='drop-down-menu'>
      <option value="" hidden>Please select</option>
      {items.map((item, index) => <option key={ index} value={item}>{item}</option>)}
   </select>
  )
}
