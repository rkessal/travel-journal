import React from "react"
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Card = (props) => {


    return (
        <div className="card">
            <div className="card--img">
                <img src={props.card.imageUrl}/>
            </div>
            <div className="card--desc">
                <section className="card--desc-section">
                    <span className="card--desc--icon"><LocationOnIcon fontSize="extra-small"/></span>
                    <div className="card--desc--country">{props.card.location}</div>
                    <a href={props.card.googleMapsUrl} className="card--desc--map">View on Google Maps</a>
                </section>
                <h2 className="card--desc--title">{props.card.title}</h2>
                <div className="card--desc--date">
                    <span className="date-start">{props.card.startDate}</span> - <span className="date-end">{props.card.endDate}</span>
                    </div>
                <p className="card--desc--text">{props.card.description}</p>    
            </div>
        </div>

    )
}

export default Card