// =============================================================
// 
// render_functions.js
//  
// =============================================================
// creates the function to apply the outro animation to theview list when theview details are expanded
// 
// shared functions to manipulate view components

export default function listHide(containerHidden, containerShow, showSecond){
		
		var hide = document.querySelector(containerHidden);
		var show = document.querySelector(containerShow);
		var showSec = document.querySelector(showSecond);
		// handles animations when list is hsiding
		hide.classList.toggle('fadeOut');
		hide.classList.toggle('fadeInUp');

		// handlesviewHide classes
		show.classList.toggle('fadeOut');
		show.classList.toggle('hidden');
		setTimeout(function(){
			show.classList.toggle('fadeIn');
		}, 1000);
			hide.classList.toggle('hidden');

		
};
	