const htmlForTask = (task) => `
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

// TASK 7
/**
 * @typedef {Object} Task
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {string} assignedTo
 * @property {Date} dueDate
 * @property {string} status
 */

const STORAGE_KEY_PREFIX = 'TASK_LIST_WITH_LOCAL_STORAGE';
const STORAGE_KEY = `${STORAGE_KEY_PREFIX}-GROUP1`;

/** Main class **/
class TaskManager {
	constructor(STORAGE_KEY) {
		this.STORAGE_KEY = STORAGE_KEY;
		/** @type {Task[]} */
		this.tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
	}

	/**@param {Task} task */
	addTask(task) {
		// TODO: need check if task is valid
		this.tasks.push(task);
		this.updateLocalStorage();
	}

	// get tasks() {
	// 	return this.tasks;
	// }

	removeTask(index) {
		this.tasks.splice(index, 1);
		this.updateLocalStorage();
	}

	renderTasks(tasks) {
		const container = document.getElementById('tasks_container');

		for (let task of tasks) {
			container.innerHTML += htmlForTask(task);
		}
	}

	updateLocalStorage() {
		localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.tasks));
	}
}

// Test input function
const form = document.forms[0];
const taskName = document.getElementById('task');
const taskAssignee = document.getElementById('assignee');
const taskDescription = document.getElementById('description');
const taskDueDate = document.getElementById('due-date');
const taskStatus = document.getElementById('status');

const taskManager = new TaskManager(STORAGE_KEY);

form.onsubmit = (e) => {
	e.preventDefault();
	const task = {
		id: Date.now(),
		name: taskName.value,
		description: taskDescription.value,
		assignedTo: taskAssignee.value,
		dueDate: taskDueDate.value,
		status: taskStatus.value,
	};
	console.log(task);

	taskManager.addTask(task);

	const allTasks = taskManager.tasks

	console.log(allTasks);

	// const getAllTasks = taskManager.tasks;

	// taskManager.renderTasks(getAllTasks);
};

// export default taskManager;
