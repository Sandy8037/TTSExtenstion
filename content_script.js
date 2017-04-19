
var body = document.getElementsByTagName('body');
var att = document.createAttribute('onmouseup');
att.value = 'mouseUp()';
body[0].setAttributeNode(att);

var script = document.createElement('script');
var src = "var msg, selObj, selectText, text; function mouseUp() { selObj = window.getSelection(); selectText = selObj.toString(); text = selectText || ''; talk(text); } function talk(text) { msg = new SpeechSynthesisUtterance(text); speechSynthesis.speak(msg); } ";
var tt = document.createTextNode(src);
script.appendChild(tt);
document.getElementsByTagName('head')[0].appendChild(script);

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.state === 'pause') {
      speechSynthesis.pause();
    }
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.state === 'resume') {
      speechSynthesis.resume();
    }
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.state === 'cancel') {
      speechSynthesis.cancel();
    }
});
