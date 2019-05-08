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


  }
}
a {
  padding-top: 35px;
  text-transform: uppercase;
  text-decoration: none;
  color: #999;
  transition: hover 0.15s ease-in-out;
  &:hover {
    padding-top: 31px;
    border-top: 4px solid black; 
    /* transition: 0.15s ease-in-out; */
    color: black;
    transition: 0.15s ease-in-out;
  }

}

@media (max-width: 800px) {
  font-size: 1rem;
  margin: 0 80px;
}

@media (max-width: 750px) {
  font-size: .8rem;
  margin: 0 80px;
}

@media (max-width: 600px) {
  margin: 0;
}
`

const activeLinkStyle = {
  borderTop: `4px solid black`,
  paddingTop: `31px`,
  color: `black`,
}

const Header = () => (
  <HeaderWrapper>
    <NavMenu>
      <ul>
        <Link activeStyle={activeLinkStyle} 
          to="/">
          <li>
            Home
          </li>
        </Link>

        <Link activeStyle={activeLinkStyle}
          to="/menu">
            <li>
              Menu
            </li>
            </Link>

        <Link activeStyle={activeLinkStyle}
          to="/coffee">
          <li>
            Coffee
          </li>
        </Link>

        <Link activeStyle={activeLinkStyle}
              to="/gallery">
          <li>
            Gallery
          </li>
        </Link>

        <Link activeStyle={activeLinkStyle}
              to="/contact">
          <li>
            Contact Us
          </li>
        </Link>
      </ul>
    </NavMenu>
  </HeaderWrapper>
)

export default Header
