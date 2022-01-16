// import React from "react"

export default function Cards(props){
    return(
        <section className="card">
            <div className="card-img-container">
                <img src={props.imageUrl}/>
            </div>
            <div className="card-info-container">
                <div className="card-location">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card-title">{props.title}</h1>
                <p className="travel-dates">{props.startDate}  -  {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </section>

    )
}