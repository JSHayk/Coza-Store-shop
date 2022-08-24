import { useRef, useState } from 'react'
import './Nav.scss'
import {AiOutlineSearch,AiOutlineHeart} from 'react-icons/ai'
import {MdShoppingCart} from 'react-icons/md'
import { Link, useLocation } from "react-router-dom"
import { IoClose } from 'react-icons/io5'
import { ImSearch } from 'react-icons/im'
import BaseButton from '../../common/baseButton/BaseButton'


const Nav = () => {
    const [search,setSearch] = useState(false);
    const [market,setMarket] = useState(false);
    const location = useLocation();
    const navRef = useRef(null);
    window.onscroll = ()=> {
        if(window.scrollY > 47) {
            navRef.current.style.boxShadow   = "2px 2px 10px 1px rgb(207 211 203 / 10%)";
            navRef.current.style.backgroundColor = "white";
            navRef.current.style.position = "fixed";
            navRef.current.style.top = "0";
        } else{
            navRef.current.style.boxShadow = "none";
            navRef.current.style.backgroundColor = "transparent";
            navRef.current.style.position = "absolute";
            navRef.current.style.top = "45px";
            navRef.current.style.left = "0px";

        }
        if(window.scrollY > 49) {
            navRef.current.style.boxShadow = "2px 2px 10px 1px rgb(207 211 203)";
        }
    }

  return (
    <>
        <div className="help">
            <div className="help-content">
                <span>Free shipping for standard order over $100</span>
                <div className="help-content-bar">
                    <div className='help-and-faq'><a href="#help">Help & FAQs</a></div>
                    <div className='my-account'><a href="#account">My Account</a></div>
                    <div className='en'><a href="#en">EN</a></div>
                    <div className='usd'><a href="#usd">USD</a></div>
                </div>
            </div>
        </div>

        <nav className='nav' ref={navRef}>
            <div className='nav-content'>
                <Link to="/" className='logo'>
                    <img src="data:image/webp;base64,UklGRqACAABXRUJQVlA4TJQCAAAvhAAEEH8gEEhy2p9vhZmZmYlI6DigvP//GUle0ztpu8e2nducPHOy7Vneam0zy8ZxbdverNU87bF1WqaVLudz+P3Sz0T0fwLAe/XN9Zj3fflICVx1owlcc+MyrFf/cYvDg77v+5Ww+de3pgH3+/6VDlf5vu/D/LykWcCHkr51GZQJpNVk8WJpIwVJmoeXl8IKyEi6g0CSHAYkKXTxYknaOJ6iQkvfsxNaQ6dxQjR7gsNAz9HLcs9C5sThl1UWnJ0wYQIU1POPVEuf9FVBPc5VN974qjrBk1RmjNVBsQKiWpgfV8HmuIJMJWRqgrMA5xSWklaKrFazOVYF0K1N0KxQVUamFg64tufeBYjmWkbm2QKdhav0LnHowojqgJwqoFdPaJ4RzcVqDG8y3rvTMpQwqDrMzXoWCLQO9ulbINIRpYygp3wcUa1x1beWsVrbiGosV+lO4CrthX6tBXJy4k6jMR/uSEpb9nUaXqEieNf3lzN6MfIqg0a9S1YuwL6/tTshM472tuKzBJLOMpSwWU3Ac9rLVXoWuEopIlUY8LNKbWOWc0ahqYTg7IQJDl1aB5u/fGS+eoA+NTCiOUCgzi/zqrORq7GN1BvNTWQqn2uC4CxAs76F73QneVVBTlUUVAoMy9wL7C+FqN4W3Gn07SVT2RiXJsyXbn8g1lxG1XnFn5J7l+4EyFieBaJ6iOps58ISIFdDppJ0TQJpmeVcJTPFoEyK4fbt2+MQ6HoWctU2snfAh6FrvHdn0lVGCkhLCssT9ulZIKty8OJHPgvdhGZ1tGkDhhe6QWdbWxvQGusZF5j/l3qWk9Css0CkauCFWKtI4GPpMcdCpiaQJAegBPsWh4vsTQZoxLplCUAj0OgwYcKECQA=" alt="logo" />
                </Link>
                <ul>
                    <li><Link className={` ${ location.pathname === "/Home" ?  "active-page" : ""} `} to="/Home">Home</Link></li>
                    <li><Link className={` ${ location.pathname === "/Shop" ? "active-page" : ""} `} to="/Shop">Shop</Link></li>
                    <li><Link className={` ${ location.pathname === "/Features" ? "active-page" : ""} `} to="/Features">Features</Link></li>
                    <li><Link className={` ${ location.pathname === "/Blog" ? "active-page" : ""} `} to="/Blog">Blog</Link></li>
                    <li><Link className={` ${ location.pathname === "/About" ? "active-page" : ""} `}to="/About">About</Link></li>
                    <li><Link className={` ${ location.pathname === "/Contact" ? "active-page" : ""} `} to="/Contact">Contact</Link></li>
                </ul>
                <section className='nav-content-icons'>
                    <AiOutlineSearch className="nav-content-icons-search nav-content-icons-icon" onClick={()=>setSearch((prev)=>!prev)}/>
                    <MdShoppingCart className="nav-content-icons-shopping nav-content-icons-icon" onClick={()=>setMarket((prev)=>!prev)}/>
                    <AiOutlineHeart className="nav-content-icons-like nav-content-icons-icon"/>
                </section>
            </div>
        </nav>
        {
            search && <div className="modal-search-side" >
                <div className="modal-search-side-content">
                    <IoClose className='modal-search-side-content-close' onClick={()=>setSearch((prev)=>!prev)}/>
                    <section className='modal-search-side-content-section'>
                        <ImSearch className='modal-search-side-content-section-icon'/>
                        <input type="text" className='modal-search-side-content-section-input' placeholder="Search..."/>
                    </section>
                </div>
            </div>
        }
        {
            market && <div className='modal-market-side'>
                <div className="modal-market-side-market">
                    <div className="modal-market-side-market-content">
                        <div className="modal-market-side-market-content-title">
                            <h4>YOUR CART</h4>
                            <IoClose className='modal-market-side-market-content-title-close' onClick={()=>setMarket((prev)=>!prev)}/>
                        </div>
                        <div className="modal-market-side-market-content-items">
                            <div className="modal-market-side-market-content-items-item">
                                <div className="modal-market-side-market-content-items-item-image">
                                    <img src="https://preview.colorlib.com/theme/cozastore/images/xitem-cart-01.jpg.pagespeed.ic.OR3SDRpeNa.webp" alt="pic" />
                                    <div className="modal-market-side-market-content-items-item-image-color">
                                        <IoClose/>
                                    </div>
                                </div>
                                <p><a href='#market-item'>White Shirt Pleat</a></p>
                                <p>1 x $19.00</p>
                            </div>
                            <div className="modal-market-side-market-content-items-item">
                                <div className="modal-market-side-market-content-items-item-image">
                                    <img src="https://preview.colorlib.com/theme/cozastore/images/xitem-cart-02.jpg.pagespeed.ic.i1QzWnpTT6.webp" alt="pic" />
                                    <div className="modal-market-side-market-content-items-item-image-color">
                                        <IoClose/>
                                    </div>
                                </div>
                                <p><a href='#market-item'>Converse All Star</a></p>
                                <p>1 x $39.00</p>
                            </div>
                            <div className="modal-market-side-market-content-items-item">
                                <div className="modal-market-side-market-content-items-item-image">
                                    <img src="https://preview.colorlib.com/theme/cozastore/images/xitem-cart-03.jpg.pagespeed.ic.oMriSJvVmo.webp" alt="pic" />
                                    <div className="modal-market-side-market-content-items-item-image-color">
                                        <IoClose/>
                                    </div>
                                </div>
                                <p><a href='#market-item'>Nixon Porter Leather</a></p>
                                <p>1 x $17.00</p>
                            </div>
                        </div>
                        <div className="modal-market-side-market-content-total">
                            <p>Total: $75.00</p>
                        </div>
                        <div className="modal-market-side-market-content-buttons">
                                <BaseButton text={"VIEW CART"}/>
                                <BaseButton text={"CHECK OUT"}/>
                        </div>
                    </div>
                </div>
            </div>
        }
    
    </>
    
  )
}

export default Nav