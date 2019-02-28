/* this file takews the palette_checker.js data and generates a simple
Power BI theme template
 */

"use strict";

var generateTemplate = function(dataset, templateName, outputFormat){

    if(outputFormat=='pbi') {

        var jsonString = JSON.stringify(dataset);
        var backgroundColor = "#BFB8BF";
        var foregroundColor = "#003366";
        var tableAccentColor = "#214F80";

        var pbi_string = "\{\n"
            + "\t\"name\"\:\"" + templateName + "\",\n"
            + "\t\"dataColors\"\:" + jsonString + "\,\n"
            + "\t\"background\"\:\"" + backgroundColor + "\"\,\n"
            + "\t\"foreground\"\:\"" + foregroundColor + "\"\,\n"
            + "\t\"tableAccent\"\:\"" + tableAccentColor + "\"\,\n"
            + "\t\"visualStyles\"\: \{\n"
            + "\t\t\"\*\"\:\{\n"
            + "\t\t\t\"\*\"\:\{\n"
            + "\t\t\t\t\"\*\"\:\[\{\n"
            + "\t\t\t\t\t\"responsive\"\: true\,\n"
            + "\t\t\t\t\t\"wordwrap\"\: true\,\n"
            + "\t\t\t\t\t\"fontSize\"\: 10\,\n"
            + "\t\t\t\t\t\"fontFamily\"\: \"Arial\"\n"
            + "\t\t\t\t\}\]\,\n"
            + "\t\t\t\t\t\"wordWrap\"\:\[\{\n"
            + "\t\t\t\t\t\"show\"\: true\n"
            + "\t\t\t\t\}\]\n"
            + "\t\t\t\}\n"
            + "\t\t\}\n"
            + "\t\}\n"
            + "\}";

        return pbi_string;

    } else if(outputFormat=='tableau'){


        var tableau_string = "\<color\-palette name\=\""+templateName+"\" type=\"regular\"\>\n";

        dataset.forEach(function(d){
            tableau_string += "\<color\>"+d+"\<\/color\>\n";
        });

        tableau_string += "\<\/color\-palette\>";

        return tableau_string;

    }
}
