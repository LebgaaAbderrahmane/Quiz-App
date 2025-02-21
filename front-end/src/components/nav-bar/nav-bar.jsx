import "./nav-bar.css";
import { Link } from "react-router-dom";
function NavBar({visible}) {


    return (
        <div className="nav-bar" style={{transform : visible && "translateY(-65px)"}} >
            <div className="logo">
                <Link to="/"><img src="/Quizly.png" alt="Quizly Logo" /></Link>
            </div>
            <div className="list">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">Explore Quizly</Link></li>
                    <li><Link to="#">About us</Link></li>
                </ul>
            </div>
            <div className="login-signup">
                <Link to="/login" id="login" >Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default NavBar;