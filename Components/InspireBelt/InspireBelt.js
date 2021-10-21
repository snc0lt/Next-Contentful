import Card from '../Card/Card'

function InspireBelt({inspireBeltItems}) {
    const title = inspireBeltItems[0].fields.title
    const description = inspireBeltItems[0].fields.description
    const media = inspireBeltItems[0].fields.media
    return (
        <div className='lg:container lg:mx-auto'>
            <h3 className='my-10 text-center font-bold'>{title}</h3>
            <div className='flex justify-between my-20 '>
           {media.map((m, i) => (
               <Card key={i} src={m.fields.file.url} title={m.fields.title} description={description} />
           ))}
        </div>
        </div>
    )
}

export default InspireBelt
