import NavBar from "./Nav/NavBar"
import Footer from './Footer/Footer'

function Layout({ children }) {
    return (
        <div>
            <NavBar />
            <main className='h-auto'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
