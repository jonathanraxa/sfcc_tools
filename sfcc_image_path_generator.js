javascript:
var arr = [], l = document.links;
for(var i=0; i<l.length; i++) {
  arr.push(l[i].href);
}
var fullLinks = [];
for(var i=0; i<arr.length; i++) {
  if(arr[i].indexOf("/Gap/") >= 0 && arr[i].indexOf("?version") >= 0) {
    var start = arr[i].indexOf("/Gap/");
    var end = arr[i].indexOf("?version");
    var imageURL = arr[i].substring(start, end);
    fullLinks.push(imageURL);
  }
}
var pop = open("", "", "top=200,left=100,width=550,height=500");
pop.document.writeln("<textarea id='codeTemplate' style='width:100%;height:300px;'>");
for(var i=0; i<fullLinks.length; i++) {
  if(fullLinks[i].indexOf(".DS_Store") >= 0){
    continue;
  } else {
    if(fullLinks[i] === fullLinks[i-1]){
      continue;
    } else{
      pop.document.writeln(fullLinks[i]);
    }
  }
}
pop.document.writeln("</textarea>");
pop.document.write("<div style=\"text-align: center;\">\n<button id=\"copyHTML\" onclick=\"copyHtml();\" style=\"padding: 10px;background: #4141d2;color: white;text-transform: uppercase;\">\n  copy html\n<\/button>\n<span id=\"copiedText\" style=\"display:none;text-align: center;\">\n    copied!\n<\/span>\n<\/div>\n<script>\nfunction copyHtml(){\n  const codeTemplate = document.getElementById(\'codeTemplate\');\n  codeTemplate.focus();\n  codeTemplate.select();\n  document.execCommand(\"copy\");var copiedText = document.getElementById(\'copiedText\');\ncopiedText.style.display = \'inline-block\';}\n<\/script>");
pop.document.close();
