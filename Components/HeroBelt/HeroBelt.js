import Image from 'next/image'
import Link from 'next/link'

function HeroBelt({heroBelt}) {
    console.log(heroBelt)
    const title = heroBelt[0].fields.title
    const ctaText = heroBelt[0].fields.ctaText
    const media = heroBelt[0].fields.media.fields.file.url
    const height = heroBelt[0].fields.media.fields.file.details.image.height / 2
    const width = heroBelt[0].fields.media.fields.file.details.image.width
    return (
        <div className='my-20 relative '>
            <Image  src={'https:'+ media} width={width} height={height} layout='responsive'/>
            <div className='absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center'>
                <h1 className='text-5xl text-white mb-8'>{title}</h1>
            {ctaText && (
                <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>
                <Link href={'/'}>
                    <a>{ctaText}</a>
                </Link>
            </button>
            )}
            </div>
            
        </div>
    )
}

export default HeroBelt
