browser.browserAction.onClicked.addListener(() => {
  fetch("https://example.com")
    .then(response => response.text())
    .then(text => {
      console.log(text);
    });
});
