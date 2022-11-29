import React from 'react'
import './RadioButton.scss'

export default function RadioButton({ text, name, value, setQuantityShowsUp, checked, setStatusChecked }) {
  return (
    <div className='radio-button'>
      <input type="radio" name={name} value={value} className="radio-button__input" onChange={handleChange} checked={checked} />
      <p className='radio-button__text'>{text}</p>
    </div>
  )

  function handleChange() {
    if (value === 'In Stock') {
      setQuantityShowsUp(true)
      setStatusChecked("In Stock")
    }
    if (value === 'Out Of Stock') {
      setQuantityShowsUp(false)
      setStatusChecked("Out Of Stock")
    }
  }
}
