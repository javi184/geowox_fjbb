import React from 'react'

import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'

import './filters.sass';

//Show the filters. First add the options to each select.
function Filters(props) {

    let listBeds = props.beds.map((be, i) => <option key={i+1}>{be}</option>);
    listBeds.unshift(<option key={0}>-ALL-</option>);
    let listBaths = props.baths.map((ba, i) => <option key={i+1}>{ba}</option>);
    listBaths.unshift(<option key={0}>-ALL-</option>);
    let listP_types = props.p_types.map((pt, i) => <option key={i+1}>{pt}</option>);
    listP_types.unshift(<option key={0}>-ALL-</option>);

    return (
        <div>
            <Alert variant={'success'}>Filters</Alert>
            <Form className="filters">
                <Form.Group className="filter" controlId="Form.property">
                    <Form.Label>Property type</Form.Label>
                    <Form.Control as="select" custom onChange={(e) => props.filtering("property type", e.target.value)}>
                        {listP_types}
                    </Form.Control>
                </Form.Group>
                <Form.Group className="filter" controlId="Form.beds">
                    <Form.Label>Bedrooms</Form.Label>
                    <Form.Control as="select" custom onChange={(e) => props.filtering("beds", e.target.value)}>
                        {listBeds}
                    </Form.Control>
                </Form.Group>
                <Form.Group className="filter" controlId="Form.baths">
                    <Form.Label>Bathrooms</Form.Label>
                    <Form.Control as="select" custom onChange={(e) => props.filtering("baths", e.target.value)}>
                        {listBaths}
                    </Form.Control>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Filters;