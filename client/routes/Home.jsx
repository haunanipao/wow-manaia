import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container'
import Card from '../components/Card'
import AddWow from '../components/AddWow'

// REDUX
import { fetchWows } from '../actions'

// REDUX

// This is the main bit
export default function Home() {
  // const [wows, setWows] = useState([])
  const [newWow, setNewWow] = useState([])
  const wows = useSelector((state) => state.wowState)
  console.log('home wows', wows) //goes to the reducer and looks for state
  const dispatch = useDispatch() //send thunks to reducers to change things

  // call the dispatch and fetchWow(() to get the state
  useEffect(() => {
    dispatch(fetchWows())
  }, [])

  function appendWow(newWow) {
    return setNewWow([...wows, newWow]) // add the new object to the wows database
    // console.log('home newWow', newWow) //goes to the reducer and looks for state
  }

  return (
    <Container>
      <div className="centerThis gradient-pattern">
        <AddWow setWows={appendWow} />
      </div>
      <div className="cards">
        <Card info={wows} />
      </div>
    </Container>
  )
}
// REDUX WITH NO THUNK
// useEffect(() => {
//   getWows()
//   .then((wows) => {
//     dispatch(setWows(wows))
//     return null
//   })
//  .catch(event => console.log(event))
// },[])
// REACT
// const [wows, setWows] = useState([])

// function appendWow(newWow) {
//   setWows([...wows, newWow])
//   // add the new object to the wows database
// }

// useEffect(() => {
//   getWow()
//     .then((wow) => {
//       setWows(wow)
//     })
//     .catch((err) => {
//       console.error(err)
//     })
// }, [])
// REACT
