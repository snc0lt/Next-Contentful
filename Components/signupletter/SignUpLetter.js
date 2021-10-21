import Image from 'next/image'
import Link from 'next/link'

function SignUpLetter() {
    return (
        <div className='relative'>
            <Image src={'/signupletter.jpg'} height={400} width={1920} layout='responsive' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className="flex justify-between">
                <p><strong>Sign up for our news letter to follow our stories, receive product news, oofers, updates and special invites</strong></p>
                <div className="flex">
                    <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold rounded'>
                        <Link href='/'>
                            <a>Sign Up</a>
                        </Link>
                    </button>
                    <button className='ml-8 bg-white hover:bg-purple-400 text-purple border border-purple-500 font-bold rounded'>
                        <Link href='/'>
                            <a>Contact Us</a>
                        </Link>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpLetter

