self.addEventListener("message", e => {
  e.waitUntil(
    self.clients.get(e.clientId)
      .then(client => 
        client.postMessage(`sw get data: ${e.data}`);
      );
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(self.clients.claim());
});
