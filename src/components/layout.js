/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "./header"
import "./layout.css"

const LayoutWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  text-align: center;
  height: 100vh;
  color: #fff;
  font-family: 'Raleway', sans-serif !important;

  h1 {
    margin: 140px 0 50px;
    font-size: 2.6rem;
    font-weight: 300;
    letter-spacing: 12px !important;
  }
  h2 {
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 7px;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
  h4 {
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  p {
    font-size: 20px;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-variant-numeric: tabular-nums;
    letter-spacing: 1.5px;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <LayoutWrapper>
          <main>{children}</main>
          <footer style={{ margin: `80px  0 auto`, color: `#fff` }}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org" style={{ color: `gray` }}>Gatsby</a>
          </footer>
        </LayoutWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
