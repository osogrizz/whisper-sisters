import React, { Component } from "react"
import styled from 'styled-components'
import { PDFDownloadLink } from '@react-pdf/renderer'

import Layout from "../components/layout"
import SEO from "../components/seo"
import MenuPDF from '../components/menu-pdf'

const Wrapper = styled.div`
  text-align: center;
  color: #fff;
  height: 100vh;
  overflow-x: hidden;
  font-family: 'Raleway', sans-serif;
`

const Container = styled.div`
  margin: 20px 0 50px;
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
`

const MenuTitle = styled.h4`
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 3px;
  font-family: 'Raleway', sans-serif;
`

const NoteBene = styled.p`
  text-transform: uppercase;
  font-size: 9px;
  letter-spacing: 2px;
`

const SubMenu = styled.h4`
  font-family: 'Raleway', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 50px 0;
`

const SubMenuTitle = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  letter-spacing: 3px;
`

const MenuItems = styled.div`
  font-family: 'Raleway', sans-serif;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 25% 25%;
  /* padding-left: 140px; */
  justify-content: center;
  text-align: left;
  text-transform: uppercase;

  ul {
    list-style-type: none;
    li:last-child {
      margin-bottom: 80px !important;
    }
  }
  
  div {
    justify-content: right;
    /* text-align: left; */
  }
`

const Item = styled.li`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 3px;
  margin-bottom: 5px;
`

const ItemText = styled.p`
  margin: 0;
  padding: 0;
  width: 240px;
  margin-bottom: 40px;
  font-size: 12px;
  letter-spacing: 2px;
`


const SimpleItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: left;
  text-transform: uppercase;
`

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false
    }
  } 

componentDidMount() {
  this.setState({
    displayMenu: true
  })
}

render() {
  const { displayMenu } = this.state
  return (
    <Wrapper>
      <Layout>
        <SEO title="Page two" />
          <Container>
            <MenuTitle>Menu</MenuTitle> 
            <NoteBene>Please note our menu may change a bit each day.</NoteBene>

            {
              displayMenu && (
                <PDFDownloadLink document={<MenuPDF/>} fileName="Whisper_Sisters_Menu.pdf" >
                     <p  style={{ fontSize: `24px`, margin: `0` }} ><span role="img" aria-label="menu">📄</span></p> (Click to Download )
                </PDFDownloadLink>  
              )
            }
            
            <SubMenu>Cocktails</SubMenu>
            <SubMenuTitle>$13</SubMenuTitle>
            <MenuItems>
              <div>
                <ul>
                  <Item>Tea Service</Item>
                  <ItemText>
                    RYE, LAPSANG SOUCHONG, Cherry - Cacao bitters
                  </ItemText>

                  <Item>Cleo & Bill</Item>
                  <ItemText>
                    BRANDY, PINEAPPLE RUM, APEROL, BYRRH, STRAWBERRY-FENNEL SHRUB, LEMON, BITTERS
                  </ItemText>
                  
                  <Item>Salt of the Earth</Item>
                  <ItemText>
                    OLD TOM GIN, SFUMATO, GRAN CLASSICO, ORANGE BITTERS
                  </ItemText>

                  <Item>Driftwood</Item>
                  <ItemText>
                    AGRICOLE, COCCHI AMERICANO, APRICOT, LEMON, BITTERS
                  </ItemText>

                  <Item>Frothy by Nature</Item>
                  <ItemText>
                    MEZCAL, AMARO NONINO, PASSIONFRUIT, LEMON, EGG WHITE, BITTERS
                  </ItemText>

                  <Item>Winter Sweater</Item>
                  <ItemText>
                    RYE, SLOE GIN, CYNAR, CINNAMON, LEMON, CHOCOLATE BITTERS
                  </ItemText>
                </ul>
              </div>
              <div>
                <ul>
                  <Item>Oakland</Item>
                  <ItemText>
                    TEQUILA, MEZCAL, CINNAMON, PORT , GRAPEFRUIT, BANANA
                  </ItemText>

                  <Item>Texas Malone</Item>
                  <ItemText>
                    VODKA, FALERNUM, LO-FI GENTIAN, GRAPEFRUIT, LIME, PINK PEPPERCORN
                  </ItemText>

                  <Item>Torch Singer</Item>
                  <ItemText>
                    SIPSONG GIN, CARROT, BLANC VERMOUTH, CITRUS, CELERY BITTERS
                  </ItemText>

                  <Item>The Dutch Trader</Item>
                  <ItemText>
                    GENEVER, BOURBON, RAINWATER MADEiRA, LEMON, HONEY, ROSE
                  </ItemText>

                  <Item>Patagonian Negroni</Item>
                  <ItemText>
                    TRA KAL, SALERS, DOLIN BLANC, SALINE
                  </ItemText>

                  <Item>Rotating Clarified Milk Punch</Item>
                  <ItemText>
                    CLARIFIED NEGRONI PUNCH - GIN, CAMPARI, SWEET VERMOUTH, EARL GRAY, ORANGE, LEMON
                  </ItemText>
                </ul>
              </div>
            </MenuItems>

            <SubMenu>Small Plates</SubMenu>
            <MenuItems>
              <div>
                <ul>
                  <Item>Togarashi Spiced Popcorn $7</Item>
                  <ItemText>

                  </ItemText>

                  <Item>Deviled Eggs $10</Item>
                  <ItemText>
                    KIMCHEE, GOchUJANG, SESAME
                  </ItemText>

                  <Item>Fries $10</Item>
                  <ItemText>
                    HERBS, LEMON-GARLIC AIOLI
                  </ItemText>

                  <Item>Mozzarella $14</Item>
                  <ItemText>
                    FRIED HERBS, GARLIC, PISTACHIO, LEMON ZEST
                  </ItemText>

                  <Item>Chicory & Asparagus Salad $12</Item>
                  <ItemText>
                    CITRUS-THYME VINAIGREET, RADISH, GRAPEFRUIT, CURRIED PEPITAS, PARMESAN
                  </ItemText>
                </ul>
              </div>
              <div>
                <ul>
                  <Item>Sweet Potato Tacos $13</Item>
                  <ItemText>
                    CHICKPEA, ALMOND, TOMATILLO SALSA, PICKLED ONION, SCALLION, COTIJA
                  </ItemText>

                  <Item>Korean Braised Beef Tacos $13</Item>
                  <ItemText>TAHINI- CABBAGE SLAW, JALAPENO CREMA</ItemText>

                  <Item>Harvest Bowl $13</Item>
                  <ItemText>FARRO, CHARRED SCALLION-LEMON VINAIGRETTE, CAULIFLOWER, SPRING ONION, OYSTER MUSHROOM, PICKLED ONION, MOONSIDE CREAMERY HALO</ItemText>

                </ul>
              </div>
            </MenuItems>

            <SubMenu>Cheese</SubMenu>
            <SimpleItems>
              <ul>
                <Item>Daily Accompaniments</Item>
                <Item>8 each / 30 full board</Item>
              </ul>
            </SimpleItems>

            <SubMenu>Meat</SubMenu>
            <SimpleItems>
              <ul>
                <Item>Daily Accompaniments</Item>
                <Item>7 EA / 18 Full Board</Item>
                <Item>Selections may change</Item>
              </ul>
            </SimpleItems>

            <SubMenu>Sweets</SubMenu>
            <SimpleItems>
              <ul>
                <Item>Chocolate Bread Pudding $8</Item>
                <Item>Key Lime Cups $8</Item>
                <Item>Lemon Sorbet $8</Item>
              </ul>
            </SimpleItems>

          </Container>
      </Layout>
    </Wrapper>
  )}
}

export default Menu