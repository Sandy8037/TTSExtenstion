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
