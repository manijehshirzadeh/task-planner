
// this is an array of objects
const tasks = [
    // this object is the first item of the array
    {
        id: 1,
        name: "Do task 7",
        description: "This is what we need to do from the description",
        assignedTo: "Andrea Isla",
        dueDate: "24/11/2022",
        status: "todo",
    },
    // this object is the SECOND item of the array
    {
        id: 2,
        name: "Talk to team",
        description: "Talk to the team to ensure good collaboration",
        assignedTo: "Nick Rhen",
        dueDate: "25/11/2022",
        status: "todo",
    },
    {
        id: 3,
        name: "Complete form validation",
        description: "Do Form Validation",
        assignedTo: "Manij Shirzadeh",
        dueDate: "25/11/2022",
        status: "todo",
    },
    {
        id: 4,
        name: "Review results",
        description: "Review our outcomes",
        assignedTo: "Tony Nguyen",
        dueDate: "25/11/2022",
        status: "todo",
    },
];

function deleteTask(id) {
    console.log('I have to delete task ', id);
    // here goes the future implementation
    // ...
}

function render() {
    const container = document.getElementById('tasks_container');

    for (let task of tasks) {
        const htmlForTask = `
                    <div class="col col-lg-8 col-xl-6">
						<div class="card rounded-3 my-2">
							<div class="card-body p-4">
								<!-- TASK NAME -->
								<p class="mb-2">
									<span class="h2 me-2">${task.name}</span>
									<span class="badge bg-info g1-badge">${task.status}</span>
								</p>
								<!-- ASSIGNEE -->
								<p class="mb-2">
									<span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" data-bs-placement="bottom" title="${task.assignedTo}">
										<img src="https://ui-avatars.com/api/?name=${task.assignedTo}&background=random" alt="${task.assignedTo}" class="rounded-circle me-n2" width="45">
									</span>
								</p>
								<p class="text-muted pb-2">27/10/2022</p>

								<ul class="list-group rounded-0">
									<!-- DUE DATE -->
									<li class="list-group-item border-0 d-flex align-items-center ps-0">
										<p class="mb-2">
											<span class="h5 me-2"> Due Date </span>
											<span class="h6">${task.dueDate}</span>
										</p>
									</li>
									<!-- DESCRIPTION -->
									<li class="list-group-item border-0 d-flex align-items-center ps-0">
										<span class="h5 me-2"> Description </span>
									</li>
								</ul>
								<!-- DESCRIPTION TEXT -->
								<div class="form-textarea">
									<textarea class="form-control" placeholder="Task summary" id="floatingTextarea">${task.description}
                </textarea>
								</div>
                                <div class="mt-2">
                                    <a href="#" class="btn btn-danger delete-task" data-delete-task-id="${task.id}">Delete task</a>
                                </div>
							</div>
						</div>
						<!-- CARD END -->
					</div>
        `;
        container.innerHTML += htmlForTask;
    }
    // deleteTaskButtons is an array of all the "delete" button elements;
    const deleteTaskButtons = container.querySelectorAll('.delete-task');
    // loop to go through each of the button elements
    for (deleteButtonElement of deleteTaskButtons)  {
        // add an event listener 
        deleteButtonElement.onclick = function(event) {
            // clickedButton is the button that was just clicked
            const clickedButton = event.target;
            // dataset is used to get what I put in <a data-delete-task-id="some Id"/>
            const deleteTaskId = clickedButton.dataset['deleteTaskId'];
            deleteTask(deleteTaskId);
        };
    }

}

render();

// console.log('tasks', tasks);
// console.log('first task', tasks[0]);
// console.log(
//     'first task, property "dueDate"',
//     tasks[1].dueDate
// );