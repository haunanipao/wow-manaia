import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../components/Container'
import Card from '../components/Card'
import AddWow from '../components/AddWow'

// REDUX
import { fetchWows } from '../actions'

// REDUX

export default function Home() {
  // const [newWow, setNewWow] = useState([])
  const wows = useSelector((state) => state.wowState)
  console.log('DB', wows)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchWows())
  }, [])

  // function appendWow(newWow) {
  //   console.log('append-newWow', newWow) //goes to the reducer and looks for state
  //   setNewWow([...wows, newWow]) // add the new object to the wows database
  //   console.log('append-wows', wows) //not working
  //   return
  // }

  return (
    <Container>
      <div className="centerThis gradient-pattern">
        <AddWow />
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
