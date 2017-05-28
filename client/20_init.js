
Meteor.startup(function() {

$(document).ready(function(){



	$('#typing').typeIt({
     speed: 75,
     autoStart: true,
     breakLines: true,
     html: true,
     callback: function() {
     	$('#typingHeader').fadeOut(1500);
     	setTimeout(function(){
     		$('#logoHeader').removeClass('scale-out').fadeIn(250).addClass('scale-in');

     		var logoDraw = new Vivus('BBB_logo', {
    				type: 'oneByOne',
    				duration: 500,
    				start:'autostart',
    				animTimingFunction: Vivus.EASE,
    				function() {
								    var x = document.querySelectorAll("svg path"); 
								  x = [].slice.call(x);
								    x.forEach(function(a) {
								      //a.style.fill = "#fff"; 
								    });
								}
     	});
     		
     		setTimeout(function(){
     			$('#botLeftPop').removeClass('scale-out').addClass('scale-in');
     			setTimeout(function(){
     				$('#botRightPop').removeClass('scale-out').addClass('scale-in');
     			}, 1500);
     		}, 1500);

     	},1500); 
	 			}
	})
	.tiType('Better Marketing')
	.tiPause(500)
	.tiBreak()
	.tiType('<span class="small">is the foundation of growth.</span>')
	.tiPause(2000)
	.tiDelete()
	.tiType('Better Business')
	.tiPause(500)
	.tiBreak()
	.tiType('<span class="small">is what consumers demand.</span>')
	.tiPause(2000)
	.tiDelete()
	.tiType('A Better World')
	.tiPause(500)
	.tiBreak()
	.tiType('<span class="small">is what we\'re building.</span>')
	.tiPause(2000)
	.tiDelete()
	.tiType('<span class="small">We are in it for the </span><span class="small underline">triple win</span><span class="small">.</span>')
	.tiBreak()
	.tiPause(1000)
	.tiSettings({speed: 250})
	.tiType('Are you?')
	.tiPause(1000);


});//end document.loaded



});//end Meteor.startup