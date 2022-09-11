import React, { useState, useEffect } from 'react'
import { getWow } from '../apiClient'
import Container from '../components/Container'
import Card from '../components/Card'
import AddWow from '../components/AddWow'

// This is the main bit
export default function Home() {
  const [wows, setWows] = useState([])

  function appendWow(newWow) {
    setWows([...wows, newWow])
    // add the new object to the wows database
  }

  useEffect(() => {
    getWow()
      .then((wow) => {
        setWows(wow)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <Container>
      <div className="centerThis gradient-pattern">
        <AddWow setWows={appendWow} />
        {/* // reference to setWows function on line 9, passes appendWow function */}
      </div>
      <div className="cards">
        <Card info={wows} />
      </div>
    </Container>
  )
}
//
