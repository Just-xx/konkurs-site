import React from 'react'
import './Card.css'
import '../../../styles/cardForm.css'

export default function Card({inactive, children, ...props}) {
  return (
    <section className={`card ${inactive ? "inactive" : ""}`} {...props}>{children}</section>
  )
}
