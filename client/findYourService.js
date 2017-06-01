
Template.findYourService.onRendered(function(){

 $('.material-tooltip').remove()


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
		   transitionSpeed: 30000,
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
		   transitionSpeed: 30000,
		   loop: true
		  }
		 }
		});



AutoForm.setDefaultTemplate('materialize');

 
  $('#typingService').typeIt({
      speed: 5,
      autoStart: true,
      breakLines: true,
      html: true,
      callback: function() {
       $('#typingService').addClass('top');
       $('.form-group:nth-child(1)').fadeIn(1500);

      }
    })
   .tiType('Let\'s talk tactics.')
   .tiPause(2)
   .tiDelete()
   .tiType('<span class="small">Marketing tactics are </span><span class="small underline">immediate actions</span><span class="small"> that you can take to grow your business.</span>')
   .tiPause(4)
   .tiDelete()
   .tiType('<span class="small">This app will walk you through a series of questions to determine what the best action is for you and your business at </span><span class="small underline">this exact moment.</span>')
   .tiPause(4)
   .tiDelete()
   .tiType('Do your sell services or products?');

 
});


Template.findYourService.events({

 

});