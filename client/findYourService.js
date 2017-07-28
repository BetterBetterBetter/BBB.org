function gradientMaker(){
	var initColorArr = [];
	var granimGradient = [];
	var questions = $('#findServiceForm').find('.row').length+1;

	for (let o = 0; o < questions; o++){

		granimGradient[o] =gradientIterate(o,questions);

	}
	return granimGradient;
}

function gradientIterate(o,questions){

		var colorArr = [];
		var granimGradient = [];
		var colorIndex = 1;
		var colorPush = '#330033';
		
		for (let k = 0; k < questions; k++){
				 colorArr.push('#330033');
			}

		for (let t = 0; t < o; t++){
			 colorArr.shift();
			 if(colorIndex===1){colorPush = '#330033'};
			 if(colorIndex===2){colorPush = '#aa0000'};
			 if(colorIndex===3){colorPush = '#b7b512'};

			 colorIndex++;
			 if(colorIndex===4){colorIndex = 1};

			 colorArr.push(colorPush);
		}
					 return colorArr;
}


function checkAssets (){
	var CRM = $('[value="CRM"]').is(':checked');
	Session.set('CRM', CRM);
	var EmailList = $('[value="EmailList"]').is(':checked');
	Session.set('EmailList', EmailList);
	var SalesFunnel = $('[value="SalesFunnel"]').is(':checked');
	Session.set('SalesFunnel', SalesFunnel);
	var SocialMedia = $('[value="SocialMedia"]').is(':checked');
	Session.set('SocialMedia', SocialMedia);
	var SalesPresentation = $('[value="SalesPresentation"]').is(':checked');
	Session.set('SalesPresentation', SalesPresentation);
	var Website = $('[value="Website"]').is(':checked');
	Session.set('Website', Website);
}




 function renderSlide(num, direction){

  var prev = num-1;
  var next = num+1;

   
   $('#findServiceForm .row:nth-child('+prev+')')
    .fadeOut(250).removeClass('currentSlide');
   $('.typingCont:nth-child('+prev+')').fadeOut(250);

   setTimeout(function(){

	   $('#findServiceForm .row:nth-child('+num+')')
	    .fadeIn(500).addClass('currentSlide');

				$('.typingCont:nth-child('+num+')').fadeIn(500);

				$('.typingCont:nth-child('+num+')').typeIt({
		   speed: 5,
		   breakLines: false,
		   deleteDelay: 5,
		   callback: function() {
		   }
		  });

  		$('#forward').removeClass('ready').removeClass('pulse').removeClass('waves-effect');

   }, 250);







 if($('.row:nth-child('+num+') .nouislider')[0]){

	  var slider = $('.row:nth-child('+num+') .nouislider')[0];
			var bottomRangeDisplay = $('.row:nth-child('+num+') .displayRange .bottomRange')[0];
			var topRangeDisplay = $('.row:nth-child('+num+') .displayRange .topRange')[0];

			slider.noUiSlider.on('update', function( values, handle ) {
				bottomRangeDisplay.value = Math.round(parseInt(values[0]));
				if(topRangeDisplay){
						topRangeDisplay.value = Math.round(parseInt(values[1]));
				}
			});

			bottomRangeDisplay.addEventListener('change', function(){
				currentValArr = slider.noUiSlider.get();
				slider.noUiSlider.set([this.value,currentValArr[1]]);
			});

			if(topRangeDisplay){
				topRangeDisplay.addEventListener('change', function(){
					currentValArr = slider.noUiSlider.get();
					slider.noUiSlider.set([currentValArr[0],this.value]);
				});
			}

			setTimeout(function(){
				$('#forward').addClass('ready').addClass('pulse').addClass('waves-effect');
			},300);


		}//end UiRows








  findYourServiceGranim.changeState('growing_'+next);

  if(num===15){
			checkAssets();
  }



 }//end renderSlide








Template.findYourService.helpers({

	CRM:function(){
		return Session.get('CRM');
	},
	EmailList:function(){
		return Session.get('EmailList');
	},
	SalesFunnel:function(){
		return Session.get('SalesFunnel');
	},
	SocialMedia:function(){
		return Session.get('SocialMedia');
	},
	Website:function(){
		return Session.set('Website');
	},
	SalesPresentation:function(){
		return Session.get('SalesPresentation');
	},
	hasCustomerDb:function(){
		var email = Session.get('EmailList');
		var CRM = Session.get('CRM');
		return (email||CRM);
	}
});



 




Template.findYourService.onRendered(function(){

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












	findYourServiceGranim = new Granim({
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



AutoForm.setDefaultTemplate('materialize');

 
  $('#typingService1').fadeIn(250).typeIt({
   speed: 75,
   breakLines: false,
   deleteDelay: 500,
   callback: function() {
    $('#typingService1').addClass('top');
    $('#findServiceForm .row:nth-child(1)').fadeIn(1500).addClass('currentSlide'); 

   }
  });






















 
});




Template.findYourService.events({

 'click .af-checkbox-group': function(e,t){
 	var nameOfQuestion = $(e.target).parents('[data-schema-key]').attr('data-schema-key');
  var anyBoxChecked = $('.af-checkbox-group[data-schema-key="'+nameOfQuestion+'"]').find('input').is(':checked');
  if(anyBoxChecked&&!$('#forward').hasClass('ready')){
   $('#forward').addClass('ready').addClass('pulse').addClass('waves-effect');
  }else if(!anyBoxChecked&&$('#forward').hasClass('ready')){
    $('#forward').removeClass('ready').removeClass('pulse').removeClass('waves-effect');
  }
  	checkAssets();
 },

  'click .af-radio-group label, click .af-radio-group input, click .numberInput, click textarea': function(e,t){

	  if(!$('#forward').hasClass('ready')){
	   $('#forward').addClass('ready').addClass('pulse').addClass('waves-effect');
	  }

 },

  'keyup #email': function(e,t){
  	var val = $('#email').val();
  	var emailReg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  	if(val.match(emailReg)){
		  if(!$('#forward').hasClass('ready')){
		   $('#forward').addClass('ready').addClass('pulse').addClass('waves-effect');
		  }
	 	}
 },

 'click #forward.ready': function(e,t){

  var currentSlide = Session.get('currentSlide');
  if(currentSlide===undefined){
   currentSlide = 1;
  }
  var nextSlide = currentSlide+1;
  Session.set('currentSlide', nextSlide);
  renderSlide(nextSlide, 'forward');

 }

});








/*

Template.findYourServiceTest.events({

 'click #findServiceForm [type="submit"], click #findServiceForm2 [type="submit"]': function(e,t){


			var serviceProduct = serviceProduct;
			var distribution = distribution;
			var returnBusiness = returnBusiness;
			var marginPerCustomer = marginPerCustomer;
			var preexistingBudget = preexistingBudget;
			var avgVolume = avgVolume;
			var newClients = newClients;
			var ageDemographic = ageDemographic;
			var idealAge = idealAge;
			var clientIncomeRange = clientIncomeRange;
			var idealIncome = idealIncome;
			var industry = industry;
			var sexFemale = sexFemale;
			var currentAssets = currentAssets;
			var totalInvestment = totalInvestment;
			var howSecure = howSecure;
			var totalMaintenance = totalMaintenance;
			var clientListQuality = clientListQuality;
			var clientListQuantity = clientListQuantity;
			var clientListConversion = clientListConversion;
			var usingLandingPages = usingLandingPages;
			var websiteTraffic = websiteTraffic;
			var organicTraffic = organicTraffic;
			var inorganicTraffic = inorganicTraffic;
			var websiteConversion = websiteConversion;
			var socialMediaPlatforms = socialMediaPlatforms;
			var	socialMediaReach = socialMediaReach;
			var socialMediaConversion = socialMediaConversion;
			var localPlatforms = localPlatforms;
			var leadsGenerated = leadsGenerated;
			var reputationGoogle = reputationGoogle;
			var reputationFacebook = reputationFacebook;
			var reputationYelp = reputationYelp;
			var reputationBing = reputationBing;
			var message = message;
			var email = email;

			//Meteor.call('insertFindService', serviceProduct,distribution,returnBusiness,marginPerCustomer,preexistingBudget,avgVolume,newClients,ageDemographic,idealAge,clientIncomeRange,idealIncome,industry,sexFemale,currentAssets,totalInvestment,howSecure,totalMaintenance,clientListQuality,clientListQuantity,clientListConversion,usingLandingPages,websiteTraffic,organicTraffic,inorganicTraffic,websiteConversion,socialMediaPlatforms,socialMediaReach,socialMediaConversion,localPlatforms,leadsGenerated,reputationGoogle,reputationFacebook,reputationYelp,reputationBing,message,email);

 	//Meteor.call('insertFindService','1','1',1,1,1,1,1,[{'1':1}],1,[{'1':1}],10000,1,1,true,1,1,1,true,1,1,true,1,1,1,1,true,1,1,true,1,1,1,1,1,'j@d.c');
 
 }

});

*/



