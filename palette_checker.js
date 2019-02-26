
var margin = {top: 20, right: 10, bottom: 20, left: 10};

var width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var squareSide = 50;

var testData = ["#2d9b68", "#f2f2ed", "#afba5b", "#196d51", "#43C5E4", "#E82C2A", "#62BB46", "#BFB8BF", "#231F20",
    "#C3271B", "#EA5329", "#007EC5", "#94D8E9", "#007933", "#A5CF4F"];


/* TODO: Change scales to grow and shrink with dataset */
var xScale = d3.scaleOrdinal()
    .domain(testData)
    .range([42, 84, 126, 168, 210, 252])

var yScale = d3.scaleOrdinal()
    .domain(testData)
    .range([42, 84, 126, 168, 210, 252]);


var colorSwatch = svg.selectAll('rect')
    .data(testData)
    .enter()
    .append("g")
    .append("rect")
    .attr("class", "swatch")
    .attr("width", squareSide)
    .attr("height", squareSide)
    .attr("x", function(d,i){ return xScale(i); })
    .attr("y", function(d,i){ return yScale(i); })
    .attr("fill", function(d){
        return d;
    });
