// =============================================================
// 
// 	nav.js
//
// =============================================================

import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import selectView from '../actions/select_view'

// imports lodash plugin
import _ from 'lodash';

import listHide from '../components/render_functions.js'

class Nav extends Component {
	constructor(props){
		super(props);

		this.state = {
			searchTerm:'',
			currentlySelected: this.props.views
		};
	}
	searchButtonPress(event){

		// creates 
		let searchFilter = _.filter(this.props.views, view => view.name.includes(event.target.id));

		// sets the state based on filter
		this.setState({
			currentlySelected: searchFilter
		});
		console.log(this.state.searchTerm);
		console.log(this.state.currentlySelected);
	}
  	selectChildView(view){
		return this.props.selectView(view);
  	}
  	renderViewLinks(){
  	return this.state.currentlySelected.map((view) => {
  		var iconClass;
  		if (view.id === "3"){
  			var iconClass = "fa fa-users fa-lg"
  		}
  		else {
  			var iconClass = "fa fa-globe fa-lg"
  		}
  		return (
			<div className="viewLink" key={view.name}>
						    <li className={view.name} onClick={() => {this.props.selectView(view); listHide('.viewList', '.viewDetails');}}>
			                  <a href="#">
			                  <i className={iconClass}></i> {view.name}
			                  </a>
			                </li>
			</div>
			);
		});
  	}


  render() {
    return (
    	<div>
    	<header>
		<nav className="navbar navbar-fixed-top navbar-dark">

		    <div className="container nav-container">

		        <div className="navbar-toggleable-xs" id="collapseEx2">
		            <h1 className="navbar-brand animated slideInDown">Dashboard - v0.7</h1>
		        </div>

		    </div>
		
		</nav>
		</header>
		<div id="sideMenu">


			<div className="nav-side-menu">
			    <h3 className="brand">Dashboard Widgets</h3>
			    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
			  
			        <div className="menu-list">
			  
			            <ul id="menu-content" className="menu-content collapse out">
							{this.renderViewLinks()}
			            </ul>
			     </div>
			</div>
		</div>
	</div>
    );
  }
}
// exactly how it sounds, it maps the state into the props method
// whatever returns, will show up as this.props inside of Class
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
export default connect(mapStateToProps, mapDispatchToProps) (Nav);