fetch(browser.runtime.getURL("test.png"))
  .then(r => r.blob())
  .then(b => {
    const img = new Image;
    img.src = URL.createObjectURL(b);
    document.body.append(img);
  })
  .catch(console.error);
  