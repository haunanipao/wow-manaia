import React, { useState, useEffect } from 'react'
import { getWow } from '../apiClient'
import Container from '../components/Container'
import Card from '../components/Card'
import AddWow from '../components/AddWow'

// This is the main bit
export default function Home() {
  const [wows, setWow] = useState([])

  useEffect(() => {
    getWow()
      .then((wow) => {
        // console.log('wow',wow)
        setWow(wow)
      })
      .catch((err) => {
        console.error(err)
      })
    //console.log('using the effect')
  }, [])

  return (
    <Container>
      <div>
        <AddWow />
      </div>
      <div className="cards">
        <Card info={wows} />
      </div>
    </Container>
  )
}
