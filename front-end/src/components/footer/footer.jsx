import { Link } from "react-router-dom";
import "./footer.css";
function Footer(){

    const currentYear = new Date().getFullYear;

    return (

        <div className="footer-container">
            <p>&copy; {currentYear} Innovex. All rights reserved.</p>
            <div className="links">
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Terms of Service</Link>
                <Link to="#">Cookie Settings</Link>
            </div>
        </div>
    )
}


export default Footer;