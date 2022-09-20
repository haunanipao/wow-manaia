import React from 'react'

export default function Card({ info }) {
  return (
    <>
      {info.map((wow) => {
        return (
          <div to={`/`} key={wow.id}>
            <div className="card gradient-pattern">
              <h2 className="wowQuote" key={wow.quote}>
                {wow.quote}
              </h2>
              <h2 className="wowName" key={wow.name}>
                ~ {wow.name}
              </h2>

  
             </div>
          </div>
        )
      })}
    </>
  )
}
