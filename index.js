const toDoInput = document.getElementById('toDoInput');
const addToListButton = document.getElementById('addToListButton');
const LIST = document.getElementById('LIST');



function createLi() {
  var toDoItem = toDoInput.value;
  var task = document.createElement('li');
  LIST.appendChild(task);
  task.innerHTML = toDoItem;
}

function addToList() {
  createLi();
  toDoInput.value = "";
}

function handleKeyPress(e) {
  if (e.which === 13) {
    e.stopPropagation();
    e.preventDefault();
    addToListButton.click();
    return false;
  }
}
// GIt test comment you All
function init() {
  addToListButton.addEventListener('click', addToList);
  toDoInput.addEventListener('keydown', handleKeyPress);
}



init();
