const result = [];

function checkStyle() {
  if (result.length >= 5) {
    console.log(location.href, result);
    return;
  }
  const style = document.createElement('style');
  style.textContent = ':root{--stylus-applied:1}';
  document.documentElement.appendChild(style);
  const applied = getComputedStyle(document.documentElement)
    .getPropertyValue('--stylus-applied');
  result.push(applied);
  style.remove();
  setTimeout(checkStyle, 1000);
}

checkStyle();
