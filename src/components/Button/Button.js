import React from 'react'
import './Button.scss'

export default function Button({text, isCancel, isDelete }) {
  return (
      <button className={ `button ${isCancel ? 'button--cancel' : isDelete ? 'button--delete' : ''}`}>{text}</button>
  )
}
