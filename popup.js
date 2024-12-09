history.pushState(null, "", "/test")

const o = document.querySelector("span");
setInterval(() => {
  o.textContent = location.href
}, 200);
