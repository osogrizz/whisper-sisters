import React from 'react'
import { Page, Text, Document, StyleSheet, Font } from '@react-pdf/renderer'


const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 8,
    fontSize: 11,
    textAlign: 'justify',
    fontFamily: 'Oswald'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
})

Font.register(
  
  { family: 'Oswald', src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf' },
)

const MenuPDF = () => (
  <Document>
    <Page style={styles.body}>
        <Text style={styles.title}>
          Menu
        </Text>
        <Text style={styles.subtitle}>
          PLEASE NOTE OUR MENU MAY CHANGE A BIT EACH DAY.
        </Text>
        <Text style={styles.subtitle}>
          COCKTAILS
        </Text>

        <Text style={styles.text}>
          $13
          TEA SERVICE
          RYE, LAPSANG SOUCHONG, CHERRY - CACAO BITTERS

          CLEO & BILL
          BRANDY, PINEAPPLE RUM, APEROL, BYRRH, STRAWBERRY-FENNEL SHRUB, LEMON, BITTERS

          SALT OF THE EARTH
          OLD TOM GIN, SFUMATO, GRAN CLASSICO, ORANGE BITTERS

          DRIFTWOOD
          AGRICOLE, COCCHI AMERICANO, APRICOT, LEMON, BITTERS

          FROTHY BY NATURE
          MEZCAL, AMARO NONINO, PASSIONFRUIT, LEMON, EGG WHITE, BITTERS

          WINTER SWEATER
          RYE, SLOE GIN, CYNAR, CINNAMON, LEMON, CHOCOLATE BITTERS

          OAKLAND
          TEQUILA, MEZCAL, CINNAMON, PORT , GRAPEFRUIT, BANANA

          TEXAS MALONE
          VODKA, FALERNUM, LO-FI GENTIAN, GRAPEFRUIT, LIME, PINK PEPPERCORN

          TORCH SINGER
          SIPSONG GIN, CARROT, BLANC VERMOUTH, CITRUS, CELERY BITTERS

          THE DUTCH TRADER
          GENEVER, BOURBON, RAINWATER MADEIRA, LEMON, HONEY, ROSE

          PATAGONIAN NEGRONI
          TRA KAL, SALERS, DOLIN BLANC, SALINE

          ROTATING CLARIFIED MILK PUNCH
          CLARIFIED NEGRONI PUNCH - GIN, CAMPARI, SWEET VERMOUTH, EARL GRAY, ORANGE, LEMON

          SMALL PLATES
          TOGARASHI SPICED POPCORN $7
          DEVILED EGGS $10
          KIMCHEE, GOCHUJANG, SESAME

          FRIES $10
          HERBS, LEMON-GARLIC AIOLI

          MOZZARELLA $14
          FRIED HERBS, GARLIC, PISTACHIO, LEMON ZEST

          CHICORY & ASPARAGUS SALAD $12
          CITRUS-THYME VINAIGREET, RADISH, GRAPEFRUIT, CURRIED PEPITAS, PARMESAN

          SWEET POTATO TACOS $13
          CHICKPEA, ALMOND, TOMATILLO SALSA, PICKLED ONION, SCALLION, COTIJA

          KOREAN BRAISED BEEF TACOS $13
          TAHINI- CABBAGE SLAW, JALAPENO CREMA

          HARVEST BOWL $13
          FARRO, CHARRED SCALLION-LEMON VINAIGRETTE, CAULIFLOWER, SPRING ONION, OYSTER MUSHROOM, PICKLED ONION, MOONSIDE CREAMERY HALO

          CHEESE
          DAILY ACCOMPANIMENTS
          8 EACH / 30 FULL BOARD
          MEAT
          DAILY ACCOMPANIMENTS
          7 EA / 18 FULL BOARD
          SELECTIONS MAY CHANGE
        </Text>
      <Text style={styles.subtitle}>
        SWEETS
      </Text>
      <Text style={styles.text}>
      CHOCOLATE BREAD PUDDING $8
      KEY LIME CUPS $8
      LEMON SORBET $8
      </Text>
    </Page>
  </Document>
)

export default MenuPDF