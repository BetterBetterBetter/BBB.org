Router.configure({
	layoutTemplate:'layout',
	//notFoundTemplate: 'loader',
	//loadingTemplate: 'loader',
	trackPageView: true
});

if (Meteor.isClient) {
    Router.plugin('reywood:iron-router-ga');
}







Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.route('/find-your-service', {
    name: 'findYourService',
    template: 'findYourService'
});

Router.route('/contact', {
    name: 'contactFormPage',
    template: 'contactFormPage'
});

Router.route('/sales', {
    name: 'sales',
    template: 'sales'
});

Router.route('/tools', {
    name: 'tools',
    template: 'tools'
});

Router.route('/bundles', {
    name: 'bundles',
    template: 'bundles'
});

Router.route('/tactics/:_id', {
  name: 'tactics',
  template: 'tactics',
  waitOn: function () {
  return Meteor.subscribe('findService');
  },
  data: function(){
      var id = this.params._id;
      return FindService.findOne({ _id: id });
  }
});

Router.route('/tactics/:_id/admin_view', {
  name: 'tacticsAdmin',
  template: 'tacticsAdmin',
  waitOn: function () {
  return Meteor.subscribe('findService');
  },
  data: function(){
      var id = this.params._id;
      return FindService.findOne({ _id: id });
  }
});

Router.route('/find-your-service-test', {
    name: 'findYourServiceTest',
    template: 'findYourServiceTest'
});

Router.route('/craft-your-strategy', {
    name: 'craftYourStrategy',
    template: 'craftYourStrategy'
});





Router.onBeforeAction('loading');

/*
Router.onAfterAction(function() {
  if (this.ready()) {
    return Meteor.isReadyForSpiderable = true;
  }
});
*/




/*
var SEO_options = {
  title: "Better Marketing",
  suffix: 'BBB',
  separator: '|',
  description: 'Good Businesses Deserve Better Marketing.',        // Will apply to meta, Twitter and OpenGraph.
  image: 'https://blog.betterbetterbetter.org/wp-content/uploads/2015/12/common-205x205-7931.png',// Will apply to Twitter and OpenGraph.
  meta: {
    keywords: ['online marketing','internet marketing','social business','capitalism','marketing','better marketing','better better better']
  },
  twitter: {
    card: 'Better marketing for a better world.',
    creator: '@betterbetterbe'
  },
  og: {
    site_name: 'Better Better Better',
    image: 'http://betterbetterbetter.org/wp-content/uploads/2015/12/common-205x205-7931.png'
  }
};

Router.plugin('seo', 
  {defaults: SEO_options}
  );
*/