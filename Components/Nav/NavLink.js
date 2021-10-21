import Link from 'next/link'
function NavLink() {
    return (
        <div className="flex">
            <Link href='/new'>
                <a className='mx-4'>
                    <h3>
                        New
                    </h3>
                </a>
            </Link>
            <Link href='/woman'>
                <a className='mx-4'>
                    <h3>
                        Woman
                    </h3>
                </a>
            </Link>
            <Link href='/man'>
                <a className='mx-4'>
                    <h3>
                        Man
                    </h3>
                </a>
            </Link>
            <Link href='/inspire'>
                <a className='mx-4'>
                    <h3>
                        Inspire
                    </h3>
                </a>
            </Link>
            <Link className='mx-4' href='/sale'>
                <a>
                    <h3>
                        Sale
                    </h3>
                </a>
            </Link>
        </div>
    )
}

export default NavLink
