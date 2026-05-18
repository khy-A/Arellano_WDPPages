//Student Name: Arellano, Khylle Q.
//filename:LabAct6_Arellano.js

// Comment 1:  This array stores the default list of task including whether if its completed or not.
let tasks = [
    { task: "Buy groceries", completed: false },
    { task: "Finish homework", completed: false },
    { task: "Clean the house", completed: true },
    { task: "Call Mom", completed: false }
];

// Comment 2: When this function is called it will display all tasks inside the <ul> element.
function displayTasks() {
    // Get the <ul> element to add tasks to
    const todoList = document.getElementById("todoList");

    // Comment 3: This clears the list, which is responsible for preventing the items inside the <ul> from being duplicated when you add a new item.
    todoList.innerHTML = "";

    // Comment 4: This will loop through all the tasks and it will put each one into the <ul> as an <li>.
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");

        // Comment 5: If you complete a task, this will add the CSS design which will cross out a task that is completed and a bit grey color of the font.
        if (tasks[i].completed) {
            li.classList.add("completed");
        } 

        // Comment 6: This is responsible for creating a <span> element so that the task text can be displayed inside it.
        let taskText = document.createElement("span");
        taskText.textContent = tasks[i].task;

        // Comment 7: This creates a button that shows either “Complete” or “Undo,” depending on whether the task is completed or not.    
        let toggleButton = document.createElement("button");
        toggleButton.textContent = tasks[i].completed ? "Undo" : "Complete";

        // Comment 8:   This makes the button interactive so the user can click it to change the task status. It adds a click event to the button.
        toggleButton.addEventListener("click", function () {
            tasks[i].completed = !tasks[i].completed;  // Comment 9: This is responsible for changing the completed status between true and false. 
                                                                    // If it's false, clicking the button will change it to true.
            displayTasks(); // Comment 10: This is responsible for updating the task list to show the new status.
        });

        // Comment 11: This adds the text inside the <li> element so that the text will appear in the task list.
        li.appendChild(taskText);
        li.appendChild(toggleButton);

        // Comment 12:  This adds the <li> element inside the <ul> so the task will appear in the task list.
        todoList.appendChild(li);
    }
}

// Comment 13: This is responsible for adding a new task when the user clicks the "Add New Task" button.
document.getElementById("addTaskBtn").addEventListener("click", function () {
    let newTask = prompt("Enter a new task: ");
    if (newTask) {
        tasks.push({ task: newTask, completed: false });
        displayTasks(); // Comment 14: This updates the task list so the newly added task appears.
    }
});

// Comment 15: This displays the tasks as soon as the page loads.
displayTasks();