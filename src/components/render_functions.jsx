// =============================================================
// 
// render_functions.js
//  
// =============================================================
// creates the function to apply the outro animation to theview list when theview details are expanded
// 
// shared functions to manipulate view components

export default function listHide(containerHidden, containerShow){
		
		var hide = document.querySelector(containerHidden);
		var show = document.querySelector(containerShow);

		// handles animations when list is hsiding
		hide.classList.add('fadeOut');
		hide.classList.remove('fadeInUp');

		// handlesviewHide classes
		show.classList.remove('fadeOut');
		show.classList.remove('hidden');
		setTimeout(function(){
			show.classList.add('fadeIn');
		}, 1000);



			hide.classList.add('hidden');

		
};
	