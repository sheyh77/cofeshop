import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="cantainer">
                <div className="footer-wrap">
                    <div className="footer-top">
                        <Link to="/" className="footer-top-title">Menu</Link>
                        <Link to="/location" className="footer-top-title">Location</Link>
                        <Link to="/about" className="footer-top-title">About Us</Link>
                        <Link to="/contact" className="footer-top-title">Contact</Link>
                    </div>
                    <div className="footer-bottom">
                        <Instagram color="#4a4a49"/>
                        <Twitter color="#4a4a49" />
                        <Facebook color="#4a4a49" />
                    </div>
                </div>
            </div>
        </footer>
    )
}