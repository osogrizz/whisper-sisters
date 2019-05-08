import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  margin: 0  auto;
  max-width: 960px;
  margin-bottom: 1.45rem;
  background: transparent;
  letter-spacing: 3px;
  font-family: 'Raleway', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
`

const NavMenu = styled.nav`
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 3px;
  margin: 0;
  white-space: nowrap;
ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
  li {
      border-top: 4px solid transparent;
      transition: hover 0.15s ease-in-out;
    &:hover {
      border-top: 4px solid black;
      transition: 0.15s ease-in-out;
      a {
        color: black;
      }
    }
    div {
      padding-top: 35px;
    }
  }
}
a {
  padding-top: 35px;
  text-transform: uppercase;
  text-decoration: none;
  color: #999;
  transition: hover 0.15s ease-in-out;
  &:hover {
    color: black;
    transition: 0.15s ease-in-out;
  }
}

@media (max-width: 800px) {
  font-size: 1rem;
  margin: 0 80px;
  a {
    padding-top: 37px;
  }
}

@media (max-width: 750px) {
  font-size: .8rem;
  margin: 0 80px;
  a {
    padding-top: 40px;
  }
}

@media (max-width: 600px) {
  /* font-size: .8rem; */
  margin: 0;
}
`

const activeLinkStyle = {
  borderTop: `4px solid black`,
  color: `black`,
}

const Header = () => (
  <HeaderWrapper>
    <NavMenu>
      <ul>
        <li>
          <div>
            <Link activeStyle={activeLinkStyle}
              to="/">
              Home
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link activeStyle={activeLinkStyle}
              to="/menu">
              Menu
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link activeStyle={activeLinkStyle}
              to="/coffee">
              Coffee
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link activeStyle={activeLinkStyle}
              to="/gallery">
              Gallery
            </Link>
          </div>
        </li>
        <li>
          <div>
            <Link activeStyle={activeLinkStyle}
              to="/contact">
              Contact Us
            </Link>
          </div>
        </li>
      </ul>
    </NavMenu>
  </HeaderWrapper>
)

export default Header
