import { TaskManager } from './TaskManager.js';

const STORAGE_KEY_PREFIX = 'TASK_LIST_WITH_LOCAL_STORAGE';
const STORAGE_KEY = `${STORAGE_KEY_PREFIX}-GROUP1`;

const allTasks = new TaskManager(STORAGE_KEY);
const tasks = allTasks.tasks;

allTasks.renderTasks(tasks);

const container = document.getElementById('tasks_container');
if (tasks.length === 0) {
	const warningHeading = document.createElement('h3');
	warningHeading.className = 'text-center';
	warningHeading.innerHTML =
		'No task to show. Please add a task at <a href="/create.html">Create page.</a>';
	container.appendChild(warningHeading);
}
const deleteButtons = container.querySelectorAll('#delete');
deleteButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		const id = e.target.dataset.id;
		const index = tasks.findIndex((task) => task.id == id);
		allTasks.removeTask(index);
		window.location.reload();
	});
});
