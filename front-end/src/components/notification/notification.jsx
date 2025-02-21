import { useState } from "react";
import MsgNot from "./message-notification/msg-not";
import "./notification.css";
function Notification() {
    const [notif, setNotif] = useState("contact");
    const [showBar, setShowBar] = useState(true);

    return (
        <div className="notification-container" style={{transform: !showBar ? "translateX(300px)" :"translateX(0)"  }}  >
            {/* <div className="open-close" onClick={()=>{
                setShowBar(!showBar);
            }} >
                <i className='bx bx-chevron-right' style={{transform: !showBar ? "rotate(180deg)" : "rotate(0)"}} ></i>
            </div> */}
            <input type="text" placeholder="Search" />
            <div className="notif-type">
                <button className={notif === "contact" ? "notif-selected" : ""} onClick={() => { setNotif("contact") }}  >Contacts</button>
                <button className={notif === "activity" ? "notif-selected" : ""} onClick={() => { setNotif("activity") }} >Activity</button>
                <button className={notif === "class" ? "notif-selected" : ""} onClick={() => { setNotif("class") }} >Classes</button>
            </div>
            <div className="notification">
                <MsgNot image="person.png" username="Username" msg="3 new massages" />
                <MsgNot image="person.png" username="Username" msg="1 new message" />
                <MsgNot image="person.png" username="Username" msg="2/11/2025" />
            </div>
        </div>
    )
}

export default Notification;