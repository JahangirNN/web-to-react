import React from "react";

const SoloCard = ({title = "Card title", src = "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                   text ="None", button="Go somewhere"}) => (
    <div className="card" style={{width: "18rem"}}>
        <img
            src={src}
            className="card-img-top"
            alt="..."
        />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                {text}
            </p>
            <a href="#" className="btn btn-success">{button}</a>
        </div>
    </div>
)



export default SoloCard;