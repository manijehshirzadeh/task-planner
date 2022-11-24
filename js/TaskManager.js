import { render } from "./tasks2";

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

	get tasks() {
		return this.tasks;
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

	render(taskManager.tasks);
};

export default taskManager;