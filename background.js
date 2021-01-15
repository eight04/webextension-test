browser.webRequest.onBeforeRequest.addListener(console.log, {
  urls: [
    "<all_urls>"
  ]
});

browser.tabs.create({
  url: "http://example.com/foo"
});

browser.windows.create({
  url: "http://example.com/bar",
  type: "popup"
});
