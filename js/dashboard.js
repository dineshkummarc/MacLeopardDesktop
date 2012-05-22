jQuery(document).ready(function(){
	jQuery('#dock').jqDock();
	jQuery('body').css({overflow: "hidden"});
	
	//initial hiding of dashboard + addition of 'closeZone'
	jQuery('#dashboardWrapper')
		.css({
			position: 'absolute',
			top: '0px',
			left: '0px',
			width: '100%',
			height: '100%',
			opacity: '0'
		})
		.hide()
		.append('<div id="closeZone"></div>');
		
	//Position, and hiding of 'CloseZone'
	jQuery('#closeZone')
		.css({
			position: 'absolute',
			top: '0px',
			left: '0px',
			width: '100%',
			height: '100%',
			opacity: '0.5',
			background: '#000'
		})
	
	//Launch Dashboard + initiation of 'closeZone'
	jQuery('#dashboardLaunch').click(function(){
		jQuery('#dashboardWrapper')
			.show()
			.animate({opacity: '1'}, 300);
	});
	
	//closeZone's job: closing the Dashboard
	jQuery('#closeZone').click(function(){
		jQuery('#dashboardWrapper')
			.animate({opacity: '0'}, 300)
			.hide(1);
	});
	
	//fadeout of dashboard and when a link is clicked within
	jQuery('#dashboardWrapper a').click(function(){
		jQuery('#dashboardWrapper').animate({opacity: '0'}, 300);
	});
	
	//draggables defenition
	jQuery('.widget').draggable();
	jQuery('.draggableWindow').draggable({
		handle: 'h1'
	})
});