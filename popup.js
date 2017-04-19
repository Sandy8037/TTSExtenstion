
chrome.tabs.executeScript(null, {file: 'content_script.js'});

document.getElementById('pause').addEventListener('click', function () {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {state: "pause"}, function () {
    });
  });
});

document.getElementById('resume').addEventListener('click', function () {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {state: "resume"}, function () {
    });
  });
});

document.getElementById('cancel').addEventListener('click', function () {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {state: "cancel"}, function () {
    });
  });
});
