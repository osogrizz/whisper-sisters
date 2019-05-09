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
  /* font-variant-numeric: tabular-nums; */
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

const FormContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 500px;
  text-align: center;
  align-content: center;
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

const Btn = styled.button`
    margin: 50px auto;
    border-radius: 4px;
    border: 2px solid #6a6a6a !important;
    font-weight: 400;
    font-size: 16px;
    line-height: 45px;
    text-transform: uppercase;
    letter-spacing: 4px;
    outline: none;
    width: 180px;
    background: #2d333d;
    color: #6a6a6a;
    position: relative;
    overflow: hidden;
    transition: all 0.18s ease-in-out;

    &:active {
      background-color: red !important;
      border: 2px solid red !important;
      transition: all 0.00001s ease-out !important;
    }
  
  &:hover {
    cursor: pointer;
    color: #323944;
    background-color: #6a6a6a;
    letter-spacing: 1.2rem;
    font-weight: 500;
    font-size: 18px;
    padding-left: 25px;
    transition: all 0.25s ease-in-out;
    &:after {

    }
  }
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

          <FormContainer>
            <InputContainer>
              <InputStyles type="text" name="fName" placeholder="First Name"required />
              <InputStyles type="text" name="lName" placeholder="Last Name" required />
            </InputContainer>
            
            <InputContainer>
              <InputStyles type="email" name="email" placeholder="E-mail"required />
              <InputStyles type="phone" name="phone" placeholder="Tel." />
            </InputContainer>

            <TextArea name="message" id="" cols="30" rows="6" placeholder="Message" ></TextArea>

            <Btn>Send</Btn>

          </FormContainer>
        </form>

      </Container>
    </Layout>
  </Wrapper>
)


export default Contact
