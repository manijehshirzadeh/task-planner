// TASK 4

export function validateForm() {
	// Validating Name field
	let errorMessages = [];
	let isValidated = true;
	let taskInputValue = document.querySelector('#task').value;
	let taskError = document.querySelector('#task-error');
	let taskErrorText = '';

	if (taskInputValue === '') {
		taskErrorText = 'Name is required';
		taskError.innerHTML = taskErrorText;
	}

	if (taskInputValue.length < 8) {
		taskErrorText = 'Name should be longer than 8 characters';
		taskError.innerHTML = taskErrorText;
	}

	// Validating Assignee field
	let assigneeInputValue = document.querySelector('#assignee').value;
	let assigneeError = document.querySelector('#assignee-error');
	let assigneeErrorText = '';

	if (assigneeInputValue === '') {
		assigneeErrorText = 'Assignee is required';
		assigneeError.innerHTML = assigneeErrorText;
	}
	if (assigneeInputValue.length < 8) {
		assigneeErrorText = 'Assignee should be longer than 8 characters';
		assigneeError.innerHTML = assigneeErrorText;
	}

	// Validating Description field
	let descriptionInputValue = document.querySelector('#description').value;
	let descriptionError = document.querySelector('#description-error');
	let descriptionErrorText = '';

	if (descriptionInputValue === '') {
		descriptionErrorText = 'Description is required';
		descriptionError.innerHTML = descriptionErrorText;
	}
	if (descriptionInputValue.length < 15) {
		descriptionErrorText = 'Description should be longer than 15 characters';
		descriptionError.innerHTML = descriptionErrorText;
	}

	// Validating Due Date field
	let dueDateInputValue = document.querySelector('#due-date').value;
	let dueDateError = document.querySelector('#due-date-error');
	let dueDateErrorText = '';

	let convertedDueDateValue = new Date(dueDateInputValue).getTime();
	let currentDateTime = new Date();

	let month = currentDateTime.getMonth() + 1;
	let day = currentDateTime.getDate();
	let year = currentDateTime.getFullYear();

	let convertedCurrentDate = new Date(
		year.toString() + '-' + month.toString() + '-' + day.toString()
	).getTime();

	if (dueDateInputValue === '') {
		dueDateErrorText = 'Due Date is required';
		dueDateError.innerHTML = dueDateErrorText;
	}

	if (convertedDueDateValue < convertedCurrentDate) {
		dueDateErrorText = 'Due Date cannot be in the past ';
		dueDateError.innerHTML = dueDateErrorText;
	}

	let statusValue = document.querySelector('#status').value;
	console.log(statusValue);
	let statusError = document.querySelector('#status-error');
	let statusErrorText = '';
	// Default status value
	const defaultStatus = 'Open this select menu';
	if (statusValue === defaultStatus) {
		statusErrorText = 'Status is required';
		statusError.innerHTML = statusErrorText;
	}

	if (taskErrorText !== '') errorMessages.push(taskErrorText);
	if (assigneeErrorText !== '') errorMessages.push(assigneeErrorText);
	if (descriptionErrorText !== '') errorMessages.push(descriptionErrorText);
	if (dueDateErrorText !== '') errorMessages.push(dueDateErrorText);
	if (statusErrorText !== '') errorMessages.push(statusErrorText);

	if (errorMessages.length > 0) {
		isValidated = false;
		console.log('before validate', errorMessages);
	} else {
		isValidated = true;
		console.log('after validate', errorMessages);
	}
	return isValidated;
}
