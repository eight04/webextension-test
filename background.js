browser.tabs.executeScript({
  code: "'success'",
  allFrames: true,
  frameId: 0
})
  .then(console.log, console.error);
