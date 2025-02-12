import "./feature.css"
function Feature({ image, title, text, action }) {


    return (
        <div className="feature">
            <div className="image">
                <i className={image}></i>
            </div>
            <h3>{title}</h3>
            <p className="text" >{text}</p>
            <div className="action">
                <p>{action} <i className="bx bx-chevron-right left"></i></p>
            </div>
        </div>
    )
}

export default Feature;