function generateData(){
 var prevY = 0;
 var objArr = [];
 for (i=1; i < 100; i = i + 1){
  var newX = i;
  if(Math.random()>.3){
   var newY = Math.random()*10+prevY;
  }else{
   var newY = -(Math.random()*10)+prevY;
  }
  var prevY = newY;
  var pushObj = {x: newX, y: newY};
  objArr.push(pushObj);
 }
 return objArr;
}





Template.craftYourStrategy.onRendered(function(){

 $('.material-tooltip').remove()





 // resize event
 $(window).resize(function(){
  resize()
 });// end resize

 function resize(){
  var vw = $(window).width();
  var vh = $(window).height();
  $('#cont').find('svg').attr('width', vw).attr('height', vh);
  
 }











 var margin = {top: 20, right: 100, bottom: 30, left: 100},
     width = 960 - margin.left - margin.right,
     height = 500 - margin.top - margin.bottom;



 var dataset = generateData();

 var xScale = d3.scale.linear()
     .domain([0, d3.max(dataset, function(d){ return d.x; })])
     .range([0, width]);

 var yScale = d3.scale.linear()
     .domain([0, d3.max(dataset, function(d){ return d.y; })])
     .range([height, 0]);

 var xAxis = d3.svg.axis()
     .scale(xScale)
     .orient("bottom")
     .innerTickSize(-height)
     .outerTickSize(0)
     .tickPadding(10);

 var yAxis = d3.svg.axis()
     .scale(yScale)
     .orient("left")
     .innerTickSize(-width)
     .outerTickSize(0)
     .tickPadding(10);

 var line = d3.svg.line()
     .x(function(d) { return xScale(d.x); })
     .y(function(d) { return yScale(d.y); });

 var svg = d3.select("#cont").append("svg")
     .attr("width", width + margin.left + margin.right)
     .attr("height", height + margin.top + margin.bottom)
   .append("g")
     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

   svg.append("g")
       .attr("class", "x axis")
       .attr("transform", "translate(0," + height + ")")
       .call(xAxis)

   svg.append("g")
       .attr("class", "y axis")
       .call(yAxis)

   var pathApp = svg.append("path")
       .data([dataset])
       .attr("class", "line")
       .attr("d", line)
   
   var totalLength = pathApp.node().getTotalLength();

   pathApp.attr("stroke-dasharray", totalLength + " " + totalLength)
       .attr("stroke-dashoffset", totalLength)
       .transition()
         .duration(10000)
         .ease("linear")
         .attr("stroke-dashoffset", 0);

   var evt = new MouseEvent("click");


     svg.on("click", function(){


      var dataset = generateData();

      var pathApp = svg.append("path")
       .data([dataset])
       .attr("class", "line")
       .attr("d", line)
   
      pathApp.attr("stroke-dasharray", totalLength + " " + totalLength)
       .attr("stroke-dashoffset", totalLength)
       .transition()
         .duration(10000)
         .ease("linear")
         .attr("stroke-dashoffset", 0);
     })





});