import React, { useState } from 'react'
import { addWow } from '../apiClient'
// import { useDispatch } from 'react-redux'

const initialFormData = {
  name: '',
  quote: '',
}

export default function AddWow(props) {
  // REACT
  const [form, setForm] = useState(initialFormData)

  function handleChange(event) {
    const { name, quote, value } = event.target
    const newForm = {
      ...form,
      [name]: value,
      [quote]: value,
    }
    setForm(newForm)
  }

  function handleSubmit(event) {
    event.preventDefault()
    addWow(form)
      .then((newWow) => {
        props.setWows(newWow) // <<< pass the object!!
        setForm(initialFormData)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
  // REACT

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          id="quote"
          onChange={handleChange}
          value={form.quote}
          name="quote"
          placeholder="What is your moment of WOW?"
        />

        <input
          id="name"
          onChange={handleChange}
          value={form.name}
          name="name"
          placeholder="Who shared it?"
        />
        <button>Add More WOW</button>
      </form>
    </>
  )
}

// REDUX-ING
// const dispatch = useDispatch()
// const [form, setForm] = useState(initialFormData)

// const handleChange = async (event) => {
//   setForm({ ...form, [event.target.name]: event.target.value })
// }

// const handleSubmit = async (event) => {
//   event.preventDefault()
//   dispatch(addWow(form))
//   //update the db and the state (in the store)
//   setForm({ quote: '', name: '' }) // clears the input fields
// }
// END REDUXING
