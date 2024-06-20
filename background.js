browser.browserAction.onClicked.addListener(() => {
  const files = [
    '1. foo/bar.html',
    '1.foo bar/baz.html',
  ];
  for (const filename of files) {
    browser.downloads.download({
      url: 'http://example.com',
      filename,
      saveAs: false
    });
  }
});
