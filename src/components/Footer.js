import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://twitter.com/beabettermanol/">@BeABetterManOL</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          a man who gives a damn, using the <a href="https://github.com/thriveweb/yellowcake">Yellowcake theme</a>.
        </span>
      </div>
    </footer>
  </div>
)
