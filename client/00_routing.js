Router.configure({
	layoutTemplate:'layout',
	//notFoundTemplate: 'loader',
	//loadingTemplate: 'loader',
	trackPageView: true
});

var SEO_options = {
  title: "Better Marketing",
  suffix: 'BBB',
  separator: '|',
  description: 'Better marketing for a better world.',        // Will apply to meta, Twitter and OpenGraph.
  image: 'http://betterbetterbetter.org/wp-content/uploads/2015/12/common-205x205-7931.png',// Will apply to Twitter and OpenGraph.
  meta: {
    keywords: ['social business','capitalism','marketing','business directory']
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
/*
Router.plugin('seo', 
	{defaults: SEO_options}
	);
*/

Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.route('/find-your-service', {
    name: 'findYourService',
    template: 'findYourService'
});






Router.onBeforeAction('loading');

Router.onAfterAction(function() {
  if (this.ready()) {
    return Meteor.isReadyForSpiderable = true;
  }
});