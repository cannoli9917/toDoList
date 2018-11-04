const toDoInput = document.getElementById('toDoInput');
const addToListButton = document.getElementById('addToListButton');
const LIST = document.getElementById('LIST');



function checkOff() {
  LIST.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('crossedOut');
    }
  });
}


function createDeleteButton(task) {
    var deleteButton = document.createElement('div');
    deleteButton.innerHTML = 'X';
    deleteButton.className = 'deleteButton';
    task.appendChild(deleteButton);
    deleteButton.addEventListener('click', function() {
      LIST.removeChild(task);
    });
}


function createLi() {
  var toDoItem = toDoInput.value;
  var task = document.createElement('li');
  LIST.appendChild(task);
  task.innerHTML = toDoItem;
  createDeleteButton(task);
}

function addToList() {
  if (toDoInput.value === '') {
    alert('write something to do');
  }
  else {
  createLi();
  checkOff();
  toDoInput.value = '';
  }
}

function handleKeyPress(e) {
  if (e.which === 13) {
    e.stopPropagation();
    e.preventDefault();
    addToListButton.click();
    return false;
  }
}


function init() {
  addToListButton.addEventListener('click', addToList);
  toDoInput.addEventListener('keydown', handleKeyPress);
}

init();
