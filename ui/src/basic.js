import $ from 'jquery'

import './basic.css'

let n = 5

function change(box) {
	console.log("change has been called on " + box)
	console.log("current value:  " + $(box).css("background-color"))
	if ($(box).css("background-color") === 'rgb(255, 0, 0)')
	{
		$(box).css("background-color", 'rgb(0, 255, 0)');
		return true
	} else
		if ($(box).css("background-color") === 'rgb(0, 255, 0)')
	{
		$(box).css("background-color", 'rgb(0, 0, 255)');
		return true
	} else
		if ($(box).css("background-color") === 'rgb(0, 0, 255)')
	{
		$(box).css("background-color", 'rgb(255, 0, 0)');
		return true
	}
	  else
		  return false
}


function change2(rgb) {
		$("#box4").css("background-color", rgb);
		console.log("Trying to change to " + rgb)
	}


  function makeColorGradient(frequency1, frequency2, frequency3)
  {
       var red = (Math.sin(frequency1/10)+1)*100
       var grn = (Math.sin(frequency2/10)+1)*100
       var blu = (Math.sin(frequency3/10)+1)*100
       return 'rgb('+Math.floor(red)+', '+Math.floor(grn)+', '+Math.floor(blu)+')'
  }
 
 
 
$(document).ready(function() {

  $('h1').css('color','red')

	$("#box1").css("background-color", 'rgb(255, 0, 0)');
	$("#box2").css("background-color", 'rgb(0, 255, 0)');
	$("#box3").css("background-color", 'rgb(0, 0, 255)');

	$("#b1").click(function() {
		if(change("#box1"))
		{
			n++
			change2(makeColorGradient(n, n+10, n+20))
		}
	})

	$("#b2").click(function() {
		if(change("#box2"))
		{
			n++
			change2(makeColorGradient(n, n+10, n+20))
		}
	})

	$("#b3").click(function() {
		if(change("#box3"))
		{
			n++
			change2(makeColorGradient(n, n+10, n+20))
		}
	})

	$("#b4").click(function() {
		$("#box1").css("background-color", 'rgb(255, 0, 0)');
		$("#box2").css("background-color", 'rgb(0, 255, 0)');
		$("#box3").css("background-color", 'rgb(0, 0, 255)');
	})
});
