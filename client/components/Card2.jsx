import React from 'react'
import { Link } from 'react-router-dom'

export default function Card2({ info }) {
  return (
    <>
      {info.map((wow) => {
        return (
          <>
            <Link to={`/`}>
              <div className="card" key={wow.id}>
                <h2 key={wow.quote}>{wow.quote}</h2>
                <h2 key={wow.name}>{wow.name}</h2>
                <h2 key={wow.id}>{wow.id}</h2>
              </div>
            </Link>
          </>
        )
      })}
    </>
  )
}
