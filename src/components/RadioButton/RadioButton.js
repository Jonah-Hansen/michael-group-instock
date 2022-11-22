import React from 'react'
import './RadioButton.scss'

export default function RadioButton({text, name}) {
  return (
    <div className='radio-button'>
          <input type="radio" name={name} value={ name } className="radio-button__input"/>
          <p className='radio-button__text'>{ text }</p>
    </div>
  )
}
