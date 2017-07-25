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
		scores.reputation+=20
	}
//  geriatric
	if(idealAge>64){
		scores.reputation-=10
	}
//  industry
	if(industry==="Food"||industry==="Hospitality"||industry==="Recreation"||industry==="Arts"||industry==="Agriculture"||industry==="HomeGoods"||industry==="Legal"||industry==="Charity"||industry==="Retail"||industry==="HomeServices"||industry==="RealEstate"||industry==="Maintenance"||industry==="Education"||industry==="Extraction"||industry==="Manufacturing"){
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
			scores.presentation-=10
		}
//  high margin
	if(marginPerCustomer>50){
		scores.presentation+=20
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

	 platformList = '';
		
		platformsSortable.forEach(function(e){

			platformList = platformList.concat('<li>'+e[0]+' ('+e[1]+')'+'</li>');

		});






	 email = {
		name: "Email Marketing",
		template: "EmailMarketing",
		description: "<p>Whether you're keeping in touch with preexisting clients or nurturing leads, email is extraordinarily cost effective. Inexpensive online apps permit you not only to retain your clients, schedule regular emails, and measure your conversion, they allow you comfortably abide in the otherwise sticky legal codes that protect consumers against spam.</p><p>If you're sending emails only occasionally to loyal customers, you'll be focusing on deals. By offering unique opportunities within a narrow time window, you'll keep your prospects engaged and eager to see each new email. Coupons, new products, and other promotions are a key element of a successful email strategy.</p><p>In any case, building an email list is part of the art of modern marketing. By delivering value on your webpage and driving traffic, it becomes a no-brainer to sign up for more of your valuable content. Especially for niche industries and those with high return business, email marketing is truly the holy grail.</p>",
		firstSteps: "<p>First off, you'll need to gather an email list. Sign up for a email service such as MailChimp or SendGrid and use their simple email soliciting code. (For common CMSs (like Wordpress) there are plugins that integrate with these services and allow more customization.) Place these soliciting forms on popular pages of your website (such as on each page of a blog) and minimize the use of annoying pop-ups.</p><p>Once you begin gathering emails from prospects and current clients, you'll need to generate content to actually send them. The best email marketing for B2C tends to be concise with a clear value proposition (often a coupon or promotion); the best option for B2B is a combination of the former with even shorter, personalized emails that ask a simple open-ended question for immediate follow-up with sales.</p><p>Once you've gathered a few hundred leads, you can begin to experiment further with time-sensitive promotions, ongoing campaigns, and informational emails that will build trust and sales.</p>",
		continued: "<p>In your email list client (e.g., MailChimp) you'll be able to easily A/B test to determine the most successful strategies. This requires some patience and perseverance to get the conversion rate up, hopefully towards the industry average of around 1% and beyond. With clever wording, we've been able to get conversions above 15%!</p><p>Once you start with email marketing, it really becomes a cinch. A personal, succinct email can deliver a value proposition in record time, conserving our limited attention spans and converting swaths of your thriving throng of prospects into veritable customers.</p><p>When you have a big-ticket sale, an email campaign is a great way to massage the clients with useful information and lower-priced leader products. In this case a little ingenuity is required to generate unique, valuable content and integration with drip marketing is a must.</p>",
		why: "<p>Email Marketing is prioritized if:</p><ul><li>You're in Business Services or Charity</li><li>A modest bonus for Recreation, Apparel, Broadcasting, Education, Home Goods, Home Services, or Maintenance</li><li>If you have a high ratio of return business</li><li>If you do not currently have an email list</li><li>If your main demographics are not geriatric</li><li>If you do not currently have many collected data points about your email list</li><li>If your current email list converts highly</li><li>If you have a website but are not yet using landing pages</li><li>If you have high website traffic</li></ul>"
	}

	 website = {
		name: "Website Design",
		template: "WebsiteDesign",
		description: '<p>A website is venerated as the modern day storefront, business card, and salesman, all wrapped in one. While not necessarily the most important marketing tool for every business, it is often the most cost-effective long-term investment you can make. With <a href="https://www.forbes.com/sites/forbespr/2016/05/25/customers-like-to-research-online-but-make-big-purchases-in-stores-says-new-retailer-study/#c21a1cc244bb" target="_blank">more than 80% of customers researching online</a> before a purchase, your website is the medium that most of your customers will use to learn about your business</p><p>More and more we are meeting with businesses that have established social media presences or referral-based businesses that hesitate to adopt a website for fear of maintenance. While websites do require a minimal amount of attentiveness to update, nothing compares to the visibility and concision of a properly executed site. Think of it: each referral receives a slightly different message about your company, each social media follower gains their insights from the last few posts. The website becomes the grand centralizing medium that homogenizes these expectations with a single, clear message that makes your value proposition and may even close the sale.</p><p>The website thus becomes an integral part of the modern sales cycle. As a foundation for future efforts such as building email lists, drip marketing, or promotional campaigns, the website is the quintessential first step for online engagement. If you\'re concerned about cost, design, or return on investment, read more and learn how we can prove the effectiveness of our websites to more than justify the initial investment.</p>',
		firstSteps: "<p>The incredible prevalence of business websites has generated a thriving marketing of web design options catered to you at any budget. On sites like Wix and Squarespace it is possible to build a highly customization website with a drag-and-drop, WYSIWYG interface that, with a significant investment of your time, can yield a website matching your vision. For a small and local business, this is an ideal investment since the cost is very low and the time investment can be accomplished by even a minimally skilled employee.</p><p>Having a vision of the future and a grasp of good design principles are prerequisite to building a cost-effective site on these venues. Specifically, most \"website builders\" either have limited capacity to scale to future marketing endeavors, cost significantly more to \"upgrade\" for future campaigns, or the design suggestions can be ineffective or generic. Since the advent of print media, advertisers have developed a science and art of how to best appeal to consumers and, with the evolution of the web, this field has advanced miles away from the layperson. At the very least, if you design your website yourself you should investigate the essentials: calls to action, responsive mobile design, on-page search engine optimization, one-page one-purpose, and attention marketing.</p><p>Should you opt to have a professional design your site, the price range is generally from $800 to $3000 depending on the complexity of the site. If this sounds like a lot, consider that a single website has an essentially indefinite lifespan and will comfortably represent you as a modern business for at least three years. When we contract for websites, we occasionally negotiate small pay-per-lead clauses that allow companies to pay this sum based on the effectiveness of the website in generating revenue, proving its utility and permitting low upfront costs. When considering margin per your average client, how many sales would justify this expense?</p><p>The primary benefits of a professional design is the attention to detail and marketing science that is inaccessible to the layman, generating more sales. While self-designed websites have a low upfront cost, the vast majority of our clients who purchase professionally designed websites made that initially small investment only to be bamboozled by the escalating costs, the tremendous time drain, and the relative difficulty of balancing the myriad web design considerations themselves. If you're still considering your options, feel free to reach out to determine if your website is better self-designed or otherwise.</p>",
		continued: "<p>Once you have a website, you can begin the ongoing process of improving your conversion. Foremost, it is essential to have some tangible goals that progress the sales cycle: gathering emails for email marketing, consent for drip marketing, product sales, or sales rep contact. As a rule, we must limit the options available to the prospects viewing these high-conversion pages using the traditional formula for a \"landing page\" which focused exclusively on providing the value proposition and converting the target.</p><p>Both landing pages and more general pages on the website can be optimized based on user preferences over time using a process called \"A/B testing\". By randomly exposing different clients to different version of a webpage, we can track activity and determine which message/medium is most effective for your audience. This is an ongoing process that improves conversion over the course of months to years.</p><p>Other improvements to the website can improve conversion performance, specifically accelerating the loading speed, optimizing for mobile (to appear as a native app), and increased interactivity. Generally, all of these solutions needs to implemented by a professional web designer as they require nuanced hard-coding into the site, though it is possible to improve upon these features in a self-designed site up until a point.</p><p>Once your website is fully modernized and is approaching the constraints of the potential gains from optimization, it is time to consider a custom web app. A web app, while more expensive than a simple website, provides some useful service for your customers while simultaneously advancing your sales cycle. The simple app that provided this information is one such example: it prioritizes potential marketing tactics while simultaneously building confidence in our brand.</p>",
		why: "<p>Website Design is priotized if:</p><ul><li>You don't currently have a website</li><li>You're selling products</li><li>You have non-local distribution</li></ul>"
	}

	 payPerLead = {
		name: "Pay Per Lead",
		template: "PayPerLead",
		description: "<p>For big-ticket sales with high margins, it can be best to simply outsource your lead generation. This tactic is essentially a commission-based service that allows you to pay a portion of the new revenue brought in by our marketing services, guaranteeing that you maintain a positive ROI.</p><p>Most common in B2B services that offer complex solutions, the pay-per-lead strategy is a very safe and mutually rewarding agreement that is negotiated over a medium-term contract. There may or may not be the need to include upfront costs for the development of new online assets, depending on whether or not the new sales funnel instruments will be ceded on completion and the total scope of the development.</p><p>In this case particularly it is important to maintain close communication of the value proposition, campaign goals, potential promotional offers, and when sales are closed. Traditionally this is accomplished through coupon campaigns, affiliate links, and sales team referrals measured in a CRM. When we work closely together in this capacity, it is possible to improve conversions over time and increase both the quantity and quality of the leads generated.</p><p>This tactic may be adapted for product sales with the development of an affiliate program, another online asset that we can develop and extend broadly. Given the low overhead, this is an attractive direction for many companies that are in their early stages of growth but may cost more in the long-term when compared to simply contracting for more online assets. If such appeals, read on and get in contact: there are few companies aside from ours that offer this custom service!</p>",
		firstSteps: "<p>Foremost, we need to assign a reasonable marketing budget to determine the feasibility of the project. Based on your margin per sale, you can calculate an acceptable marketing expense that will protect your profit while bringing more volume. While it is difficult to anticipate the total volume of new sales brought on by the campaign, methods of verification can assure that all of the bought leads are from the new campaign and not preexisting assets.</p><p>Once you have a clear conception of your margin per sale that includes all of your operating expenses, you can approach an agency to negotiate the pay-per-lead (PPL) contract. The terms can be reduced to their essentials: per lead provided by the agency, you pay a fixed amount that is a fraction of net margin per sale. Other common terms include expenses for developed marketing assets which will be the property of your company, the costs of advertising campaigns, or some fixed sum paid to the advertiser to fund early portions of the campaign.</p><p>You can obtain several quotes in this manner, although not all agencies offer pay-per-lead options due to the highly personalized nature of such a campaign. Some agencies operate exclusively within this domain, although they are typically industry-specific and gravitate toward B2B service-based solutions. Once you find a contract that is acceptable to you, you can finally execute and monitor the results.</p><p>With our PPL contracts, we generally build in benchmarks that allow termination of the program if it underperforms. In any case, it is important to reasonable metrics and expectations to measure the success of the campaign, particularly if any retainer is involved. Common benchmarks include the quantity of leads, guaranteed conversion into sales, and the development of sales funnel components. Consider it essential to include some term that allows for the termination of the contract under some mutually agreed upon conditions.</p>",
		continued: "<p>This goes without saying, but if the contract is not performing adequately you will want to submit some consideration to your partnering agency to indicate your interest in withdrawing (without breaching the contract). You can use this as a spur to improve the performance of your partners and, should they fail to improve for whatever reason, ultimately terminate the unprofitable agreement.</p><p>If your current contract is progressing well and meeting or exceeding projected growth, you will likely find yourself spending a little more money on the leads than if you were to simply to purchase the web assets directly. In this case, you can generate some competitors' proposals to renegotiate your current contract. Be careful not to offend a successful partner, as such are a rarity and godsend.</p><p>The ultimate trajectory for a successful contract is a closer partnership. If you find that your agency is quite satisfied with the preexisting contract (a common occurrence), your leverage lies in your ability to extend the length of the contract, exclusivity agreements, eliminating some benchmarks, and increasing their retainer fees. These motivating terms can allow a looser relationship that still retains its commission-based approach and in turn permits more creativity on behalf of the agency, likely improving net profitability over the long-term.</p><p>A mutually successful program of this sort is key to developing a reliable outsourced marketing program. Given the low risk required to initiate such a contract and the potential for a dedicated marketing partner, this is the solution for businesses that understand the value of the division of labor.</p>",
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
		description: "<p>When your business has invested thousands in online assets, the security of your investments becomes an increasingly profitable motive. Because of the fast-moving world of technological integration, software development, and telecommunications, it has become similarly profitable for hackers to trawl the web for easy backdoors that allow them access to your sensitive assets. Fortunately, it is fairly simple to keep two steps ahead of the hackers.</p><p>More than anything, proper security involves maintaining up-to-date software and isolating certain operations into tighter security. There are three primary modes of attack: network attacks, access hacks, and personnel breaches. Each of these has an individual approach that can be easily adapted to your budget, size, and other specificities.</p><p>While there is some significant ongoing effort to maintain excellent security (primarily updating and checking logs), the initial effort can be simple and succinct. The low overhead of these efforts combined with the value of your preexisting assets results in a net profit for your company, according to the information you've provided to our system.</p>",
		firstSteps: "<p>The following advice is extraordinarily valuable: many consulting companies operate these entire businesses performing these following steps. For your convenience, they will be presented in order of the ease of their execution combined with their importance for protection.</p><p>Foremost, the majority of \"hacks\" are not that at all: they are security breaches from former or current personnel For this reason, it is critical to restrict financial information, server access, and operational control only a strict need-to-know basis with different passwords and two-factor authentication (2FA). In ERPs and CRMs, it is essential to carefully select the access for each user, to maintain a log of all changes (which is also easily implemented on websites), and to immediately rescind the access of former employees. </p><p>Secondly, we will discuss the best implementation to protect against network attacks. The vast majority of these are direct denial of service attacks (DDoS) which are very resource intensive for both hackers and businesses, thus making them a battle of attrition. In this respect, a large and well-endowed company that can redirect this fraudulent traffic (such as Cloudflare) is your best friend. This kind of protection, when combined with DNS failover, can protect your company against even the largest of these attacks.</p><p>Lastly, some sophisticated hackers will attempt to access your servers directly. This can generally be protected by keeping all software (both server-side and client-side) completely up-to-date. Additionally, there are several protections available via firewalls, intermediate routers, and rootkit detectors, though these generally need to be carefully implemented by a networking professional such as our company.</p>",
		continued: "<p>While aforementioned, it is key to remember to update all software, rescind unnecessary access, and maintain access logs on all assets. These logs particularly deserve regular and preventative inspection if you are to actively prevent hacks and data loss.</p><p>As the logs grow in size, this becomes an increasingly Sisyphean task that necessitates outsourcing. A sophisticated programmer can include myriad alerts and lockouts that will ease the difficulty of this task and permit you an assured sense of security. Generally, such security companies will attempt a contracted retainer which should include the various guarantees that should cause them to assume responsibility for your data.</p><p>While such partnerships should exonerate you from security concerns, it remains critical to monitor the success of such a contract (as any business partnership). You can do this with minimal effort by monitoring the most sensitive aspects of your enterprise yourself, inquiring about any unprecedented access or data transfer.</p><p>No doubt the intention is to prevent any breaches, yet should you find yourself in a situation in which a crisis has occurred, you will be remissed should you not have comprehensive and frequent backups. This can be set up by a professional cheaply and quickly.</p>",
		why: "<p>Security is prioritized if:</p><ul><li>You have a large preexisting budget</li><li>You're in Finance, Legal, Information Technology, Charity, Healthcare, Science, or Utilities</li><li>You have a large total investment</li><li>You rated your assets as less secure</li><li>You have high website traffic</li><li>You have many social media accounts</li></ul>"
	}

	let seo = {
		name: "Search Engine Optimization",
		template: "SEO",
		description: "<p>Search Engine Optimization (SEO) is the process of improving your ranking on major search engines such as Google, Bing, and Yahoo!. This is an important and long-term investment into a kind of advertising that, over the long-run, will yield thousands of leads without any further investment. Any user of Google can appreciate the value of \"coming up first\" in a search and studies show that more than two thirds of search traffic ends up in the first three results.</p><p>The mechanism of accomplishing this desirable end is the gradual construction of thousands of links from other websites to your own. These \"banklinks\" come in myriad forms, from paid to \"organic\" links to you valuable content, but in any case they must be acquired in a balance of \"whitehat\" (i.e., low-risk) and \"blackhat\" (i.e., high-risk) methods. A careful balance of these methods can accelerate your SEO building or an exclusively whitehat approach can achieve similar results over a longer time period.</p><p>Since SEO strategies do not yield results until they have placed you on the first page of a popular search term, they should be approached cautiously and realistically from an ROI-oriented perspective. Such a tactic necessitates a monthly retainer and may have a buyback period of years unless your relevant searches are low-hanging fruit. If you have the budget and patience, however, the fruition of such a tactic can mean innumerable leads for years to come with little cost in maintaining the dominant position.</p>",
		firstSteps: "<p>We first need to establish your risk tolerance and budget. A purely whitehat approach is without risk, yet tends to take longer and cost more to purchase high-quality copywriting; an entirely blackhat approach bears its own (albeit less costly) expense for licensing software and bears the considerable risk of being blacklisted on Google for years. Should Google catch on that your company is purchasing backlinks or spamming links, there is the distinct possibility that they could downgrade your ranking and thus squander your investment. </p><p>While navigating the blackhat space is not necessarily illegal, it does violate Google's ToS in some regards or otherwise skirts around them. This makes for a field of cunning tricksters that are using automating software to the best of their advantage in subtle ways that are specifically designed to evade detection, yet Google is similarly evolving to become better at detecting blackhat techniques. This means that this domain is in unnavigable by all but the experts who constantly adapt their gambits and sometimes get burned in the process. If this sounds acceptable to you, you can contact purveyors of this dark art and contract for a monthly retainer which is generally more effective and less expensive than the whitehat providers. At our own company, we use a delicate mix blackhat and whitehat maneuvers that do not violate the ToS yet benefit from automation, also known as a \"greyhat\" service.</p><p>Whitehat strategies are more understandable to the layman, particularly the businessman: you must provide genuine value. Your business has a unique value proposition, doing the clients of your industry a favor by providing value that is cheaper, better, faster, or different. In the same sense you can provide online content that is particularly useful to your consumer if they\'re seeking help for a purchasing decision, some DIY advice, or the insider scoop on the industry. By producing content that evokes genuine interest in your target audience, not only do they become more engaged by your brand but they (and other businesses in your industry) will link to your content and provide you with the backlinks that Google needs to rank your content more highly.</p><p>Yet there is a catch 22 lurking in the whitehat method that slows down the natural progress of Google\'s efforts to link to the best content. When you publish your blog post that will be useful to everyone that encounters it, only a fraction folks already on your site will view it and an even smaller ratio of those helped will link it on their site. One remedy is the temporary influx of paid traffic via social media advertising and adwords. Other effective accelerating strategies include guest posting on popular blogs, cross promotion, and generating sensational viral content.</p>",
		continued: "<p>A whitehat campaign necessitates quality content, promotional avenues, and a long timeframe for returns. You'll need to generate ideas that are specific for your industry to write about. If you will not be writing the content yourself, you should get several writing samples from your copywriter and be certain their writing is engaging. An SEO expert can analyze the best keywords to target, incorporate those keywords into a meaningful article, and then check the web to be certain that similar content is scarce. The actual writing can be fairly straightforward at this point, the only remaining consideration being the perseverance to keep going until it pays off.</p><p>You or your SEO expert will need to be certain your targeted search queries are worthwhile. Using tools like Majestic or Google Adwords Keyword Tool you can identify which words are most prevalent in search (identifying the approximate traffic you'll receive by dominating that search) and relative competition. This is a useful skill to learn yourself since it is a good evaluation of how successful your SEO campaign is proceeding, allowing you to understand the value of conquering any particular keyword and thus justify your contracted expenses.</p><p>As with any business contract, the ongoing evaluation of partners' performances is critical. Unfortunately in the SEO industry there are many hucksters overselling results as they can be hard to interpret for the layman and the results appear nebulous. To inoculate you against these fraudsters, consider the following metrics the most critical when evaluating a company's promises: organic traffic via Google Webmaster Tools, total backlinks via SEO tools like Majestic, and top 3 rankings for heavily trafficked keywords. If possible, negotiated these metrics into your contract as benchmarks.</p><p>The world of SEO services is an exclusive and nuanced one. It is heartbreaking how many clients I have met who have subscribed to these services, only to be duped for loss due to the concurrent popularity and esotericity of this field. Be cautious when approaching a company for this service, demand to see returns, and educate yourself with a yeoman's knowledge to avoid the common ruse. True SEO harvests are bountiful: you can achieve them with a reliable provider such as Better Better Better.</p>",
		why: "<p>SEO is prioritized if:</p><ul><li>You're selling products and/or you're in B2C</li><li>You're in any of the following industries: Real Estate, Hospitality, Recreation, Maintenance, Retail, or Home Services</li><li>If you have a high ratio of return business</li><li>If you operate in more local distributions</li><li>If you have a high volume of sales and lots of new clients</li><li>If your ideal demographics are not geriatric</li><li>If you have a website but it has low traffic</li><li>If your website has high conversion</li><li>If you are not yet using landing pages</li></ul>"
	}

	let local = {
		name: "Local Marketing",
		template: "LocalMarketing",
		description: "<p>Local marketing is a term for all of the online endeavors that relate to consumers in a local region seeking services and products. An example of such is Google Maps, the most popular online tool for finding local businesses and their customer reviews. By focusing on expanding your presence on these tools that are designed to make consumers' lives easier, you are presenting yourself where the market is. Best of all, because of the information-hungry apps out there, the cost of enhancing this information is very low.</p><p>Given that some businesses (such as restaurants) rely on these web services and business directories so heavily, this can easily trump even the need for a website in some cases of local distribution driven by consumer trust. Providing hand-picked and high-quality content to place on these platforms leaves your prospects feeling that they are making good consumer decisions based on ample information, clear value propositions, and customer opinion.</p><p>Other forms of offline marketing can also be effective here: flier campaigns, coupon books, direct mail, and (for B2B) cold calling. Through the close integration of online assets and offline strategies, this is the route that can take you to dominating your industry within your town, city, or even state.</p>",
		firstSteps: "<p>When beginning a local marketing campaign it is essential to first assess your competition. An agency such as ours can compiles all of your competitors listings, ratings, and reviews from the area which in turn defines your necessary trajectory. When analyzing the competitions, we can particularly focus on poor reviews from other clients who tend to be the easiest to sway and likely to review your company. By reaching out to these clients and being careful to provide the kind of experience they're looking for, you can gain a substantial leg up with minimal effort spent.</p><p>Next, it is useful to claim as many business listings as possible. The biggest targets are Google Maps, Facebook Places, Yahoo! Maps, and Bing Maps. After creating attractive copy and images to place on those avenues, you can pursue the hundreds of lesser known business directories for both an SEO boost and an upperhand should your clients rely on such venues.</p><p>While it is generally illegal to bribe for reviews, it is permissible to gently solicit them. By handing out small cars with information about how to review your company, some portion of these clients will convert to review positively about your company (adding a coupon on the card doesn't hurt, either). While some businesses are concerned about online reviews, the reality is that the vast majority are positive with about 40% being the maximum.</p><p>Finally, depending on the nature of your business, an offline campaign of fliering or direct mail can be profitable. Local printing shops sometimes have direct mail services and some ad agencies may be able to assist you with fliering. The best way to measure the success of such a campaign is through coupons which will identify new clients yielded and thus justify the somewhat higher costs associated with physical advertisements.</p>",
		continued: "<p>The first sign of a successful campaign based on directories and map services is increased website traffic: you should, within the first week, begin to see some increase in traffic that will sustain itself indefinitely thereafter. This bump is hard to predict (since it depends on your industry and city size), but it is not uncommon to see several hundred hits per week if you make desirable listings in at least 20 directories. For a small business owner this investment of time can be substantial, though the buyback period will come up in the next few weeks as long as your website has a modest conversion rate. Alternatively, companies like ours are specialized to this work quickly and affordably, driving the buyback period back to just a couple of weeks.</p><p>The results of a rating campaign is obvious: more five stars than the sky. That said, given the constraints, it's important to keep this in mind as a long term goal. After friends and family have been exhausted, the process is slow and hinges on you bringing genuinely extraordinary satisfaction to you clients. This can be accelerated by creating a landing page that is specifically targeted to link to your various accounts and encourage positive ratings while redirecting negative one's to your inbox. Any competent web developer can execute this, though it helps if they've created similar pages in the past.</p><p>As you climb in visibility, you'll need to continually reassess your competition. If your competition is thriving, look to see what differentiates your business from theirs and prepare to emulate or innovate that difference; if your competition is stagnating, you should avoid their media and messaging. Most importantly, this is the key metric by which you can judge the success of your own campaign.</p><p>Carrying out an offline campaign can be expensive. Radio tends to be the cheapest, but signs, direct mail, and television ads may be useful expenses if you carefully measure the returns through a tracking coupon. When purchasing services from an ad agency, demand that some proof of ROI be written into the contract if at all possible and assure that there is some mechanism to track the effectiveness of the campaign.</p>",
		why: "<p>Local Marketing is prioritized if:</p><ul><li>Your distribution is exclusively local</li><li>You're in one of the following industries: Food, Hospitality, Business Services, Agriculture, Apparel, Construction, Education, Home Goods, Legal, Retail, Healthcare, Home Services, Real Estate, Maintenance, or Utilities</li><li>If you sell products and are B2C</li><li>If you have a small margin per customer</li><li>If you have a low preexisting marketing budget, few assets, and no website</li><li>If you have few local marketing profiles</li><li>If you have low reputations on the measured platforms</li></ul>"
	}

	let automation = {
		name: "Drip Marketing",
		template: "DripMarketing",
		description: "<p>Marketing automation (aka \"Drip Marketing\") is an innovation that makes it possible to gain and nurture leads without the involvement of any personnel This kind of marketing is unique to the digital domain, allowing you to both acquire and cultivate leads before a big sale by providing them with requested, relevant, and valuable information over time. When executed properly, this kind of interaction mimics the personal back-and-forth between sales and the prospect.</p><p>Generally best for large sales and B2B solutions, this approach can also be employed in the B2C environment with great success. If you sell a service based on expert understanding, you can put that knowledge into an online \"academy\" or reference that will draw traffic, show the necessity of your service by revealing the topic's complexity, and provide an easy means of conversion to educated prospects. If you're selling products, you can provide information about the problem that your products solve in bite-sized packages using an automated email service.</p><p>The real crux of drip marketing is the creation of the sales funnel, overlapping with virtually  every other marketing tactic. What separates the kind of funnel that drip marketing accomplishes, however, is the medium-to-long-term culturing of leads that saves time and money when it comes time to convert. This makes for a one-time investment that can pay itself off several times over, often in the same quarter.</p>",
		firstSteps: "<p>The classic drip marketing campaign is the combination of three online assets: email acquisition, automated email delivery, and landing pages. Acquiring email addresses and the corresponding consent to market is generally accomplished via a landing page which makes the value proposition clear. While it is often profitable to gate content using an email acquisition mechanism, in this case we want to be certain that we have their full understanding and consent to receive daily emails using the email automator or else your campaign will terminate prematurely and unsuccessfully.</p><p>For the case of vitamin supplement retailer we could make the offer: \"Learn about the best 10 vitamins in 10 days with our exclusive content\". If we're selling insurance we might say: \"Discover your biggest risks and most profitable insurance types\". While the timeframe is not a necessary part of the proposition, it is clear that we need to offer information of the sort that is often viral on the internet: how-to's, best-of's, and short Q&A's. Keep in mind that while it is easier and easier to obtain this information without offering an email address, it becomes more important that you go above and beyond in your offer, perhaps adding a coupon or free consultation after the weeklong campaign.</p><p>The landing page to acquire the emails should follow the standard rules of a landing page: no navigation but forward, concise value propositions, and engaging design aspects (e.g., high faciness, obvious CTA, looping testimonials, etc). Once the email is acquired, they'll immediately receive your first email. There is some debate in the marketing community about whether or not this first email should ask for confirmation and, truly, the evidence is inconclusive if that results in more closings in the long-run. In any case, either that first or second (if you choose to confirm the address with the first) email should make a personal introduction and set the tone for the coming messages, a tone that is generally friendly, informative, and engaging.</p><p>On each subsequent day, the prospect will receive additional emails regarding the request information. As with any good copy, these emails need a classically designed lede, body, and closer.  In other words, the emails should ask an open question that the reader cares about, answer that question with the bulk of the content, and then raise a follow-up question of even greater relevance that compels them to (in this case) anticipate the next installment. In this manner you'll build a relationship with the pre-qualified prospect without even lifting a finger.</p>",
		continued: "<p>While it is also important to refine you lead intake form, the biggest ongoing process in a drip marketing campaign is the perfection of the ongoing content. Given that you are legally required to send an unsubscribe link in each marketing email you send, you will have excellent data on which emails people are opening and which emails lose clients. Another metric to add onto this optimization program which also strategically builds a \"yes-set\" is to provide a tracked link to another landing page in the middle emails themselves. This must be performed cautiously and conscientiously, but providing coupons, external links (unaffiliated with your brand), and other people's content can attenuate some of the hard-sell feel that overasking can create.</p><p>Naturally, if you have a particular kink in the chain where you lose subscribers, eliminate or reform it. If there seems to be attrition after a certain number of emails (regardless of their content), you can shorten the number of emails sent or make the emails more engaging with humor, personal touches, or incentives. The goal is to have a large ratio of subscribers open every email in the chain and, finally, to follow-up on the conversion goal at the end of the campaign.</p><p>Traditionally, the conversion goal is contact with sales. If this is not applicable for your ends, you can provide opportunities to purchase products and/or transfer their consent into a less frequent mailing list. In any case, be it during the middle or end of a campaign, you will want to attempt any further conversion using a targeted and specific landing page based on their initial inquiry. To improve this final conversion, you can use techniques to improve those landing pages such as time-pressure, video, and further lead-in purchases.</p><p>Finally, nontraditional drip marketing campaigns are rising to prominence with the decreasing cost of implementing more sophisticated technologies. One example of this would be an educational institution that offers a discount for \"taking a course\" on the comparative value of education either over the automated email chain coupled with links to simple quizzes or on a learning management system (LMS). If you're a manufacturer, you might better qualify your leads by offering a free \"certification course\" in which information about your product line and capabilities are disseminated via a gated mechanism (such as an LMS, automated email, or members-only area) that allows purchasers to contact you for sales.</p>",
		why: "<p>Drip Marketing is prioritized if:</p><ul><li>If you have broad distribution</li><li>If you have a high-volume of sales</li><li>If your ideal demographic is not geriatric</li><li>If you operate in one of the following industries: Business Services, Information Technology, Education, Insurance, Charity, Science, Real Estate</li><li>If you're not yet using landing pages</li><li>If your website has high traffic and conversion</li><li>If you currently have a CRM/ERP system</li><li>If you don't currently have any sales funnel implemented</li></ul>"
	}

	let reputation = {
		name: "Reputation Management",
		template: "ReputationManagement",
		description: "<p>As the possibility of anonymity dissipates in the emerging world-wide-web, businesses are particularly and necessarily exposed to unprecedented scrutiny. Not only can a single news report on your business bring enormous public recognition, but both the number of \"news\" outlets and their collective reach has expanded enormously. While PR used to be the golden ball and chain of the biggest corporations, even mom-and-pop shops are feeling its euphoria and burden due to the ubiquitization of online reputation systems.</p><p>By reputation systems we refer to consumer services such as Yelp! and Google Maps as well as emerging B2B review services like Trustpilot, G2 Crowd, and the Better Business Bureau. Particularly if your business is an unknown quantity or a franchise, these are the sites your prospects will go to sort out their options based on the all-powerful tools of social proof.</p><p>Aside from gathering high-scores, there is much to do in this domain be it monitoring what is said about your company, shifting the narrative, recruiting trust agents, or generating viral public recognition. Amongst larger companies seeking the limelight is the omnipresent trend of \"newsjacking\" in which you intentionally embroil yourself in this swirling maelstrom of public attention to eek its benefits. We will discuss these strategies and more as you read on.</p>",
		firstSteps: "<p>The first step in taking control of your online reputation is to listen. The simplest and most effective means of doing this is \"Google Alerts\", a free service that will notify you when your company or any of your concerns are newly listed on the web. Should you find positive content you should reinforce it and feature it by linking it, if not creating a paid advertising campaign for it; if you discover negative content, you can shift the dialogue by injecting a positive spin via advertising and/or microsites that address the criticism and bring it back into your favor.</p><p>Next up is creating a funnel for client feedback that directs your satisfied customers to the myriad review sites for their comments and ratings while sending disgruntled clients to an internal ticketing or comment system. This kind of reputation management is easy to implement and is the secret of all high-ranking companies to date. Simply recruit a talented web-designer to deploy this solution, ideally one with experience in this regard.</p><p>If you find yourself not getting the attention you'd like, then more flamboyant approaches are in order (like the aforementioned newsjacking). Reach out the influencers in your industry, particularly those with whom you can settle a noncompetitive agreement for mutual promotion, and cross-promote using the entirety of your available platforms. Should you partner with someone with clout and reach, this should be satisfactory per se, though if you are unable to make such a partnership you can dabble in the controversial subjects within your field. An article or post decrying a particular practice, with a heretical headline, or calling out a larger brand can bring ample attention.</p><p>Should you be receiving attention of the negative sort, you can create microsites unaffiliated with your brand to respin the narrative. On your own sites or these microsites, emphasize positive anecdotes that \"tell a good story\" of personal, emotional tumult crowned by eventual success made possible by your solution. Remember: PR is essentially a battle of rhetoric, more or less devoid of reason, so you too must play to emotions since they are in fact the heart of a \"positive\" perception.</p>",
		continued: "<p>The ongoing process of monitoring reputation via Google Alerts and responding in kind can be a full-time affair for even medium-sized companies. Many marketing agencies exist to outsource this service to, albeit generally at high price points. As the importance of this kind of reputation management expands, rest assured that this industry will boom in the next decade for even small businesses, a tidal wave of activity that both sincere providers and charlatans will ride. Just as with SEO and social media management, be sure to check the performance of your contracted partners by demanding reports of changing star ratings, new comments, and verifiable sentiment analysis.</p><p>The strategies for getting more coverage can be expanded, as well. While some decry the nature of businesses becoming involved in the politics of our day, those same cynics and their followers are attuned to these press releases as they piggyback on some of the most mass-digested issues of the moment. While it is inadvisable to takes sides without a keen grasp on the rising tides of political favor (i.e., choosing momentum over the establishment), a clever PR agent would maintain ambiguity.</p><p>As of the time of writing this, Starbucks is suffering from criticism and praise of their promise to hire approximately 3,000 refugees. On the left, this is a bold move honoring the disadvantaged; on the right, it's a petty stunt that abhors meritocracy at the expense of other groups like veterans. Of course, Starbucks responded that they already selectively hire veterans and have several thousand on payroll at the moment. The net result is some faux outrage, lots of attention, and little effect on their operational day-to-day.</p><p>If you find politics unpalatable, fear not: it may be one of the biggest marketplaces for attention with the lowest entry cost, yet the broadness of its scope is also a disadvantage. Generally, your business has more limited demographics to appeal to and those industry-specific cliques have their own thought-leaders. Providing product samples, free services for public review, and other perks for key influencer can help you gain both attention and humanity. As the PR world evolves to suit the digital age, the power of personal anecdotes from likable video personalities is emerging as the strongest denominator of brand leadership.</p>",
		why: "<p>Reputation Management is prioritized if:</p><ul><li>If your distribution is more local</li><li>If your primary demographics are not geriatric</li><li>If you're in any of the following industries: Food, Hospitality, Recreation, Arts, Agriculture, Home Goods, Legal, Charity, Retail, Home Services, Real Estate, Maintenance, Extraction, Education, or Manufacturing</li><li>If you have low website traffic</li><li>If you have few local platforms</li><li>If you have lower or unknown reputations on the four biggest platforms</li></ul>"
	}

	let maintenance = {
		name: "Maintenance and Tune Up",
		template: "Maintenance",
		description: "<p>When you've invested thousands of dollars and hundreds of hours in marketing assets, you're already well aware of the benefits those assets bring. Unfortunately, as technology evolves, older web assets begin to become dated, either appearing unbecoming of your brand or breaking altogether. It is precisely at that moment when the cost of repairing and remodeling those assets is less than the value gained from their update that this tactic becomes profitable.</p><p>This program approximates this moment of profitability and, without a personal assessment from a technical professional, it is impossible to know when exactly you are best off updating the assets or starting anew. We're going to analyzing these cues in-depth in the coming pages so you can make the best possible investment, saving you from the recommendations of technical experts that invariably be influenced by their own profit and convenience.</p><p>Websites can often be updated with a modern look easily and cheaply; sales funnels can similarly be brought up-to-date with little expense. In general, appearances are easily brought up to speed, costing about 1/3 of the total cost of rebuilding a site from scratch. It is when the inevitable march of innovation causes some foundational component (such as the server-side programming language or a CMS) to become obsolete that we truly encounter a problem. Let's learn more about recent updates in the languages that build the web and how you can assure the best trajectory for your business.</p>",
		firstSteps: "<p>What is your web asset built with? Simple websites are likely to use a content management system (CMS) like WordPress which then in turn relies upon PHP and which then rests most commonly upon a LAMP (Linux, Apache, MySQL, and PHP). These three components are critical to any website: the website CMS/backend, its server-sider language, and the webserver components (including a database and webserver). If you've outsourced you web assets in the least, you're fortunate to be spared of interacting with any of these components except perhaps the CMS.</p><p>Within your CMS, it's likely that you're using \"plugins\" or \"extensions\" which need their own updating and maintenance. These little packages of software are provided by developers to \"plug and play\" with a given CMS, which is a terrific convenience yet also means that are sometimes incompatible with some versions of the CMS as well as potentially conflicting with each other. A simple test for incompatiblities can help you determine the latter scenario: disable all of the plugins and then reenable them one-by-one to check for any bugs in the site. If you encounter an error with this process or with the version of the CMS, it may take a professional to evaluate how to make them compatible or find alternatives.</p><p>Certain CMS's from years past are fading into obscurity. WordPress is particularly promising at the moment and is most likely to age gracefully, yet some of the more popular from years past are slipping into obscurity. Presented in order of best maintained to worst, here are some of the most common CMS's:</p><ul><li>WordPress</li><li>Drupal</li><li>Magneto</li><li>Joomla!</li><li>Blogger</li><li>Shopify</li><li>ExpressionEngine</li><li>TextPattern</li><li>Radiant CMS</li><li>Cushy CMS</li><li>SilverStripe</li><li>TYPO3</li><li>Bitrix</li></ul><p>Most of these CMS's are open-source and free, maintained by a community of volunteers (not dissimilar to Wikipedia). Others are paid services or propriety property of particular companies which maintain the software, making them somewhat more vulnerable to obsolescence in the event that the company fails. While decisions about choosing a CMS shouldn't be merely a popularity contest, it is certainly the case the most used CMS are going to tend to have the best longevity as well.</p><p>In other words, if you're not using one of the popular CMS's at present, it may be worth your consideration to change, even if it costs the price of a wholly new website. If your CMS isn't holding you back, continue reading to learn more about servers and server-side languages.</p>",
		continued: "<p>The vast majority (about 70%) of the web uses PHP to interact with the webserver and perform operations with the database. This means that updates to PHP are a big deal: failure to update can lead to slow webpages, inability to update other components, or security vulnerabilities. That said, an update can also introduce \"breaking changes\" that require old software to be modified by a professional. Recently, with the advent of PHP7, many websites have undergone conversion rather painlessly, in turn halving their loading time.</p><p>While websites used to be more commonly developed with JAVA and ASP.NET, these languages are decidedly less popular and arguably on their way out. Development in PHP using CMS's like WordPress is so relatively inexpensive that many companies are switching.</p><p>Emerging as a server-side language is Javascript used in combination with Node.js. Node is gaining popularity rapidly and hundreds of thousands of libraries are already developed, making it both well-established and with a promising future. Unfortunately, no single framework or CMS has caught on with Node like WordPress has with PHP, meaning that development costs are higher and more customized. Additionally, hosting a Node website is either more much more expensive or more complicated. If you're interested in a complex website that conducts eCommerce or provides a service, investigate our App tactic and see if it suits you.</p><p>The webserver itself contains a number of important technologies. Most modern websites rely on a database such as MySQL or MongoDB and this too must be both kept up to date and backed up regularly. The webserver program itself, such as Apache or nginx, tends to be a bottleneck on the speed of the website and its optimization can improve both speed and total load of a webserver at no additional cost. Specifically, we routinely use Varnish Cache to double the speed of most websites. Finally, the widespread adoption of SSL/HTTPS protocol is essential to build SEO and maintain security, capable of being implemented by a skilled technician inexpensively.</p>",
		why: "<p>Maintenance is prioritized if:</p><ul><li>If you have more online assets</li><li>If you have a large total investment in marketing</li><li>If you rated your perceived security as insecure</li><li>If you already have high maintenance costs</li></ul>"
	}

	let presentation = {
		name: "Presentation",
		template: "Presentation",
		description: "<p>If you sell B2B solutions or big-ticket items, you require no elaboration of effective sales presentations. When an audience needs convincing agrees to a sales presentation, much of the work has been done already and a sleek, convincing presenter can do the work of an army of sales people. Yet, that salesman requires the proper technology to operate effectively, something more than the value proposition and a simple PowerPoint. At Better Better Better, we produce the next generation of presentations using a library called Impress.js.</p><p>Similar in appearance to Prezi, Impress.js allows a seamless, moving presentation that is capable of being displayed as a webpage. By using HTML code, the page can display everything that a normal webpage can, from videos, to other websites, to demos visible right inside of the presentation. This kind of presentation is not only more interactive and flexible (equally in the conference room or in private), it is capable of providing an immersive experience to prospects even in the absence of a presenter. To keep the awe-factor high, its common to keep it behind a gate, revealed only after a lead is sufficiently qualified.</p><p>Even if your industry is not of the sort commonly associated with sales presentations, this kind of online presentation is adept at explaining complex topics and holding attention for longer than one  usually has on online media. Given the rarity of such online presentations, it can set you apart from the competition, whether you're selling childcare, diodes, or landscaping. Especially if placed conspicuously (such as an a business card), this kind of presentation will keep on giving for years to come.</p><p>Want to see what we're talking about? <a target=\"_blank\" href=\"https://artistas.xyz/\">Check out this sales presentation here.</a></p>",
		firstSteps: "<p>To create a novel online presentation, you will need to either contract with a web developer/marketer or spend significant time in-house with a service like Prezi. As with any presentation, it behooves you to make the clearest and most concise summary of your value propositions as possible in order to generate a successful pitch. Make the goal clear in the notes so that a skilled writer can make the point subtly and repetitively throughout the presentation. If possible, try to deliver the media (i.e., graphics, videos) that are requisite for the presentation, at the very least giving some ideas about the overall look, feel, and style that the presentation should have.</p><p>If you choose to make the presentation in-house, you will want to use either Prezi (an inexpensive SaaS presentation software company) or have an HTML-saavy employee look into Impress.js generators (<a href=\"https://github.com/impress/impress.js/wiki/Examples-and-demos\" target=\"_blank\">a full list here</a>). Should you have a web-developer on retainer, creating an Impress presentation without the generator is the superior option and is actually straightforward to use. Consulting the <a href=\"https://github.com/impress/impress.js\" target=\"_blank\">GitHub for Impress.js</a> is more than enough information for any competent developer.</p><p>If you have a preexisting PowerPoint (or similar) presentation, the conversion can be done quickly and easily with Prezi, though significant modifications are required to harness the full power of the platform. That said, the use of Prezi's autoconverting feature can put a PowerPoint online quickly and easily, winning half the battle in one fell swoop. Should you desire the greater power of Impress.js, a preexisting presentation is a great first step for the developer to gain insight into your proposal.</p><p>In a broad sense, we could suggest that any marketing materials online are a kind of presentation. The margins of the concept of a presentations may then be blurred, but we proffer the following definition: the presentation must both awe and delight. A mundane website, while delivering a value proposition and prosecuting the case of your sale, fails to engage the audience in this significant manner. Especially in the absence of a charismatic presenter, a presentation that can stand on its own legs is necessarily jaw-dropping and interactive. Fortunately, that's precisely the kind of presentation we deliver.</p>",
		continued: "<p>Another gift of bringing the presentation online is the access metrics regarding user involvement. Since the presentation becomes a webpage, we can measure the traffic precisely and determine how long and far the audience tends to go when viewing it. Better yet, if the presentation is gated for qualified leads only, we can assign a password known only to the lead in order to view it and thus gain a precise understanding of what interests that lead. This advancement is invaluable for sales to pursue the lead further and more effectively, all without asking a single question of the lead herself.</p><p>Viewing the metrics, it also becomes possible to optimize the presentation's content, length, and style in a manner inaccessible to normal presenters. A/B testing is easily implemented to compare the effectiveness of any two versions of the presentation, even using a “Greedy” algorithm to assure that the best performing version is used more often (thus sparing no revenue during the process of refining the presentation). The kinds of feedback available through analytics are greater and more in-depth than a presenter in the traditional modality might hope to gain amongst friends.</p><p>In this manner, improving the presentation is simplified and profitable. Often, given the success of the first presentation, a company will request multiple, modified versions based on specific points in the sales cycle or for a particular product/service. In this case the work of the former presentation can be somewhat recycled to decrease expense while improving the specificity and efficiency of the presentations, thus increasing profit.</p>",
		why: "<p>Presentations are prioritized if:</p><ul><li>You sell B2B</li><li>If you operate in one of the following industries: Business Services, Finance, Legal, Charity, or Science</li><li>If you do not currently have any sales presentations</li><li>If you have a high margin per customer</li><li>If your ideal demographic has a very high income</li><li>If your clients' lower income range is very high</li></ul>"
	}

	let crm = {
		name: "CRM / ERP",
		template: "CRM_ERP",
		description: "<p>An effective Client Relationship Management system or the somewhat broader Enterprise Resources Planner is an invaluable tool as your organization scales in size. There are many SaaS companies that offer these kinds of solutions, making them as accessible as they are necessary, and the reclamation of otherwise wasted resources (e.g.,, misplaced appointments, misassigned work, or lost leads) can easily pay off its cost in the first few months when your company is truly ready for such a full-throated reorganization.</p><p>A properly planned and executed shift to a CRM/ERP can take the place of multiple bureaucrats, provide a real-time assessment of all preexisting resources, and integrate distinct departments into a cohesive whole. A poorly planned transition, on the otherhand, can grant compromising access to those who do not need-to-know, frustrate your employees, and stagnate production under the perception of an increased workload for a program that promises to the exact opposite.</p><p>In the coming sections we will talk about how to recognize if your company is ready, what steps to take to implement a CRM/ERP program effectively, and how to choose the best solution for you. There are myriad options in all of these domains but hopefully this article can help you navigate to the best for you and your organization at the present time.</p>",
		firstSteps: "<p>Foremost, are you ready? While more modern CRMs are answering the clarion call of the market to automate and integrate diffuse categories of information, they are also infamous for increasing the data entry requirements of employees across the board. If your organization is losing enough revenue due to current inefficiencies in your preexisting software, the introduction of a management tool such as this can pay for itself quickly, whereas a prophylactic implementation carries a greater risk. Generally, considering a CRM is advisable after you're employing at least 10 people, have a dedicated sales department, and/or requiring the close sharing of data with partners. Another tentative need to push one towards an ERP is inventory management, though for smaller companies it may be more applicable to use software specifically designed for such rather than the royal suite of software.</p><p>This caution toward implementing new business-management software comes from hard-won wisdom that “more isn't always better”. In the same sense that one narrows the options, attention, and focusing of marketing to draw out a specific response, an ERP with 150 bells-and-whistles can distract employees from their area of concern or even grant dangerous overreaching access. While modern CRMs/ERPs do their best to  reconcile this problem, even the best solution will come at a cost of both money and time during the early implementation. Getting your current problems down to the lowest common denominator will help your resolve this rightly and specifically.</p><p>Next up, you'll soon discover the plenitude of competing software. Again, matching the software to your specific needs is the best bet. While some software is free/open-source, these implementations tend to eventually require some technical finesse to implement and the financial costs may not be much different than the more common subscription model. That said, with a technical implementation of either a custom CRM/ERP or an open-source version you have the possibility to pay a lump sum with some light maintenance that can easily save money compared to the typical costs of several hundred dollars per month for the other solutions. Additionally, the custom implementation is more likely to be able to be specifically customizable to meet your specific needs as they arise in the future.</p><p>Once you've found the business management software of your dreams and are ready to pull the trigger, be prepared to introduce it to your team. It has been demonstrated that asking opinions, giving advance notice, and explaining the utility of the software ahead of its launch is shown to increase compliance. Additionally, someone from your staff or from the implementer's staff should be prepared to show how to carry out the job of each potential user of the CRM/ERP and demonstrate it ahead of time. Video libraries of general uses of the software can be helpful, but are no replacement for the finely-tune, specific knowledge that your staff will require. Waste not a paid hour having your employees wade through knowledge that cannot help them make your money.</p>",
		continued: "<p>As you use your software in earnest, you will discover inadequacies and excesses that do not meet your intended use. For SaaS solutions, this is unfortunately not likely to be reconciled unless you change providers or the software is sufficiently customizable (like SalesForce). If you are using software that either you or a contracted developer can access, you can modify the software to streamline these processes, remove unnecessary encumbrances, or implement new flows. Generally, CRMs/ERPs are well-prepared for some modification and these changes can be implemented for a few hundred dollars.</p><p>Should you find that your employees are hesitant to catalog their efforts in the CRM, know that you are facing a common managerial problem. Such can be ameliorated by tying renumeration to some aspects of the documentation, introducing them to their interdepartmental compatriots who are affected adversely, and/or assuring that they understand the specific task at hand, how to implement it, and that they are not overwhelmed with distracting options.</p><p>If you find yourself baffled by your new investment, you are in the best position to request assistance from its installers. Generally, you should know how to access the data from the other departments, view their summary reports, and have an army of notifications to alert you when a large account is lapsing or revenue is in shortfall. Whatever your specific needs are, they should be met adequately and you should be absolutely certain that employee permissions are set at the need-to-know level for EVERY employee. This is the most common kind of data-breach for businesses, so be certain your CRM isn't exposing you to anymore risk than you need.</p><p>Finally, let's say you find yourself in a frustrating position of only partial integration with your CRM. For example, you migrated from Google Docs where all of your forms are stored and the employees vent that alternating between the forms, the filled in forms, and then re-entering this information into the CRM is tedious and seems unnecessary. While in some cases this might be resolved via a plugin, most cases will require a custom solution from a developer of your CRM. (In this instance it becomes obvious why choosing a more popular CRM can be advantageous.) In some cases, however, a new SaaS provider of integrative services called Zapier may be of assistance.</p>",
		why: "<p>CRM/ERP is prioritized if:</p><ul><li>If you sell B2B</li><li>If you sell products</li><li>If you have high return business</li><li>If you have international distribution</li><li>If your ideal clients revenue is over $100,000 or the lowest bounds of their income is $100,000</li><li>If you're in one of the following albums: Business Services, Broadcasting, Construction, Manufacturing, Information Technology, Legal, Charity, Utilities, or Science</li><li>If you already have a Website, Sales Funnel, and an eCommerce store</li><li>If you do not currently have a CRM/ERP</li></ul>"
	}

	let research = {
		name: "Market Research",
		template: "MarketResearch",
		description: "<p>A successful marketing plan is a combination of vision and data. The vision comes from you, your unique contribution to the marketing place in terms of the classic aptitudes of Product, Placement, Price, and Promotion. Yet the effectiveness of any campaign is also based upon the real-world knowledge that you have of the marketplace. This is the place of market research, to define and satisfy your ideal customers.</p><p>Whether you're sizing the market up, identifying key trends, or expanding your services, market research is the backbone of these efforts. Often curtailed only to the domain of the well-funded, market research serves a valuable purpose for small businesses with broad distribution as well. If your clients are few and far between, identifying their uniting needs and common channels of meeting is all the more essential.</p><p>To the extent that you can know your clients and what they need, you can tailor both your marketing and deliveries to suit them. This is a continual process that spans both the preliminary assessment of the market before you enter it as well as a continual process of refinement based on your clients' feedback. We will explore both of these modalities in the following paragraphs.</p>",
		firstSteps: "<p>If you're looking to conduct preliminary research before breaking into the market, market research stats are a key element of any kind of proposal for investment. Rudimentary facts can be gleaned online from agencies that conduct their own research for larger publications (which can be purchased) and official government statistics can be an asset to size up the market. Without spending a penny and more than a few hours of time, you should be able to gather the size of your market whether it be aquarium owners or multi-million capital holdings companies.</p><p>If your market is broad, you'll want to know consumer trends. Facts regarding the total spending online vs offline, the venues which your demographics frequent, the media they most frequently consume, competitors marketing spends, and the current stats on your industry are essential. While much of this is still available freely, as you move into specifics you'll encounter highly-priced reports that may be topically relevant. Should you have the capital and the need, these reports may be an asset but it is important to note that for a similar price you can conduct your own, more specific research.</p><p>For B2B businesses and those with a niche market, a comprehensive survey could be affordable. You can list all of the relevant businesses with an ongoing web crawl of relevant information, calling or contacting them via an in-house or outsourced agency to get the revelant facts. Geographic constructions of competitive or prospective businesses, when applicable, can be built to quickly visualize location-based market gaps. Large spending gaps between two industries that your business combines can also hint at the revenue to be gained, calls to those businesses also yielding purchasing behaviors of their consumers.</p><p>If you're seeking to expand into a new market, the general rule in business is to extend your reach into the needs of your current customers that you are presently unable to satisfy. In this sense, as we will continue to expound in the next section, a survey of your preexisting customers is both more cost-effective, relevant, and detail-oriented than any other method of market research.</p>",
		continued: "<p>If you have a database of preexisting customers, it is but a simple matter to solicit the relevant information from them. Through incentivization you can garner their overall spending profiles and the peripheral areas of concern to your business. From this information, more general facts regarding your production capacity, market size of the adjacent markets, and the largest competitors in those markets can help form a rational basis for growing your business into new domains.</p><p>A simple, practical example is the smoothie shop situated along a park common to recreation. An assessment of competitors reveals that the same clients of the smoothie shop are likely to purchase other food and drink in the periphery; a brief inquiry of the clientele reveals that about 50% of the customers are involved in some kind of exercise. The introduction of energy drinks could reach this market; a broader selection of food might increase sales at the same establishment rather than getting one component from one business and a different item from another. If there is a club that meets nearby on a weekly basis, a dedicated product or discount on the days of their meeting could buy large orders on a consistent basis.</p><p>On a more complex level, let's imagine that we sell software to organize inventory on a national level. An assessment of the industry reveals that most companies in our industry are distributing internationally, provided in multiple languages, and permit multiple product types. If it were within our capacities to compete on this level we might try our hand and proffer the unique benefits of our software over the competitors, yet in this example such is beyond our current reach. Instead, we might shift our marketing to the demonstrable fact that our software is American-made, not diluted for the international market, and perhaps even offer special packages for specific industries. An analysis of the market reveals that automotive parts supplies are the biggest consumers of our inventory software, so we purchase a database of all of the applicable parts and track their availability amongst our clients. We can then take this more highly specialized product to the market and dominate the automotive parts industry for inventory management, resulting in huge gains across the entire industry.</p><p>All-in-all, marketing research is an essential component of growth. Your accurate and up-to-date knowledge of your field must predicate any successful maneuvers of expansion or reform. Should you choose to have Better Better Better conduct your research, you can rest assured that will take a full-throated into your business to derive the most cost-effective and useful information for your next level.</p>",
		why: "<p>Market Research is prioritized if:</p><ul><li>If you left items of your ideal demographic information at their defaults</li><li>If you have broad distribution</li><li>If you have high return business</li><li>If you have a large preexisting budget</li><li>If you operate in one of the following industries: Business Services, Broadcasting, Education, Insurance, Home Services, Maintenance, Finance, or Legal</li><li>If you do not currently have many collected data points about your email list</li><li>If your current email list has a high number of prospects</li></ul>"
	}

	let apps = {
		name: "Apps",
		template: "Apps",
		description: "<p>An “app” is a shorthand way of referring to any kind of web program that takes user input and transforms it into a useful output for the user. This could be an online marketplace (allowing users to sell), a service (such as preparing one's taxes), or offering information (such as this app). In this capacity, an app may be a simple program or something so advanced as to turnover a whole industry, such as Uber.</p><p>While this broad definition of an app may be encompassing enough to incorporate other tactics such as automated/drip marketing, it is the unique functions of an “app” as we describe it here that necessitates its custom development. (I.e., while many preexisting drip marketing applications exist and need only be implemented for your implementation, an app is necessarily a brand new piece of software driven by the unique needs of your implementation.) In this sense, a custom app also has very few limitations on your creativity: you can engineer a service to automate your whole business or simply qualify leads like never before.</p><p>In the coming paragraphs we will do our best to guide you toward the best kind of app to develop for your business, how to find a reliable developer to execute it, and how to maintain it. As software development is notoriously difficult, so is finding a contract with an excellent developer to fulfill their scope on-time and within the budget. We'll do the best we can to get you started on this process and equip you with a complete vision of success.</p>",
		firstSteps: "<p>Foremost we must identify the functions that your app will execute for you and your clients. Can you automate a core function of your business? If so, can you offer some aspect of that service for free? If the answer to either or both questions is yes, it is advisable to consider building an app for providing that service via an automated process. If this is not feasible, can you automate a process to provide something of value to your clients? Perhaps you could offer insight into the decisions available to your clients, a comparison of common purchasing decisions, or avail them access to local services of the sort they'd be interested in.</p><p>Once you've devised some purpose for your app, you'll need to appreciate the full scope of it in order to best prepare a reasonable budget. If you are making a web app that is modified by the users, this will cost more than a simpler app that is static. If your app will be computing extensive information in order to calculate the final product, the extent of those calculations (the number of variables, processes, and results) will increase the costs of the app. What platforms will the project run on? Most apps are available on the web, though some may also need to be on the iPhone/Android stores for additional cost. Finally, the anticipated scale of the app (thousands of users versus millions) will also affect the building specifications and the final cost of the project.</p><p>If the app is going to be a large and expensive project, you will need to all the more carefully consider the engineers to complete the project. It is not uncommon for an app to range from $3,000 to $50,000 based on how complex it is, similarly spanning anywhere from 3 months to two years to complete. Accordingly, you'll need to investigate multiple developers by sending them your notions and then move through at least two counteroffers to get a coherent estimate.</p><p>Hiring in the web/app development industry is both perilous and demanding. Some have preferences to hide within the US; others build an overseas team in an attempt to save costs. While my own opinions on these practices is irrelevant, one immutable fact which would behoove me to relay is the imperative of your contracted company being fluent in English. Communication between you and the team are your only proof of life for many months of your projects development, so regular communication is a must. Additionally, it's advisable to negotiate into your contract benchmarks of progress every month and to make the company's pay contingent on satisfying those goals.</p>",
		continued: "<p>As your engineers progress in the development of the project, your mission is to maintain the original scope and vision. This is a difficult process that requires a great deal of patience and understanding on both ends, thus doubly emphasizing the utility of a thorough initial scope. As problems arise or development proceeds in an unexpected direction, you must confront these deviations quickly and candidly lest your initial vision be compromised.</p><p>If you encounter an impasse with your development company after you begin to experience the anchoring weight of sunk costs, be prepared to produce your former quotes and quote the aspects of your contract which permit you to terminate it. Proceeding smoothly hinges upon your clear and patent vision of your app, a close adherence to the functions which provide value to both you and your clients. It is often both necessary and expedient to compromise to some extent, yet these essential functions must be preserved and, at the very least, a clean and pleasing style is essential.</p><p>When your app is delivered and complete, it is likely and becoming of the developing company to suggest a retainer to maintain the app and/or expand upon it. For a custom app, it's a difficult for another developer to maintain the work of another and it's best to allow the original creator access to keep the app up-to-date. Unfortunately, any sensible development company knows that they have this leverage and could attempt to extort you in this capacity. For that reason it's best to negotiate the terms of the retainer and the kinds of services that it will include in the initial contract, ensuring that such is favorable for both parties. Generally, you will want to ensure the current scope's functionality for the entirety of the retainer as well as the addition of a new feature every three months or so.</p><p>Finally, as with every significant investment, it is important to solicit feedback from your users as to how useful the app is, how well it meets their expectations, and how to improve upon it. If your app is receiving poor feedback, it's time to cash in on some of the improvements available through your retainer; if it is performing well, promote it prominently on your webpage and perhaps with a paid advertising campaign over search engines and/or social media. Altogether, you should anticipate a buyback period within the first year of its inception.</p>",
		why: "<p>Apps are prioritized if:</p><ul><li>If you sell services and have broad distribution</li><li>If you have a large preexisting budget</li><li>If you regularly acquire lots of clients</li><li>If you have a high volume of sales</li><li>If you have lots of current web assets</li><li>If your website does not currently convert very well</li></ul>"
	}

	let ecommerce = {
		name: "eCommerce",
		template: "eCommerce",
		description: "<p>With $5,000,000,000,000 being exchanged online last year alone, eCommerce is a medium not to be dismissed. If your business can put products online for sale, you have a virtually unlimited capacity for promotion, placement, and delivery that has not been possible in a previous eras, a degree of control that is valued by marketers, sellers, and consumers alike.</p><p>Yet to enter the foray, one must be well-positioned and acquainted with the landscape. The vast majority of consumers aggregate to just a handful of online retailers like Amazon or eBay and for your business to succeed you must both approach these marketplaces head on as well as attempt the flank via your own online store. Through a combination of advertising, long-term SEO strategy, and an attractive website, you can eventually draw loyal customers directly to your own store through awareness and incentives that reward the both of you.</p><p>In the long-run, the set-up and promotion of your own online venue has enormous benefits. Not only do you avoid the commissions of the major marketplaces, you secure a degree of loyalty as clients inevitably pile on additional products to their order from your store and not simply another product from a wide-distribution retailer. They will begin to understand and appreciate your brand, your packaging, and your approach to business, one that they can advocate and evangelize for in a manner unlike a simple generic purchase. We will talk about how to set up an eCommerce site, how to promote it, and how to transform the buying experience until it becomes uniquely yours.</p>",
		firstSteps: "<p>As aforementioned, the best strategy for a new eCommerce store is to cross-promote on the most popular online retailers. Amazon, certainly the most-trafficked and trusted (to the point of risking an anti-trust suit...), costs $40/monthly, has some strict rules, and takes additional fees from each sale. Other online retailers and marketplaces tend to be cheaper. Depending on the nature of your product, you can also consider Shopify, Etsy, eBay, Alibaba, or all of the above in order to maximize your initial exposure into the marketplace.</p><p>Once you've spent the first few hours setting up online stores on these most trafficked sites, it's time to consider your own eCommerce site. It's possible to use pre-fabricated or self-designed websites builders to create your own simple eCommerce store, thus exchanging time for the savings in capital and making the most out of the short-term at the expense of the longer. Should you proceed by this route, the potentialities lie in displaying your products in an attractive manner, providing the opportunity for user reviews (ideally with protection from spam and purchase verification), and creating a straightforward process of checking out. The basic factors, combined with unobtrusive promotional offers, form the backbone of a successful eCommerce site. Yet, given the density of eCommerce sites, their famous reliance on expert UI, and the high expectations of consumers, it may be prudent to skip this first step altogether and purchase a professionally built site.</p><p>If you're looking for developers, create a concise summary of your site-to-be: the number of current products, the likely trajectory of the growth of the number of products, and several competitors' websites. After you've gathered multiple proposals and prepare your counteroffers, be sure to inquire about the kind of CMS that will be used (e.g., WooCommerce, AbanteCart, Magneto, etc), the total cost, the schedule for completion, and the plans for maintenance. One concern peculiar to eCommerce sites is the ongoing addition of new products and to whom this responsibility falls going forward. While this task generally does not require web development skills, it is a significant time sink and should be clearly accounted for in any contract your sign.</p><p>A reasonable cost for an eCommerce site, scaled many by the number of initial products, is between $3,000 and $16,000. By the time you take control of the site, you should have a full understanding of the processes to create a new product, see actions that need to be taken (e.g., deliveries), view reports of sales/expenses/profit, run an on-site promotion, and update the site's appearance. Once your site is up and running, it's time to begin directing traffic towards it.</p>",
		continued: "<p>The naked fact is that having an eCommerce site alone does not compel sales; indeed, it's not even going to attract organic traffic initially. The mechanisms for promoting the site are the same as any other: early on you'll be somewhat dependent on paid advertising and, over time, you'll move into more cost-effective methods that yield fruit over years.</p><p>After you've christened the site and set it afloat, the best way to begin to recoup your expenses is actually to spend a little more money on advertising. Depending on your demographics (the same we've analyzed in this program), you'll want to invest in either search engine advertising or social media advertising. (In turn, you can find your ranking of the best social media platforms in the bonus section of this report.) This kind of media is emerging as an incredible win-win-win for the advertiser, businesses, and consumers precisely because of its fine-tuned targeting. If you do not yet have a marketing research, at least creatively set up a few hypothetical ideal customers that you can use to hon greater efficiency from your initial advertising dollars.</p><p>In the long-run you'll want to divest from paid advertising and build a brand using the same ideal media via an organic strategy. In other words, if you're presently getting results advertising on social media, you'd switch the focus to building a following on your profiles and then spending money on generating unique, valuable, and interactive content for that profile. If you're seeing good results from search engine advertising, you'd switch to an SEO-based strategy in which you produce engaging, informative blog posts that you then cross-promote on other platforms and more popular channels. The net effect of this transition is drastically reduced marketing costs and greater sales/traffic, albeit at the cost of abiding the first several months where there is little tangible result.</p><p>Finally, as alluded to initially, your other online stores are your best conduit for targeted, pre-qualified traffic into your site. Be sure to link your own eCommerce site on every product and profile on these other, more trafficked sites, alluding to discounts and more information (within the limits imposed by the other marketplaces). If you can lure prospects from a more generalized online retailer to your own site, you have the distinct possibility of not only having their entire order based on your product line, but the unique possibility of capturing that customers loyalty indefinitely. As long as your site delivers what they need in a manner unexpectedly well, they will advocate for your brand. This effect has the tendency to snowball as even one influencer who genuinely endorses your brand can draw in thousand of prospects via the power of the Internet.</p>",
		why: "<p>eCommerce is prioritized if:</p><ul><li>If you sell products and not services</li><li>If you sell B2C</li><li>If you have broad distribution</li><li>If you have a low average margin per sale</li><li>If you have a high volume of sales and of client acquisitions</li><li>If your clients' income is within the range of the average consumer</li><li>If you're in one of the following industries: Hospitality, Recreation, Apparel, Arts, Manufacturing, Information Technology, Home Goods, or Retail</li><li>If your demographics are predominantly female</li><li>If you have high website traffic</li><li>If you do not currently have an eCommerce store</li></ul>"
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
	},
	bestPlatformList: function(e,t){
		return Spacebars.SafeString(platformList);
	}

});


