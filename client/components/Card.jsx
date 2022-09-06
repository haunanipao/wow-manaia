import React from 'react'
import { Link } from 'react-router-dom'

// return everything as a linkable element
export default function Card({ id, name, quote }) {
  return (
    <>
      <Link to={`/${id}`}>
        <div className="card">
          <h2>{quote}</h2>
          <h2>{name}</h2>
          <h2>{id}</h2>
        </div>
      </Link>
    </>
  )
}
