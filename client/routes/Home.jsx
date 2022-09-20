import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container'
import Card from '../components/Card'
import AddWow from '../components/AddWow'

import { fetchWows } from '../actions'

export default function Home() {
  const wows = useSelector((state) => state.wowState)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchWows())
  }, [])

  return (
    <Container>
      <div className="centerThis gradient-pattern">

        <AddWow />
      </div>
      <div className="cards">
        <Card info={wows} />
      </div>
    </Container>
  )
}
