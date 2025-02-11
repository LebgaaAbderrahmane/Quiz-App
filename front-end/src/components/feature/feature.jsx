function Feature({image, title, text, action }){


    return(
        <div className="feature">
            <img src={image} />
            <h3>{title}</h3>
            <p>{text}</p>
            <p>{action}</p>
        </div>
    )
}

export default Feature;