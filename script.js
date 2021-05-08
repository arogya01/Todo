let taskCount = 0; //keep track of number of tasks
let taskCompleted = 0; //keep track of number of tasks completed


if (localStorage.getItem("taskCount")) {

    let tadd = localStorage.getItem("taskCount");
    let count = document.getElementById("added");
    taskCount = tadd;
    count.textContent = "Task Added:" + tadd;


    let tcom = localStorage.getItem("taskCompleted");
    let com = document.getElementById("completed");
    taskCompleted = tcom;
    com.textContent = "Task Completed:" + taskCompleted;


    for (let i = 1; i <= tadd; i++) {
        let text = localStorage.getItem(`t${i}`);
        let icont = localStorage.getItem(`icon${i}`);
        taskContainer(text, icont);

    }
    eventListners();
}
/*
else {
    localStorage.setItem("taskCount", 0);
    localStorage.setItem("taskCompleted", 0);
}
*/

document.getElementById("btn").addEventListener("click", () => {
    createTask(); //create the task 

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

    localStorage.getItem("taskCompleted", taskCompleted);
}

//increment task count
function incrementTask() {
    let count = document.getElementById("added");
    taskCount += 1;
    count.textContent = "Task Added:" + taskCount;
}

function taskContainer(text, iconType = "uncheck") {
    let taskdescription = document.getElementById("taskDescription");


    let container = document.createElement("div");
    let addTask = document.createElement("p");

    addTask.classList.add("taskDetails");
    addTask.setAttribute("id", `t${taskCount}`);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("deleteicon");
    deleteIcon.classList.add("fas");
    deleteIcon.classList.add("fa-trash");
    deleteIcon.setAttribute("id", `delicon${taskCount}`);


    let icon = document.createElement("i");
    if (iconType === "check") {
        icon.classList.add("fas");
        icon.classList.add("fa-check-circle");
    } else if (iconType === "uncheck") {
        icon.classList.add("far");
        icon.classList.add("fa-circle");
        icon.classList.add("icon");
    }
    icon.setAttribute("id", `icon${taskCount}`);


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


function setItems(text) {
    localStorage.setItem(`t${taskCount}`, text);
    localStorage.setItem(`icon${taskCount}`, "uncheck");
    localStorage.setItem("taskCount", taskCount);
    localStorage.setItem("taskCompleted", taskCompleted);
}





function createTask() {
    let task = document.getElementById("taskTodo").value; //
    document.getElementById("taskTodo").value = ""; //clear up the input field
    incrementTask();
    taskContainer(task, "uncheck");
    eventListners();
}


function removeFromLocalStg(e) {
    console.log(e.target.id);
    let str = e.target.id;
    let index = str.charAt(str.length - 1);
    localStorage.removeItem(`t${index}`);
    localStorage.removeItem(`icon${index}`);
    localStorage.removeItem(`delicon${index}`);
}

function editLocalStg(e) {
    console.log(e.target.id);
    localStorage.setItem(e.target.id, "check");
}

function eventListners() {

    document.querySelectorAll(".icon").forEach(item => {
        item.addEventListener("click", event => {
            replaceIcon(event); //to replace with full circle when clicked on it. 
            taskCompletedIncrement(); //increment the taskcompleted count
            cutlineThrough(event); //put a line over task
            editLocalStg(event);
        });
    })



    //event listner to remove the task whence clicked. 
    document.querySelectorAll(".deleteicon").forEach(item => {
        item.addEventListener("click", event => {
            let removeTask = event.target;
            let parent = removeTask.parentElement; //extracting the parent from the deleteicon(child element)
            parent.remove();
            removeFromLocalStg(e);
        })
    })

}