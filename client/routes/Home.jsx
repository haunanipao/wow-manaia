import React, { useState, useEffect } from 'react'
import { getWow } from '../apiClient'
import Container from '../components/Container'
import Card from '../components/Card'
import Card2 from '../components/Card2'
import AddWow from '../components/AddWow'

// This is the main bit
export default function Home() {
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

  return (
    <Container>
      <AddWow />
      <Card2 />
      {/* think about refactor */}
      {wows.map((wow) => {
        return <Card key={wow.id} name={wow.name} quote={wow.quote} />
      })}
    </Container>
  )
}
