browser.menus.create({
  id: "test",
  title: "Test",
  contexts: ["browser_action", "page"],
  onclick() {
    browser.permissions.request({permissions: ["webNavigation"]});
  }
});
