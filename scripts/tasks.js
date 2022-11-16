const cardDataList = [
	{
		taskName: 'Create A Wireframe',
		badge: 'REVIEW',
		badgeType: 'bg-info',
		assignee: {
			name: 'Tony',
			avatarLink:
				'https://media.licdn.com/dms/image/C5103AQEdN8eMsNSkxw/profile-displayphoto-shrink_400_400/0/1571834890567?e=1672272000&amp;v=beta&amp;t=0FimJ9nfizaTUJpT9_g83FXDxsJQ81umj5fRRQhD-ic',
		},
		assignedDate: '27/10/2022',
		dueDate: '28/10/2022',
		description: `● &nbsp;Create the wireframes to understand how it will look and work
    ● &nbsp;Identify if you need extra support from instructors
    `,
		shareWith: [
			{
				name: 'Andrea',
				avatarLink:
					'https://ca.slack-edge.com/T03U386V3PZ-U041HBV236V-f1edd8b466a5-512',
			},
			{
				name: 'Manijeh',
				avatarLink:
					'https://ca.slack-edge.com/T03U386V3PZ-U041U68D6N4-0c68352e7390-512',
			},
			{
				name: 'Sam',
				avatarLink:
					'https://ca.slack-edge.com/T03U386V3PZ-U047BUUT9TK-a3c3078b0f13-512',
			},
			{
				name: 'Kruti',
				avatarLink:
					'https://ca.slack-edge.com/T03U386V3PZ-U03UC0CNWJJ-af88e3419672-512',
			},
		],
	},
];

window.addEventListener('load', () => {
	const mainContent = document.querySelector('main');
	console.log(mainContent);
	const cardContainer = document.createElement('div');
	cardContainer.classList.add('container', 'py-5', 'h-100');
	mainContent.appendChild(cardContainer);

	const row = document.createElement('div');
	row.classList.add('row', 'd-flex', 'justify-content-center');
	cardContainer.appendChild(row);

	const col = document.createElement('div');
	col.classList.add('col', 'col-lg-8', 'col-xl-6');
	const card = document.createElement('div');
	card.classList.add('card', 'rounded-3', 'my-2');
	row.appendChild(col);
	col.appendChild(card);
	const cardBody = document.createElement('div');
	cardBody.classList.add('card-body', 'p-4');

	const ul_el = document.createElement('ul');
	ul_el.classList.add(
		'list-group',
		'rounded-0',
		'list-group-horizontal',
		'justify-content-center',
		'pb-2'
	);

	const { taskName, badge, ...rest } = cardDataList[0];

	const { shareWith } = cardDataList[0];

	debugger;
	const renderShareWithList = () => {
		for (let i = 0; i < shareWith.length; i++) {
			ul_el.innerHTML += `
									<li class="list-group-item border-0 d-flex align-items-center p-0">
										<img src=${shareWith[i].avatarLink} alt=${shareWith[i].name} class="rounded-circle me-n2" width="45">
									</li>
   `;
		}

		return ul_el;
	};

	cardBody.innerHTML += `
	<div class="card-body p-4">
								<!-- TASK NAME -->
								<p class="mb-2">
									<span class="h2 me-2">${taskName}</span>
									<span class="badge ${rest.badgeType} g1-badge">${badge}</span>
								</p>
								<!-- ASSIGNEE -->
								<p class="mb-2">
									<span class="d-inline-block" tabindex="0" data-bs-toggle="tooltip" data-bs-placement="bottom" title=${
										rest.assignee.name
									}>
										<img src=${rest.assignee.avatarLink} alt=${
		rest.assignee.name
	} class="rounded-circle me-n2" width="45">
									</span>
								</p>
								<p class="text-muted pb-2">${rest.assignedDate}</p>

								<ul class="list-group rounded-0">
									<!-- DUE DATE -->
									<li class="list-group-item border-0 d-flex align-items-center ps-0">
										<p class="mb-2">
											<span class="h5 me-2"> Due Date </span>
											<span class="h6">${rest.dueDate}</span>
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
										rest.description
									}
                </textarea>
								</div>

								<!-- SHARE WITH -->
								<div class="divider d-flex align-items-center my-4">
									<p class="text-center mx-3 mb-0" id="shared-with">
										Shared with
									</p>
								</div>
                ${renderShareWithList()}
							</div>
	`;

	card.appendChild(cardBody);
});
