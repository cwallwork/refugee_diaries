"use-strict"

$(document).ready(function(){
		console.log("ready");
		$(function() {
	    $('.banner').unslider({
	    	speed: 1000,
	    	dots: true,
	    	fluid: true
	    });
	  circle1();
	  circle2();
	  odo();
	});




});

function circle1(){
	var el = $('#circle1'),
    inited = false;
    el.circleProgress({
            startAngle: 180,
            value: 0,
            size: 200,
            thickness: 40,
            emptyFill: "rgba(0,52,75, 1)",
            fill: {color: 'rgba(0,186,246,1)'
            }
            });
	el.appear({ force_process: true });

	el.on('appear', function() {
  	if (!inited) {
   		el.circleProgress('value',0.88);
   		inited = true;
  	}
	});
}

function circle2(){
	var el = $('#circle2'),
    inited = false;
    el.circleProgress({
            startAngle: 180,
            value: 0,
            size: 200,
            thickness: 40,
            emptyFill: "rgba(0,52,75, 1)",
            fill: {color: 'rgba(0,186,246,1)'
            }
            });
	el.appear({ force_process: true });

	el.on('appear', function() {
  	if (!inited) {
   		el.circleProgress('value',0.81);
   		inited = true;
  	}
	});
}

function odo(){
	var el = $('#odo');
	el.appear({force_process: true});

	el.on('appear', function(){
		el.html('140000');
	})
}

window.odometerOptions = {
	theme: 'train-station',
	duration: 4000
}