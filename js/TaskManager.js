/**
 * @typedef {Object} Task
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} assignedTo
 * @property {string} dueDate
 * @property {string} status
 */

const task = {
	id: 1,
	name: 'Do task 7',
	description: 'This is what we need to do from the description',
	assignedTo: 'Andrea Isla',
	dueDate: '24/11/2022',
	status: 'TODO',
};

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

	removeTask(index) {
		this.tasks.splice(index, 1);
		this.updateLocalStorage();
	}

	updateLocalStorage() {
		localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.tasks));
	}
}

// Test input function
const form = document.forms[0];
const taskName = document.getElementById('task-name');
const taskAssignee = document.getElementById('task-assignee');
const taskDescription = document.getElementById('task-description');
const datePicker = document.getElementById('datepicker');
const taskDueDate = datePicker.getElementsByTagName('input')[0];
const taskStatus = document.getElementById('task-status');

const taskManager = new TaskManager(STORAGE_KEY);

form.onsubmit = (e) => {
	e.preventDefault();
	const task = {
		id: Date.now().toString(),
		name: taskName.value,
		description: taskDescription.value,
		assignedTo: taskAssignee.value,
		dueDate: taskDueDate.value,
		status: taskStatus.value,
	};
	console.log(task);

	taskManager.addTask(task);
};
