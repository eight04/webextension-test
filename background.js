browser.browserAction.onClicked.addListener(tab => {
  browser.tabs.create({
    url: "http://example.com",
    openerTabId: tab.id
  }).catch(console.error);
});

