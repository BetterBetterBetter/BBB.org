Template.contactForm.helpers({
  contactFormSchema: function() {
    return Schema.contactForm;
  }
});


AutoForm.hooks({
  contactForm: {
    onSubmit: function(doc){

      this.event.preventDefault(); 
 
      Meteor.call('sendEmail',doc,function(error, result) {


        if (error) {
          console.log(error);
          Materialize.toast("Error – please try again.",4500)
        } else {
          Materialize.toast("Success! We'll be in touch.", 4500 );

        }
      });
      return false;
    }
  },
  findServiceForm: {
    onSubmit: function (doc) {

      
      //Schemas.FindService.clean(doc);

      var serviceProduct = doc.serviceProduct;
      var clientTypes = doc.clientTypes;
      var distribution = doc.distribution;
      var returnBusiness = doc.returnBusiness;
      var marginPerCustomer = doc.marginPerCustomer;
      var preexistingBudget = doc.preexistingBudget;
      var avgVolume = doc.avgVolume;
      var newClients = doc.newClients;
      var ageDemographicArr = $('[name="ageDemographic"] .nouislider')[0].noUiSlider.get();
      var ageDemographic = {"lower":ageDemographicArr[0], "upper": ageDemographicArr[1]};
      var idealAge = doc.idealAge;
      var clientIncomeRangeArr = $('[name="clientIncomeRange"] .nouislider')[0].noUiSlider.get();
      var clientIncomeRange = {"lower":clientIncomeRangeArr[0], "upper": clientIncomeRangeArr[1]};
      var idealIncome = doc.idealIncome;
      var industry = doc.industry;
      var sexFemale = doc.sexFemale;
      var currentAssets = doc.currentAssets;
      var totalInvestment = doc.totalInvestment;
      var howSecure = doc.howSecure;
      var totalMaintenance = doc.totalMaintenance;
      var clientListQuality = "None";
      if(doc.clientListQuality&&clientListQuality!=="None"){
        clientListQuality = doc.clientListQuality;
      }
      var clientListQuantity = doc.clientListQuantity;
      var clientListConversion = doc.clientListConversion;
      var usingLandingPages = false;
      usingLandingPages = doc.usingLandingPages;
      var websiteTraffic = doc.websiteTraffic;
      var organicTraffic = doc.organicTraffic;
      var inorganicTraffic = doc.inorganicTraffic;
      var websiteConversion = doc.websiteConversion;
      var socialMediaPlatforms = doc.socialMediaPlatforms;
      var socialMediaReach = doc.socialMediaReach;
      var socialMediaConversion = doc.socialMediaConversion;
      var localPlatforms = doc.localPlatforms;
      var leadsGenerated = doc.leadsGenerated;
      var reputationGoogle = doc.reputationGoogle;
      var reputationFacebook = doc.reputationFacebook;
      var reputationYelp = doc.reputationYelp;
      var reputationBing = doc.reputationBing;
      var message = doc.message;
      var email = doc.email;
/*
      Meteor.call('insertFindService', serviceProduct,clientTypes,distribution,returnBusiness,marginPerCustomer,preexistingBudget,avgVolume,newClients,ageDemographic,idealAge,clientIncomeRange,idealIncome,industry,sexFemale,currentAssets,totalInvestment,howSecure,totalMaintenance,clientListQuality,clientListQuantity,clientListConversion,usingLandingPages,websiteTraffic,organicTraffic,inorganicTraffic,websiteConversion,socialMediaPlatforms,socialMediaReach,socialMediaConversion,localPlatforms,leadsGenerated,reputationGoogle,reputationFacebook,reputationYelp,reputationBing,message,email,function(error, result){

          Router.go('tactics', {_id: result});
        });

*/
    
     FindService.insert({serviceProduct,clientTypes,distribution,returnBusiness,marginPerCustomer,preexistingBudget,avgVolume,newClients,ageDemographic,idealAge,clientIncomeRange,idealIncome,industry,sexFemale,currentAssets,totalInvestment,howSecure,totalMaintenance,clientListQuality,clientListQuantity,clientListConversion,usingLandingPages,websiteTraffic,organicTraffic,inorganicTraffic,websiteConversion,socialMediaPlatforms,socialMediaReach,socialMediaConversion,localPlatforms,leadsGenerated,reputationGoogle,reputationFacebook,reputationYelp,reputationBing,message,email},function(error, result){

          Router.go('tactics', {_id: result});
        });

      this.done();
      return false;
    }
  },
  findServiceForm2: {
    onSubmit: function (doc) {

      
      //Schemas.FindService.clean(doc);

      var serviceProduct = doc.serviceProduct;
      var clientTypes = doc.clientTypes;
      var distribution = doc.distribution;
      var returnBusiness = doc.returnBusiness;
      var marginPerCustomer = doc.marginPerCustomer;
      var preexistingBudget = doc.preexistingBudget;
      var avgVolume = doc.avgVolume;
      var newClients = doc.newClients;
      var ageDemographicArr = $('[name="ageDemographic"] .nouislider')[0].noUiSlider.get();
      var ageDemographic = {"lower":ageDemographicArr[0], "upper": ageDemographicArr[1]};
      var idealAge = doc.idealAge;
      var clientIncomeRangeArr = $('[name="clientIncomeRange"] .nouislider')[0].noUiSlider.get();
      var clientIncomeRange = {"lower":clientIncomeRangeArr[0], "upper": clientIncomeRangeArr[1]};
      var idealIncome = doc.idealIncome;
      var industry = doc.industry;
      var sexFemale = doc.sexFemale;
      var currentAssets = doc.currentAssets;
      var totalInvestment = doc.totalInvestment;
      var howSecure = doc.howSecure;
      var totalMaintenance = doc.totalMaintenance;
      var clientListQuality = doc.clientListQuality;
      var clientListQuantity = doc.clientListQuantity;
      var clientListConversion = doc.clientListConversion;
      var usingLandingPages = doc.usingLandingPages;
      var websiteTraffic = doc.websiteTraffic;
      var organicTraffic = doc.organicTraffic;
      var inorganicTraffic = doc.inorganicTraffic;
      var websiteConversion = doc.websiteConversion;
      var socialMediaPlatforms = doc.socialMediaPlatforms;
      var socialMediaReach = doc.socialMediaReach;
      var socialMediaConversion = doc.socialMediaConversion;
      var localPlatforms = doc.localPlatforms;
      var leadsGenerated = doc.leadsGenerated;
      var reputationGoogle = doc.reputationGoogle;
      var reputationFacebook = doc.reputationFacebook;
      var reputationYelp = doc.reputationYelp;
      var reputationBing = doc.reputationBing;
      var message = doc.message;
      var email = doc.email;

      Meteor.call('insertFindService', serviceProduct,clientTypes,distribution,returnBusiness,marginPerCustomer,preexistingBudget,avgVolume,newClients,ageDemographic,idealAge,clientIncomeRange,idealIncome,industry,sexFemale,currentAssets,totalInvestment,howSecure,totalMaintenance,clientListQuality,clientListQuantity,clientListConversion,usingLandingPages,websiteTraffic,organicTraffic,inorganicTraffic,websiteConversion,socialMediaPlatforms,socialMediaReach,socialMediaConversion,localPlatforms,leadsGenerated,reputationGoogle,reputationFacebook,reputationYelp,reputationBing,message,email,function(error, result){
          Router.go('tactics', {_id: result});
        });
      this.done();
      return false;
    }
  }
});

