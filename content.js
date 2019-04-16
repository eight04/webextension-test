{
  const s = document.createElement("style");
  s.disabled = true;
  console.log(s.disabled);
}

{
  const s = document.createElement("style");
  document.head.append(s);
  s.disabled = true;
  console.log(s.disabled);
}

{
  const s = document.createElement("style");
  s.textContent = " ";
  document.head.append(s);
  s.disabled = true;
  console.log(s.disabled);
}
