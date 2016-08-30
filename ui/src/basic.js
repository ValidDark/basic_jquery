import $ from 'jquery'

import './basic.css'

function change(box) {
	console.log("change has been called on " + box)
	console.log("current value:  " + $(box).css("background-color"))
	if ($(box).css("background-color") === 'rgb(255, 0, 0)')
	{
		$(box).css("background-color", 'rgb(0, 255, 0)');
	} else
		if ($(box).css("background-color") === 'rgb(0, 255, 0)')
	{
		$(box).css("background-color", 'rgb(0, 0, 255)');
	} else
		if ($(box).css("background-color") === 'rgb(0, 0, 255)')
	{
		$(box).css("background-color", 'rgb(255, 0, 0)');
	}
}

$(document).ready(function() {

  $('h1').css('color','red')

	$("#box1").css("background-color", 'rgb(255, 0, 0)');
	$("#box2").css("background-color", 'rgb(0, 255, 0)');
	$("#box3").css("background-color", 'rgb(0, 0, 255)');

	$("#b1").click(function() {
		change("#box1")
	})

	$("#b2").click(function() {
		change("#box2")
	})

	$("#b3").click(function() {
		change("#box3")
	})

	$("#b4").click(function() {
		$("#box1").css("background-color", 'rgb(255, 0, 0)');
		$("#box2").css("background-color", 'rgb(0, 255, 0)');
		$("#box3").css("background-color", 'rgb(0, 0, 255)');
	})
});
