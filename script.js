//The `classNames` variable can be used to link any elements you create in js with the associated CSS class names.
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

//HTML elements that you'll need to update when creating new TODOs
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let todoList = []
//This gets executed when creating a new TODO. You should replace the `alert()` call with logic to create new TODOs.
function newTodo() {
  let item = prompt("Enter a TODO item:")  //promt user
  todoList.push(item) //add item to todoList object
  let node = document.createElement("LI") //create <li></li>
  let listitem = document.createTextNode(item) // put the task list item in the <li>
  let itemcount = todoList.length // get total num of tasks

  //checkbox 
  var form = document.createElement('form');
  var checkbox = document.createElement('input');  //create the texbox html
  checkbox.type = "checkbox";  //attributes of the checkbox
  checkbox.id = itemcount;
  checkbox.value = itemcount;
  checkbox.onclick = checked ;

  node.appendChild(form);
  node.appendChild(checkbox); 
  node.appendChild(listitem)
  document.getElementById("todo-list").appendChild(node)
  document.getElementById("item-count").innerText=itemcount
  checked()
}

function checked() { 
  console.log(getTotal())
  let unchecked = getTotal()
  document.getElementById('unchecked-count').innerText=unchecked
}


function getTotal(){
  let checkarr = document.getElementsByTagName("input")  
  let total = 0 
  for (i =0; i < checkarr.length; i++){
    if (checkarr[i].type == 'checkbox' && checkarr[i].checked === false) {
      total++
    }
  }
  return total
}

 