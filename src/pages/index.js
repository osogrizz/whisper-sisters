import React from "react"

import Layout from "../components/layout"
import styled from 'styled-components'
import SEO from "../components/seo"

import { FaFacebookF, FaInstagram } from 'react-icons/fa';

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

  h1 {
    /* transform: scale(1, 1.4); */
    /* letter-spacing: 20px !important; */

  }

  

  @media (max-width: 600px) {
    h1 {
      font-size: 1.4rem;
      transform: scale(1, 1.4);
    }

  }
`




const IndexPage = () => (
    <Wrapper> 
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

        <Container>
          <h1>WHISPER SISTERS</h1>
          <h2>Cocktails & Provisions</h2>
          <h4>Cocktails & Dinner</h4>
          <p>Tues - Sat</p>
          <p>5 - 10 pm</p>
          <p>Sun</p>
          <p>4 - 9 pm</p>

          <h4>Coffee Window</h4>
          <p>Wed - Sun</p>
          <p>7 - 11 am</p>

          <p className="info-two">190 Kentucky St. Petaluma, CA 94952</p>
          <p className="small-text">Please note we do not take reservations at this time.</p>

          <div className="socials">
            <div><a href="https://www.facebook.com/whispersisterspetaluma/" target="_blank" rel="noopener noreferrer"><FaFacebookF id="facebook"/></a>
            </div>
            <div><a href="https://www.instagram.com/whispersisterspetaluma/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram id="instagram"/> </a>
            </div>
          </div>
        </Container>

      </Layout>
    </Wrapper>
)


export default IndexPage
