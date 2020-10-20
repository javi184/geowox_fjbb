import React from 'react';

import Details from '../../components/details/details'
import Filters from '../../components/filters/filters'
import Stats from '../../components/stats/stats'

import Alert from 'react-bootstrap/Alert'

import './main.sass';

import * as d3 from "d3-fetch";
import * as sample_data from "../../assets/sample_data.csv";

export class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            directions: [],
            directions_f: [],
            beds: [],
            baths: [],
            p_types: [],
            p_types_all: []
        };

        this.all = '-ALL-';
        this.f_beds = this.all;
        this.f_baths = this.all;
        this.f_ptype = this.all;

        this.filtering = this.filtering.bind(this);
    }

    //Create the list of markers to show depending of the filters.
    filtering(filter_name, value) {

        switch (filter_name) {
            case "property type":
                this.f_ptype = value;
                break;
            case "beds":
                this.f_beds = value;
                break;
            case "baths":
                this.f_baths = value;
                break;
            default:
                break;
        }

        let temp = this.state.directions;
        if (this.f_ptype !== this.all) temp = temp.filter(dir => dir["property type"] === this.f_ptype);
        if (this.f_beds !== this.all) temp = temp.filter(dir => dir["beds"] === this.f_beds);
        if (this.f_baths !== this.all) temp = temp.filter(dir => dir["baths"] === this.f_baths);

        this.setState({ directions_f: temp });
    }

    componentDidMount() {
        let component = this;
        d3.csv(sample_data).then(function (data) {

            let beds = new Set(), baths = new Set(), p_types = [];

            for (const iterator of data) {
                beds.add(iterator.beds);
                baths.add(iterator.baths);
                p_types.push(iterator["property type"]);
            }

            component.setState({
                directions: data,
                directions_f: data,
                beds: [...beds],
                baths: [...baths],
                p_types: [...new Set(p_types)],
                p_types_all: p_types
            });
        });
    }

    render() {

        const d = this.state.directions_f;

        return (
            <div className="main">
                <Alert variant={'primary'}>GEOWOX</Alert>
                <div className="top">
                    <div>
                        <Filters className="filters"
                            beds={this.state.beds}
                            baths={this.state.baths}
                            p_types={this.state.p_types}
                            filtering={this.filtering}>
                        </Filters>
                    </div>
                    <div>
                        <Stats className="stats" p_types_all={this.state.p_types_all} p_types={this.state.p_types}></Stats>
                    </div>
                </div>
                <div className="details">
                    <Details data={d}></Details>
                </div>

            </div>
        );
    }
}