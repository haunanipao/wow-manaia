import React, { useState } from 'react'
import { addWow } from '../actions'
import { useDispatch } from 'react-redux'

const initialFormData = {
  name: '',
  quote: '',
}

export default function AddWow() {
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialFormData)

  const handleChange = async (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(addWow(form))
    setForm(initialFormData)
  }

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
