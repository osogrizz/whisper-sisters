import React from "react"
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
  text-align: center;
  height: 100vh;
  overflow-x: hidden;
`

// Need to move styles to layout

const Container = styled.div`
  display: grid;
  justify-content: center;
  margin: 140px auto;
  
  ul {
    list-style-type: none;
  }
  
  a {
    text-decoration: none;
    color: #fff;
    font-size: 12px;
    margin: 0;
    padding: 0;
  }
  hr {
    margin: 0 20px;
  }
  `

const InstaLabel = styled.div`
  /* font-family: 'Raleway', sans-serif !important; */
  display: grid;
  width: 960px;
  margin: 0 auto;
  grid-template-columns: 80px 300px;
  text-align: left;
  /* text-align: left;   */
  /* display: flex;
  justify-self: center;
  text-align: center; */
  margin: 30px auto;
  div img {
    width: 70px;
    border-radius: 50%;
  }
  a {
    font-weight: 400;
    &:hover {
      text-decoration: underline
    } 
  }
  
  @media (max-width: 1100px) {
    justify-content: center;
  }
  `

const TheGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 0;
  padding: 0;
  justify-content: center;
  
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 250px);
    grid-gap: 25px;
  }
  
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 250px);
    grid-gap: 40px;
  }
  
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 250px);
  }
  `

const Item = styled.div`
  /* font-family: 'Raleway', sans-serif !important; */
  background: #fff !important;
  position: relative;
  width: 250px;
  height: 250px;
  justify-content: space-between;
  
  &:hover {
    
    img {
      opacity: 0.245 !important;
      transition: opacity 1.2s ease-in-out;
      /* transform: opacity 1.2s linear; */
    }
    
    p {
      visibility: visible;
      opacity: 1;
      /* transition: opacity 1.4s , visibility 1.4s; */
      transform: all 1.2s ease-in-out;
    }
  }
  `

const InstaContent = styled.div`
  /* font-family: 'Raleway', sans-serif !important; */
  top: 0; 
  margin: 40px auto 0;
  position: absolute;
  display: grid;
  grid-template-columns: 250px ;
  grid-template-rows: 128px 72px;
  grid-gap: 10px;
  justify-content: space-between;

  .comments {
    font-size: 20px;
    width: 220px;
    overflow-y: hidden;
    line-height: 2;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    z-index: 10;
    width: 60px;
    text-align: center;
    margin: 0 10px;
    visibility: hidden;
    opacity: 0;
    color: rgba(55, 55, 55, 1);
    /* transition: opacity .2s, visibility .2s; */
    transition: all 1.2s ease-in-out;
  }

  div {
    margin: 20px auto;
    padding: 0;
    display: grid;
    grid-template-columns: 80px 80px;
    justify-content: center;
     p {
       font-size: 16px;
     }
  }
`

const Gallery = ({ data }) => (
  <Wrapper>
    <Layout>
      <SEO title="Gallery" />
      <Container>

        <InstaLabel>
          <div>
            <img src={`${data.instaUserNode.profile_pic_url_hd}`} alt=""/>
          </div>

          <div>
            <a href="https://www.instagram.com/whispersisterspetaluma/?hl=en" target="_blank" rel="noopener noreferrer" style={{ color: `#fff`, fontSize: `26px`, margin: `10px 0 0` }} >{data.instaUserNode.username}</a>

            <p style={{ color: `#fff`, fontSize: `11px`, margin: `10px 0` }} > Followers   {data.instaUserNode.edge_followed_by.count} | Following  {data.instaUserNode.edge_follow.count} | Post 
            </p>
          </div>
        </InstaLabel>
          
          <hr style={{ marginBottom: `120px` }}/>


        <TheGrid>
          { 
            
            data.allInstaNode.edges.map( item => 
            // check for mediaType ie video or image.
  
            <Item key={item.node.id}>
                <Img  fluid={item.node.localFile.post.fluid} style={{ width: `250px` }} />  
                <InstaContent>
                  <p className="comments">{item.node.caption}</p>
                  <div>
                    <p><span role="img" aria-label="comment" >💬</span> {item.node.comments}</p>
                    <p><span role="img" aria-label="likes" >♡</span> {item.node.likes}</p>
                  </div>
                </InstaContent>
            </Item>

          )}
        </TheGrid>
        
      </Container>
    </Layout>
  </Wrapper>
)


export const query = graphql`
  query Instagram {
    instaUserNode {
      id
      username
      full_name
      biography
      edge_followed_by {
        count
      }
      edge_follow {
        count
      }
      profile_pic_url
      profile_pic_url_hd
    
    }
    allInstaNode {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            post: childImageSharp {
              fluid(maxWidth: 150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Gallery
