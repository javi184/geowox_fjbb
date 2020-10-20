import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import Detail_Droperties from './detail_properties'
import Alert from 'react-bootstrap/Alert'

import './details.sass';

//Show the map and the detail of marker when is clicked.
export class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            makers: [],
            showingInfoWindow: false,  // Hides or shows the InfoWindow
            activeMarker: {},          // Shows the active marker upon click
            selectedPlace: {},
            dir: null,
            text: ''
        }
    }

    //Create the markers
    componentDidMount() {
        this.setState({
            makers: this.props.data.map((dir, index) => {
                return <Marker
                    key={index}
                    id={index}
                    title={dir.address}
                    data={dir}
                    position={{
                        lat: dir.lat,
                        lng: dir.lon
                    }}
                    onClick={this.onMarkerClick} />
            })
        });
    }

    componentDidUpdate(prevProps) {
        // Uso tipico (no olvides de comparar las props):
        if (this.props.data !== prevProps.data) {


            this.setState({
                makers: this.props.data.map((dir, index) => {
                    return <Marker
                        key={index}
                        id={index}
                        title={dir.address}
                        data={dir}
                        position={{
                            lat: dir.lat,
                            lng: dir.lon
                        }}
                        onClick={this.onMarkerClick} />
                })

            });
        }
    }

    //When a marker is cliked
    onMarkerClick = (props) => {
        this.setState({
            dir: props.data
        });
    };

    render() {

        let detail_Droperties = <p></p>;

        if (this.state.dir)
            detail_Droperties = <Detail_Droperties dir={this.state.dir}></Detail_Droperties>;

        return (
            <div id="details-container">

                <div className="details-container">
                    <div className="map">
                        <Map
                            google={this.props.google}
                            zoom={10}
                            style={{
                                width: '50%',
                                height: '70%'
                            }}
                            initialCenter={{
                                lat: 53.24,
                                lng: -6.2
                            }}
                        >
                            {this.state.makers}
                        </Map>
                    </div>
                    <div className="info">
                        <Alert variant={'success'}>Details</Alert>
                        {detail_Droperties}
                    </div>
                </div>
            </div >
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBxX03eE9dRCE_ZTWsV-3REHaawZKzCcX4'
})(Details);
