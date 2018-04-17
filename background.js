function doRequest() {
  browser.permissions.request({permissions: ["webNavigation"]});
}

browser.menus.create({
  id: "test",
  title: "Test",
  contexts: ["browser_action", "page"],
  onclick() {
    doRequest();
  }
});

browser.menus.create({
  id: "test2",
  title: "Test 2",
  contexts: ["browser_action", "page"]
});

browser.menus.onClicked.addListener(({menuItemId}) => {
  if (menuItemId === "test2") {
    doRequest();
  }
});
