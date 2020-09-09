import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdbreact'

const Navbar = () => {

    // const showSettings = e => {
    //     e.preventDefault();
    // }

    return (
        <>
        <Menu customBurgerIcon={<MDBIcon size="2x" icon="align-left" />} customCrossIcon={<MDBIcon far icon="times-circle" size="lg"/>} width={`350px`}>
            <Link id="home" className="h1-responsive font-weight-bold brand pb-4" to="/">Brand</Link>
            <span>
                <Link id="about" className="menu-item h2-responsive" to="/about">About Us</Link>
            </span>
            <span>
                <Link id="story" className="menu-item h2-responsive" to="/story">Our Story</Link>
            </span>
            <span>
                <Link id="contact" className="menu-item h2-responsive" to="/contact">Contact</Link>
            </span>
            {/* <a onClick={showSettings} className="menu-item--small" href="">Settings</a> */}
        </Menu>
        </>
    )
}

export default Navbar
