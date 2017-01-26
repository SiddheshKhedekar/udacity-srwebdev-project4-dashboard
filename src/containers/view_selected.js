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

		var viewDetails = document.querySelector('.viewDetails');
		var viewList = document.querySelector('.viewList');
		var postReview = document.querySelector('#postReview');
		var reviewPost = document.querySelector('#reviewPost');
		viewDetails.classList.remove('fadeInDown');
		viewDetails.classList.add('fadeOut');
		viewDetails.classList.add('heightHidden');
		setTimeout(function(){
			viewDetails.classList.add('hidden');
		}, 1000);
		
		// handles views for the view list
		viewList.classList.remove('fadeOutDown');
		viewList.classList.remove('hidden');
		viewList.classList.add('fadeInUp');
		
		// handles views for the postReview
		postReview.classList.add('hidden');
		postReview.classList.remove('fadeInUp');

		// handles views for the reviewPost
		reviewPost.classList.add('hidden');
		reviewPost.classList.remove('fadeInUp');
	}
	render(){

		if (!this.props.view){
			return (
			
				<div></div>

			);
		}
		
		return (
		<div className="col-md-12 viewDetails animated fadeInDown">
			
			<article className="card">

			    <img className="img-fluid" src="http://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" alt="Card image cap" />

			    <div className="card-block">

			        <div className="col-md-12 viewTitle">

                		<h1 className="h1-responsive">{this.props.view.name} 
                		</h1>

            		</div>

            		<div className="detailContainer">
						{this.props.view.component}

						<div className="starRating">
						</div>
						<div className="reviewContainer"> 
							<h2>Reviews</h2>
							<div id="postReview" className="hidden animated">
							</div>
						</div>
						<div className="detailBottom first">

							<span className="viewHours">Hours of operation: <small></small></span>

							<span className="viewAddress">Address: <small>{this.props.view.details}</small></span>

						</div>

						<div className="detailBottom">

							<span className="viewPrice"><small>avarage</small></span>

						    <button className="btn btn-primary" onClick={() => this.viewHide()}>Return to selection</button>



						</div>

					</div>

			    </div>

			</article>

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