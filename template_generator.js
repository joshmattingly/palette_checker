/* this file takews the palette_checker.js data and generates a simple
Power BI theme template
 */


generateTemplate = function(jsonString, templateName){
    var backgroundColor = "#BFB8BF";
    var foregroundColor = "#003366";
    var tableAccentColor = "#214F80";

    var template_string = "\{\n"
        + "\t\"name\"\:\""+templateName + "\",\n"
        + "\t\"dataColors\"\:"+jsonString+"\,\n"
        + "\t\"background\"\:\"" + backgroundColor + "\"\,\n"
        +"\t\"foreground\"\:\"" + foregroundColor + "\"\,\n"
        +"\t\"tableAccent\"\:\"" + tableAccentColor + "\"\,\n"
        +"\t\"visualStyles\"\: \{\n"
        +"\t\t\"\*\"\:\{\n"
        +"\t\t\t\"\*\"\:\{\n"
        +"\t\t\t\t\"\*\"\:\[\{\n"
        +"\t\t\t\t\t\"responsive\"\: true\,\n"
        +"\t\t\t\t\t\"wordwrap\"\: true\,\n"
        +"\t\t\t\t\t\"fontSize\"\: 10\,\n"
        +"\t\t\t\t\t\"fontFamily\"\: \"Arial\"\n"
        +"\t\t\t\t\}\]\,\n"
        +"\t\t\t\t\t\"wordWrap\"\:\[\{\n"
        +"\t\t\t\t\t\"show\"\: true\n"
        +"\t\t\t\t\}\]\n"
        +"\t\t\t\}\n"
        +"\t\t\}\n"
        +"\t\}\n"
        +"\}\n";

    return template_string;
}
/*
{
        "name":"Conagra - Wishbone",
        "dataColors":["#2d9b68", "#f2f2ed", "#afba5b", "#196d51", "#43C5E4", "#E82C2A", "#62BB46", "#BFB8BF", "#231F20", "#C3271B", "#EA5329", "#007EC5", "#94D8E9", "#007933", "#A5CF4F"],
        "background":"#BFB8BF",
        "foreground":"#003366",
        "tableAccent":"#214F80",
        "visualStyles": {
        "*":{
            "*":{
                "*":[{
                    "responsive": true,
                    "wordwrap": true,
                    "fontSize": 10,
                    "fontFamily": "Arial"
                }],
                    "wordWrap":[{
                    "show":true
                }]
            }
        }
    }
}
*/