import {useState} from 'react'
import Card from '../Card/Card'
import LeftArrow from '../Icons/ChevronLeft'
import RightArrow from '../Icons/ChevronRight'
import { Swiper, SwiperSlide } from 'swiper/react';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import 'swiper/css';

function PopularProducts({popoluarProducts}) {
    const [swiper, setSwiper] = useState()
    const title = popoluarProducts[0].fields.title
    const media = popoluarProducts[0].fields.products

    const swipeRight = () => {
        swiper.slideNext()
    }
    const swipeLeft = () => {
        swiper.slidePrev()
    }
    
    return (
       <div className='lg:container lg:mx-auto my-20'>
           <h3 className='mb-10 text-center font-bold'>{title}</h3>
           <div className='flex justify-end mb-8'>
               <LeftArrow onClick={swipeLeft}/>
               <RightArrow onClick={swipeRight} />
           </div>
            <Swiper
            onSwiper={setSwiper}
            slidesPerView={3}
            tag='section'
            loop
            centeredSlides
            slidesOffsetBefore={100}
    >
      {
        media.map((m, i) => {
            const src = m.fields.media.fields.file.url
            const title = m.fields.title
            const slug = m.fields.slug
            const documentDesc = m.fields.description
            const description = documentToReactComponents(documentDesc)
            const price = m.fields.price
            const ctaText = m.fields.ctaText
            return(
                <SwiperSlide key={i}>
                    <Card src={src} title={title} slug={slug} price={price} description={description} ctaText={ctaText} />
                </SwiperSlide>
            )
        })
      }
    </Swiper>
       </div>
    )
}

export default PopularProducts
