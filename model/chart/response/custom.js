$(function() {
	$.JResponsive({
		defaultMenuObj: "#nav",
		pannelStyle: "style1",
		res_langSwitch: false
	});

	$("#nav").JResMenu({
		view: 'horizontal',
		action: 'click'
	})
 })