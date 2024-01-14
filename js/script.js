document.addEventListener('DOMContentLoaded', () => {
	let taskInput = document.querySelector('.todo__new-task__input');
	let listItems = document.querySelector('.todo__task-list__items');
	let addTaskButton = document.querySelector('.todo__new-task__btn');

	let alertEmptyInput = document.querySelector('.todo__alert.empty-input');
	let alertLastItem = document.querySelector('.todo__alert.last-item');

	addTaskButton.addEventListener('click', controlListContent);

	function controlListContent() {
		let listItemText = taskInput.value;

		if (listItemText.trim() != '') {
			let newListItem = document.createElement("li");
			let iconBallot = document.createElement("span");
			let newListItemText = document.createElement('span');
			let iconClose = document.createElement("span");

			newListItem.className = "li";
			iconBallot.className = "icon";
			iconClose.className = "close";

			newListItem.classList.add('todo__task-list__item');
			iconBallot.classList.add("ballot");

			setTextFromInput();

			addSpanElements();
			addLiElement();

			taskInput.value = '';

			newListItem.addEventListener("click", toggleBallotIcons);
			iconClose.addEventListener('click', deleteTask);

			function setTextFromInput() {
				let newTaskText = taskInput.value.trim();

				newListItemText.textContent = newTaskText;
			}

			function addLiElement() {
				listItems.appendChild(newListItem);
			}

			function addSpanElements() {
				newListItem.appendChild(iconBallot);
				newListItem.appendChild(newListItemText);
				newListItem.appendChild(iconClose);
			}

			function toggleBallotIcons(event) {
				if (event.target === newListItem || event.target === iconBallot || event.target === newListItemText) {
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
		} else if (listItemText.trim() == '') {
			errorMessageEmptyField();
		}
	}

	function errorMessageEmptyField() {
		alertEmptyInput.classList.remove('visually-hidden');

		alertEmptyInput.addEventListener('click', closeErrorMessage);
	}

	function errorMessageLastItem() {
		alertLastItem.classList.remove('visually-hidden');

		alertLastItem.addEventListener('click', closeErrorMessage);
	}

	function closeErrorMessage() {
		alertEmptyInput.classList.add('visually-hidden');
		alertLastItem.classList.add('visually-hidden');
	}
});
