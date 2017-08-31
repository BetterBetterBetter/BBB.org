
Meteor.startup(function() {

 Session.set('welcomed', false)
 Session.set('firstBundle', false)
 Session.set('secondBundle', false)
 Session.set('thirdBundle', false)
 Session.set('fourthBundle', false)
 Session.set('fifthBundle', false)
 Session.set('salesPage', false)

	modalContent = new ReactiveVar();



AutoForm.setDefaultTemplate('materialize');



Template.home.events({

	'click .service' : function(e, template){
		var clickedId = $(e.target).parents('.card').attr('id');
		var servicesClickedArr = Session.get('servicesClickedArr');
		if(servicesClickedArr===undefined){
			servicesClickedArr = [];
		}
		if(!servicesClickedArr.includes(clickedId)){
			//this is a new service that has been clicked

			var servicesClickedArrUpdate = servicesClickedArr.concat([clickedId]);
			Session.set('servicesClickedArr',servicesClickedArrUpdate);	

			if(servicesClickedArrUpdate.length===2){
				var html = $("<span>Thanks for considering "+$(e.target).parents('.card').find('.card-content h5').html()+", it's one of our specialities.</span>");
				Materialize.toast(html, 4500 );
			}

			if((servicesClickedArrUpdate.length>5)&&(servicesClickedArrUpdate.length%2)){
				var html = $("<span>Thanks for your interest in "+$(e.target).parents('.card').find('.card-content h5').html()+"!</span>");
				Materialize.toast(html, 1500 );
				setTimeout(function(){
					var link = $("<span>Why not <a href='/find-your-service'>try our app</a> to find the service best for you?</span>")
					Materialize.toast(link, 4500 );
				},1200)
			}



		}
		 
	}//end service clicked

});








Template.layout.helpers({
	contactVisible: function(){
		var pathname = window.location.pathname;
		if(!pathname.includes('find-your-service')){
			return true;
		}else{
			return false;
		}
	}
})



Template.layout.onRendered(function(){


});






	Template.layout.onCreated(function(){

		this.subscribe('contactForm');
		this.subscribe('findService');


	});

	Template.layout.events({
	 'click #contactButton': function(e,t){
		 $('.tap-target').tapTarget('open');

		}
	});



});//end Meteor.startup



Template.home.onRendered(function(){

	// resize event
	$(window).resize(function(){
		resize()
	});// end resize

	function resize(){
		var vw = $(window).width();
		var vh = $('html').height();
		$('#stackChart').find('svg').attr('width', vw).attr('height', vh);
		$('.card.service').each(function(e){
			$(this).css('height', '')	
		})

		if(vw>599){
			var maxH = 0;
			$('.card.service').each(function(e){
				var currH = $(this).height()
				if(currH > maxH){
					maxH = currH
				}
			})
			$('.card.service').each(function(e){
				$(this).height(maxH)	
			})
		}
		

	}

	setTimeout(resize,2222)





		var granimInstance = new Granim({
		 element: '#heroBG',
		 name: 'radial-gradient',
		 direction: 'radial',
		 opacity: [.5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5],
		 isPausedWhenNotInView: true,
		 onGradientChange: function(colorDetails) {
		  //console.log('Granim: change');
		  //console.log(colorDetails);
		  if(colorDetails.activeState==="default-state"&&colorDetails.isLooping===true){
		  	 granimInstance.changeState('spiral');
		  }
		 },
		 onStart: function() {
		    // console.log('Granim: onStart');
		 },
		 onEnd: function() {
		    // console.log('Granim: onEnd');
		 },
		 states : {
		  "spiral": {
		   gradients: [
		    ['#aa0000','#330033','#b7b512', '#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000'],  
		    ['#330033','#b7b512','#aa0000', '#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033'],  
		    ['#b7b512','#aa0000','#330033', '#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512']
		   ],
		   transitionSpeed: 3000,
		   loop: true
		  },
		  "default-state": {
		   gradients: [
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033'],  
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#aa0000'],  
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#aa0000','#330033'],
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#aa0000', '#330033','#b7b512'],  
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#aa0000', '#330033', '#b7b512','#aa0000'],  
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#aa0000','#330033', '#b7b512', '#aa0000','#330033'],  
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512'],  
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000'],  
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033'],  
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512'],  
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000'],  
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#aa0000','#330033', '#330033', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033'],  
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#aa0000', '#330033','#330033', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512'],  
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#aa0000', '#330033', '#330033','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000'],  
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#aa0000','#330033', '#330033', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033'],  
		    ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#aa0000', '#330033','#330033', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512'],  
		    ['#330033','#330033','#330033', '#aa0000', '#330033', '#330033','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000'],
		    ['#330033','#330033','#330033', '#330033', '#330033', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033'],
		    ['#330033','#330033','#330033', '#330033', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512'],
		    ['#330033','#330033','#330033', '#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000']
		   ],
		   transitionSpeed: 3000,
		   loop: true
		  }
		 }
		});














		 
			$('#typing').typeIt({
		     speed: 15,
		     autoStart: true,
		     breakLines: true,
		     html: true,
		     callback: function() {
		     	$('#typingHeader').fadeOut(1500);
		     	setTimeout(function(){
		     		$('#logoHeader').removeClass('scale-out').fadeIn(250).addClass('scale-in');
		     		$('#BBB_logo').removeClass('scale-out').addClass('scale-in');


		     		var logoDraw = new Vivus('BBB_logo', {
		    				type: 'delayed',
		    				duration: 300,
		    				delay: 250,
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
		     			}, 3000);
		     		}, 3000);

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



































function confetti (){
		var windowWidth = $(window).width();
		var documentHeight = $(document).height();

		var width = windowWidth,
		    height = documentHeight,
		    padding = 1.5, // separation between same-color nodes
		    clusterPadding = 6, // separation between different-color nodes
		    maxRadius = 120;

		var n = 560, // total number of nodes
		    m = 96; // number of distinct clusters

		var color = d3.scale.ordinal()
      .domain(d3.range(m))
      .range(["#aa0000", "#330033" , "#b7b512"]);

		//var color = d3.scale.category20b().domain(d3.range(m));

		// The largest node for each cluster.
		var clusters = new Array(m);

		var nodes = d3.range(n).map(function() {
		  var i = Math.floor(Math.random() * m),
		      r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,
		      d = {
		        cluster: i,
		        radius: r,
		        x: Math.cos(i / m * 2 * Math.PI) * 200 + width / 2 + Math.random(),
		        y: Math.sin(i / m * 2 * Math.PI) * 200 + height / 2 + Math.random()
		      };
		  if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
		  return d;
		});

		var force = d3.layout.force()
		    .nodes(nodes)
		    .size([width, height])
		    .gravity(.005)
		    .charge(1)
		    .on("tick", tick)
		    .start();

		var svg = d3.select("#stackChart").append("svg")
		    .attr("width", width)
		    .attr("height", height);

		var node = svg.selectAll("circle")
		    .data(nodes)
		  .enter().append("circle")
		    .style("fill", function(d) { return color(d.cluster); })
		    .call(force.drag);

		node.transition()
		    .duration(750)
		    .delay(function(d, i) { return i * 5; })
		    .attrTween("r", function(d) {
		      var i = d3.interpolate(0, d.radius);
		      return function(t) { return d.radius = i(t); };
		    });

		function tick(e) {
		  node
		      .each(cluster(10 * e.alpha * e.alpha))
		      .each(collide(.5))
		      .attr("cx", function(d) { return d.x; })
		      .attr("cy", function(d) { return d.y; });
		}

		// Move d to be adjacent to the cluster node.
		function cluster(alpha) {
		  return function(d) {
		    var cluster = clusters[d.cluster];
		    if (cluster === d) return;
		    var x = d.x - cluster.x,
		        y = d.y - cluster.y,
		        l = Math.sqrt(x * x + y * y),
		        r = d.radius + cluster.radius;
		    if (l != r) {
		      l = (l - r) / l * alpha;
		      d.x -= x *= l;
		      d.y -= y *= l;
		      cluster.x += x;
		      cluster.y += y;
		    }
		  };
		}

		// Resolves collisions between d and all other circles.
		function collide(alpha) {
		  var quadtree = d3.geom.quadtree(nodes);
		  return function(d) {
		    var r = d.radius + maxRadius + Math.max(padding, clusterPadding),
		        nx1 = d.x - r,
		        nx2 = d.x + r,
		        ny1 = d.y - r,
		        ny2 = d.y + r;
		    quadtree.visit(function(quad, x1, y1, x2, y2) {
		      if (quad.point && (quad.point !== d)) {
		        var x = d.x - quad.point.x,
		            y = d.y - quad.point.y,
		            l = Math.sqrt(x * x + y * y),
		            r = d.radius + quad.point.radius + (d.cluster === quad.point.cluster ? padding : clusterPadding);
		        if (l < r) {
		          l = (l - r) / l * alpha;
		          d.x -= x *= l;
		          d.y -= y *= l;
		          quad.point.x += x;
		          quad.point.y += y;
		        }
		      }
		      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
		    });
		  };
		}
}



 $(document).ready(function(){
		 //Materialize init  
   $('ul.tabs').tabs();
		 $('.carousel').carousel();
   $('.scrollspy').scrollSpy();


		 var options = [
      {selector: '#index-banner', offset: 50, callback: function(el) {
      	$('#contactButton').css('opacity', 0);
      	if(!Session.get('welcomed')){
        Materialize.toast("Welcome!", 2500 );
        Session.set('welcomed', true)
      	}
      } },
      {selector: '#intro', offset: 250, callback: function(el) {
        
        $('#contactButton').css('opacity', 1);
      	 Materialize.toast("It's great to have you here!", 555 );

      	 confetti();

      } }
    ];
    Materialize.scrollFire(options);

		 setInterval(function(){
    Materialize.scrollFire(options);
		 },2222);

			resize()
	});

});//end onRender home

Template.contactFormPage.onRendered(function(){
	 $('.material-tooltip').remove()
});

Template.sales.events({

	'click #notificationButton':function(e,t){

			Push.create("Thanks!", {
    body: "You'll be the first to know if we have a sale.",
    icon: '/favicon.ico',
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
			});

			$(e.target).removeClass('animator').removeClass('fadeInUp').removeClass('pulse').removeClass('animated').delay(2000).addClass('scale-out');
			$('#salesPage').append('<h5 class="noSales">No additional sales at this time.</h5>');

	}
});

Template.nav.onRendered(function(){
		$(document).ready(function(){
			$(".button-collapse").sideNav();
		});
});
Template.nav.events({

	'click i, click a': function(){

		$('#sidenav-overlay').each(function(){

			$(this).remove();

		});
	}
});


Template.modal.helpers({
		modalContent: function(e,t){
			if(modalContent.get()==undefined){
				return Spacebars.SafeString('<p></p>');
			}else{
				return Spacebars.SafeString(modalContent.get());
			}
	}
})