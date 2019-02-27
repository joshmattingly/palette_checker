
var margin = {top: 0, right: 0, bottom: 0, left: 0};

var width = 960 - margin.left - margin.right,
    height = 350 - margin.top - margin.bottom;

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

var squareSide = 80;

var gridScale = [84, 168, 252, 336, 420, 504, 588, 672, 756, 840];

function show() {
    d3.selectAll("g > *").remove();

    var maxColumns = 8;
    var rowCounter = 0;
    var columnCounter = 0;

    svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var form = document.getElementById("theForm");
    var inputString = form.elements.color_palette.value.replace(/[\[\]"']+/g,"");
    var themeName = form.elements.themeName.value;

    var dataset = inputString.split(',');

    var jsonDataset = JSON.stringify(dataset);

    /*
        generate PBI theme code
     */
    var themeOutput = document.getElementById("themeCode");
    themeOutput.value = generateTemplate(jsonDataset, themeName);

    var colorSwatch = svg.selectAll('rect')
        .data(dataset)
        .enter()
        .append("g")
        .append("rect")
        .attr("class", "swatch")
        .attr("width", squareSide)
        .attr("height", squareSide)
        .attr("x", function () {
            currentColumn = columnCounter;
            if (columnCounter < maxColumns) {
                columnCounter++;
                return gridScale[currentColumn];
            } else {
                columnCounter = 0;
                return gridScale[currentColumn];
            }
        })
        .attr("y", function (d, i) {
            if (i == 0){
                columnCounter = 0;
            };
            var currentColumn = columnCounter;
            var currentRow = rowCounter;
            if (currentColumn < maxColumns) {
                columnCounter++;
                return gridScale[currentRow];
            } else {
                columnCounter = 0;
                rowCounter++;
                return gridScale[currentRow];
            }
        })
        .attr("fill", function (d) {
            return d;
        });

    columnCounter = 0;
    rowCounter = 0;

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
        .attr("x", function () {
            var currentColumn = columnCounter;
            if (currentColumn < maxColumns) {
                columnCounter++;
                return gridScale[currentColumn] + 13;
            } else {
                columnCounter = 0;
                return gridScale[currentColumn] + 13;
            }
        })
        .attr("y", function (d, i) {
            if (i == 0){
                columnCounter = 0;
            };
            var currentColumn = columnCounter;
            var currentRow = rowCounter;
            if (currentColumn < maxColumns) {
                columnCounter++;
                return gridScale[currentRow] + 41;
            } else {
                columnCounter = 0;
                rowCounter++;
                return gridScale[currentRow] + 41;
            }
        })
        .text(function (d) {
            return d;
        });
};
