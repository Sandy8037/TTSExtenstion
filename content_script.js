var body = document.getElementsByTagName('body');
var att = document.createAttribute('onmouseup');
att.value = 'mouseUp()';
body[0].setAttributeNode(att);

var script = document.createElement('script');
var src = "function mouseUp() { var selObj, selectText, text; selObj = window.getSelection(); selectText = selObj.toString(); text = selectText || ''; talk(text); } function talk(text) { var msg = new SpeechSynthesisUtterance(text); speechSynthesis.speak(msg); }";
var tt = document.createTextNode(src);
script.appendChild(tt);
document.getElementsByTagName('head')[0].appendChild(script);
