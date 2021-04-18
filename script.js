
let taskCount=0;
let taskCompleted=0;



document.getElementById("addToList").addEventListener("click",()=>{
 createTask();
 incrementTask();

});


function replaceIcon(event){
    let icon=event.target;
    console.log(icon);
    icon.classList.remove("far");
    icon.classList.remove("fa-circle");
    icon.classList.add("fas");
    icon.classList.add("fa-check-circle");
}

function taskCompletedIncrement(){
    let completed=document.getElementById("completed");
    taskCompleted+=1;
    completed.textContent="task Completed:" + taskCompleted;
}

function incrementTask(){
    let count=document.getElementById("added");
    taskCount+=1;
    count.textContent="task Added:" + taskCount;
}

function taskContainer(){
    let taskdescription=document.getElementById("taskDescription");
    let task=document.getElementById("taskTodo").value;
    document.getElementById("taskTodo").value="";
    
    let container=document.createElement("div");
    let addTask=document.createElement("p");
    addTask.classList.add("taskDetails");
    let icon=document.createElement("i");
    icon.classList.add("far");
    icon.classList.add("fa-circle");
    icon.classList.add("icon");
    container.setAttribute('class', "taskAdded");
    addTask.textContent=task;
    container.appendChild(icon);
    container.appendChild(addTask);
    taskdescription.appendChild(container);
}

function createTask(){
    
    taskContainer();
    document.querySelectorAll(".icon").forEach(item=>{
        item.addEventListener("click",event=>{
           replaceIcon(event);
           taskCompletedIncrement();
         
        });
    })
}

