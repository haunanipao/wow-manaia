import React from 'react'
// import { Link } from 'react-router-dom'

// return everything as a linkable element
// pass the data to the card.
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
              <h2 key={wow.id}>
                {
                  !wow.github || (
                    <a href={wow.github} target="_blank" rel="noreferrer">
                      <img
                        src="./images/github.png"
                        alt="{wow.github}"
                        width="50"
                      />
                    </a>
                  )
                  // (
                  //   <a href={wow.discord} target="_blank" rel="noreferrer">
                  //     <img src="./images/discord.png" alt="{wow.discord}" />
                  //   </a>
                  // )
                }
              </h2>
            </div>
          </div>
        )
      })}
    </>
  )
}
