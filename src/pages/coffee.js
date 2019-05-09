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
  margin: 140px 0 50px;
  text-align: center;
`

const CoffeeTitle = styled.h4`
  font-family: 'Raleway', sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 4px;
  text-transform: uppercase;
`

const CoffeeText = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  line-height: 2;
  letter-spacing: 2px;
  width: 390px;
  margin: 40px auto;
`

const Coffee = () => (
  <Wrapper>
    <Layout>
      <Container>
        <SEO title="Coffee" />
        <CoffeeTitle>Coffee & Provisions</CoffeeTitle>
        <CoffeeTitle>Wed - Sun</CoffeeTitle>
        <CoffeeTitle>7 am - 11 am</CoffeeTitle>
        <CoffeeText>Our grab and go coffee & provisions window is open! this full service coffee window features equator coffee and an assortment of house made fresh goods.</CoffeeText>
      </Container>
    </Layout>
  </Wrapper>
)

export default Coffee
