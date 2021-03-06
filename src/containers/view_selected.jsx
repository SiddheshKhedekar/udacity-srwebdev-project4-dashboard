// =============================================================
// 
// 	view_detail.js
//
// =============================================================

import React, { Component } from 'react';


import { connect } from 'react-redux';

import Map from './map/map';

class ViewSelected extends Component {

	// creates the function to apply the outro animation to the view list when the view details are expanded
	viewHide(){

		var viewDetails = document.querySelector('.detailCard');
		var viewList = document.querySelector('.viewList');


		setTimeout(function(){
			location.reload();
			viewDetails.classList.add('fadeOut');
		}, 100);
		
		// handles views for the view list
		viewList.classList.remove('fadeInUp');
		viewList.classList.remove('hidden');
		viewList.classList.add('fadeIn');
		
	}
	render(){

		if (!this.props.view){
			return (
			
				<div></div>

			);
		}
		
		return (
		<div id="viewDetails" className="col-md-12 viewDetails detailCard fadeInDown animated card">
			
			<section className="">


			    <div className="card-block">
			    	<div className="widgetTitle"> 
						<h2>{this.props.view.name}</h2>
						<div id="componentDetails" className="animated">
						</div>
					</div>
					<div className=""></div>
            		<div className="componentContainer" id={this.props.view.name}>
						{this.props.view.component}

						
						</div>
						


						    <button className="btn btn-primary" onClick={() => this.viewHide()}>Return to selection</button>


					</div>

			    

			</section>
			</div>
		);
	}
	
}

// for more on how this works, refer to book_list.js
function mapStateToProps(state){
	
	// again, whatever we return from here is usable by the BookDetails class, under props
	return {
		
		view: state.activeView

	};

}

// connects the activeBook reducer to this component, making it a container by definition
export default connect (mapStateToProps) (ViewSelected);