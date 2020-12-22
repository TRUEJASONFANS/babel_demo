export function pColor(color) {

  var p2 = document.createElement('p');

  p2.innerHTML = "paragraph 2";
  document.body.appendChild(p2);
  console.log('create a p tag')
  const p = document.querySelector('p');
  p.style.color = color;
}