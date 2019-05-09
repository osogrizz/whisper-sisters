import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
  text-align: center;
  color: #fff;
  height: 100vh;
  overflow-x: hidden;
  font-family: 'Raleway', sans-serif;
`

const Container = styled.div`
  margin: 140px 0 50px !important;
  text-align: center !important;
`

const CoffeeText = styled.p`
  text-align: center !important;
  font-size: 11px !important;
  text-transform: uppercase !important;
  line-height: 2 !important;
  letter-spacing: 2px !important;
  width: 390px !important;
  margin: 40px auto !important;
`

const Coffee = () => (
  <Wrapper>
    <Layout>
      <Container>
        <SEO title="Coffee" />
        <h3>Coffee & Provisions</h3>
        <h3>Wed - Sun</h3>
        <h3>7 am - 11 am</h3>
        <p className="coffee-text">Our grab and go coffee & provisions window is open! this full service coffee window features equator coffee and an assortment of house made fresh goods.</p>
      </Container>
    </Layout>
  </Wrapper>
)

export default Coffee
