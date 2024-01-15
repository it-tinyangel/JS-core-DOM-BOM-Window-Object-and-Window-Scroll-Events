document.addEventListener('DOMContentLoaded', () => {
	const taskInput = document.querySelector('.todo__new-task__input');
	const todoList = document.querySelector('.todo__task-list__items');
	const addTaskButton = document.querySelector('.todo__new-task__btn');

	const alertEmptyInput = document.querySelector('.todo__alert.empty-input');
	const alertLastItem = document.querySelector('.todo__alert.last-item');

	addTaskButton.addEventListener('click', controlListContent);

	function controlListContent() {
		const newTaskText = taskInput.value.trim();

		if (newTaskText !== '') {
			const newListItem = document.createElement("li");
			newListItem.className = "todo__task-list__item";

			const iconBallot = document.createElement("span");
			iconBallot.classList.add("icon", "ballot");

			const newListItemText = document.createElement('span');
			newListItemText.textContent = newTaskText;

			const iconClose = document.createElement("span");
			iconClose.className = "close";

			newListItem.appendChild(iconBallot);
			newListItem.appendChild(newListItemText);
			newListItem.appendChild(iconClose);

			todoList.appendChild(newListItem);

			taskInput.value = '';

			newListItem.addEventListener("click", toggleBallotIcons);
			iconClose.addEventListener('click', deleteTask);

			function toggleBallotIcons(event) {
				if (event.target === newListItem || event.target === iconBallot || event.target === newListItemText) {
					iconBallot.classList.toggle("ballot");
					iconBallot.classList.toggle("ballot-check");
				}
			}

			function deleteTask(event) {
				if (event.target === iconClose) {
					if (todoList.children.length > 1) {
						todoList.removeChild(newListItem);
					} else {
						errorMessageLastItem();
					}
				}
			}
		} else if (newTaskText == '') {
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
