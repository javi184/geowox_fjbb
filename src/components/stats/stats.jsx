import React from 'react'

import Alert from 'react-bootstrap/Alert'

import './stats.sass';

//Show the pie chart
function Stats(props) {

    let data = {};
    let rgb = [];
    let Chart = require('chart.js');

    //Create the percents of the chart.
    for (const type of props.p_types) {
        data[type] = (props.p_types_all.filter(t => t === type).length / props.p_types_all.length * 100).toFixed(2);
        rgb.push('rgb(0, ' + (Math.floor(Math.random() * 150) + 100) + ', ' + (Math.floor(Math.random() * 200) + 150) + ')');
    }

    if (document.getElementById('pie_chart') != null) {
        
        var ctx = document.getElementById('pie_chart').getContext('2d');

        //Create the pie chart
        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    data: Object.values(data),
                    backgroundColor: rgb
                }],
            },
            options: {
                legend: {
                    display: true,
                    position: 'left'
                }
            }
        });
    }

    return (
        <div className="stats">
            <Alert variant={'success'}>Stats</Alert>
            <canvas id="pie_chart"></canvas>
        </div >
    )
}

export default Stats;