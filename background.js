chrome.browserAction.onClicked.addListener(() => {
  chrome.downloads.download({
    filename: "👁‍🗨.txt",
    url: "http://example.com"
  }, r => {
    console.log(chrome.runtime.lastError, r);
  })
});
