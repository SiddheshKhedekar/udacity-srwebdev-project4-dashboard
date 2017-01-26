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

// imports lodash plugin
import _ from 'lodash';

class Charts extends Component {
		// sets up the state handler for which books to display
	constructor(props){
		super(props);


		this.state = {
			charts: this.props.charts
		};
		
	}
	i(){
		console.log(this.props.charts);
	}
	renderCharts(chartData){

		// sets up the variable to map each pressure array and generate our chart 
		const numbers = chartData.data.map(chartNumbers => chartNumbers.data);
		console.log(numbers);
		const lineChartID = "1";		
		let lineChartData = _.filter(chartData, name => name.includes(lineChartID));
		var lineChartNumbers = lineChartData.map(thisChartData => thisChartData.data);

		const barChartID = "2";		
		let barChartData = _.filter(chartData.data, data => data.name.includes(barChartID));
		var barChartNumbers = barChartData.data.map(chartNumbers => chartNumbers.data);

		// sets up the variable to map each humidity array and generate our chart 
		const name = chartData.name;
		const id = chartData.id;
		console.log("Numbers": numbers);
		console.log("Names": name);
		console.log("ID": id);
		return(
			<article className="card animated fadeInDown" key={name}>
				    <div className="card-block">
				        <h4 className="card-title animated fadeInDown">Forecast for {name}</h4>
				    </div>
				    <section className="animated fadeInUp mapContainer">
				    </section>
					<section className="charts">
						<div className="chartContainer first animated fadeInUp">
							<ChartLines chartData={lineChartNumbers} color="#FF5200" units="Kelvin"/>
						</div>
						<div className="chartContainer second animated fadeInUp">
							<ChartBars chartData={barChartNumbers} color="#00FF6A" units="%"/>
						</div>
					</section>		
			</article>
		);
	}
	
	render(){
	console.log(this.state.charts);
		return(
			<div>
			{this.props.charts.map(chartData => this.renderCharts(chartData))}
		</div>
			

		);
	}

}

// this is how it's usually written, to pass the state.charts object into this container
/* function mapStateToProps(state){
	return {charts: state.charts};
} */

// exactly how it sounds, it maps the state into the props method
// whatever returns, will show up as this.props inside of BookList
// this is a built in function of React
function mapStateToProps(state) {

	// this defines the state of this component
	return {
		// this is the KEY or what we want to call what is attached to this component's .props
		charts: 
		// this is the actual DATA of the KEY data within reducers.js, which contains the JSON
		state.charts

	};

};

// if we are adding a reducer, we use mapstate to props, which is the first argument of connect, the second argument can be left empty
// since there are no actions here
export default connect(mapStateToProps)(Charts);