

Template.craftYourStrategy.onRendered(function(){

 $('.material-tooltip').remove()

	gradientMaker();

 let color0 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033']
 let color1 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#aa0000']
 let color2 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#aa0000','#330033']
 let color3 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#aa0000', '#330033','#b7b512']
 let color4 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#aa0000', '#330033', '#b7b512','#aa0000']
 let color5 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#aa0000','#330033', '#b7b512', '#aa0000','#330033']
 let color6 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512']
 let color7 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000']
 let color8 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033']
 let color9 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512']
 let color10 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#330033','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000']
 let color11 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#330033', '#aa0000','#330033', '#330033', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033']
 let color12 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#330033', '#aa0000', '#330033','#330033', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512']
 let color13 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#330033','#aa0000', '#330033', '#330033','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000']
 let color14 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#330033', '#aa0000','#330033', '#330033', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033']
 let color15 = ['#330033','#330033','#330033', '#330033', '#330033', '#330033','#330033', '#aa0000', '#330033','#330033', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512']
 let color16 = ['#330033','#330033','#330033', '#aa0000', '#330033', '#330033','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000']
 let color17 = ['#330033','#330033','#330033', '#330033', '#330033', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033']
 let color18 = ['#330033','#330033','#330033', '#330033', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512']
 let color19 = ['#330033','#330033','#330033', '#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000']












	craftYourStrategyGranim = new Granim({
		 element: '#heroBG',
		 name: 'radial-gradient',
		 direction: 'top-bottom',
		 opacity: [.5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5],
		 isPausedWhenNotInView: true,
   defaultStateName: 'growing_1',
		 onGradientChange: function(colorDetails) {
		  //console.log('Granim: change');
		  //console.log(colorDetails);
		  if(colorDetails.activeState==="growing_38"&&colorDetails.isLooping===true){
		  	 findYourServiceGranim.changeState('final');
		  }
		 },
		 onStart: function() {
		    // console.log('Granim: onStart');
		 },
		 onEnd: function() {
		    // console.log('Granim: onEnd');
		 },
		 states : {
		  "final": {
		   gradients: [
		    ['#aa0000','#330033','#b7b512', '#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000'],  
		    ['#330033','#b7b512','#aa0000', '#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033'],  
		    ['#b7b512','#aa0000','#330033', '#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512']
		   ],
		   transitionSpeed: 500,
		   loop: true
		  },
    "growing_1": {
     gradients: [color0,color1],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_2": {
     gradients: [color1,color2],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_3": {
     gradients: [color2,color3],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_4": {
     gradients: [color3,color4],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_5": {
     gradients: [color4,color5],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_6": {
     gradients: [color5,color6],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_7": {
     gradients: [color6,color7],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_8": {
     gradients: [color7,color8],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_9": {
     gradients: [color8,color9],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_10": {
     gradients: [color9,color10],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_11": {
     gradients: [color10,color11],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_12": {
     gradients: [color11,color12],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_13": {
     gradients: [color12,color13],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_14": {
     gradients: [color13,color14],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_15": {
     gradients: [color14,color15],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_16": {
     gradients: [color15,color16],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_17": {
     gradients: [color16,color17],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_18": {
     gradients: [color17,color18],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_19": {
     gradients: [color18,color19],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_20": {
     gradients: [color0,color1],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_21": {
     gradients: [color1,color2],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_22": {
     gradients: [color2,color3],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_23": {
     gradients: [color3,color4],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_24": {
     gradients: [color4,color5],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_25": {
     gradients: [color5,color6],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_26": {
     gradients: [color6,color7],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_27": {
     gradients: [color7,color8],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_28": {
     gradients: [color8,color9],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_29": {
     gradients: [color9,color10],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_30": {
     gradients: [color10,color11],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_31": {
     gradients: [color11,color12],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_32": {
     gradients: [color12,color13],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_33": {
     gradients: [color13,color14],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_34": {
     gradients: [color14,color15],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_35": {
     gradients: [color15,color16],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_36": {
     gradients: [color16,color17],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_37": {
     gradients: [color17,color18],
     transitionSpeed: 3000,
     loop: true
    },
    "growing_38": {
     gradients: [color18,color19],
     transitionSpeed: 3000,
     loop: true
    }
   }
		});


  $('#typingService1').fadeIn(250).typeIt({
   speed: 5,
   breakLines: false,
   deleteDelay: 5,
   callback: function() {
    $('#typingService1').addClass('top');
    $('#findServiceForm .row:nth-child(1)').fadeIn(1500).addClass('currentSlide'); 

   }
  });





	}
);