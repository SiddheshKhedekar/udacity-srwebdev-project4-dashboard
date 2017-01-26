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

		// handles animations when list is hiding
		hide.classList.add('fadeOutDown');
		hide.classList.remove('fadeInUp');

		// handlesviewHide classes
		show.classList.remove('hidden');
		show.classList.remove('hidden');
		show.classList.remove('fadeOut');
		show.classList.add('fadeInDown');

		// hides from the dom after animation is over
		setTimeout(function(){
			hide.classList.add('hidden');
		}, 1000);
		
};
	