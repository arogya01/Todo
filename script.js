document.getElementById("addToList").addEventListener("click",()=>{
 let taskdescription=document.getElementById("taskDescription");
 let task=document.getElementById("taskTodo").value;
 
 
 let addTask=document.createElement("p");
 addTask.setAttribute('class', "taskAdded");
 addTask.textContent=task;
 taskdescription.appendChild(addTask);
 task="";
});