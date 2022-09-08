import React from 'react'
import { Link } from 'react-router-dom'

// return everything as a linkable element
// pass the data to the card.
export default function Card({ info }) {
  return (
    <>
      {info.map((wow) => {
        return (
          <Link to={`/`} key={wow.id}>
            <div className="card">
              <h2 key={wow.quote}>{wow.quote}</h2>
              <h2 key={wow.name}> ~ {wow.name}</h2>
              <h2 key={wow.id}>{wow.id}</h2>
            </div>
          </Link>
        )
      })}
    </>
  )
}
