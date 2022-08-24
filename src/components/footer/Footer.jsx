import "./Footer.scss"
import {FaFacebookF,FaInstagram,FaPinterestP} from 'react-icons/fa'
import BaseButton from "../common/baseButton/BaseButton";
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="page-footer-wrapper">
                <section className="page-footer-wrapper-description">
                
                    <div className="page-footer-wrapper-description-first footer-desc">
                        <h4>CATEGORIES</h4>
                        <ul>
                            <li><a href="/">Women</a></li>
                            <li><a href="/">Men</a></li>
                            <li><a href="/">Shoes</a></li>
                            <li><a href="/">Watches</a></li>
                        </ul>
                    </div>
                    <div className="page-footer-wrapper-description-second footer-desc">
                    <h4>HELP</h4>
                        <ul>
                            <li><a href="/">Track Order</a></li>
                            <li><a href="/">Returns</a></li>
                            <li><a href="/">Shipping</a></li>
                            <li><a href="/">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="page-footer-wrapper-description-third footer-desc">
                        <h4>GET IN TOUCH</h4>
                        <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                        <section className="page-footer-wrapper-description-third-icons">
                            <a href="#facebook"><FaFacebookF className="page-footer-wrapper-description-third-icons-icon"/></a>
                            <a href="#instagram"><FaInstagram className="page-footer-wrapper-description-third-icons-icon" /></a>
                            <a href="#pinterest"><FaPinterestP className="page-footer-wrapper-description-third-icons-icon"/></a>
                        </section>
                    </div>
                    <div className="page-footer-wrapper-description-fourth footer-desc">
                        <h4 className="title-h4">NEWSLETTER</h4>
                        <input type="text"  placeholder="email@example.com" className="page-footer-wrapper-description-fourth-input"/>
                        <div className="for-before"></div>
                        <Link to="/"><BaseButton text={"SUBSCRIBE"} /></Link>
                    </div>

                </section>
                <section className="page-footer-wrapper-payments">
                    <div>
                        <a href="#a"><img src="https://preview.colorlib.com/theme/cozastore/images/icons/xicon-pay-01.png.pagespeed.ic.x3ksseq-Ro.webp" alt=""  /></a>
                        <a href="#b"><img src="https://preview.colorlib.com/theme/cozastore/images/icons/xicon-pay-02.png.pagespeed.ic.VV76jih-LZ.webp" alt="" /></a>
                        <a href="#c"><img src="https://preview.colorlib.com/theme/cozastore/images/icons/xicon-pay-03.png.pagespeed.ic.qm10pI94h8.webp" alt="" /></a>
                        <a href="#d"><img src="https://preview.colorlib.com/theme/cozastore/images/icons/xicon-pay-04.png.pagespeed.ic.afX_pRP1xW.webp" alt="" /></a>
                        <a href="#e"><img src="https://preview.colorlib.com/theme/cozastore/images/icons/xicon-pay-05.png.pagespeed.ic.j9rtlz4R-L.webp" alt="" /></a>
                    </div>
                    <p>Copyright ©2022 All rights reserved | This template is made with  by <a href="#colorib">Colorib</a></p>
                </section>

            </div>
        </footer>
    )
}

export default Footer;