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
  margin: 0 auto;
`

const Container = styled.div`
  margin-top: 140px auto;
  margin-bottom: 50px !important;
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
