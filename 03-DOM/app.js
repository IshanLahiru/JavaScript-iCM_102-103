document.addEventListener("DOMContentLoaded",function(){
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function(){
        const taskText = taskInput.value.trim();

        if(taskText === ""){
            alert("Please enter a task.");
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.className = "list-group-item";
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="btn btn-danger btn-sm float-right delete-task">Delete</button>          
        
        `;
        const deleteButton = taskItem.querySelector(".delete-task");
        deleteButton.addEventListener("click", function(){
            taskItem.remove();
        });

        console.log(taskItem);

        taskList.appendChild(taskItem);
        taskInput.value = "";
        taskInput.addEventListener("keypress",function(event){
            if(event.key === "Enter"){
                addTaskButton.click();
            }
        });



    });
});


