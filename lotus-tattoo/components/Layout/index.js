import Footer from "../Footer"
import NavBar from "../NavBar"

export default function Layout({children}) {
    console.log('layout rendered')
return (    
    <div className='layoutRoot'>
        <NavBar />
            {children}
        <Footer />
    </div>
    )
}