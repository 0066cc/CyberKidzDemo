import React from "react"
import { Link } from "gatsby"

import "./../Shared/globalCyber.css"
import "./../Shared/footerCyber.css"

export default function FooterCyber() {
  return (
    <>
      <footer>
        <div>
          <h2>
            <a className="logo" href="/cyber/">
              CyberKidz
            </a>
          </h2>
          <h3>Tagline</h3>
        </div>
        <div className="footerLinks">
          <div>
            <p>About</p>
            <p>Parents</p>
          </div>
          <div>
            <p>News</p>
            <p>Legal</p>
          </div>
          <div>
            <p>Topics</p>
            <p>Account</p>
          </div>
        </div>
      </footer>
    </>
  )
}
