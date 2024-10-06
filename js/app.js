const todoText = document.querySelector("#todoText");
const addBtn = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");

addBtn.addEventListener("click",()=>{
    alert(todoText.value);
    const listItem = document.createElement("li");
    listItem.textContent = todoText.value;
    todoList.append(listItem);
})