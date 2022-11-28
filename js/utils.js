const badgeClassName = (task) => {
	switch (task.status) {
		case 'TODO':
			return 'bg-danger';
		case 'IN PROGRESS':
			return 'bg-warning';
		case 'DONE':
			return 'bg-success';

		default:
			return 'bg-info';
	}
};

export const htmlForTask = (task) => `
<div class="col col-lg-8 col-xl-6">
  <div class="card card--content rounded-3">
    <div class="card-body p-4">
      <!-- TASK NAME -->
      <p class="mb-2">
        <span class="h2 me-2">${task.name}</span>
        <span class="badge ${badgeClassName(task)} g1-badge">${task.status}</span>
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
        <textarea class="form-control" placeholder="Task summary" id="floatingTextarea">${
					task.description
				}</textarea>
      </div>

      <!-- BUTTONS -->
      <div class="d-flex justify-content-end button--container">
        <button data-id=${
					task.id
				} id="delete" type="button" class="btn btn-danger rounded-3 mt-3 me-2">Delete
          Task</button>
        </button>
      </div>
    </div>
    <!-- CARD END -->
  </div>
`;
