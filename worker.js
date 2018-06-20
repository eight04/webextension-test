let clients = 0;
self.addEventListener("connect", e => {
  clients++;
  const port = e.ports[0];
  port.start();
  port.postMessage(["Connected clients", clients])
});
