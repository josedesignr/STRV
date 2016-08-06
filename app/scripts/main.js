'use strict';


$( "#openMenu" ).click(function() {
	$( "#nav-mobile").addClass('menu-is-open');
});

$( "#closeMenu" ).click(function() {
	$( "#nav-mobile").removeClass('menu-is-open');
});