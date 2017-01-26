// =============================================================
// 
// 	charts_list.js
//
// =============================================================

import React, { Component } from 'react';
import {connect} from 'react-redux';
import ChartLines from './components/chart_lines';
import ChartBars from './components/chart_bars';
import ChartSpots from './components/chart_spots';

class Charts extends Component {
	renderCharts(chartData){
		
		// this assigns a var to our chartData
		const chartName = chartData.city.name;

		// for our sparklines charts to work, we basically just need an array of numbers, which is what is passed into the temps const
		// after mapping the correct data
		// 
		// this basically grabs the chartData object, then maps out every child array with a function
		const numbers = chartData.list.map(chartData => 
			// this then grabs all the VALUES of the temp array, which contains the city's temperature for the next 5 days
			chartData.data);
		console.log(numbers);

		// sets up the variable to map each pressure array and generate our chart 
		const id = chartData.list.map(chartData => chartData.id);
		console.log(ids);

		// sets up the variable to map each humidity array and generate our chart 
		const name = chartData.list.map(chartData => chartData.name);
		console.log(name);

		/* this is the ES5 way of grabbing the data
		// sets up the variable to grab the .lon array from chartData
		const lon = chartData.city.coord.lon;

		// sets up the variable to grab the .lat array from chartData
		const lat = chartData.city.coord.lat;
		*/
	
		// this is the ES6 way of grabbing the lon / lat data
		const { lon, lat } = chartData.city.coord;

		return(
			<article className="card animated fadeInDown" key={cityName}>
				    <div className="card-block">
				        <h4 className="card-title animated fadeInDown">Forecast for {cityName}</h4>
				    </div>
				    <section className="animated fadeInUp mapContainer">
				    </section>
					<section className="charts">
						<div className="chartContainer first animated fadeInUp">
							<ChartLines chartData={temps} color="#FF5200" units="Kelvin"/>
						</div>
						<div className="chartContainer second animated fadeInUp">
							<ChartBars chartData={humidities} color="#00FF6A" units="%"/>
						</div>
						<div className="chartContainer third animated fadeInUp">
							<ChartSpots chartData={pressures} color="#FF6E00" units="%"/>
						</div>
					</section>		
			</article>
		);
	}
	
	render(){
		return(
			<div>
				{this.props.charts.map(this.renderCharts)}
		</div>
			

		);
	}

}

// this is how it's usually written, to pass the state.charts object into this container
/* function mapStateToProps(state){
	return {charts: state.charts};
} */

// we can also write it with EMC6 syntax
 function mapStateToProps({ charts }){

 	// this is how the function now looks
 	/*
	return { charts: charts }; */

	//this can be further condensed with ES6 like so:
	// because both the key and the value object have the same identifier
	return { charts };
}

// if we are adding a reducer, we use mapstate to props, which is the first argument of connect, the second argument can be left empty
// since there are no actions here
export default connect(mapStateToProps)(Charts);