import "./side-bar.css";
import { Link } from "react-router-dom"

function SideBar() {


    return (
        <div className="side-bar-container" > 
            <div className="logo">
                <Link to="/home"><img src="/Quizly.png" alt="" width={100} /></Link>
            </div>
            <div className="elements">
                <Link to="/home" id="home" ><i className='bx bx-home-alt-2'></i>Home</Link>
                <Link to="#" ><i className='bx bx-compass'></i>Explore</Link>
                <Link to="#" ><i className='bx bx-plus-circle'></i>Create</Link>
                <Link to="#" ><i className='bx bx-message-rounded-minus'></i>Inbox</Link>
                <Link to="#" ><i className='bx bx-bookmark' ></i>Saved</Link>
                <Link to="#" ><i className='bx bx-cog' ></i>Settings</Link>
            </div>
            <div className="profile">
                <Link to="#" id="profile"><i className='bx bx-user' ></i>Profile</Link>
            </div>
        </div>
    )
}

export default SideBar;