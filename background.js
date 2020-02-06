chrome.browserAction.onClicked.addListener(() => {
  const query = {
    response_type: "token",
    client_id: "z4ra9yfhsj5e4zg",
    state: "123",
    redirect_uri: chrome.identity.getRedirectURL()
  };
  const params = new URLSearchParams;
  for (const key in query) {
    params.set(key, query[key]);
  }
  const url = `https://www.dropbox.com/oauth2/authorize?${params}`;
  console.log("query: %o, url: %o", query, url);
  chrome.identity.launchWebAuthFlow({url, interactive: true}, finalUrl => {
    console.log("result: %o, error: %o", finalUrl, chrome.runtime.lastError);
  });
});
