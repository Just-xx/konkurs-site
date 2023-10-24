import React from 'react'
import './Card.css'
import '../../../styles/cardForm.css'

export default function Card({children, ...props}) {
  return (
    <section className='card' {...props}>{children}</section>
  )
}
