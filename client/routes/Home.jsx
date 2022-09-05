import React from 'react'
import Container from '../components/Container'
import Grid from '../components/Grid'
import Card from '../components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'

// This is the main bit
export default function Home() {
  let cards = ''
  return (
    <Container>
      <Header />
      This is a container. Waiting to be filled up with your ideas.
      <Card />
      <Grid>{cards ? cards : null}</Grid>
      <button>Add some WOW</button>
      <Footer />
    </Container>
  )
}
