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

	var	socialPlatforms = {
				pinterest: 0,
				facebook: 0,
				instagram: 0,
				reddit: 0,
				linkedin: 0,
				youtube: 0,
				twitter: 0
			}


	let email = {
		name: "Email Marketing",
		template: "EmailMarketing",
		description: "<p>Whether you're keeping in touch with preexisting clients or nurturing leads, email is extraordinarily cost effective. Inexpensive online apps permit you not only to retain your clients, schedule regular emails, and measure your conversion, they allow you comfortably abide in the otherwise sticky legal codes that protect consumers against spam.</p><p>If you're sending emails only occassionally to loyal customers, you'll be focusing on deals. By offering unique opportunities within a narrow time window, you'll keep your prospects engaged and eager to see each new email. Coupons, new products, and other promotions are a key element of a successful email strategy.<p>When you have a big-ticket sale, an email campaign is a great way to massage the clients with useful information and lower-priced leader products. In this case a little ingenuity is required to generate unique, valuable content and integration with drip marketing is a must.</p><p>In any case, building an email list is part of the art of modern marketing. By delivering value on your webpage and driving traffic, it becomes a no-brainer to sign up for more of your valuable content. Especially for niche industries and those with high return business, email marketing is truly the holy grail.</p><p>Once you start with email marketing, it really becomes a cinch. A personal, succinct email can deliver a value proposition in record time, conserving our limited attention spans and converting swaths of your thriving throng of prospects into veritable customers.</p>",
		firstSteps: "<p> focusing on deals. By offering unique opportunities within a narrow time window, you'll keep your prospects engaged and eager to see each new email. Coupons, new products, and other promotions are a key element of a successful email strategy.<p>When you have a big-ticket sale, an email campaign is a great way to massage the clients with useful information and lower-priced leader products. In this case </p>",
		continued: "<p> focusing on deals. By offering unique opportunities within a narrow time window, you'll keep your prospects engaged and eager to see each new email. Coupons, new products, and other promotions are a key element of a successful email strategy.<p>When you have a big-ticket sale, an email campaign is a great way to massage the clients with useful information and lower-priced leader products. In this case </p>",
		why: "<p>focusing on deals. By offering unique opportunities within a narrow time window, you'll keep your prospects engaged and eager to see each new email. Coupons, new products, and other promotions are a key element of a successful email strategy.<p>When you have a big-ticket sale, an email campaign is a great way to massage the clients with useful information and lower-priced leader products. In this case </p>"
	}

	let website = {
		name: "Email Marketing",
		template: "WebsiteDesign",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let payPerLead = {
		name: "Email Marketing",
		template: "PayPerLead",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let socialMedia = {
		name: "Email Marketing",
		template: "SocialMedia",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let security = {
		name: "Email Marketing",
		template: "Security",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let seo = {
		name: "Email Marketing",
		template: "SEO",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let local = {
		name: "Email Marketing",
		template: "LocalMarketing",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let automation = {
		name: "Email Marketing",
		template: "DripMarketing",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let reputation = {
		name: "Email Marketing",
		template: "ReputationManagement",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let maintenance = {
		name: "Email Marketing",
		template: "Maintenance",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let presentation = {
		name: "Email Marketing",
		template: "Presentation",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let crm = {
		name: "Email Marketing",
		template: "CRM_ERP",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let research = {
		name: "Email Marketing",
		template: "MarketResearch",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let apps = {
		name: "Email Marketing",
		template: "Apps",
		description: "",
		firstSteps: "",
		continued: "",
		why: ""
	}

	let ecommerce = {
		name: "Email Marketing",
		template: "eCommerce",
		description: "<p>Whether you're keeping in touch with preexisting clients or nurturing leads, email is extraordinarily cost effective. Inexpensive online apps permit you not only to retain your clients, schedule regular emails, and measure your conversion, they allow you comfortably abide in the otherwise sticky legal codes that protect consumers against spam.</p><p>If you're sending emails only occassionally to loyal customers, you'll be focusing on deals. By offering unique opportunities within a narrow time window, you'll keep your prospects engaged and eager to see each new email. Coupons, new products, and other promotions are a key element of a successful email strategy.<p>When you have a big-ticket sale, an email campaign is a great way to massage the clients with useful information and lower-priced leader products. In this case a little ingenuity is required to generate unique, valuable content and integration with drip marketing is a must.</p><p>In any case, building an email list is part of the art of modern marketing. By delivering value on your webpage and driving traffic, it becomes a no-brainer to sign up for more of your valuable content. Especially for niche industries and those with high return business, email marketing is truly the holy grail.</p><p>Once you start with email marketing, it really becomes a cinch. A personal, succinct email can deliver a value proposition in record time, conserving our limited attention spans and converting swaths of your thriving throng of prospects into veritable customers.</p>",
		firstSteps: "",
		continued: "",
		why: ""
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
if(!usingLandingPages[0]){
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
			socialPlatforms.pinterest+=20
	}
//  high income
	if(idealIncome>75000){
		socialPlatforms.pinterest-=10
	}
//  women
	socialPlatforms.pinterest+=sexFemale*.6
//  age
	if(12<idealAge&&idealAge<40){
		socialPlatforms.pinterest+=10
	}
	if(12<ageDemographic.lower&&ageDemographic.upper<40){
		socialPlatforms.pinterest+=20
	}
//
//		Facebook
//
//  women
	socialPlatforms.facebook+=sexFemale*.4
//  age
	if(20<idealAge&&idealAge<40){
		socialPlatforms.facebook+=10
	}
	if(20<ageDemographic.lower&&ageDemographic.upper<40){
			socialPlatforms.facebook+=20
	}
//
//  Instagram
//
//  industry
	if(industry==="Food"||industry==="Hospitality"||industry==="Recreation"||industry==="Apparel"||industry==="Arts"||industry==="Broadcasting"||industry==="HomeGoods"||industry==="Charity"||industry==="Retail"||industry==="RealEstate"||industry==="Recreation"){
			socialPlatforms.instagram+=20
	}
//  high income
	if(idealIncome>75000){
		socialPlatforms.instagram-=30
	}
//  women
	socialPlatforms.instagram+=sexFemale*.5
//  age
	if(18<idealAge&&idealAge<29){
		socialPlatforms.instagram+=10
	}
	if(18<ageDemographic.lower&&ageDemographic.upper<29){
			socialPlatforms.instagram+=20
	}
//
//  Reddit
//
//  high income
	if(idealIncome>75000){
		socialPlatforms.reddit-=30
	}
//  men
	socialPlatforms.reddit+=100-sexFemale*.75
//  age
	if(18<idealAge&&idealAge<40){
		socialPlatforms.reddit+=10
	}
	if(18<ageDemographic.lower&&ageDemographic.upper<40){
			socialPlatforms.reddit+=20
	}
//
//  LinkedIn
//
//  high income
	if(idealIncome>75000){
		socialPlatforms.linkedin+=30
	}
//  men
	socialPlatforms.linkedin+=100-sexFemale*.5
//  age
	if(18<idealAge&&idealAge<40){
		socialPlatforms.linkedin+=10
	}
	if(18<ageDemographic.lower&&ageDemographic.upper<40){
			socialPlatforms.linkedin+=20
	}
//
//  YouTube
//
//  men
	socialPlatforms.youtube+=100-sexFemale*.5
//  age
	if(18<idealAge&&idealAge<34){
		socialPlatforms.youtube+=10
	}
	if(18<ageDemographic.lower&&ageDemographic.upper<34){
			socialPlatforms.youtube+=20
	}
	if(idealAge>64){
		socialPlatforms.youtube-=40
	}
//
//  Twitter
//
//  age
	if(15<idealAge&&idealAge<17){
		socialPlatforms.twitter+=50
	}
	if(17<idealAge&&idealAge<29){
		socialPlatforms.twitter+=20
	}
	if(18<ageDemographic.lower&&ageDemographic.upper<29){
			socialPlatforms.twitter+=20
	}
	if(idealAge>49){
		socialPlatforms.twitter-=30
	}
	if(idealAge>64){
		socialPlatforms.twitter-=50
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
	if(socialMediaPlatforms.length>3){
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
//  high website conversion
	if(websiteConversion>20){
		scores.automation+=20
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
	if(currentAssets.includes('ecommerce')){
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
	if(currentAssets.includes('ecommerceStore')){
		scores.ecommerce-=150
	}
//  high traffic
	scores.ecommerce+=websiteTraffic/100






// sort scores
		var sortable = [];
		for (var score in scores) {
		    sortable.push([score, scores[score]]);
		}

		sortable.sort(function(a, b) {
		    return a[1] - b[1];
		});

		if(scores){
			let scoresLength = Object.keys(scores).length;	

			this.first = new ReactiveVar( eval(sortable[scoresLength-1][0]) );
			this.second = new ReactiveVar( eval(sortable[scoresLength-2][0]) );
			this.third = new ReactiveVar( eval(sortable[scoresLength-3][0]) );
			this.fourth = new ReactiveVar( eval(sortable[scoresLength-4][0]) );

	}
});



Template.tactics.onRendered(function(){
	 $(document).ready(function(){
    $('ul.tabs').tabs();
  });
});

Template.tactics.rendered = function() {
 $('#tactics').fullpage({
   verticalCentered: false,
   scrollOverflow: false,
    anchors: ['4th', '3rd', '2nd', '1st', 'bonus']
 });
}







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
	}

});