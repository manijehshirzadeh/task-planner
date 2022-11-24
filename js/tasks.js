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

function render() {
    const container = document.getElementById('tasks_container');

    for (let task of tasks) {
        console.log('one iteration, rendering task: ', task.name);
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
							</div>
						</div>
						<!-- CARD END -->
					</div>
        `;
        container.innerHTML += htmlForTask;
    }

}

render();

