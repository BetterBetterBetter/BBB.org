

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

ContactForm = new Mongo.Collection("contactForm"); 


ContactForm.allow({
  insert: function (userId, doc) {
      return true;
  }
});


ContactForm.attachSchema(new SimpleSchema({
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
    label: "Message"  }
  })
);




FindService = new Mongo.Collection("findService"); 


FindService.allow({
  insert: function (userId, doc) {
      return true;
  }
});


FindService.attachSchema(new SimpleSchema({
   
   serviceProduct: {
      type: Array,
      optional: true,
      autoform: {
         type: 'select-checkbox-inline',
         options: function (){return[{label:"Service",value:"service"},{label:"Products",value:"products"}]}
      }
   },
   'serviceProduct.$': { type: String
   },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "Your Email"
  },
  message: {
    type: String,
    label: "Message"  }
  }
 )
); 
