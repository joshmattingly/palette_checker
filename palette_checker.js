var margin = {top: 20, right: 10, bottom: 20, left: 10};

var width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

var squareSide = 60;

var gridScale = d3.scaleOrdinal()
    .range([84, 168, 252, 336, 420, 504, 588, 672, 756, 840]);



function show() {
    d3.selectAll("g > *").remove();

    var maxColumns = 10;
    var rowCounter = 2;
    var columnCounter = 0;

    svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var form = document.getElementById("theForm");
    var inputString = form.elements.color_palette.value.replace(/[\[\]']+/g,"");

    var dataset = inputString.split(',');
    var colorSwatch = svg.selectAll('rect')
        .data(dataset)
        .enter()
        .append("g")
        .append("rect")
        .attr("class", "swatch")
        .attr("width", squareSide)
        .attr("height", squareSide)
        .attr("x", function () {
            if (columnCounter < maxColumns) {
                columnCounter++;
                return gridScale(columnCounter);
            } else {
                columnCounter = 0;
                return gridScale(columnCounter);
            }
        })
        .attr("y", function () {
            if (columnCounter < maxColumns) {
                columnCounter++;
                return gridScale(rowCounter);
            } else {
                columnCounter = 0;
                rowCounter++;
                return gridScale(rowCounter);
            }
        })
        .attr("fill", function (d) {
            return d;
        });

    columnCounter = 0;
    rowCounter = 2;

    var swatchText = svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("g")
        .append("text")
        .attr("font-size", "14px")
        .attr("font-family", "Arial")
        .text(function (d) {
            return d;
        })
        .attr("x", function (d, i) {
            if (columnCounter < maxColumns) {
                columnCounter++;
                return gridScale(columnCounter);
            } else {
                columnCounter = 0;
                return gridScale(columnCounter);
            }
        })
        .attr("y", function () {
            if (columnCounter < maxColumns) {
                columnCounter++;
                return gridScale(rowCounter);
            } else {
                columnCounter = 0;
                rowCounter++;
                return gridScale(rowCounter);
            }
        })
        .text(function (d) {
            return d;
        });
};