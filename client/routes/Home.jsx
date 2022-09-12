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
  //goes to the reducer and looks for state
  const wows = useSelector((state) => state.wowState)
  console.log('DB', wows)

  const dispatch = useDispatch()
  // send thunks to reducers to change things
  // call the dispatch and fetchWow(() to get the state
  useEffect(() => {
    dispatch(fetchWows(newWow))
  }, [])

  function appendWow(newWow) {
    console.log('append-newWow', newWow) //goes to the reducer and looks for state
    setNewWow([...wows, newWow]) // add the new object to the wows database
    console.log('append-wows', wows) //not working
    return
  }

  return (
    <Container>
      <div className="centerThis gradient-pattern">
        <AddWow setWows={appendWow} />
        {/* <AddWow /> */}
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
