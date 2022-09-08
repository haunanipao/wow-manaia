import React, { useState } from 'react'
import { addWow } from '../apiClient'

const initialFormData = {
  name: '',
  quote: '',
}

export default function AddWow() {
  const [wows, setWows] = useState([])
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
      .then((addWow) => {
        setWows([...wows, addWow])
        setForm(initialFormData)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input
          id="quote"
          onChange={handleChange}
          value={form.quote}
          name="quote"
          placeholder="What is your moment of WOW"
        />

        <input
          id="name"
          onChange={handleChange}
          value={form.name}
          name="name"
          placeholder="Who shared it?"
        />
        <button>Add more WOW</button>
      </form>
    </>
  )
}
