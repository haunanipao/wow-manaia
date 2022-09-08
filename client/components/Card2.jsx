import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getWow } from '../apiClient'

export default function Card2({ id, name, quote }) {
  const [wows, setWow] = useState([])
  useEffect(() => {
    getWow()
      .then((wow) => {
        setWow(wow)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  wows.map((wow) => {
    return <Card2 key={wow.id} name={wow.name} quote={wow.quote} />
  })

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
