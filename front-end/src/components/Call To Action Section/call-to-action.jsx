import "./call-to-action.css";
import { Link } from "react-router-dom";

function CallToAction({title, text, image}){
    return (
        <div className="cta" style={{backgroundImage: `url('/${image}')`}} >
                <div className="text">
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <div className="buttons">
                        <Link to="/login" className="login-button" >Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>
    )
}

export default CallToAction;