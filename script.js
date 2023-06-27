const input = document.querySelector(".input");
const addBtn = document.querySelector(".addToTask");
const allBtn = document.querySelector(".all");
const doneBtn = document.querySelector(".done");
const notDoneBtn = document.querySelector(".notDone");
const listDiv = document.querySelector(".todolist");
const deleteAll = document.querySelector(".deleteAll");


let finalData = JSON.parse(localStorage.getItem("list"));
function displayUI() {
let div = '';
if(finalData){
  finalData.forEach((item,index)=>{
    let isDone = item.status == 
    'done' ? "checked" : '';
    div += `<div class='data'> 
    <p class='productName ${isDone}'>${item.product}</p>
     <div class="productBtns">
     <input type='checkbox' onclick='updatestatus(this)' class='checkBox' id='${index}'  ${isDone}/>
     <button class="editBtn">Edit</button>
     <button class="deleteBtn">Delete</button>
     </div>
     </div>`;
  })
  listDiv.innerHTML = div;
}
}
displayUI();

function updatestatus(checkBox){
  let productName = checkBox.parentElement.parentElement.firstElementChild;
  if(checkBox.checked){
    productName.classList.add('checked');
    finalData[checkBox.id].status = 'done'
  } else {
    productName.classList.remove('checked')
    finalData[checkBox.id].status = "pending";
  }
  localStorage.setItem("list", JSON.stringify(finalData));
}

addBtn.addEventListener("click", function () {
  let value = input.value;
  if (input.value) {
    finalData = localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];

    list = { product: value, status: "panding" };
    finalData.push(list);
    localStorage.setItem("list", JSON.stringify(finalData));
    // display list
    displayUI();
    input.value = "";
  }
});