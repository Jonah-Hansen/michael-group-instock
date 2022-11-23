import React from 'react'
import './Button.scss'

export default function Button({ text, type }) {
  const cancelButton = type === 'cancel'
  const deleteButton = type === 'delete'
  return (
    <button
      className={`button ${cancelButton ? 'button--cancel' : deleteButton ? 'button--delete' : ''}`}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {text}
    </button>
  )
}
