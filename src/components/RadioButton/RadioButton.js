import React, { useState } from 'react'
import './RadioButton.scss'

export default function RadioButton({ text, name, checked, value, setQuantityShowsUp }) {
  const [isChecked, setIsChecked] = useState(checked || false)
  return (
    <div className='radio-button'>
      <input type="radio" name={name} value={value} className="radio-button__input" onChange={handleChange}/>
      <p className='radio-button__text'>{text}</p>
    </div>
  )

  function handleChange() {
    console.log(value, value === "In Stock")
    console.log(value, value === "Out of Stock")
    if(value === 'In Stock') setQuantityShowsUp(true)
    if(value === 'Out Of Stock') setQuantityShowsUp(false)
  }
}
