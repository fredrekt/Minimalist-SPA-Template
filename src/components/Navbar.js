import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { HashLink as Link } from 'react-router-hash-link';
import { MDBIcon } from 'mdbreact'

const Navbar = () => {

    // const showSettings = e => {
    //     e.preventDefault();
    // }

    return (
        <>
        <Menu customBurgerIcon={<MDBIcon size="2x" icon="align-left" />} customCrossIcon={<MDBIcon far icon="times-circle" size="lg"/>} width={`350px`}>
            <Link id="home" className="h1-responsive font-weight-bold brand pb-4" to="/#home">Brand</Link>
            <span>
                <Link id="about" className="menu-item h2-responsive" to="/about">About Us</Link>
            </span>
            <span>
                <Link id="story" smooth className="menu-item h2-responsive" to="/#our-story">Our Story</Link>
            </span>
            <span>
                <Link id="features" smooth className="menu-item h2-responsive" to="/#features-section">Features</Link>
            </span>
            <span>
                <Link id="showcase" smooth className="menu-item h2-responsive" to="/#showcase-section">Showcase</Link>
            </span>
            <span>
                <Link id="sponsors" smooth className="menu-item h2-responsive" to="/#sponsors-section">Partners</Link>
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
