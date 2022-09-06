import React, { useState, useEffect } from 'react'
import { getWow } from '../apiClient'
import Container from '../components/Container'
import Grid from '../components/Grid'
import Card from '../components/Card'

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

  let cards = ''

  if (wows) {
    cards = wows.map((wow) => {
      return <Card key={wow.id} name={wow.name} quote={wow.quote} />
    })
  }
  return (
    <Container>
      {/* <button>Add your words of wisdom</button> */}
      <h3>This is a container.</h3>
      <h2>Waiting to be filled up with your moments of WOW.</h2>
      <Card getWow={setWow} />
      <Grid>{cards ? cards : null}</Grid>
    </Container>
  )
}
