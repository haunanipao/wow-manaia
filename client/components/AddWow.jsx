import React, { useState } from 'react'
import { addWow } from '../actions'
import { useDispatch } from 'react-redux'

const initialFormData = {
  name: '',
  quote: '',
  github: '',
  discord: '',
  linkedin: '',
}

export default function AddWow() {
  const dispatch = useDispatch()
  const [form, setForm] = useState(initialFormData)
  const [showExtras, setShowExtras] = useState(false)

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addWow(form))
    setForm(initialFormData)
    setShowExtras(false)
  }

  return (
    <div className="wow-form-container">
      <form onSubmit={handleSubmit} className="wow-form">
        <textarea
          id="quote"
          onChange={handleChange}
          value={form.quote}
          name="quote"
          placeholder="CAPTURE A MOMENT OF WOW..."
          className="wow-input-large"
          required
        />

        <div className="wow-form-row">
          <input
            id="name"
            onChange={handleChange}
            value={form.name}
            name="name"
            placeholder="WHO SAID IT?"
            className="wow-input-small"
            required
          />
          <button type="button" 
                  className="wow-button-ghost"
                  onClick={() => setShowExtras(!showExtras)}>
            {showExtras ? '- LESS' : '+ SOCIALS'}
          </button>
        </div>

        {showExtras && (
          <div className="wow-form-extras">
            <input
              name="github"
              onChange={handleChange}
              value={form.github}
              placeholder="GITHUB URL"
              className="wow-input-small"
            />
            <input
              name="discord"
              onChange={handleChange}
              value={form.discord}
              placeholder="DISCORD TAG"
              className="wow-input-small"
            />
            <input
              name="linkedin"
              onChange={handleChange}
              value={form.linkedin}
              placeholder="LINKEDIN URL"
              className="wow-input-small"
            />
          </div>
        )}

        <button className="wow-button-primary">ARCHIVE WISDOM</button>
      </form>
    </div>
  )
}
