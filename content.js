const url = browser.runtime.getURL("worker.js");
console.log("init", url);
const worker = new SharedWorker(url);
// this worker is shared between tabs only if their location.href are the same.
worker.addEventListener("error", e => {
  console.log("worker error", e);
});
worker.port.addEventListener("message", e => {
  console.log("get message", e);
});
worker.port.start();
console.log("port start");
