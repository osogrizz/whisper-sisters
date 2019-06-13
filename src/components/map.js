import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 30px;
  h1 {
    margin: 100px auto;
  }
`

const MapContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 98%;
    /* grid-gap: 50px; */
  
    @media (max-width: 750px) {
        display: block;
    }
`

const MapCards = styled.div`
  /* margin-top: 80px; */

  iframe {
    width: 100%;
    height: 400px;
  }

  p {
    text-align: center; 
    font-size: 1rem;
  }
  span {
    font-size: 1.4rem;
  }
  span a {
    color: inherit;
    font-size: 1rem;

    &:hover {
      color: red;
      font-weight: 400;
    }
  }
`


const Map = ( ) => (
  // Important! Always set the container height explicitly
  <Wrapper>
    <MapContainer>
      <MapCards>
        <iframe
          title="Petaluma"
          frameBorder="0"
          style={{'border':0 }}
          src={`https://www.google.com/maps/embed/v1/place?q=190+KENTUCKY+ST.+PETALUMA,+CA+94952&key=${process.env.GATSBY_API_KEY}`}
          allowFullScreen
        />
      </MapCards>
    </MapContainer>   
  </Wrapper>

    );

export default Map;
