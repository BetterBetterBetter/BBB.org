Template.bundles.rendered = function() {
	/*
 $('#bundles').fullpage({
   verticalCentered: false,
   scrollOverflow: false,
    anchors: ['discounts', 'SEO', 'startup', 'analytics', 'freemoney', 'notifications'],
    normalScrollElements: '.modal-content'
 });
*/

}






Template.bundles.onRendered(function(){

	$(document).ready(function(){

		$('.material-tooltip').remove()
		$('#modal').modal();

			 var options = [
      {selector: '#firstBundle', offset: 50, callback: function(el) {
      	if(!Session.get('firstBundle')){
 		
								$.each($('#firstBundle').find('.animator'), function(i, el){
									
						    setTimeout(function(){
						     
						     var anim = $(el).data('animation');
						     $(el).addClass('animated').addClass(anim);

						    },( i * 500 ));

								});


        Session.set('firstBundle', true)
      	}
      } },
      {selector: '#secondBundle', offset: 50, callback: function(el) {
      	if(!Session.get('secondBundle')){

								$.each($('#secondBundle').find('.animator'), function(i, el){

						    setTimeout(function(){
						     
						     var anim = $(el).data('animation');
						     $(el).addClass('animated').addClass(anim);

						    },( i * 500 ));

								});

        Session.set('secondBundle', true)
      	}
      } },
      {selector: '#thirdBundle', offset: 50, callback: function(el) {
      	if(!Session.get('thirdBundle')){

								$.each($('#thirdBundle').find('.animator'), function(i, el){

						    setTimeout(function(){
						     
						     var anim = $(el).data('animation');
						     $(el).addClass('animated').addClass(anim);

						    },( i * 500 ));

								});

        Session.set('thirdBundle', true)
      	}
      } },
      {selector: '#fourthBundle', offset: 50, callback: function(el) {
      	if(!Session.get('fourthBundle')){

								$.each($('#fourthBundle').find('.animator'), function(i, el){

						    setTimeout(function(){
						     
						     var anim = $(el).data('animation');
						     $(el).addClass('animated').addClass(anim);

						    },( i * 500 ));

								});

        Session.set('fourthBundle', true)
      	}
      } },
      {selector: '#fifthBundle', offset: 50, callback: function(el) {
      	if(!Session.get('fifthBundle')){

								$.each($('#fifthBundle').find('.animator'), function(i, el){

						    setTimeout(function(){
						     
						     var anim = $(el).data('animation');
						     $(el).addClass('animated').addClass(anim);

						    },( i * 500 ));

								});

        Session.set('fifthBundle', true)
      	}
      } },
      {selector: '#salesPage', offset: 50, callback: function(el) {
      	if(!Session.get('salesPage')){

								$.each($('#salesPage').find('.animator'), function(i, el){

						    setTimeout(function(){
						     
						     var anim = $(el).data('animation');
						     $(el).addClass('animated').addClass(anim);

						    },( i * 500 ));

								});

        Session.set('salesPage', true)
      	}
      } }
    ];
    Materialize.scrollFire(options);

		 setInterval(function(){
    Materialize.scrollFire(options);
		 },2222);

		});

});



Template.bundles.onCreated(function(){
		this.modalContent = new ReactiveVar('');
})



Template.bundles.helpers({
		modalContent: function(e,t){
		return Spacebars.SafeString(Template.instance().modalContent.get());
	}
})




Template.bundles.events({

	'click .longText': function(e,t){

		var title = '<h3>'+$(e.target).parents('.row').find('.card-title').html()+'</h3>';
		var content = $(e.target).parents('.longText')[0];
		if(content==undefined){
			content = $(e.target)[0];
		}
		if(title==undefined){
			title = '<h3>Description</h3>';
			var contentStr = title+content.outerHTML;
		}else{
			var contentStr = title+content.outerHTML;
		}

		contentStr = contentStr.replace(/class="*.*"/g,'');

		modalContent.set(contentStr);

		$('#modal').modal('open');
		
		console.log(modalContent.get())

	},

	'click .btn-floating.halfway-fab.waves-effect.waves-light.red': function(e,t){

		$('#contactButton').click();

	}

});