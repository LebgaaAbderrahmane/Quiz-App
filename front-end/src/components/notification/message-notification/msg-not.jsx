import "./msg-not.css";

function MsgNot({image,username,msg}) {

    return (
        <div className="message-notif">
            <div className="left-div">
                <img src={"/"+image} />
                <div className="text">
                    <p className="username" >{username}</p>
                    <p className="message" >{msg}</p>
                </div>
            </div>
            <i className='bx bx-dots-vertical-rounded'></i>
        </div>
    )
}

export default MsgNot;