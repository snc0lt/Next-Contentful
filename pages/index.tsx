import InspireBelt from '../Components/InspireBelt/InspireBelt'
import PopularProducts from '../Components/PopularProducts/PopularProducts'
import HeroBelt from '../Components/HeroBelt/HeroBelt'
import Hero from '../Components/Hero/Hero'
import SignUpLetter from '../Components/signupletter/SignUpLetter'
import {getEntries } from '../utils/getEntries'

export async function getStaticProps () {
  const inspireBeltItems = await getEntries('inspireBell')
  const popoluarProducts = await getEntries('popoluarProducts')
  const heroBelt = await getEntries('heroBelt')
  const hero = await getEntries('hero')
  return {
    props: {
      inspireBeltItems: inspireBeltItems.items,
      popoluarProducts: popoluarProducts.items,
      heroBelt: heroBelt.items,
      hero: hero.items
    }
  }
}

function index({inspireBeltItems, popoluarProducts, heroBelt, hero}) {
  
  return (
    <div>
      <Hero hero={hero}/>
      <InspireBelt inspireBeltItems={inspireBeltItems}/> 
      <HeroBelt heroBelt={heroBelt}/>
      <PopularProducts popoluarProducts={popoluarProducts}/>
      <SignUpLetter />
    </div>
  )
}

export default index
