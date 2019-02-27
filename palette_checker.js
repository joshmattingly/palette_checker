
var margin = {top: 20, right: 10, bottom: 20, left: 10};

var width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var squareSide = 30;

var testData = ['#a50026','#d73027','#f46d43','#fdae61','#fee090','#ffffbf','#e0f3f8','#abd9e9','#74add1','#4575b4','#313695',
    '#543005','#8c510a','#bf812d','#dfc27d','#f6e8c3','#f5f5f5','#c7eae5','#80cdc1','#35978f','#01665e','#003c30'];


/* TODO: Change scales to grow and shrink with dataset */
var gridScale = d3.scaleOrdinal()
    .range([42,84,126,168,210,252,294,336,378,420])

var maxColumns = 10;
var rowCounter = 2;
var columnCounter = 0;

var colorSwatch = svg.selectAll('rect')
    .data(testData)
    .enter()
    .append("g")
    .append("rect")
    .attr("class", "swatch")
    .attr("width", squareSide)
    .attr("height", squareSide)
    .attr("x", function(){
        if(columnCounter < maxColumns){
            columnCounter++;
            return gridScale(columnCounter);
        } else {
            columnCounter = 0;
            return gridScale(columnCounter);
        }
    })
    .attr("y", function(){
        if(columnCounter < maxColumns){
            columnCounter++;
            return gridScale(rowCounter);
        } else {
            columnCounter = 0;
            rowCounter++;
            return gridScale(rowCounter);
        }
    })
    .attr("fill", function(d){ return d; });

columnCounter = 0;
rowCounter = 2;

var swatchText = svg.selectAll("text")
    .data(testData)
    .enter()
    .append("g")
    .append("text")
    .attr("font-size", "9px")
    .text(function(d){ return d; })
    .attr("x", function(d,i){
        if(columnCounter < maxColumns){
            columnCounter++;
            return gridScale(columnCounter);
        } else {
            columnCounter = 0;
            return gridScale(columnCounter);
        }
    })
    .attr("y", function(){
        if(columnCounter < maxColumns){
            columnCounter++;
            return gridScale(rowCounter);
        } else {
            columnCounter = 0;
            rowCounter++;
            return gridScale(rowCounter);
        }
    })
    .text(function(d){ return d; });
