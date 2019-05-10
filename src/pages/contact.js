import React from "react"

import Layout from "../components/layout"
import styled from 'styled-components'
import SEO from "../components/seo"
import Map from '../components/map'

const Wrapper = styled.div`
  text-align: center;
  color: #fff;
  overflow-x: hidden !important;
  height: 100vh !important;
`

// Need to move styles to layout

const Container = styled.div`
  margin: 140px 0 50px;
  text-align: center;
`

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 5px;
  text-transform: uppercase;
`

const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 4px;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

const InfoText = styled.p`
  font-size: 0.9rem;
  padding: 0;
  margin: 0;
  letter-spacing: 1.5px;
`

const Section = styled.div`
  margin-bottom: 80px;

`

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`

const InputStyles = styled.input`
  height: 40px;
  margin: 5px 0;
  border: none;
  border-radius: 3px;
  padding: 10px;
  font-size: 16px;
`
const TextArea = styled.textarea`
  /* min-width: 500px; */
  min-height: 150px;
  margin-top: 8px;
  border: none;
  border-radius: 3px;
  padding: 10px;
`

const Contact = ({ data }) => (
  <Wrapper>
    <Layout>
      <SEO title="Contact" />
      <Container>

        <Section>
          <Title>We'd love to hear from you!</Title>
          <SubTitle>Phone</SubTitle>
          <InfoText>707.774.6689</InfoText>
        </Section>

        <Map />

        <Section style={{ marginTop: '0' }}>
          <SubTitle>Located At</SubTitle>
          <InfoText>190 KENTUCKY ST. PETALUMA, CA 94952</InfoText>
          <InfoText>ON THE CORNER AT E. WASHINGTON ST.</InfoText>
        </Section>



        <form action="">

          <div className="form-container">
            <InputContainer>
              <InputStyles type="text" name="fName" placeholder="First Name"required />
              <InputStyles type="text" name="lName" placeholder="Last Name" required />
            </InputContainer>
            
            <InputContainer>
              <InputStyles type="email" name="email" placeholder="E-mail"required />
              <InputStyles type="phone" name="phone" placeholder="Tel." />
            </InputContainer>

            <TextArea name="message" id="" cols="30" rows="6" placeholder="Message" ></TextArea>

            <button className="Btn">Send</button>

          </div>
        </form>

      </Container>
    </Layout>
  </Wrapper>
)


export default Contact
