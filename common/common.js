

/*
AdminConfig = {
  name: 'BBB.org',
  adminEmails: ['jeremy@betterbetterbetter.org'],
  collections: {
    ContactForm: {
      color: 'red',
      icon: 'map-pin',
      tableColumns: [
        { label: 'Name', name: 'bizName' }
       ]
    }
  },
  skin: 'red'
};
*/

import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);


SimpleSchema.debug = true


const Schemas = {};

ContactForm = new Mongo.Collection("contactForm"); 





ContactForm.allow({
  insert: function (userId, doc) {
      return true;
  }
});






Schemas.ContactForm =new SimpleSchema({
  name: {
    type: String,
    label: 'Name',
    max: 64
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "Your Email"
  },
  message: {
    type: String,
    label: "Message",
    max: 64000
    }
  });

ContactForm.attachSchema(Schemas.ContactForm)




FindService = new Mongo.Collection("findService"); 


FindService.permit(['insert', 'update']);


Schemas.RangeSchema = new SimpleSchema({
  lower: {
    type: Number
  },
  upper: {
    type: Number
  }
});
 
Schemas.FindService = new SimpleSchema({
   
  serviceProduct: {
   type: Array,
   optional: true,
   autoform: {
      type: 'select-checkbox-inline',
      options: function (){return[{label:"Services",value:"Services"},{label:"Products",value:"Products"}]}
     }
   },
   'serviceProduct.$': { type: String
   },
  clientTypes: {
   type: Array,
   optional: true,
   autoform: {
      type: 'select-checkbox-inline',
      options: function (){return[{label:"B2B",value:"B2B"},{label:"B2C",value:"B2C"}]}
     }
   },
   'clientTypes.$': { type: String
   },
  distribution: {
   type: Array,
   optional: true,
   autoform: {
      type: 'select-checkbox-inline',
      options: function (){return[{label:"Town",value:"Town"},{label:"City",value:"City"},{label:"State",value:"State"},{label:"National",value:"National"},{label:"International",value:"International"}]}
     }
   },
   'distribution.$': { type: String
   },
   returnBusiness: {
    type: Number,
    max: 100,
    min: 0,
    autoform: {
     noUiSliderOptions: {
      type: "noUiSlider",
      step: 1,
      start: 0,
      tooltips: [{to: function(value) {
       return "<span>"+Math.round(parseInt(value))+"%</span>";}
      }]
     },    
      noUiSlider_pipsOptions: {
       mode: 'values',
       values: [0,25,50,75,100],
       density: 5
      }
    }
  },
  marginPerCustomer: {
    type: Number,
    max: 100,
    min: 0,
    autoform: {
     noUiSliderOptions: {
      type: "noUiSlider",
      step: 1,
      start: 0,
      tooltips: [{to: function(value) {
       return "<span>"+Math.round(parseInt(value))+"%</span>";}
      }]
     },    
      noUiSlider_pipsOptions: {
       mode: 'values',
       values: [0,25,50,75,100],
       density: 5
      }
    }
  },
  preexistingBudget: {
    type: Number,
    max: 100000,
    min: 0,
    autoform: {
     noUiSliderOptions: {
      type: "noUiSlider",
      step: 1,
      start: 0,
      tooltips: [{to: function(value) {
       return "<span>$"+Math.round(parseInt(value))+"</span>";}
      }]
     },    
      noUiSlider_pipsOptions: {
       mode: 'values',
       values: [0,25000,50000,75000,100000],
       density: 5
      }
    }
  },
  avgVolume: {
    type: Number,
    max: 100000,
    min: 0,
    autoform: {
     type: 'number'
    }
  },
  newClients: {
    type: Number,
    max: 100000,
    min: 0,
    autoform: {
     type: 'number'
    }
  },
  ageDemographic: {
    type: Schemas.RangeSchema,
    max: 100,
    min: 0,
    autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: 1,
        start: [18, 56],
        connect: true,
        tooltips: [{to: function(value) {
          return "<span>"+Math.round(parseInt(value))+"</span>";
          }},{to: function(value) {
          return "<span>"+Math.round(parseInt(value))+"</span>";
        }}]
      },    
      noUiSlider_pipsOptions: {
       mode: 'values',
       values: [0,25,50,75,100],
       density: 5
      }
    }
  },
  idealAge: {
    type: Number,
    max: 100,
    min: 0,
    autoform: {
     noUiSliderOptions: {
      type: "noUiSlider",
      step: 1,
      start: 0,
      tooltips: [{to: function(value) {
       return "<span>"+Math.round(parseInt(value))+"</span>";}
      }]
     },    
      noUiSlider_pipsOptions: {
       mode: 'values',
       values: [0,25,50,75,100],
       density: 5
      }
    }
  },
  clientIncomeRange: {
    type: Schemas.RangeSchema,
    max: 10000000,
    min: 10000,
    autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: 1000,
        start: [30000, 75000],
        range: {'min': [10000],'50%':[150000],'max':[10000000]},
        connect: true,
        tooltips: [{to: function(value) {
          return "<span>$"+Math.round(parseInt(value))/1000+"k</span>";
          }},{to: function(value) {
          return "<span>$"+Math.round(parseInt(value))/1000+"k</span>";
        }}]
      }
    }
  },
  idealIncome: {
    type: Number,
    max: 100000000,
    min: 10000,
    autoform: {
     noUiSliderOptions: {
      type: "noUiSlider",
      step: 1000,
      start: 10000,
      range: {'min': [10000],'50%':[150000],'max':[10000000]},
      tooltips: [{to: function(value) {
       return "<span>$"+Math.round(parseInt(value))/1000+"k</span>";}
      }]
     }
    }
  },
  industry: {
    type: String,
    autoform: {
     type: 'select-radio-inline',
     options: function (){return[
      {label:"Food",value:"Food"},
     {label:"Hospitality",value:"Hospitality"},
     {label:"Business Services",value:"BusinessServices"},
     {label:"Agriculture",value:"Agriculture"},
     {label:"Recreation",value:"Recreation"},
     {label:"Apparel",value:"Apparel"},
     {label:"Arts",value:"Arts"},
     {label:"Broadcasting",value:"Broadcasting"},
     {label:"Construction",value:"Construction"},
     {label:"Manufacturing",value:"Manufacturing"},
     {label:"Information Technology",value:"InformationTechnology"},
     {label:"Education",value:"Education"},
     {label:"Finance",value:"Finance"},
     {label:"Home Goods",value:"HomeGoods"},
     {label:"Insurance",value:"Insurance"},
     {label:"Extraction",value:"Extraction"},
     {label:"Legal",value:"Legal"},
     {label:"Charity",value:"Charity"},
     {label:"Retail",value:"Retail"},
     {label:"Healthcare",value:"Healthcare"},
     {label:"Science",value:"Science"},
     {label:"Home Services",value:"HomeServices"},
     {label:"Real Estate",value:"RealEstate"},
     {label:"Maintenance",value:"Maintenance"},
     {label:"Utilities",value:"Utilities"}]}
     }
  },
  sexFemale: {
    type: Number,
    max: 100,
    min: 0,
    autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: 1,
        start: 50,
        tooltips: [{to: function(value) {
          return "<span>"+Math.round(parseInt(value))+"%</span>";
          }}]
      },    
      noUiSlider_pipsOptions: {
       mode: 'values',
       values: [0,25,50,75,100],
       density: 5
      }
    }
  },
  currentAssets: {
   type: Array,
   optional: true,
   autoform: {
      type: 'select-checkbox-inline',
      options: function (){return[{label:"Website",value:"Website"},{label:"ERP",value:"ERP"},{label:"CRM",value:"CRM"},{label:"Email List",value:"EmailList"},{label:"Social Media",value:"SocialMedia"},{label: "eCommerce Store", value:"eCommerceStore"},{label:"Sales Funnel",value:"SalesFunnel"},{label:"Sales Presentation",value:"SalesPresentation"},{label:"None",value:"None"}]}
     }
   },
  'currentAssets.$': { type: String
   },
  totalInvestment: {
    type: Number,
    optional: true,
    max: 100000,
    min: 0,
    autoform: {
     type: 'number'
    }
  },
  howSecure: {
    type: Number,
    max: 100,
    min: 0,
    autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: 1,
        start: 50,
        tooltips: [{to: function(value) {
          return "<span>"+Math.round(parseInt(value))+"%</span>";
          }}]
      },    
      noUiSlider_pipsOptions: {
       mode: 'values',
       values: [0,25,50,75,100],
       density: 5
      }
    }
  },
  totalMaintenance: {
    type: Number,
    optional: true,
    max: 100000,
    min: 0,
    autoform: {
     type: 'number'
    }
  },
  clientListQuality: {
   type: Array,
   optional: true,
   autoform: {
      type: 'select-checkbox-inline',
      options: function (){return[{label:"Names",value:"Names"},{label:"Emails",value:"Emails"},{label:"Gender",value:"Gender"},{label:"Relevant Interests",value:"RelevantInterests"},{label:"Repurchasing Behavior",value:"RepurchasingBehavior"},{label:"None",value:"None"}]}
     }
   },
  'clientListQuality.$': { type: String
   },
  clientListQuantity: {
    type: Number,
    optional: true,
    max: 10000000,
    min: 0,
    autoform: {
     type: 'number'
    }
  },
  clientListConversion: {
    type: Number,
    max: 100,
    min: 0,
    optional: true,
    autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: 1,
        start: 0,
        tooltips: [{to: function(value) {
          return "<span>"+Math.round(parseInt(value))+"%</span>";
          }}]
      },    
      noUiSlider_pipsOptions: {
       mode: 'values',
       values: [0,25,50,75,100],
       density: 5
      }
    }
  },
  usingLandingPages: {
    type: Array,
    optional: true,
    autoform: {
       type: 'boolean-radios'
    }
   },
   'usingLandingPages.$': {
    type: Boolean
   },
  websiteTraffic: {
    type: Number,
    optional: true,
    max: 1000000000000,
    min: 0,
    autoform: {
     type: 'number'
    }
  },
  organicTraffic: {
    type: Number,
    optional: true,
    max: 100000000,
    min: 0,
    autoform: {
     type: 'number'
    }
  },
  inorganicTraffic: {
    type: Number,
    optional: true,
    max: 100000000,
    min: 0,
    autoform: {
     type: 'number'
    }
  },
  websiteConversion: {
    type: Number,
    optional: true,
    max: 100,
    min: 0,
    autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: 1,
        start: 0,
        tooltips: [{to: function(value) {
          return "<span>"+Math.round(parseInt(value))+"%</span>";
          }}]
      },    
      noUiSlider_pipsOptions: {
       mode: 'values',
       values: [0,25,50,75,100],
       density: 5
      }
    }
  },
  socialMediaPlatforms: {
   type: Array,
   optional: true,
   autoform: {
      type: 'select-checkbox-inline',
      options: function (){return[{label:"Facebook",value:"Facebook"},{label:"Instagram",value:"Instagram"},{label:"YouTube",value:"YouTube"},{label:"Twitter",value:"Twitter"},{label:"Reddit",value:"Reddit"},{label:"Pinterest",value:"Pinterest"},{label:"LinkedIn",value:"LinkedIn"},{label:"MeetUp",value:"MeetUp"}]}
     }
   },
  'socialMediaPlatforms.$': { type: String
   },
  socialMediaReach: {
    type: Number,
    optional: true,
    max: 100000000,
    min: 0,
    autoform: {
     type: 'number'
    }
  },
  socialMediaConversion: {
    type: Number,
    optional: true,
    max: 100,
    min: 0,
    autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: 1,
        start: 0,
        tooltips: [{to: function(value) {
          return "<span>"+Math.round(parseInt(value))+"%</span>";
          }}]
      },    
      noUiSlider_pipsOptions: {
       mode: 'values',
       values: [0,25,50,75,100],
       density: 5
      }
    }
  },
  localPlatforms: {
   type: Array,
   optional: true,
   autoform: {
      type: 'select-checkbox-inline',
      options: function (){return[{label:"Google Maps",value:"GoogleMaps"},{label:"Bing Places",value:"BingPlaces"},{label:"Yahoo!",value:"Yahoo!"},{label:"Yelp",value:"Yelp"},{label:"Facebook",value:"Facebook"},{label:"Better Business Bureau",value:"BetterBusinessBureau"},{label:"LinkedIn",value:"LinkedIn"},{label:"MeetUp",value:"MeetUp"},{label:"Angie's List",value:"AngiesList"},{label:"YP.com",value:"YP"},{label:"WhitePages",value:"WhitePages"},{label:"SuperPages",value:"SuperPages"},{label:"Foursquare",value:"Foursquare"},{label:"Mapquest",value:"Mapquest"},{label:"EzLocal",value:"EzLocal"},{label:"Trip Advisor",value:"TripAdvisor"},{label:"Thumbtack",value:"Thumbtack"},{label:"Chamber of Commerce",value:"ChamberOfCommerce"}]}
     }
   },
   'localPlatforms.$': { type: String
   },
  leadsGenerated: {
    type: Number,
    optional: true,
    max: 100000,
    min: 0,
    autoform: {
     type: 'number'
    }
  },
  reputationGoogle: {
    type: Number,
    max: 5,
    min: 0,
    autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: .1,
        start: 0,
        tooltips: [{to: function(value) {
          return "<span>"+Math.round(value* 10) / 10+"</span>";
          }}]
      },    
      noUiSlider_pipsOptions: {
       mode: 'values',
       values: [1,2,3,4,5],
       density: 5
      }
    }
  },
  reputationFacebook: {
    type: Number,
    max: 5,
    min: 0,
    autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: .1,
        start: 0,
        tooltips: [{to: function(value) {
          return "<span>"+Math.round(value* 10) / 10+"</span>";
          }}]
      },    
      noUiSlider_pipsOptions: {
       mode: 'values',
       values: [1,2,3,4,5],
       density: 5
      }
    }
  },
  reputationYelp: {
    type: Number,
    max: 5,
    min: 0,
    autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: .1,
        start: 0,
        tooltips: [{to: function(value) {
          return "<span>"+Math.round(value* 10) / 10+"</span>";
          }}]
      },    
      noUiSlider_pipsOptions: {
       mode: 'values',
       values: [1,2,3,4,5],
       density: 5
      }
    }
  },
  reputationBing: {
    type: Number,
    max: 5,
    min: 0,
    autoform: {
      type: "noUiSlider",
      noUiSliderOptions: {
        step: .1,
        start: 0,
        tooltips: [{to: function(value) {
          return "<span>"+Math.round(value* 10) / 10+"</span>";
          }}]
      },    
      noUiSlider_pipsOptions: {
       mode: 'values',
       values: [1,2,3,4,5],
       density: 5
      }
    }
  },
  message: {
   type: String,
   optional: true,
   autoform: {
    type: "textarea"
   }
  },
  email: {
   type: String,
   optional: true,
   regEx: SimpleSchema.RegEx.Email,
   label: "Email"
  },
  createdAt: {
   type: Date,
   optional: true
  }  
});

FindService.attachSchema(Schemas.FindService); 
