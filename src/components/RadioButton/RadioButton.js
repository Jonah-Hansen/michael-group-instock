import React, { useState } from 'react'
import './RadioButton.scss'

export default function RadioButton({ text, name, checked, value }) {
  const [isChecked, setIsChecked] = useState(checked)
  return (
    <div className='radio-button'>
      <input type="radio" name={name} value={value} className="radio-button__input" checked={isChecked} onChange={ () => setIsChecked(prev => !prev)} />
      <p className='radio-button__text'>{text}</p>
    </div>
  )
}
