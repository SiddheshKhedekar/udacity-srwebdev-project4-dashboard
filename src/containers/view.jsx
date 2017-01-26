// =============================================================
// 
// view_list.js
//  
// =============================================================


import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import selectView from '../actions/select_view'

// imports lodash plugin
import _ from 'lodash';

import listHide from '../components/render_functions.js'

class View extends Component {
	// sets up the state handler for which books to display
	constructor(props){
		super(props);

		this.state = {
			searchTerm:'',
			currentlySelected: this.props.views
		};
		
		// binds the search input
		this.searchInputChange = this.searchInputChange.bind(this);
	}
	// handles the search bar setting of state
	searchInputChange(event){

		// creates 
		let searchFilter = _.filter(this.props.views, view => view.name.includes(event.target.value.toLowerCase()));

		// sets the state based on filter
		this.setState({
			searchTerm: event.target.value,
			currentlySelected: searchFilter
		});
	}
	// handles the category select setting of state
	categoryFilterChange(event){

		const categoryFilterInit = _.filter(this.props.views,view => view.filter.includes("1"||"2"||"3"));
		let categoryFilter = _.filter(this.props.views,view => view.filter.includes(event.target.value));

		if (categoryFilter === "0"){
			return categoryFilter =  categoryFilterInit;
		}
		else if (categoryFilter === !"0"){
			return categoryFilter;
		}
		this.setState({
			currentlySelected: categoryFilter
		});
	}

	renderList() {

		return this.state.currentlySelected.map((view) => {

			return (
			<article id={view.name} className="viewCard card col-md-12"
				key={view.name} 
			>
			<div className={view.name}>{view.component}</div>

		    <div className="card-block">
				<h4 className="card-title">
				<br/>
				<small> </small></h4>
		        <p className="card-text">{view.description}</p>
			        <a href="#" className="btn btn-primaryviewOpen"
					onClick={() => {this.props.selectView(view); listHide('.viewList', '.viewDetails');}}
			        >
			        Learn More
			        </a>
		        </div>
			</article>
			);
		});
	}


	// this sets up the component for our booklist's HTML
	render() {

		//DONT FORGET TO RETURN HERE, JUST SPENT AN HOUR DEBUGGING THIS AREA
		return (
			<section className="viewList animated fadeInUp col-md-12">
				<div className="col-md-12 viewDetails intro card">
		            <h3 className="h3-responsive">Select a Dashboard Widget to get started</h3>
		            <div className="search-bar md-form col-md-12">
						<input 
							id="searchBar"
							className="form-control"
							type="text"
							value={this.state.searchTerm}
							onChange={event => this.searchInputChange(event)}
							autofocus
							placeholder="Filter Widgets by title"
						 />
					 </div>
				</div>
				{this.renderList()}
			</section>
		);
	}

};

// exactly how it sounds, it maps the state into the props method
// whatever returns, will show up as this.props inside of BookList
// this is a built in function of React
function mapStateToProps(state) {

	// this defines the state of this component
	return {
		// this is the KEY or what we want to call what is attached to this component's .props
		views: 
		// this is the actual DATA of the KEY books within reducers.js, which contains the JSON
		state.views

	};

};

// creates the function to join the action creator with the BookList component, to update the app's state
// anything returned on this function, will end up as .props on the BookList container
function mapDispatchToProps(dispatch) {

	// Whenever selectBook is called, the result should be passed to all of our reducers
	// returns the react function, joining selectBook (the action Creator) to the key : selectBook
	return bindActionCreators({ 

		// this is the KEY the function selectBook is bound to
		// thanks to this key, the property from the action creator gets passed on to this.book
		selectView: 

		// this is the actual selectBook function
		selectView },

		// this is the argument
		// 
		// this actually BINDS the arguments above (selectBook) to all our reducers. If this function is called, 
		// its passed to all the reducers, changing their state if needed
		dispatch)

}

// this connects the two functions in this container together when exported
// connect takes a function, and a component (class only), and produces a container
// a container is again a component that connects react with the redux state
// 
// binds the original reducer state change and action creators to the BookList component
// 
// essentially this promotes BookList from a component to a container - react needs to know 
// about this new component selection method, selectBook.
export default connect(mapStateToProps, mapDispatchToProps) (View);