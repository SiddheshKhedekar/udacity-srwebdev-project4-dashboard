// =============================================================
// 
// 	nav.js
//
// =============================================================

import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import selectView from '../actions/select_view'

class Nav extends Component {
	constructor(props){
		super(props);

		this.state = {
			searchTerm:'',
			currentlySelected: this.props.views
		};
	}
  selectChildView(view){
		return this.props.selectView(view);
  }
  renderViewLinks(){
  	return this.state.currentlySelected.map((view) => {
  		return (
			<div className="viewLink" key={view.name}>
				<button onClick={() => this.selectChildView(view)}>{view.name}</button>
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
		            <h1 className="navbar-brand animated slideInDown">Dashboard - v0.5</h1>
		        </div>

		    </div>
		
		</nav>
		</header>
		<div id="sideMenu">


			<div className="nav-side-menu">
			    <div className="brand">Brand Logo</div>
			    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
			  
			        <div className="menu-list">
			  
			            <ul id="menu-content" className="menu-content collapse out">
			                <li>
			                  <a href="#" >
			                  <i className="fa fa-dashboard fa-lg"></i> Dashboard
			                  </a>
			                </li>
							
			                <li  data-toggle="collapse" data-target="#products" className="collapsed active">
			                  <a href="#"><i className="fa fa-gift fa-lg"></i> {this.renderViewLinks()} <span className="arrow"></span></a>
			                </li>
			                <ul className="sub-menu collapse" id="products">
			                    <li className="active"><a href="#">CSS3 Animation</a></li>
			                    <li><a href="#">General</a></li>
			                    <li><a href="#">Buttons</a></li>
			                    <li><a href="#">Tabs & Accordions</a></li>
			                    <li><a href="#">Typography</a></li>
			                    <li><a href="#">FontAwesome</a></li>
			                    <li><a href="#">Slider</a></li>
			                    <li><a href="#">Panels</a></li>
			                    <li><a href="#">Widgets</a></li>
			                    <li><a href="#">Bootstrap Model</a></li>
			                </ul>


			                <li data-toggle="collapse" data-target="#service" className="collapsed">
			                  <a href="#"><i className="fa fa-globe fa-lg"></i> Services <span className="arrow"></span></a>
			                </li>  
			                <ul className="sub-menu collapse" id="service">
			                  <li>New Service 1</li>
			                  <li>New Service 2</li>
			                  <li>New Service 3</li>
			                </ul>


			                <li data-toggle="collapse" data-target="#new" className="collapsed">
			                  <a href="#"><i className="fa fa-car fa-lg"></i> New <span className="arrow"></span></a>
			                </li>
			                <ul className="sub-menu collapse" id="new">
			                  <li>New New 1</li>
			                  <li>New New 2</li>
			                  <li>New New 3</li>
			                </ul>


			                 <li>
			                  <a href="#">
			                  <i className="fa fa-user fa-lg"></i> Profile
			                  </a>
			                  </li>

			                 <li>
			                  <a href="#">
			                  <i className="fa fa-users fa-lg"></i> Users
			                  </a>
			                </li>
			            </ul>
			     </div>
			</div>
		</div>
	</div>
    );
  }
}
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
export default connect(mapStateToProps, mapDispatchToProps) (Nav);