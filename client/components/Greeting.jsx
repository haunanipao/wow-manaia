import React, { useEffect, useState } from 'react'
import { getGreeting } from '../apiClient'

export default function Greeting() {
  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getGreeting()
      .then((res) => {
        console.log(greeting, count)
        setGreeting(greeting)
        setIsError(false)
      })
      .catch((err) => {
        console.log(err)
        setIsError(true)
      })
  }, [count])
  return (
    <>
      {count}

      <h1>{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          The greeting is having issues greeting you.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Say Hello</button>
    </>
  )
}
