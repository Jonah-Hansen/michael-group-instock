import React from 'react'
import './RadioButton.scss'

export default function RadioButton({ text, name, value, setQuantityShowsUp }) {
  return (
    <div className='radio-button'>
      <input type="radio" name={name} value={value} className="radio-button__input" onChange={handleChange}/>
      <p className='radio-button__text'>{text}</p>
    </div>
  )

  function handleChange() {
    if(value === 'In Stock') setQuantityShowsUp(true)
    if(value === 'Out Of Stock') setQuantityShowsUp(false)
  }
}
