import Image from 'next/image'
import Link from 'next/link'

function Hero({hero}) {
    const title = hero[0].fields.title
    const description = hero[0].fields.description
    const ctaText = hero[0].fields.ctaText
    const media = hero[0].fields.media
    const height = hero[0].fields.media.fields.file.details.image.height / 1.4 
    const width = hero[0].fields.media.fields.file.details.image.width
    return (
        <div className='relative'>
            <Image src={'https:' + media.fields.file.url} height={height} width={width}/>
            <div className='absolute top-1/4 left-40 w-1/6'>
                <h1 className='text-7xl'>{title}</h1>
                <p className='my-10'><strong>{description}</strong></p>
                <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>
                    <Link href='/'>
                        <a>{ctaText}</a>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Hero
