document.addEventListener('DOMContentLoaded', () => {
	let taskInput = document.querySelector('.todo__new-task__input');
	let listItems = document.querySelector('.todo__task-list__items');
	let addTaskButton = document.querySelector('.todo__new-task__btn');

	let alertEmptyInput = document.querySelector('.todo__alert.empty-input');
	let alertLastItem = document.querySelector('.todo__alert.last-item');

	function closeErrorMessage() {
		alertEmptyInput.classList.add('visually-hidden');
		alertLastItem.classList.add('visually-hidden');
	}

	function errorMessageEmptyField() {
		alertEmptyInput.classList.remove('visually-hidden');

		alertEmptyInput.addEventListener('click', closeErrorMessage);
	}

	function errorMessageLastItem() {
		alertLastItem.classList.remove('visually-hidden');

		alertLastItem.addEventListener('click', closeErrorMessage);
	}

	function controlListContent() {
		let listItemText = taskInput.value;
		let newTaskText = taskInput.value.trim();

		if (listItemText.trim() != '') {
			// Create a new elements
			let newListItem = document.createElement("li");

			newListItem.className = "li";
			newListItem.classList.add('todo__task-list__item');

			let iconBallot = document.createElement("span");
			iconBallot.className = "icon";
			iconBallot.classList.add("ballot");

			let newListItemText = document.createElement('span');
			newListItemText.textContent = newTaskText; // Set the text is received from input

			let iconClose = document.createElement("span");
			iconClose.className = "close";

			// Add new elements to li
			newListItem.appendChild(iconBallot);
			newListItem.appendChild(newListItemText);
			newListItem.appendChild(iconClose);

			// Add a new li element to the ul
			listItems.appendChild(newListItem);

			taskInput.value = '';

			function toggleBallotIcons(event) {
				if (event.target === newListItem || event.target === iconBallot) {
					iconBallot.classList.toggle("ballot");
					iconBallot.classList.toggle("ballot-check");
				}
			}

			function deleteTask(event) {
				if (event.target === iconClose) {
					if (listItems.children.length > 1) {
						listItems.removeChild(newListItem);
					} else {
						errorMessageLastItem();
					}
				}
			}

			// Add an event listeners to the new li element
			newListItem.addEventListener("click", toggleBallotIcons);
			iconClose.addEventListener('click', deleteTask);
		} else if (listItemText.trim() == '') {
			errorMessageEmptyField();
		}
	}

	addTaskButton.addEventListener('click', controlListContent);
});
