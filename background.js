browser.browserAction.onClicked.addListener(() => {
  browser.downloads.download({
    url: 'http://example.com',
    filename: '%.html',
    saveAs: false
  });
});
