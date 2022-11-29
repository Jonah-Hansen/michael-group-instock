import React, {useState} from 'react'
import './DropDownMenu.scss'
import errorIcon from '../../assets/icons/error-24px.svg';

export default function DropDownMenu({ items, name, error, selected }) {
  const [isSelected, setIsSelected] = useState(selected)
  return (
    <>
      <select className='drop-down-menu' name={name} value={isSelected || selected} onChange={ (e) => setIsSelected(e.target.value)}>
      <option value="" hidden>Please select</option>
        {items.map((item, index) => <option key={index} value={item}>{item}</option>)}
      </select>
      {error &&
        <div className='text-input__error'>
          <img src={errorIcon} alt="error" className='text-input__error-icon' />
          <p className='text-input__error-text'>{error}</p>
        </div>}
    </>
  )
}
