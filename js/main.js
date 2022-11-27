// TASK 6
import { TaskManager } from './TaskManager.js';
import { validateForm } from './create.js';

const STORAGE_KEY_PREFIX = 'TASK_LIST_WITH_LOCAL_STORAGE';
const STORAGE_KEY = `${STORAGE_KEY_PREFIX}-GROUP1`;

// Input function
const form = document.forms[0];
const taskName = document.getElementById('task');
const taskAssignee = document.getElementById('assignee');
const taskDescription = document.getElementById('description');
const taskDueDate = document.getElementById('due-date');
const taskStatus = document.getElementById('status');

const successMessage = document.createElement('span');
successMessage.innerText = 'Task added success!';
successMessage.className = 'text-success';
successMessage.style.marginLeft = '18px';

function clearSuccessMessage() {
	successMessage.remove();
}

setInterval(() => {
	clearSuccessMessage();
}, 4000);

clearInterval(clearSuccessMessage());

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
	const isValidated = validateForm();
	if (isValidated) {
		taskManager.addTask(task);
		const formEnd = form.lastElementChild;
		form.insertBefore(successMessage, formEnd);
	}
};
