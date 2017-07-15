Template.tactics.onCreated(function(){
	
	var d = this.data;
	var serviceProduct =	d.serviceProduct
	var clientTypes =	d.clientTypes
	var distribution =	d.distribution
	var returnBusiness =	d.returnBusiness
	var marginPerCustomer =	d.marginPerCustomer
	var preexistingBudget =	d.preexistingBudget
	var avgVolume =	d.avgVolume
	var newClients =	d.newClients
	var ageDemographic =	d.ageDemographic
	var idealAge =	d.idealAge
	var clientIncomeRange =	d.clientIncomeRange
	var idealIncome =	d.idealIncome
	var industry =	d.industry
	var sexFemale =	d.sexFemale
	var currentAssets =	d.currentAssets
	var totalInvestment =	d.totalInvestment
	var howSecure =	d.howSecure
	var totalMaintenance =	d.totalMaintenance
	var clientListQuality =	d.clientListQuality
	var clientListQuantity =	d.clientListQuantity
	var clientListConversion =	d.clientListConversion
	var usingLandingPages =	d.usingLandingPages
	var websiteTraffic =	d.websiteTraffic
	var organicTraffic =	d.organicTraffic
	var inorganicTraffic =	d.inorganicTraffic
	var websiteConversion =	d.websiteConversion
	var socialMediaPlatforms =	d.socialMediaPlatforms
	var socialMediaReach =	d.socialMediaReach
	var socialMediaConversion =	d.socialMediaConversion
	var localPlatforms =	d.localPlatforms
	var leadsGenerated =	d.leadsGenerated
	var reputationGoogle =	d.reputationGoogle
	var reputationFacebook =	d.reputationFacebook
	var reputationYelp =	d.reputationYelp
	var reputationBing =	d.reputationBing
	var message =	d.message
	var clientEmail =	d.email

	var hasWebsite = currentAssets.includes('Website');
	var hasERP = currentAssets.includes('ERP');
	var hasCRM = currentAssets.includes('CRM');
	var hasEmailList = currentAssets.includes('EmailList');
	var hasSocialMedia = currentAssets.includes('SocialMedia');
	var hasSalesFunnel = currentAssets.includes('SalesFunnel');
	var hasSalesPresentation = currentAssets.includes('SalesPresentation');

 scores = {
			email: 0,
			website: 0,
			payPerLead: 0,
			socialMedia: 0,
			security: 0,
			seo: 0,
			local: 0,
			automation: 0,
			reputation: 0,
			maintenance: 0,
			presentation: 0,
			crm: 0,
			research: 0,
			apps: 0,
			ecommerce: 0
		}

		socialPlatforms = {
				Pinterest: 0,
				Facebook: 0,
				Instagram: 0,
				Reddit: 0,
				LinkedIn: 0,
				YouTube: 0,
				Twitter: 0
			}








	//
	//Email List
	//
	//  Major industries
	if(industry==="BusinessServices"||industry==="Charity"){
		scores.email+=50
	}
	//  Minor industries
	if(industry==="Recreation"||industry==="Apparel"||industry==="Arts"||industry==="Broadcasting"||industry==="Education"||industry==="HomeGoods"||industry==="HomeServices"||industry==="Maintenance"){
		scores.email+=10
	}
//  Return Business
	scores.email+=returnBusiness*.7
//  Geriatric
if(idealAge>69){
	scores.email-=20
}
//  prexisting
if(hasEmailList){
	scores.email-=20
	//  high quantity
	if(clientListQuantity>1000){
		scores.email-=30
	}
	//  low quality
	if(clientListQuality.length<2){
		scores.email+=10
	}
	// high quality
	if(clientListQuality.length>5){
		scores.email-=20
	}
	//  low conversion
	if(clientListConversion<6){
		scores.email-=10
	}
	//  high conversion
	if(clientListConversion>15){
		scores.email+=20
	}
}
//  no website
if(!hasWebsite){
	scores.email-=20
}
//  using landing pages
if(usingLandingPages&&!usingLandingPages[0]){
	scores.email+=20
}
//  high web traffic
if(websiteTraffic>2000){
	scores.email+=30
}

//
//  Website
//
//  no website
	if(!hasWebsite){
			scores.website+=100
	//  product
		if(serviceProduct.includes("products")){
			scores.website+=20
		}
	//  locality
		if(distribution.includes('State')||distribution.includes('National')||distribution.includes('International')){
			scores.website+=50
		}
	}

//
//  Pay Per Lead
//
//  service or product
		if(serviceProduct.includes("Products")){
			scores.payPerLead-=20
		} 
		if(serviceProduct.includes("Services")){
			scores.payPerLead+=20
		}
//  B2B or B2C
	if(clientTypes.includes("B2B")){
		scores.payPerLead+=80
	}
	if(clientTypes.includes("B2C")){
		scores.payPerLead-=40
	}
//  locality
	if(distribution.includes('State')||distribution.includes('National')||distribution.includes('International')){
			scores.payPerLead+=20
	}
//  high return business
	if(returnBusiness>80){
		scores.payPerLead+=30
	}
//  high preexisting budger
	if(preexistingBudget>5000){
		scores.payPerLead+=30
	}
//  high margin
	if(marginPerCustomer>50){
		scores.payPerLead+=10
	}
//  high income
	if(idealIncome>150000){
		scores.payPerLead+=10
	}
//  Major industry
	if(industry==="BusinessServices"||industry==="Construction"||industry==="Manufacturing"||industry==="InformationTechnology"||industry==="Broadcasting"||industry==="Extraction"||industry==="Legal"||industry==="Finance"||industry==="Utilities"){
			scores.payPerLead+=10
	}

//
//  Socal Media
//
//  -B2B or +B2C
	if(clientTypes.includes("B2C")){
		scores.socialMedia+=40
	}
	if(clientTypes.includes("B2B")){
		scores.socialMedia-=40
	}
//  locality
	if(distribution.includes('Town')||distribution.includes('City')){
			scores.socialMedia+=20
	}
//  age
 if(idealAge>69){
 	scores.socialMedia-=30
 }
//  income
	if(30000<idealIncome&&idealIncome<75000){
		scores.socialMedia+=50
	}
	if(idealIncome>125000){
		scores.socialMedia-=20
	}
//  industry
	if(industry==="Food"||industry==="Hospitality"||industry==="Recreation"||industry==="Apparel"||industry==="Arts"||industry==="Broadcasting"||industry==="HomeGoods"||industry==="Charity"||industry==="Retail"||industry==="RealEstate"||industry==="HomeServices"){
			scores.socialMedia+=20
	}
	if(industry==="BusinessServices"||industry==="Insurance"||industry==="Finance"||industry==="Extraction"){
			scores.socialMedia-=20
	}
//  low traffic
	if(websiteTraffic<400){
		scores.socialMedia+=20	
	}
//  high inorganic
	if(inorganicTraffic>800){
		scores.socialMedia+=20
	}
//
//  Pinterest
//
//  industry
	if(industry==="Food"||industry==="Hospitality"||industry==="Recreation"||industry==="Apparel"||industry==="Arts"||industry==="Broadcasting"||industry==="HomeGoods"||industry==="Charity"||industry==="Retail"||industry==="RealEstate"||industry==="Recreation"){
			socialPlatforms.Pinterest+=20
	}
//  high income
	if(idealIncome>75000){
		socialPlatforms.Pinterest-=10
	}
//  women
	socialPlatforms.Pinterest+=sexFemale*.6
//  age
	if(12<idealAge&&idealAge<40){
		socialPlatforms.Pinterest+=10
	}
	if(12<ageDemographic.lower&&ageDemographic.upper<40){
		socialPlatforms.Pinterest+=20
	}
//
//		Facebook
//
//  women
	socialPlatforms.Facebook+=sexFemale*.4
//  age
	if(20<idealAge&&idealAge<40){
		socialPlatforms.Facebook+=10
	}
	if(20<ageDemographic.lower&&ageDemographic.upper<40){
			socialPlatforms.Facebook+=20
	}
//
//  Instagram
//
//  industry
	if(industry==="Food"||industry==="Hospitality"||industry==="Recreation"||industry==="Apparel"||industry==="Arts"||industry==="Broadcasting"||industry==="HomeGoods"||industry==="Charity"||industry==="Retail"||industry==="RealEstate"||industry==="Recreation"){
			socialPlatforms.Instagram+=20
	}
//  high income
	if(idealIncome>75000){
		socialPlatforms.Instagram-=30
	}
//  women
	socialPlatforms.Instagram+=sexFemale*.5
//  age
	if(18<idealAge&&idealAge<29){
		socialPlatforms.Instagram+=10
	}
	if(18<ageDemographic.lower&&ageDemographic.upper<29){
			socialPlatforms.Instagram+=20
	}
//
//  Reddit
//
//  high income
	if(idealIncome>75000){
		socialPlatforms.Reddit-=30
	}
//  men
	socialPlatforms.Reddit+=100-sexFemale*.75
//  age
	if(18<idealAge&&idealAge<40){
		socialPlatforms.Reddit+=10
	}
	if(18<ageDemographic.lower&&ageDemographic.upper<40){
			socialPlatforms.Reddit+=20
	}
//
//  LinkedIn
//
//  high income
	if(idealIncome>75000){
		socialPlatforms.LinkedIn+=30
	}
//  men
	socialPlatforms.LinkedIn+=100-sexFemale*.5
//  age
	if(18<idealAge&&idealAge<40){
		socialPlatforms.LinkedIn+=10
	}
	if(18<ageDemographic.lower&&ageDemographic.upper<40){
			socialPlatforms.LinkedIn+=20
	}
//
//  YouTube
//
//  men
	socialPlatforms.YouTube+=100-sexFemale*.5
//  age
	if(18<idealAge&&idealAge<34){
		socialPlatforms.YouTube+=10
	}
	if(18<ageDemographic.lower&&ageDemographic.upper<34){
			socialPlatforms.YouTube+=20
	}
	if(idealAge>64){
		socialPlatforms.YouTube-=40
	}
//
//  Twitter
//
//  age
	if(15<idealAge&&idealAge<17){
		socialPlatforms.Twitter+=50
	}
	if(17<idealAge&&idealAge<29){
		socialPlatforms.Twitter+=20
	}
	if(18<ageDemographic.lower&&ageDemographic.upper<29){
			socialPlatforms.Twitter+=20
	}
	if(idealAge>49){
		socialPlatforms.Twitter-=30
	}
	if(idealAge>64){
		socialPlatforms.Twitter-=50
	}

//
//  Security
//
//  preexisting budget
	if(preexistingBudget>4000){
		scores.security+=10
	}
//  industry
	if(industry==="Finance"||industry==="Legal"||industry==="InformationTechnology"||industry==="Insurance"||industry==="Charity"||industry==="Healthcare"||industry==="Science"||industry==="Utilities"){
			scores.security+=20
	}
//  high total investment
	if(totalInvestment>10000){
		scores.security+=20
	}
//  less preceived security
	scores.security+=(100-howSecure)*.5
//  high traffic
	if(websiteTraffic>600){
		scores.security+=20
	}
//  social platforms
	if(socialMediaPlatforms&&socialMediaPlatforms.length>3){
		scores.security+=10
	}
//
//  SEO
//
//  product
	if(serviceProduct.includes("products")){
		scores.seo+=10
	}
//  B2C
	if(clientTypes.includes("B2C")){
		scores.seo+=10
	}
//  locality
	if(distribution.includes('Town')||distribution.includes('City')||distribution.includes('State')){
			scores.seo+=30
	}
//  return business
scores.seo+=returnBusiness*.3
//  high volume
	if(avgVolume>70){
		scores.seo+=10
	}
//  lots of new clients
	if(newClients>50){
		scores.seo+=10
	}
//  high margin
	if(marginPerCustomer>50){
		scores.seo+=10
	}
//  geriatric
	if(idealAge>64){
		scores.seo-=20
	}
//  industry
	if(industry==="RealEstate"||industry==="Hospitality"||industry==="Recreation"||industry==="Retail"||industry==="HomeServices"||industry==="Maintenance"){
			scores.seo+=20
	}
//  no website
	if(!hasWebsite){
		scores.seo-=100
	}
//  low traffic
	if(websiteTraffic<100){
		scores.seo+=20
	}
//  not using landing pages
	if(!usingLandingPages){
		scores.seo+=20
	}
//  high website conversion
	if(websiteConversion>20){
		scores.seo+=20
	}
//
//  Local Marketing
//
//  locality
		if(distribution.includes('Town')||distribution.includes('City')){
			scores.local+=50
		}
	if(distribution.includes('State')||distribution.includes('National')||distribution.includes('International')){
		scores.local-=20
	}
//  product
	if(serviceProduct.includes("products")){
		scores.local+=10
	}
//  B2C
	if(clientTypes.includes("B2C")){
		scores.local+=10
	}
//  low margin
	if(marginPerCustomer<30){
		scores.local+=10
	}
//  industry
	if(industry==="Food"||industry==="Hospitality"||industry==="BusinessServices"||industry==="Agriculture"||industry==="Apparel"||industry==="Construction"||industry==="Education"||industry==="HomeGoods"||industry==="Legal"||industry==="Retail"||industry==="Healthcare"||industry==="HomeServices"||industry==="RealEstate"||industry==="Maintenance"||industry==="Utilities"){
			scores.local+=20
	}
//  low budget
	if(preexistingBudget<500){
		scores.local+=30
	}
//  low total Investment
	if(totalInvestment<2000){
		scores.local+=10
	}
// no website, local
	if(!hasWebsite&&(distribution.includes('Town')||distribution.includes('City'))){
		scores.local+=70
	}
// deduct for preexisting local platform
	scores.local-=(localPlatforms.length*.5)*10
// low reputation
	scores.local+=5-reputationGoogle
	scores.local+=5-reputationFacebook
	scores.local+=5-reputationYelp
	scores.local+=5-reputationBing

//
//  Drip Marketing
//
//  locality
	if(distribution.includes('State')||distribution.includes('National')||distribution.includes('International')){
		scores.automation+=20
	}
//  High Volume
	if(avgVolume>100){
		scores.automation+=20
	}
//  geriatric deduction
	if(idealAge>64){
		scores.automation-=20
	}
//  industry
	if(industry==="BusinessServices"||industry==="InformationTechnology"||industry==="Education"||industry==="Insurance"||industry==="Legal"||industry==="Charity"||industry==="Science"||industry==="RealEstate"){
			scores.automation+=20
	}
//  not using landing pages
	if(!usingLandingPages){
		scores.automation+=30
	}
//  high website traffic
		scores.automation+=websiteTraffic/100
//  high website conversion
	if(websiteConversion>20){
		scores.automation+=20
	}
// preecisting crm/erp
	if(hasCRM){
		scores.automation+=30
	}
// preexisting marketing automation
	if(hasSalesFunnel){
		scores.automation-=40
	}

//
//		Reputation
//
//  locality
	if(distribution.includes('Town')||distribution.includes('City')){
		scores.reputation+=30
	}
//  geriatric
	if(idealAge>64){
		scores.reputation-=10
	}
//  industry
	if(industry==="Food"||industry==="Hospitality"||industry==="Recreation"||industry==="Arts"||industry==="Agriculture"||industry==="HomeGoods"||industry==="Legal"||industry==="Charity"||industry==="Retail"||industry==="HomeServices"||industry==="RealEstate"||industry==="Maintenance"){
			scores.reputation+=20
	}
//  low traffic
	if(websiteTraffic<400){
		scores.reputation+=20	
	}
//  fewer platforms
	if(localPlatforms.length<3){
		scores.reputation+=20
	}
// low reputation
	scores.local+=5-reputationGoogle
	scores.local+=5-reputationFacebook
	scores.local+=5-reputationYelp
	scores.local+=5-reputationBing

//
//		Maintenance
//
//		more assets
		scores.maintenance+=currentAssets.length*10
//  more total investments
		scores.maintenance+=(totalInvestment/100)*.3
//  less preceived security
		scores.maintenance+=(100-howSecure)*.2
//  high maintenance
		scores.maintenance+=(totalMaintenance/100)*.3

//
//  Presentation
//
//  B2B
	if(clientTypes.includes("B2B")){
		scores.presentation+=30
	}
//  industry
	if(industry==="BusinessServices"||industry==="Finance"||industry==="Legal"||industry==="Charity"||industry==="Science"){
			scores.presentation+=30
	}
	//  preexisting presentation
		if(currentAssets.includes("Presentation")){
			scores.presentation-=30
		}
//  high margin
	if(marginPerCustomer>50){
		scores.presentation+=10
	}
	//  high income
	if(idealIncome>100000){
		scores.presentation+=20
	}
	if(clientIncomeRange.lower<100000){
		scores.presentation+=40
	}

//
//  CRM ERP
//
//  B2B
	if(clientTypes.includes("B2B")){
		scores.crm+=20
	}
//  product
	if(serviceProduct.includes("products")){
		scores.crm+=10
	}
//  high return business
		scores.crm+=(returnBusiness/10)*7.5
//  lots of clients
	if(newClients<20){
		scores.crm+=40
	}
//  locality
	if(distribution.includes('International')){
		scores.crm+=10
	}
//  high income
	if(idealIncome>100000){
		scores.crm+=20
	}
	if(clientIncomeRange.lower<100000){
		scores.crm+=40
	}
//  industry
	if(industry==="BusinessServices"||industry==="Broadcasting"||industry==="Construction"||industry==="Manufacturing"||industry==="InformationTechnology"||industry==="Finance"||industry==="Legal"||industry==="Charity"||industry==="Utilities"||industry==="Science"){
			scores.crm+=20
	}
// appropriate assets
	if(currentAssets.includes('Website')){
		scores.crm+=15
	}
	if(currentAssets.includes('SalesFunnel')){
		scores.crm+=15
	}
	if(currentAssets.includes('eCommerceStore')){
		scores.crm+=15
	}
//  preexisting CRM/ERM
	if(currentAssets.includes('CRM')||currentAssets.includes('ERP')){
		scores.crm-=50
	}

//
//  Marketing Research
//
//  unknowns
if(idealAge===0){
	scores.research+=10
}
if(idealIncome===0){
	scores.research+=10
}
if(sexFemale===0){
	scores.research+=10
}
//  locality
	if(distribution.includes('State')||distribution.includes('National')||distribution.includes('International')){
		scores.research+=20
	}
//  Return Business
	scores.research+=returnBusiness*2
//  Large budget
	scores.research+=(preexistingBudget-2500)/100
//  Large total investment
	if(totalInvestment>5000){
		scores.research+=10	
	}
//  industry
	if(industry==="BusinessServices"||industry==="Broadcasting"||industry==="Education"||industry==="Insurance"||industry==="HomeServices"||industry==="Maintenance"||industry==="Finance"||industry==="Legal"){
			scores.research+=10
	}
//  poor quality of client list
	if(hasEmailList){
		scores.research+=50-(clientListQuality.length*10)
	}
//  high quantity client list
	if(clientListQuantity>1000){
		scores.research+=10
	}

//
//  Apps
//
//  Service
	if(serviceProduct.includes('Services')){
		scores.apps+=20
	}
//  locality
	if(distribution.includes('National')||distribution.includes('International')){
		scores.apps+=20
	}
//  Large budget
	scores.apps+=(preexistingBudget-1500)/100
//  lots of new clients
	if(serviceProduct.includes('Services')){
		scores.apps+=newClients/10
	}
//  high volume
	if(avgVolume>50){
		scores.apps+=10		
	}
//  lots of current assets
	scores.apps+=currentAssets.length*10
//  low web conversion
	if(hasWebsite){
		scores.apps+=(100-websiteConversion)/5
	}
//
//  ecommerce
//

//  product and services
	if(serviceProduct.includes('Products')){
		scores.ecommerce+=20
	}
	if(serviceProduct.includes('Services')){
		scores.ecommerce-=40
	}
//  B2C
	if(clientTypes.includes('B2C')){
		scores.ecommerce+=20
	}
//  locality
	if(distribution.includes('State')||distribution.includes('National')||distribution.includes('International')){
		scores.ecommerce+=40
	}
//  low margins
	if(marginPerCustomer<30){
		scores.ecommerce+=20
	}
//  high volume
	if(avgVolume>200){
		scores.ecommerce+=20
	}
//  lots of new clients
	if(newClients>100){
		scores.ecommerce+=20
	}
//  consumer income
	if(idealIncome<75000){
		scores.ecommerce+=30
	}
	if(clientIncomeRange.upper<75000){
		scores.ecommerce+=20
	}
//  industry 
	if(industry==="Hospitality"||industry==="Recreation"||industry==="Apparel"||industry==="Arts"||industry==="Manufacturing"||industry==="InformationTechnology"||industry==="HomeGoods"||industry==="Retail"){
			scores.ecommerce+=30
	}
//  more females
	scores.ecommerce+=(50-sexFemale)/2
// preexisting ecommerce
	if(currentAssets.includes('eCommerceStore')){
		scores.ecommerce-=150
	}
//  high traffic
	if(websiteTraffic){
		scores.ecommerce+=websiteTraffic/100	
	}
	








	this.modalContent = new ReactiveVar('');










// sort platforms
		 platformsSortable = [];
		for (var score in socialPlatforms) {
    
			if(socialPlatforms[score]!==Infinity&&!isNaN(socialPlatforms[score])&&socialPlatforms[score]!==undefined){
    platformsSortable.push([score, socialPlatforms[score]]);
   }

		}

		platformsSortable.sort(function(a, b) {
		    return a[1] - b[1];
		});

		var platformList = '';
		
		platformsSortable.forEach(function(e){

			platformList = platformList.concat('<li>'+e[0]+' ('+e[1]+')'+'</li>');

		});






	 email = {
		name: "Email Marketing",
		template: "EmailMarketing",
		description: "<p>Whether you're keeping in touch with preexisting clients or nurturing leads, email is extraordinarily cost effective. Inexpensive online apps permit you not only to retain your clients, schedule regular emails, and measure your conversion, they allow you comfortably abide in the otherwise sticky legal codes that protect consumers against spam.</p><p>If you're sending emails only occassionally to loyal customers, you'll be focusing on deals. By offering unique opportunities within a narrow time window, you'll keep your prospects engaged and eager to see each new email. Coupons, new products, and other promotions are a key element of a successful email strategy.</p><p>In any case, building an email list is part of the art of modern marketing. By delivering value on your webpage and driving traffic, it becomes a no-brainer to sign up for more of your valuable content. Especially for niche industries and those with high return business, email marketing is truly the holy grail.</p>",
		firstSteps: "<p>First off, you'll need to gather an email list. Sign up for a email service such as MailChimp or SendGrid and use their simple email soliciting code. (For common CMSs (like Wordpress) there are plugins that integrate with these services and allow more customization.) Place these soliciting forms on popular pages of your website (such as on each page of a blog) and minimize the use of annoying pop-ups.</p><p>Once you begin gathering emails from prospects and current clients, you'll need to generate content to actually send them. The best email marketing for B2C tends to be concise with a clear value proposition (often a coupon or promotion); the best option for B2B is a combination of the former with even shorter, personalized emails that ask a simple open-ended question for immediate follow-up with sales.</p><p>Once you've gathered a few hundred leads, you can begin to experiment further with time-sensitive promotions, ongoing campaigns, and informational emails that will build trust and sales.</p>",
		continued: "<p>In your email list client (e.g., MailChimp) you'll be able to easily A/B test to determine the most successful strategies. This requires some patience and perserverence to get the conversion rate up, hopefully towards the industry average of around 1% and beyond. With clever wording, we've been able to get conversions above 15%!</p><p>Once you start with email marketing, it really becomes a cinch. A personal, succinct email can deliver a value proposition in record time, conserving our limited attention spans and converting swaths of your thriving throng of prospects into veritable customers.</p><p>When you have a big-ticket sale, an email campaign is a great way to massage the clients with useful information and lower-priced leader products. In this case a little ingenuity is required to generate unique, valuable content and integration with drip marketing is a must.</p>",
		why: "<p>Email Marketing is priotized if:</p><ul><li>You're in Business Services or Charity</li><li>A modest bonus for Recreation, Apparel, Broadcasting, Education, Home Goods, Home Services, or Maintenance</li><li>If you have a high ratio of return business</li><li>If you do not currently have an email list</li><li>If your main demographics are not geriatric</li><li>If you do not currently have many collected data points about your email list</li><li>If your current email list converts highly</li><li>If you have a website but are not yet using landing pages</li><li>If you have high website traffic</li></ul>"
	}

	 website = {
		name: "Website Design",
		template: "WebsiteDesign",
		description: '<p>A website is venerated as the modern day storefront, business card, and salesman, all wrapped in one. While not necessarily the most important marketing tool for every business, it is often the most cost-effective long-term investment you can make. With <a href="https://www.forbes.com/sites/forbespr/2016/05/25/customers-like-to-research-online-but-make-big-purchases-in-stores-says-new-retailer-study/#c21a1cc244bb" target="_blank">more than 80% of customers researching online</a> before a purchase, your website is the medium that most of your customers will use to learn about your buiness.</p><p>More and more we are meeting with businesses that have established social media presences or referral-based businesses that hesitate to adopt a website for fear of maintenance. While websites do require a minimal amount of attentiveness to update, nothing compares to the visbility and concision of a properly executed site. Think of it: each referral receives a slightly different message about your company, each social media follower gains their insights from the last few posts. The website becomes the grand centralizing medium that homogenizes these expectations with a single, clear message that makes your value proposition and may even close the sale.</p><p>The website thus becomes an integral part of the modern sales cycle. As a foundation for future efforts such as building email lists, drip marketing, or promotional campaigns, the website is the quintessential first step for online engagement. If you\'re concerned about cost, design, or return on investment, read more and learn how we can prove the effectiveness of our websites to more than justify the initial investment.</p>',
		firstSteps: "<p>The incredible prevalence of business websites has generated a thriving marketing of web design options catered to you at any budget. On sites like Wix and Squarespace it is possible to build a highly customizable website with a drag-and-drop, WYSIWYG interface that, with a significant investment of your time, can yield a website matching your vision. For a small and local business, this is an ideal investment since the cost is very low and the time investment can be accomplished by even a minimally skilled employee.</p><p>Having a vision of the future and a grasp of good design principles are prerequisite to building a cost-effective site on these venues. Specifically, most \"website builders\" either have limited capacity to scale to future marketing endeavors, cost significantly more to \"upgrade\" for future campaigns, or the design suggestions can be ineffective or generic. Since the advent of print media, advertisers have developed a science and art of how to best appeal to consumers and, with the evolution of the web, this field has advanced miles away from the layperson. At the very least, if you design your website yourself you should investigate the essentials: calls to action, responsive mobile design, on-page search engine optimization, one-page one-purpose, and attention marketing.</p><p>Should you opt to have a professional design your site, the price range is generally from $800 to $3000 depending on the complexity of the site. If this sounds like a lot, consider that a single website has an essentially indefinite lifespan and will comfortably represent you as a modern business for at least three years. When we contract for websites, we occassionally negotiate small pay-per-lead clauses that allow companies to pay this sum based on the effectiveness of the website in generating revenue, proving its utility and permitting low upfront costs. When considering margin per your average client, how many sales would justify this expense?</p><p>The primary benefits of a professional design is the attention to detail and marketing science that is inaccessible to the layman, generating more sales. While self-designed websites have a low upfront cost, the vast majority of our clients who purchase professionally designed websites made that initially small investment only to be bamboozled by the escalating costs, the tremendous time drain, and the relative difficulty of balancing the myriad web design considerations themselves. If you're still considering your options, feel free to reach out to detemine if your website is better self-designed or otherwise.</p>",
		continued: "<p>Once you have a website, you can begin the ongoing process of improving your conversion. Foremost, it is essential to have some tangible goals that progress the sales cycle: gathering emails for email marketing, consent for drip marketing, product sales, or sales rep contact. As a rule, we must limit the options available to the prospects viewing these high-conversion pages using the traditional formula for a \"landing page\" which focused exclusively on providing the value proposition and converting the target.</p><p>Both landing pages and more general pages on the website can be optimized based on user preferences over time using a process called <em>A/B testing</em>. By randomly exposing different clients to different version of a webpage, we can track activity and determine which message/medium is most effective for your audience. This is an ongoing process that improves conversion over the course of months to years.</p><p>Other improvements to the website can improve conversion performance, specifically accelerating the loading speed, optimizing for mobile (to appear as a native app), and increased interactivity. Generally, all of these solutions needs to implemented by a professional web designer as they require nuanced hard-coding into the site, though it is possible to improve upon these features in a self-designed site up until a point.</p><p>Once your website is fully modernized and is approaching the constraints of the potential gains from optimization, it is time to consider a custom web app. A web app, while more expensive than a simple website, provides some useful service for your customers while simultaneously advancing your sales cycle. The simple app that provided this information is one such example: it prioritizes potential marketing tactics while simultaneously building confidence in our brand.</p>",
		why: "<p>Website Design is priotized if:</p><ul><li>You don't currently have a website</li><li>You're selling products</li><li>You have non-local distribution</li></ul>"
	}

	 payPerLead = {
		name: "Pay Per Lead",
		template: "PayPerLead",
		description: "<p>For big-ticket sales with high margins, it can be best to simply outsource your lead generation. This tactic is essentially a commission-based service that allows you to pay a portion of the new revenue brought in by our marketing services, guarnteeing that you maintain a positive ROI.</p><p>Most common in B2B services that offer complex solutions, the pay-per-lead strategy is a very safe and mutally rewarding agreement that is negotiated over a medium-term contract. There may or may not be the need to include upfront costs for the development of new online assets, depending on whether or not the new sales funnel instruments will be ceded on completion and the total scope of the development.</p><p>In this case particularly it is important to maintain close communication of the value proposition, campaign goals, potential promotional offers, and when sales are closed. Traditionally this is accomplished through coupon campaigns, affiliate links, and sales team referrals measured in a CRM. When we work closely together in this capacity, it is possible to improve conversions over time and increase both the quantity and quality of the leads generated.</p><p>This tactic may be adapted for product sales with the development of an affiliate program, another online asset that we can develop and extend broadly. Given the low overhead, this is an attractive direction for many companies that are in their early stages of growth but may cost more in the long-term when compared to simply contracting for more online assets. If such appeals, read on and get in contact: there are few companies aside from ours that offer this custom service!</p>",
		firstSteps: "<p>Foremost, we need to assign a reasonable marketing budget to determine the feasibility of the project. Based on your margin per sale, you can calculate an acceptable marketing expense that will protect your profit while bringing more volume. While it is difficult to anticipate the total volume of new sales brought on by the campaign, methods of verification can assure that all of the bought leads are from the new campaign and not preexisting assets.</p><p>Once you have a clear conception of your margin per sale that includes all of your operating expenses, you can approach an agency to negotiate the pay-per-lead (PPL) contract. The terms can be reduced to their essentialities: per lead provided by the agency, you pay a fixed amount that is a fraction of net margin per sale. Other common terms include expenses for developed marketing assets which will be the property of your company, the costs of advertising campaigns, or some fixed sum paid to the advertiser to fund early portions of the campaign.</p><p>You can obtain several quotes in this manner, although not all agencies offer pay-per-lead options due to the highly personalized nature of such a campaign. Some agencies operate exclusively within this domain, although they are typically industry-specific and gravitate toward B2B service-based solutions. Once you find a contract that is acceptable to you, you can finally execute and monitor the results.</p><p>With our PPL contracts, we generally build in benchmarks that allow termination of the program if it underperforms. In any case, it is important to reasonable metrics and expectations to measure the success of the campaign, particularly if any retainer is involved. Common benchmarks include the quantity of leads, guaranteed conversion into sales, and the development of sales funnel components. Consider it essential to include some term that allows for the termination of the contract under some mutually agreed upon conditions.</p>",
		continued: "<p>This goes without saying, but if the contract is not performing adequately you will want to submit some consideration to your partnering agency to indicate your interest in withdrawing (without breaching the contract). You can use this as a spur to improve the performance of your partners and, should they fail to improve for whatever reason, ultimately terminate the unprofitable agreement.</p><p>If your current contract is progressing well and meeting or exceeding projected growth, you will likely find yourself spending a little more money on the leads than if you were to simply to purchase the web assets directly. In this case, you can generate some competitors' proposals to renoegotiate your current contract. Be careful not to offend a successful partner, as such are a rarity and godsend.</p><p>The ultimate trajectory for a successful contract is a closer partnership. If you find that your agency is quite satisfied with the preexisting contract (a common occurrence), your leverage lies in your ability to extend the length of the contract, exclusivity agreements, eliminating some benchmarks, and increasing their retainer fees. These motivating terms can allow a looser relationship that still retains its commission-based approach and in turn permits more creativity on behalf of the agency, likely improving net profitability over the long-term.</p><p>A mutually successful program of this sort is key to developing a reliable outsourced marketing program. Given the low risk required to initiate such a contract and the potential for a dedicated marketing partner, this is the solution for businesses that understand the value of the division of labor.</p>",
		why: "<p>Pay Per Lead is priotized if:</p><ul><li>You sell services and not products</li><li>You operate as B2B rather than B2C</li><li>You have broad distribution</li><li>You have high return business</li><li>You have a large preexisting budget</li><li>You are in Business Services, Construction, Manufacturing, Information Technology, Broadcasting, Extraction, Legal, or Utilities</li></ul>"
	}

	 socialMedia = {
		name: "Social Media",
		template: "SocialMedia",
		description: "<p>Social media has emerged as one of the most cost-effective and targeted forms of modern advertisement. By buying ads from social media networks, you can use precision demographics and psychographics to deliver the perfect message to your ideal customer; by building a social media following, you can achieve wildyly inexpensive exposure over the long-term. These two strategies are complimentary, yet divergent, and both here are referred to as a social media tactic.</p><p>Myriad social networks exist with different, engaged demographics. As big of a question as if social media marketing is good for your company is precisely which social networks are best for you. (Fortunately, we've compiled the stats based on your information and those networks are prioritized on the next few pages.) When deciding on a network based on your target demographics matching the demographics of the user base, you're also buying into their system of paid advertising, posting style, and the implicit rules that get companies ahead on that specific network.</p><p>Given the two modalities of social media (advertising and posting), this is a tactic that can satisfy any budget or timeframe. This uniquely place social media as a viable strategy for most businesses of any size, especially for those with younger demographics and operating B2C. Read more to discover your company's best networks and a few tips on how to successfully execute a campaign in this hot marketplace for consumer attention.</p>",
		firstSteps: "<p>Before anything else, you need to claim your company's profiles on all of the networks. This is a small boon to SEO and secures your position for any further movement into the social media sphere, taking only few hours to complete. Place your best representative photos and graphics on your profiles as well as brief descriptions of how your operate, what you offer, and how your company is beneficial to society on the whole.</p><p>Next we'll investigate the best networks to focus on. The following list of networks has been compiled based on the data you provided, presented in order of worst to best (within out proprietary point system):</p><ul>"+platformList+"</ul><p>After examining this list, it's time to decide your timing: will you take the longview, the shortgame, or both? Social media posting can attract attention after months, particularly if you're generating quality content, and the costs are generally lower (especially if done in house). Social media advertising, on the other hand, reaps its rewards immediately and is generally the best way to drive immediate traffic as well as benefit from the exposure effect. Yet, the cost of long-term advertising is generally prohibitive, depending on the network, the esotericity of the market, and the budget you can afford. A combination of the two is generally warranted: an initial advertising campaign followed by regular posting, occassionally runnning additional campaigns to build a greater organic following.</p>",
		continued: "<p>The ongoing success of the social media tactic is invariably about content. Whether or not its paid or organic, the quality and quantity of content you can provide will determine the efficacy of any given marketing and it becomes essential to remember our modern marketing maxim: <b>Content is King</b>.</p><p>There are several kinds of content that you'll want to explore. For the more short-form paid advertisments, you'll want catchy and succinct slogans that propose an open question (i.e., your customer's problem) followed by a clever answer (i.e., your company's solution). This simple scheme is an effective way to utilize the limited attention of those who will only glance your advertisement in passing as they make there way to the content of their friends. Short videos and provocative images go a long way in enhancing this effect, giving your ad a few more seconds of attention in a crowded marketplace.</p><p>Organic content in normal posting should still adhere to this formula, although the prospects reading this content are better vetted since they initially consented to follow your content. In this case, the value of offering effective, free information is the best route. If you can provide some tip, trick, or how-to in the brief span of a meme or short video, this will build faith in your brand and increase the scrolling time of each prospect on your page. This strategy, combined with the more infrequent calls-to-action that define paid approach, is a winning manuever that is sure to drive long-term success.</p><p>One final word here on the importance of authenticity. Social media is bringing a new dawn of interconnectiveness in which many people feel intimate friendships with folks they have never encountered in actuality. Especially in organic posting, revealing and personal anecdotes about you, your employees, and your clients can drastically improve customer loyalty and the probability of advocacy/referral. While this humanizing tactic feels uncomfortable for some of us who grew up in an era of billboard and newspaper advertising, it is effective across generations and has an enduring effect on public perception.</p>",
		why: "<p>Social Media is prioritized if:</p><ul><li>You operate a B2C business and not a B2B one</li><li>You have local distribution</li><li>Your primary demograpgic is not geriatric</li><li>You're in one of the following industries: Food, Hospitality, Recreation, Apparel, Arts, Broadcasting, Home Goods, Charity, Retail, Real Estate, or Home Services</li><li>You're not in one of the following industries: Business Services, Insurance, Finance, or Extraction</li><li>You have low website traffic or high inorganic traffic</li></ul><p>Your specific network reccomendations are best upon the most current age, sex, industry, and income demographcs of those networks.</p>"
	}

	let security = {
		name: "Security",
		template: "Security",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let seo = {
		name: "Search Engine Optimization",
		template: "SEO",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let local = {
		name: "Local Marketing",
		template: "LocalMarketing",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let automation = {
		name: "Drip Marketing",
		template: "DripMarketing",
		description: "<p>Whether you're keeping in touch with preexisting clients or nurturing leads, email is extraordinarily cost effective. Inexpensive online apps permit you not only to retain your clients, schedule regular emails, and measure your conversion, they allow you comfortably abide in the otherwise sticky legal codes that protect consumers against spam.</p><p>If you're sending emails only occassionally to loyal customers, you'll be focusing on deals. By offering unique opportunities within a narrow time window, you'll keep your prospects engaged and eager to see each new email. Coupons, new products, and other promotions are a key element of a successful email strategy.<p>When you have a big-ticket sale, an email campaign is a great way to massage the clients with useful information and lower-priced leader products. In this case a little ingenuity is required to generate unique, valuable content and integration with drip marketing is a must.</p><p>In any case, building an email list is part of the art of modern marketing. By delivering value on your webpage and driving traffic, it becomes a no-brainer to sign up for more of your valuable content. Especially for niche industries and those with high return business, email marketing is truly the holy grail.</p><p>Once you start with email marketing, it really becomes a cinch. A personal, succinct email can deliver a value proposition in record time, conserving our limited attention spans and converting swaths of your thriving throng of prospects into veritable customers.</p>",
		firstSteps: "<p>focusing on deals. By offering unique opportunities within a narrow time window, you'll keep your prospects engaged and eager to see each new email. Coupons, new products, and other promotions are a key element of a successful email strategy.<p>When you have a big-ticket sale, an email campaign is a great way to massage the clients with useful information and lower-priced leader products. In this case </p>",
		continued: "<p>focusing on deals. By offering unique opportunities within a narrow time window, you'll keep your prospects engaged and eager to see each new email. Coupons, new products, and other promotions are a key element of a successful email strategy.<p>When you have a big-ticket sale, an email campaign is a great way to massage the clients with useful information and lower-priced leader products. In this case </p>",
		why: "<p>focusing on deals. By offering unique opportunities within a narrow time window, you'll keep your prospects engaged and eager to see each new email. Coupons, new products, and other promotions are a key element of a successful email strategy.<p>When you have a big-ticket sale, an email campaign is a great way to massage the clients with useful information and lower-priced leader products. In this case </p>"
	}

	let reputation = {
		name: "Reputation Management",
		template: "ReputationManagement",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let maintenance = {
		name: "Maintenance and Tune Up",
		template: "Maintenance",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let presentation = {
		name: "Presentation",
		template: "Presentation",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let crm = {
		name: "CRM / ERP",
		template: "CRM_ERP",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let research = {
		name: "Market Research",
		template: "MarketResearch",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let apps = {
		name: "Apps",
		template: "Apps",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let ecommerce = {
		name: "eCommerce",
		template: "eCommerce",
		description: "<p>Whether you're keeping in touch with preexisting clients or nurturing leads, email is extraordinarily cost effective. Inexpensive online apps permit you not only to retain your clients, schedule regular emails, and measure your conversion, they allow you comfortably abide in the otherwise sticky legal codes that protect consumers against spam.</p><p>If you're sending emails only occassionally to loyal customers, you'll be focusing on deals. By offering unique opportunities within a narrow time window, you'll keep your prospects engaged and eager to see each new email. Coupons, new products, and other promotions are a key element of a successful email strategy.<p>When you have a big-ticket sale, an email campaign is a great way to massage the clients with useful information and lower-priced leader products. In this case a little ingenuity is required to generate unique, valuable content and integration with drip marketing is a must.</p><p>In any case, building an email list is part of the art of modern marketing. By delivering value on your webpage and driving traffic, it becomes a no-brainer to sign up for more of your valuable content. Especially for niche industries and those with high return business, email marketing is truly the holy grail.</p><p>Once you start with email marketing, it really becomes a cinch. A personal, succinct email can deliver a value proposition in record time, conserving our limited attention spans and converting swaths of your thriving throng of prospects into veritable customers.</p>",
		firstSteps: "",
		continued: "",
		why: ""
	}







// sort scores
		var scoresSortable = [];
		for (var score in scores) {
    
			if(scores[score]!==Infinity&&!isNaN(scores[score])&&scores[score]!==undefined){
    scoresSortable.push([score, scores[score]]);
   }

		}

		scoresSortable.sort(function(a, b) {
		    return a[1] - b[1];
		});

			let scoresLength = scoresSortable.length;	

			this.first = new ReactiveVar( eval(scoresSortable[scoresLength-1][0]) );
			this.second = new ReactiveVar( eval(scoresSortable[scoresLength-2][0]) );
			this.third = new ReactiveVar( eval(scoresSortable[scoresLength-3][0]) );
			this.fourth = new ReactiveVar( eval(scoresSortable[scoresLength-4][0]) );






});//end onCreated



Template.tactics.onRendered(function(){
	 $(document).ready(function(){
   $('ul.tabs').tabs();
   $('.modal').modal();

  
		var granimInstanceTactics = new Granim({
		 element: '#finalSection',
		 name: 'radial-gradient',
		 direction: 'radial',
		 opacity: [.5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5, .5],
		 isPausedWhenNotInView: true,
		 defaultStateName: 'spiral',
		 states : {
		  "spiral": {
		   gradients: [
		    ['#aa0000','#330033','#b7b512', '#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000', '#330033', '#b7b512','#aa0000'],  
		    ['#330033','#b7b512','#aa0000', '#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033', '#b7b512', '#aa0000','#330033'],  
		    ['#b7b512','#aa0000','#330033', '#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512', '#aa0000', '#330033','#b7b512']
		   ],
		   transitionSpeed: 4000,
		   loop: true
		  }

   }
  });
	});
});

Template.tactics.rendered = function() {
 $('#tactics').fullpage({
   verticalCentered: false,
   scrollOverflow: false,
    anchors: ['4th', '3rd', '2nd', '1st', 'bonus'],
    normalScrollElements: '.modal-content'
 });


}


Template.tactics.events({

	'click .longText': function(e,t){

		var title = $(e.target).parents('.longText').siblings('h3')[0];
		var content = $(e.target).parents('.longText')[0];
		if(title==undefined){
			title = '<h3>Description</h3>';
			var contentStr = title+content.outerHTML;
		}else{
			var contentStr = title.outerHTML+content.outerHTML;
		}
		
		t.modalContent.set(contentStr);

		$('#modal').modal('open');
		
	}

});




Template.tactics.helpers({

	first: function(e,t){
		return Template.instance().first.get();
	},
	second: function(e,t){
		return Template.instance().second.get();
	},
	third: function(e,t){
		return Template.instance().third.get();
	},
	fourth: function(e,t){
		return Template.instance().fourth.get();
	},
	fourthTemplate: function(e,t){
		return Template.instance().fourth.get().template;
	},
	thirdTemplate: function(e,t){
		return Template.instance().third.get().template;
	},
	secondTemplate: function(e,t){
		return Template.instance().second.get().template;
	},
	firstTemplate: function(e,t){
		return Template.instance().first.get().template;
	},
	modalContent: function(e,t){
		return Spacebars.SafeString(Template.instance().modalContent.get());
	}

});