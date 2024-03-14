import React from 'react'
import Poster from '../components/poster/Poster'
import Card1 from '../components/cards/Card1'
import NwProducts from '../components/productcard/NwProducts'
import PopularProducts from '../components/productcard/PopularProducts'
import Poster2 from '../components/poster/Poster2'
import Product3 from '../components/productcard/Product3'
import Card2 from '../components/cards/Card2'
import Product4 from '../components/productcard/product4'
import Product5 from '../components/productcard/Product5'
import Poster3 from '../components/poster/Poster3'
import Poster4 from '../components/poster/Poster4'
import Items from '../listitems/Items'




function Home() {
  return (
    <div>
      <Items/>
      <Poster/>
      <Card1/>
     <NwProducts/>
     <PopularProducts/>
      <Poster2/>
      <Product3/>
      <Card2/>
      <Product4/>
      <Product5/>
      <Poster3/>
      <Poster4/>
    </div>
  )
}

export default Home
