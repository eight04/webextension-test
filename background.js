browser.browserAction.onClicked.addListener(() => {
  browser.windows.create({type: "popup", state: "minimized"}).catch(console.error);
});
