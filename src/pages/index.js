import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
// import { graphql } from 'gatsby'

import SEO from "../components/seo"

const Wrapper = styled.div`
  text-align: center;
  color: #fff;
  height: 100vh;
  overflow-x: hidden;
  font-family: 'Raleway', sans-serif;
  `

const Container = styled.div`
  margin: 140px auto 50px;
  text-align: center;  
`




const IndexPage = () => (
    <Wrapper> 
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <Container>
          <h1>WHISPER SISTERS</h1>
          <h2>Cocktails & Provisions</h2>
          <h4>Cocktails and Dinner</h4>
          <p>Tues - Sat</p>
          <p>5 - 10 pm</p>
          <p>Sun</p>
          <p>4 - 9 pm</p>

          <h4>Coffee Window</h4>
          <p>Wed - Sun</p>
          <p>7 - 11 am</p>

          <p className="info-two">190 Kentucky St. Petaluma, CA 94952</p>
          <p className="info-two">Please note We do not take reservations at this time</p>
        </Container>

      </Layout>
    </Wrapper>
)


export default IndexPage
