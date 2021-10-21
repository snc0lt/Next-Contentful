import Link from 'next/link'
function NavRight() {
    return (
        <div className="flex justify-end">
            <Link href='/wishlist'>
                <a className='mx-4'>
                    <h3>
                        Wishlist
                    </h3>
                </a>
            </Link>
            <Link href='/signin'>
                <a className='mx-4'>
                    <h3>
                        Sign In
                    </h3>
                </a>
            </Link>
            <Link href='/stores'>
                <a className='mx-4'>
                    <h3>
                        Stores
                    </h3>
                </a>
            </Link>
        </div>
    )
}

export default NavRight
