import React from 'react'

const Layout = ({children}) => {
    return (
        <div className="py-5 position-absolute w-100 h-100 my-5">
            <main>{children}</main>
        </div>
    )
}

export default Layout
