import { Meteor } from 'meteor/meteor';






Meteor.startup(function(){


	Houston.add_collection(Meteor.users);
	Houston.add_collection(Houston._admins);


  smtp = {
    username: 'jeremy@betterbetterbetter.org',   // eg: server@gentlenode.com
    password: 'Qazsxdrewazx1',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.zoho.com',  // eg: mail.gandi.net
    port: 465
  }

  process.env.MAIL_URL = 'smtps://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;


			FindService.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc) {
        return true;
    }
			});




	Meteor.settings.contactForm = {
	  emailTo: 'jeremy@betterbetterbetter.org',
	  emailSubject: function (params) {
	    'Message from ' + params.name + ' via BBB.org contact form'
	  }
	};




	Meteor.methods({
	  sendEmail: function(data) {
	    //check(data, Schemas.ContactForm());
 
	    var text = data.name + " - "
	    + data.email + "\n\n\n"
	    + data.message;

	    this.unblock();
	    console.log(data);

	    var subject = data.name + ' via BBB.org contact form';

	    Email.send({
	      to: 'jeremy@betterbetterbetter.org',
	      from: 'jeremy@betterbetterbetter.org',
	      subject: subject,
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

			},
			insertFindService: function(serviceProduct,clientTypes,distribution,returnBusiness,marginPerCustomer,preexistingBudget,avgVolume,newClients,ageDemographic,idealAge,clientIncomeRange,idealIncome,industry,sexFemale,currentAssets,totalInvestment,howSecure,totalMaintenance,clientListQuality,clientListQuantity,clientListConversion,usingLandingPages,websiteTraffic,organicTraffic,inorganicTraffic,websiteConversion,socialMediaPlatforms,socialMediaReach,socialMediaConversion,localPlatforms,leadsGenerated,reputationGoogle,reputationFacebook,reputationYelp,reputationBing,message,email){

		    var created = new Date();

		  return FindService.insert({
					serviceProduct: serviceProduct,
					clientTypes: clientTypes,
					distribution: distribution,
					returnBusiness: returnBusiness,
					marginPerCustomer: marginPerCustomer,
					preexistingBudget: preexistingBudget,
					avgVolume: avgVolume,
					newClients: newClients,
					ageDemographic: ageDemographic,
					idealAge: idealAge,
					clientIncomeRange: clientIncomeRange,
					idealIncome: idealIncome,
					industry: industry,
					sexFemale: sexFemale,
					currentAssets: currentAssets,
					totalInvestment: totalInvestment,
					howSecure: howSecure,
					totalMaintenance: totalMaintenance,
					clientListQuality: clientListQuality,
					clientListQuantity: clientListQuantity,
					clientListConversion: clientListConversion,
					usingLandingPages: usingLandingPages,
					websiteTraffic: websiteTraffic,
					organicTraffic: organicTraffic,
					inorganicTraffic: inorganicTraffic,
					websiteConversion: websiteConversion,
					socialMediaPlatforms: socialMediaPlatforms,
					socialMediaReach: socialMediaReach,
					socialMediaConversion: socialMediaConversion,
					localPlatforms: localPlatforms,
					leadsGenerated: leadsGenerated,
					reputationGoogle: reputationGoogle,
					reputationFacebook: reputationFacebook,
					reputationYelp: reputationYelp,
					reputationBing: reputationBing,
					message: message,
					email: email,
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




















