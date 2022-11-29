// TASK 6
import { htmlForTask } from './utils.js';
/**
 * @typedef {Object} Task
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {string} assignedTo
 * @property {Date} dueDate
 * @property {string} status
 */

// Main class
export class TaskManager {
	constructor(STORAGE_KEY) {
		this.STORAGE_KEY = STORAGE_KEY;
		/** @type {Task[]} */
		this._tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
	}

	/**@param {Task} task */
	addTask(task) {
		this._tasks.push(task);
		this.updateLocalStorage();
	}

	get tasks() {
		return this._tasks;
	}

	removeTask(index) {
		this._tasks.splice(index, 1);
		this.updateLocalStorage();
	}
	
	changeTaskStatus(index, newStatus) {
		this._tasks[index].status = newStatus;
		this.updateLocalStorage();
	}

	renderTasks(tasks) {
		const container = document.getElementById('tasks_container');

		for (let task of tasks) {
			container.innerHTML += htmlForTask(task);
		}
	}

	updateLocalStorage() {
		localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._tasks));
	}
}
