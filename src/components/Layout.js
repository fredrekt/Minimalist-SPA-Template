import React from 'react'
import FooterPage from './Footer'

const Layout = ({children}) => {
    return (
        <div className="py-5 position-absolute w-100 h-100 my-5">
            <main>{children}</main>
            <FooterPage/>
        </div>
    )
}

export default Layout
