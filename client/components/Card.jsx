import React from 'react'

export default function Card({ info }) {
  return (
    <div className="wow-grid">
      {info &&
        info.map((wow) => {
          return (
            <div className="wow-card" key={wow.id}>
              <h2 className="wow-quote">
                {wow.quote}
              </h2>
              <div className="wow-author">
                // {wow.name}
              </div>
              <div className="wow-socials">
                {wow.github && (
                  <a href={wow.github} target="_blank" rel="noreferrer">
                    <img src="/images/github.png" alt="GitHub" className="wow-social-icon" />
                  </a>
                )}
                {wow.discord && (
                  <img src="/images/discord.png" alt="Discord" className="wow-social-icon" />
                )}
                {wow.linkedin && (
                  <a href={wow.linkedin} target="_blank" rel="noreferrer">
                    <img src="/images/linkedin.png" alt="LinkedIn" className="wow-social-icon" />
                  </a>
                )}
              </div>
            </div>
          )
        })}
    </div>
  )
}
