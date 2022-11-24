import { TaskManager } from "./TaskManager";
import { validateForm } from "./create";

const STORAGE_KEY_PREFIX = 'TASK_LIST_WITH_LOCAL_STORAGE';
const STORAGE_KEY = `${STORAGE_KEY_PREFIX}-GROUP1`;

// Test input function
const form = document.forms[0];
const taskName = document.getElementById('task');
const taskAssignee = document.getElementById('assignee');
const taskDescription = document.getElementById('description');
const taskDueDate = document.getElementById('due-date');
const taskStatus = document.getElementById('status');

const taskManager = new TaskManager(STORAGE_KEY);

// Save form to local storage
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
  validateForm();

	taskManager.addTask(task);

	const allTasks = taskManager.tasks

	console.log(allTasks);

	// const getAllTasks = taskManager.tasks;

	// taskManager.renderTasks(getAllTasks);
};
