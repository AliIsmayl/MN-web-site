import React from 'react'
import './Header.scss'

function Header() {
  return (
    <header>
      <h1>Best IT Solution
        in your city</h1>
      <div className="line"></div>
      <p>Prevent data loss with encrypted storage and virtualized recovery, then enjoy increased productivity.</p>
      <button>
        <span>Find Out More</span>
        <p></p>
      </button>
    </header>
  )
}

export default Header