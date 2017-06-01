import { Meteor } from 'meteor/meteor';






Meteor.startup(function(){









	Meteor.settings.contactForm = {
	  emailTo: 'jeremy@betterbetterbetter.org',
	  emailSubject: function (params) {
	    'Message from ' + params.name + ' via BBB.org contact form'
	  }
	};




	Meteor.methods({
	  sendEmail: function(data) {
	    check(data, ContactForm.simpleSchema());

	    var text = data.name + " - "
	    + data.email + "\n\n\n"
	    + data.message;

	    this.unblock();

	    Email.send({
	      to: Meteor.settings.contactForm.emailTo,
	      from: data.email,
	      subject: Meteor.settings.contactForm.emailSubject(data),
	      text: text
	    });


		    var created = new Date();

		  ContactForm.insert({
		   name: data.name,
		   email: data.email,
		   message: data.message, 
		   createdAt: created
		  });

	  },
	  insertContact: function(name,email,message){

			 if(!createdAt){
		    var created = new Date();
		  }else{
		    var created = createdAt;
		  }

		  ContactForm.insert({
		   name: name,
		   email: email,
		   message: message, 
		   createdAt: created
		  });

			}



	});









  Meteor.publish("contactForm", function(){
   return ContactForm.find({}, {
    sort: {createdAt: -1}
   });
  });

  Meteor.publish("findService", function(){
   return FindService.find({}, {
    sort: {createdAt: -1}
   });
  });


});




















