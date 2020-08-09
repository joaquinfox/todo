// Select li items and format
let lis = document.querySelectorAll('li');
let plus = document.querySelector('.fa-plus');
let trash = document.querySelectorAll('.fa-trash');
let input = document.querySelector('#vanilla-input');
let ul = document.querySelector('ul');

// function applyCompleted() {
lis.forEach((li) => {
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });
});
// }
// applyCompleted();

// on click, toggle input reveal
plus.addEventListener('click', function () {
  input.classList.toggle('hideinput');
});

// remove trash items
trash.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.parentNode.remove();
  });
});

// Add items to list
// input.addEventListener('keypress', (e) => {
//   if (e.keyCode === 13) {
//     let newItem = e.target.value;
//     input.value = '';
//     let liNew = document.createElement('li');
//     liNew.innerHTML =
//       '<li><span><i class="fa fa-trash"></i> </span>' + newItem + ' </li>';
//     ul.appendChild(liNew);
//     console.log(newItem);
//   }
// });

input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    if (input.value) {
      let newItem = e.target.value;
      input.value = '';
      let liNew = document.createElement('li');
      // liNew.className = 'completed';
      liNew.innerHTML = '<span><i class="fa fa-trash"></i> </span>' + newItem;
      ul.appendChild(liNew);
      liNew.addEventListener('click', () => {
        liNew.classList.toggle('completed');
      });
      let trash = liNew.contains('span');
      // trash[0].addEventListener('click', () => {
      //   console.log('hanga banga');
      // });
      console.log('TRASH', trash);

      // newItem.classList.add('completed');
      console.log(newItem);
    }
  }
});
// applyCompleted();
