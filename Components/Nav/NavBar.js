import NavLinks from './NavLink'
import NavRight from './NavRight'
import NavLogo from './NavLogo'

function NavBar() {
    return (
        <header className='bg-white'>
            <div className='grid grid-cols-3 h-40 items-center lg:container lg:mx-auto '>
            <NavLinks />
            <NavLogo />
            <NavRight /> 
            </div>
        </header>
    )
}

export default NavBar
