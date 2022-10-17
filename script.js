let fifth = document.getElementById('fifth');
let sixth = document.querySelector("#sixth")
let add = document.getElementById('add');
let zoomIn = document.getElementById('zoomIn');
let zoomOut = document.getElementById('zoomOut');
let del = document.getElementById('delete');
let img = document.getElementById('image');

let scale = 1;
let fifthFlag = false;
let sixthFlag = false;

const findRandomColour = () => {
  const letters ="0123456789ABCDEF";
  let color = '';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return `#${color}`;
}

const changeColour = (el, backCol, textCol) => {
  el.style.backgroundColor = backCol;
  el.style.color = textCol;
}

fifth.addEventListener('click', () => {
  changeColour(fifth, findRandomColour(), findRandomColour())
})

sixth.addEventListener('click', () => {
  changeColour(sixth, findRandomColour(), findRandomColour())
})

add.addEventListener('click', () => {

})

zoomIn.addEventListener('click', () => {
  if(scale < 1.5) {
    scale += 0.1
    img.style.transform = `scale(${scale})`
  }
})

zoomOut.addEventListener('click', () => {
  if(scale > 0.75) {
    scale -= 0.1
    img.style.transform = `scale(${scale})`
  }
})

del.addEventListener('click', () => img.style.display = 'none')

