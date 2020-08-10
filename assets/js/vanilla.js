// Variable declarations
let lis = document.querySelectorAll('li');
let plus = document.querySelector('.fa-plus');
// let trash = document.querySelectorAll('.fa-trash');
let trash = document.querySelectorAll('span');
let input = document.querySelector('#vanilla-input');
let ul = document.querySelector('ul');

// Toggle class completed
lis.forEach((li) => {
  li.addEventListener('click', (e) => {
    e.stopPropagation();
    li.classList.toggle('completed');
  });
});

// On click, toggle input reveal
plus.addEventListener('click', function (e) {
  e.stopPropagation();
  input.classList.toggle('hideinput');
});

// Remove items functionality
trash.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.remove();
  });
});

// Create new item and append to list
input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    if (input.value) {
      let newItem = e.target.value;
      input.value = ''; // Clear input
      let liNew = document.createElement('li');
      liNew.innerHTML = '<span><i class="fa fa-trash"></i> </span>' + newItem;
      ul.appendChild(liNew);
      // Add style toggle to new item
      liNew.addEventListener('click', (event) => {
        event.stopPropagation();
        liNew.classList.toggle('completed');
      });
      // Add trash functionality to new item
      let target = liNew.querySelector('.fa-trash');
      target.addEventListener('click', () => {
        target.parentNode.parentNode.remove();
      });
    }
  }
});
