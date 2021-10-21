import React from 'react'

function ChevronLeft({onClick}) {
    return (
        <div onClick={() => onClick()} className='cursor-pointer'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </div>
    )
}

export default ChevronLeft
