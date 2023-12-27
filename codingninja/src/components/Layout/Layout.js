import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Helmet } from "react-helmet"
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>

            <Navbar className='scroll-smooth z-1 w-full relative' />
            <Toaster />

            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Ecommerce App - shop now',
}

export default Layout