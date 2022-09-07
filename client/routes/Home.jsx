import React, { useState, useEffect } from 'react'
import { getWow } from '../apiClient'
import Container from '../components/Container'
// import Grid from '../components/Grid'
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

  return (
    <Container>
      {/* <button>Add your words of wisdom</button> */}

      {
        (cards = wows.map((wow) => {
          return <Card key={wow.id} name={wow.name} quote={wow.quote} />
        }))
      }
      {/* <Grid>{cards ? cards : null}</Grid> */}
    </Container>
  )
}
