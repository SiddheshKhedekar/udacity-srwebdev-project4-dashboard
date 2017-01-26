// =============================================================
// 
// 	reducer_books.js
//
// =============================================================
 
// more on reducers here : http://redux.js.org/docs/basics/Reducers.html
// in short, a reducer is a function that returns a piece of the application's state / model / data
// reducers produce the VALUE of our state
// good to keep in mind that each piece of the app should be named after the folder its in, to be concise
// 
// 
import React, { Component } from 'react';

import Map from '../containers/map/map';

// create the JS to hold the book data
function restaurantReducer() {
	
	// returns an array with our data
	return [

		{ image: <Map />, hours: '11:00 am - 10:00 pm', address: '1900 Crowfoot Crescent SE', category: 'oriental', title: 'pho dac biet', rating: '3', description: 'Order your favorite Vietnamese cousine, delivery available', price:'15', ldescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus mi arcu, in lobortis risus vehicula quis. Proin pellentesque turpis eget lectus tincidunt, ut ornare velit imperdiet. Duis finibus nunc eget ante cursus, sit amet feugiat augue viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis congue risus sem, varius mattis mi dictum sed. Nullam vitae iaculis odio, ac finibus odio. In laoreet a tellus quis gravida. Aliquam venenatis, velit aliquet euismod convallis, nisl sem ultrices mauris, sit amet gravida dui nunc a lectus.', 
			reviews:[{name:'Barry', date:'22/08/2016', rating: '4', comments: 'Excellent food quality, but the delivery was a little late. Would order again.', image:"male"}, {name:'Unknown', date:'02/01/2017', rating: '2', comments: 'Food quality was mediocre, and noodles were undercooked.'}]
		},
		{ image: '', hours: '12:00 pm - 12:00 am', address: '312 Shawnessy Blvd. NE', category: 'oriental', title: 'golden dragon', rating: '4', description: 'Order your favorite Chinese cousine, Pick up only', price:'20', ldescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus mi arcu, in lobortis risus vehicula quis. Proin pellentesque turpis eget lectus tincidunt, ut ornare velit imperdiet. Duis finibus nunc eget ante cursus, sit amet feugiat augue viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis congue risus sem, varius mattis mi dictum sed. Nullam vitae iaculis odio, ac finibus odio. In laoreet a tellus quis gravida. Aliquam venenatis, velit aliquet euismod convallis, nisl sem ultrices mauris, sit amet gravida dui nunc a lectus.', 
			reviews:[{name:'Tom', date:'12/02/2016', rating: '3', comments: 'Decent food quality, although the price is a little high.', image:"male"}, {name:'Jessica', date:'18/09/2016', rating: '5', comments: 'Excellent quality, delivery, and pricing, highly recommended.', image:"female"}]
		},
		{ image: '', hours: '7:00 am - 11:00 pm', address: '52 4th Street SW', category: 'fast food', title: 'fat burger', rating: '2', description: 'Call to order for delivery or pickup, best burgers in town', price:'10', ldescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus mi arcu, in lobortis risus vehicula quis. Proin pellentesque turpis eget lectus tincidunt, ut ornare velit imperdiet. Duis finibus nunc eget ante cursus, sit amet feugiat augue viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis congue risus sem, varius mattis mi dictum sed. Nullam vitae iaculis odio, ac finibus odio. In laoreet a tellus quis gravida. Aliquam venenatis, velit aliquet euismod convallis, nisl sem ultrices mauris, sit amet gravida dui nunc a lectus.',
			reviews:[{name:'Unknown', date:'11/04/2016', rating: '2', comments: 'Very unprofessional service, greasy food, suitable prices.'}, {name:'Connor', date:'05/08/2016', rating: '2', comments: 'Macdonalds quality food, would not recommend.', image:"male"}]
		 },
		{ image: '', hours: '8:00 am - 9:00 pm', address: '8219 16th Avenue NW', category: 'fast food', title: 'shake & fries', rating: '3', description: 'Best Shakes & Fries in the city, call today to order', price:'10', ldescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus mi arcu, in lobortis risus vehicula quis. Proin pellentesque turpis eget lectus tincidunt, ut ornare velit imperdiet. Duis finibus nunc eget ante cursus, sit amet feugiat augue viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis congue risus sem, varius mattis mi dictum sed. Nullam vitae iaculis odio, ac finibus odio. In laoreet a tellus quis gravida. Aliquam venenatis, velit aliquet euismod convallis, nisl sem ultrices mauris, sit amet gravida dui nunc a lectus.',
			reviews:[{name:'Tracy', date:'09/02/2016', rating: '3', comments: 'Decent food quality, suitable prices.', image:"female"}, {name:'Eli', date:'01/01/2017', rating: '3', comments: 'Great food quality, relatively high prices', image:"male"}]
		 },
		{ image: '', hours: '9:00 am - 1:00 am', address: '3322 Mckenzie Plaza SE', category: 'mexican', title: 'tacotime', rating: '2', description: 'Delicious mexican food, visit us today to satisfy your craving', price:'10', ldescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus mi arcu, in lobortis risus vehicula quis. Proin pellentesque turpis eget lectus tincidunt, ut ornare velit imperdiet. Duis finibus nunc eget ante cursus, sit amet feugiat augue viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis congue risus sem, varius mattis mi dictum sed. Nullam vitae iaculis odio, ac finibus odio. In laoreet a tellus quis gravida. Aliquam venenatis, velit aliquet euismod convallis, nisl sem ultrices mauris, sit amet gravida dui nunc a lectus.',
			reviews:[{name:'Barry', date:'22/08/2016', rating: '2', comments: 'Decent food quality, but the delivery was a little late. Would order again.', image:"male"}, {name:'Unknown', date:'02/01/2017', rating: '2', comments: 'Food quality was mediocre, and food was undercooked.'}]
		 },
		{ image: '', hours: '8:45 am - 10:00 pm', address: '928 17th Avenue SW', category: 'mexican', title: 'los chilitos taqueria', rating: '5', description: 'Winner of the 2016 most delicious Burrito competition', price:'15', ldescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus mi arcu, in lobortis risus vehicula quis. Proin pellentesque turpis eget lectus tincidunt, ut ornare velit imperdiet. Duis finibus nunc eget ante cursus, sit amet feugiat augue viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis congue risus sem, varius mattis mi dictum sed. Nullam vitae iaculis odio, ac finibus odio. In laoreet a tellus quis gravida. Aliquam venenatis, velit aliquet euismod convallis, nisl sem ultrices mauris, sit amet gravida dui nunc a lectus.',
			reviews:[{name:'Unknown', date:'11/04/2016', rating: '5', comments: 'Very professional service, amazing food, low prices.'}, {name:'Stan', date:'05/08/2016', rating: '5', comments: 'Great food, great service, 10/10.', image:"male"}]
		 },
		{ image: '', hours: '7:00 am - 11:00 pm', address: '1800 6th Street NW', category: 'indian', title: 'taj mahal', rating: '4', description: 'Kick-off your Indian meal by picking from a wide selection of', price:'25', ldescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus mi arcu, in lobortis risus vehicula quis. Proin pellentesque turpis eget lectus tincidunt, ut ornare velit imperdiet. Duis finibus nunc eget ante cursus, sit amet feugiat augue viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis congue risus sem, varius mattis mi dictum sed. Nullam vitae iaculis odio, ac finibus odio. In laoreet a tellus quis gravida. Aliquam venenatis, velit aliquet euismod convallis, nisl sem ultrices mauris, sit amet gravida dui nunc a lectus.',
			reviews:[{name:'Tommy', date:'12/02/2016', rating: '3', comments: 'Decent food quality, although the price is a little high.', image:"male"}, {name:'Jessica', date:'18/09/2016', rating: '5', comments: 'Excellent quality, delivery, and pricing, highly recommended.', image:"female"}]
		 },
		{ image: '', hours: '9:45 am - 10:30 pm', address: '1203 Center Street N', category: 'indian', title: 'khana khazana', rating: '3', description: 'View our Indian Cousine, our family deal is on special', price:'25', ldescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus mi arcu, in lobortis risus vehicula quis. Proin pellentesque turpis eget lectus tincidunt, ut ornare velit imperdiet. Duis finibus nunc eget ante cursus, sit amet feugiat augue viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis congue risus sem, varius mattis mi dictum sed. Nullam vitae iaculis odio, ac finibus odio. In laoreet a tellus quis gravida. Aliquam venenatis, velit aliquet euismod convallis, nisl sem ultrices mauris, sit amet gravida dui nunc a lectus.',
			reviews:[{name:'Barry', date:'22/08/2016', rating: '2', comments: 'Decent food quality, but the delivery was a little late. Would not order again.', image:"male"}, {name:'Unknown', date:'02/01/2017', rating: '4', comments: 'Food quality was high, and food was well cooked.'}]
		 },
		{ image: '', hours: '8:30 am - 9:45 pm', address: '102 Palisade Avenue SW', category: 'greek', title: 'broken plate', rating: '5', description: 'Taste Greece with our world-reknown greek dishes', price:'30', ldescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus mi arcu, in lobortis risus vehicula quis. Proin pellentesque turpis eget lectus tincidunt, ut ornare velit imperdiet. Duis finibus nunc eget ante cursus, sit amet feugiat augue viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis congue risus sem, varius mattis mi dictum sed. Nullam vitae iaculis odio, ac finibus odio. In laoreet a tellus quis gravida. Aliquam venenatis, velit aliquet euismod convallis, nisl sem ultrices mauris, sit amet gravida dui nunc a lectus.',
			reviews:[{name:'Stacy', date:'11/04/2016', rating: '5', comments: 'Very professional service, amazing food, suitable prices.', image:"female"}, {name:'Stan', date:'05/08/2016', rating: '5', comments: 'Great food, great service, highly recommended.', image:"male"}]
		 }
	
	];
};

export default restaurantReducer;