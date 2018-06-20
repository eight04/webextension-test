const url = browser.runtime.getURL("worker.js");
console.log("init", url);
navigator.serviceWorker.register(url)
  .then(() => {
    console.log("registered");
    navigator.serviceWorker.addEventListener("message", e => {
      console.log("message", e);
    });
    navigator.serviceWorker.ready.then(() => {
      console.log("active");
      navigator.serviceWorker.controller.postMessage(`hello from ${location.href}`);
    });
  })
  .catch(err => {
    // related?
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1344561
    console.log("register failed", err);
  });
