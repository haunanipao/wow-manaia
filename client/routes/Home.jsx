import React, { useState, useEffect } from 'react'
import { getWow } from '../apiClient'
import Container from '../components/Container'
import Card from '../components/Card'
import AddWow from '../components/AddWow'

// REDUX
// import { fetchWows } from '../actions/redux.js'
// import { useDispatch, useSelector } from 'react-redux'
// REDUX

// This is the main bit
export default function Home() {
  // REACT
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
  // REACT

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
// REDUX
// const [wowss, setWows] = useState([])

// // this is a variable that useSelector(), which uses a state callback function() to return a variable from that function.
// const wows = useSelector((state) => state.wows) //goes to the reducer and looks for state
// const dispatch = useDispatch() //send thunks to reducers to change things

// function appendWow(newWow) {
//   setWows([...wowss, newWow])
//   // add the new object to the wows database
// }

// // call the dispatch and fetchWow(() to get the state
// useEffect(() => {
//   dispatch(fetchWows())
// }, [])
// REDUX
