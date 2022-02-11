function listener(details) {
  let dirty = false;
  for (const item of details.responseHeaders) {
    if (item.name.toLowerCase() === "content-type") {
      item.value = "text/plain";
      dirty = true;
    }
  }
  if (dirty) {
    return {responseHeaders: details.responseHeaders};
  }
}
const filter = {
  urls: ["<all_urls>"]
};
const extra = ["blocking", "responseHeaders"];
browser.webRequest.onHeadersReceived.addListener(listener, filter, extra);
