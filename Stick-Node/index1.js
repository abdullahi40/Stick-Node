var container2 = document.querySelector('.container2');
var container3 = document.querySelector('.container3');
var checkIcon = document.querySelector('#check-icon');
var xIcon = document.querySelector('#x-icon');
var i = 0;

xIcon.addEventListener('click', () => {
  typeNote();
});

checkIcon.addEventListener('click', () => {
  createNote();
});

function typeNote() {
  if (container3.style.display == 'none') {
    container3.style.display = 'block';
  } else {
    container3.style.display = 'none';
  }
}

function createNote() {
  var noteText = document.querySelector('#note-text').value;
  var node0 = document.createElement('div');
  var node1 = document.createElement('h1');

  node1.innerHTML = noteText;

  node1.setAttribute('style', 'width:250px; height: 250px; font-size: 26px; padding: 25px; margin-top:10px; overflow: hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)');

  node1.style.margin = margin();
  node1.style.transform = rotate();
  node1.style.background = color();

  node0.appendChild(node1);

  container2.insertAdjacentElement('beforeend', node0);

  // Add hover effect
  node0.addEventListener('mouseenter', () => {
    node0.style.transform = 'scale(1.05)';
    node0.style.transition = 'transform 0.3s ease';
  });

  node0.addEventListener('mouseleave', () => {
    node0.style.transform = 'scale(1)';
    node0.style.transition = 'transform 0.3s ease';
  });

  node0.addEventListener('dblclick', () => {
    node0.remove();
  });

  document.querySelector('#note-text').value = ' ';
}

function margin() {
  var random_margin = ['-5px', '1px', '5px', '10px', '15px', '20px'];
  return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate() {
  var random_rotate = ['rotate(-3deg)', 'rotate(1deg)', 'rotate(-1deg)', 'rotate(-3deg)', 'rotate(-5deg)', 'rotate(-10deg)'];
  return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color() {
  var random_color = ['#c2ff3d', '#ff3de8', '#3dc2ff', '#ebb328'];
  
  if (i > random_color.length - 1) {
    i = 0;
  }
  return random_color[i++];
}
