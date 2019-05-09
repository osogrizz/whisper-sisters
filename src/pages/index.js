import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components'
// import { graphql } from 'gatsby'

import SEO from "../components/seo"

const HomeWrapper = styled.div`
  width: 100%;
  color: #fff;
  overflow-x: hidden;
  /* margin: 0; */
  /* padding: 0; */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  `

const Container = styled.div`
  margin: 140px auto 50px;
  text-align: center;
  
  h1 {
    font-family: 'Raleway', sans-serif; 
    margin: 140px 0 50px;
    font-size: 2.6rem;
    font-weight: 300;
    letter-spacing: 12px;
  }
  
  h2 {
    font-family: 'Raleway', sans-serif; 
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 7px;
  }
  h4 {
    font-size: 1.4rem;
    font-family: 'Raleway', sans-serif; 
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  `

const Title = styled.h1`
  /* font-family: 'Raleway', sans-serif; */
  `

const SubTitle = styled.h2`
  /* font-family: 'Raleway', sans-serif; */
  `
const SubTitleTwo = styled.h4`
  /* font-family: 'Raleway', sans-serif; */
  `

const InfoOne = styled.p`
  font-family: 'Raleway', sans-serif; 
  font-size: 20px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-variant-numeric: tabular-nums;
  letter-spacing: 1.5px;
`

const InfoTwo = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 0.9rem;
  padding: 0;
  margin: 0;
  letter-spacing: 2px;
`



const IndexPage = () => (
    <HomeWrapper> 
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <Container>

          <h1>WHISPER SISTERS</h1>
          <SubTitle>Cocktails & Provisions</SubTitle>
          <SubTitleTwo>Cocktails and Dinner</SubTitleTwo>
          <InfoOne>Tues - Sat</InfoOne>
          <InfoOne>5 - 10 pm</InfoOne>
          <InfoOne>Sun</InfoOne>
          <InfoOne>4 - 9 pm</InfoOne>

          <SubTitleTwo>Coffee Window</SubTitleTwo>
          <InfoOne>Wed - Sun</InfoOne>
          <InfoOne>7 - 11 am</InfoOne>

          <InfoTwo>190 Kentucky St. Petaluma, CA 94952</InfoTwo>
          <InfoTwo>Please note We do not take reservations at this time</InfoTwo>

        </Container>

      </Layout>
    </HomeWrapper>
)


export default IndexPage
