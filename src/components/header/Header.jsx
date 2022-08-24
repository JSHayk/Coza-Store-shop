import React from 'react'
import "./Header.scss";
import Nav from "./nav/Nav";



const Header = () => {
    return (
        <header className="page-header">
            <Nav/>
        </header>
    )
}

export default Header;