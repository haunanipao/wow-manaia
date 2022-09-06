import React from 'react'
// import { getWow } from '../apiClient'

export default function Words() {
  // let newName = useRef('')
  // let newQuote = useRef('')

  const handleClick = async (event) => {
    event.preventDefault()
  }

  return (
    <>
      <form className="form">
        <input type="text" placeholder="How do you like to be called?" />
        <input type="text" placeholder="What is your moment of WOW" />
        <button onClick={handleClick}>Add more WOW</button>
      </form>
    </>
  )
}
