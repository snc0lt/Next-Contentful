import Image from 'next/image'

function Card({src, title, description, slug, price, ctaText }) {
    return (
    <div className="w-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-500 transform transition cursor-pointer">
    <Image src={'https:' + src} alt={title} width={400} height={400} />
    <div className="p-5">
      {description}
    </div>
    <div className='flex justify-center my-4'>
    {slug && ctaText && (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <a href={`/${slug}`}>{ctaText}</a>
      </button>
    )}
    </div>
  </div>
    )
}

export default Card
