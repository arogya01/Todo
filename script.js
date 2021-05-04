
let taskCount = 0;//keep track of number of tasks
let taskCompleted = 0;//keep track of number of tasks completed
let count=0;

if(localStorage.getItem("taskdetails0")){
   let c=localStorage.getItem("count");

   for(let i=0;i<=1;i++){
    let text=localStorage.getItem(`taskdetails${i}`);
    taskContainer(text);
   }
    
 }

document.getElementById("btn").addEventListener("click", () => {
    createTask();//create the task 
    incrementTask();//increment task count
});

//replace the empty circle with full circle
function replaceIcon(event) {
    let icon = event.target;
    console.log(icon);
    icon.classList.remove("far");
    icon.classList.remove("fa-circle");
    icon.classList.add("fas");
    icon.classList.add("fa-check-circle");
}

//increment the taskCompleted count
function taskCompletedIncrement() {
    let completed = document.getElementById("completed");
    taskCompleted += 1;
    completed.textContent = "Task Completed:" + taskCompleted;
}

//increment task count
function incrementTask() {
    let count = document.getElementById("added");
    taskCount += 1;
    count.textContent = "Task Added:" + taskCount;
}

function taskContainer(text) {
    let taskdescription = document.getElementById("taskDescription");
    

    let container = document.createElement("div");
    let addTask = document.createElement("p");

    addTask.classList.add("taskDetails");
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("deleteicon");
    deleteIcon.classList.add("fas");
    deleteIcon.classList.add("fa-trash");
   

    let icon = document.createElement("i");
    icon.classList.add("far");
    icon.classList.add("fa-circle");
    icon.classList.add("icon");


    container.setAttribute('class', "taskAdded");
    addTask.textContent = text;
    container.appendChild(icon);
    container.appendChild(addTask);
    container.appendChild(deleteIcon);
    taskdescription.appendChild(container);
    setItems(text);
}

function cutlineThrough(event) {
    let current = event.target;
    let para = current.nextSibling;
    para.style.textDecoration = "line-through";
}


function setItems(text){
  // localStorage.setItem(`taskdetails${taskCount}`,document.querySelector(".taskDetails").textContent);
  count++;
  localStorage.setItem(`taskdetails${count}`,text);
  // localStorage.setItem(`icon${count}`,document.querySelector(".icon").classList.value);
  // localStorage.setItem(`deleteicon${count}`,document.querySelector(".deleteicon").classList.value);
   localStorage.setItem("count",count);
}

function createTask() {
    let task = document.getElementById("taskTodo").value;//
    document.getElementById("taskTodo").value = "";//clear up the input field
    taskContainer(task);
    
    

    document.querySelectorAll(".icon").forEach(item => {
        item.addEventListener("click", event => {
            replaceIcon(event);//to replace with full circle when clicked on it. 
            taskCompletedIncrement();//increment the taskcompleted count
            cutlineThrough(event);//put a line over task
        });
    })
   
    function removeFromLocalStg(){
     
    }

    //event listner to remove the task whence clicked. 
    document.querySelectorAll(".deleteicon").forEach(item => {
        item.addEventListener("click", event => {
            let removeTask = event.target;
            let parent = removeTask.parentElement;//extracting the parent from the deleteicon(child element)
            parent.remove();
            removeFromLocalStg();
        })
    })
}



