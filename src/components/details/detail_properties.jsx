import React from 'react'

import './details.sass';

//Show the detail of one marker.
function Detail_Droperties(props) {

    let url = `https://www.google.com/maps/embed/v1/view?
    key=AIzaSyBxX03eE9dRCE_ZTWsV-3REHaawZKzCcX4&
    center=${props.dir.lat},${props.dir.lon}
    &zoom=18
    &maptype=satellite`;

    console.log(url);

    return (
        <div>
            <br></br>
            <h2 className="cell">
                Address: <span className="value">{props.dir.address}</span>
            </h2>
            <h3 className="cell">
                Address type: <span className="value">{props.dir["property type"]}</span>
            </h3>
            <div className="row">
                <h3 className="cell">
                    Beds: <span className="value">{props.dir.beds}</span>
                </h3>
                <h3 className="cell">
                    Baths: <span className="value">{props.dir.baths}</span>
                </h3>
            </div>
            <div className="row">
                <h4 className="cell">
                    SQM: <span className="value">{props.dir.sqm} m2</span>
                </h4>
                <h4 className="cell">
                    Price: <span className="value">{props.dir.price} €</span>
                </h4>
            </div>
            <div className="streetview">
                <iframe
                    title="View"
                    width="400"
                    height="300"
                    src={url}>
                </iframe>
            </div>
        </div>
    )
}

export default Detail_Droperties;