document.addEventListener('DOMContentLoaded', () => {
	let taskInput = document.querySelector('.todo__new-task__input');
	let listItems = document.querySelector('.todo__task-list__items');
	let addTaskButton = document.querySelector('.todo__new-task__btn');

	let alertEmptyInput = document.querySelector('.todo__alert.empty-input');
	let alertLastItem = document.querySelector('.todo__alert.last-item');

	let iconCloseAlert1 = document.querySelector('.close-alert.empty-input');
	let iconCloseAlert2 = document.querySelector('.close-alert.last-item');

	function errorMessageEmptyField() {
		alertEmptyInput.style.display = 'flex';

		iconCloseAlert1.addEventListener('click', () => {
			alertEmptyInput.style.display = "none";
		});
	}

	function errorMessageLastItem() {
		alertLastItem.style.display = 'flex';

		iconCloseAlert2.addEventListener('click', () => {
			alertLastItem.style.display = "none";
		});
	}

	function controlListContent() {
		let listItemText = taskInput.value;
		let newTaskText = taskInput.value.trim();

		if (listItemText.trim() != '') {
			let textNode = document.createTextNode("");

			let newListItem = document.createElement("li");

			newListItem.className = "li";
			newListItem.classList.add('todo__task-list__item');

			let iconBallot = document.createElement("span");
			iconBallot.className = "icon";
			iconBallot.classList.add("ballot");

			let newListItemText = document.createElement('span');
			newListItemText.textContent = newTaskText; // Set the text is received from input
			newListItemText.appendChild(textNode);

			let iconClose = document.createElement("span");
			iconClose.className = "close";

			newListItem.appendChild(iconBallot);
			newListItem.appendChild(newListItemText);
			newListItem.appendChild(iconClose);

			listItems.appendChild(newListItem);

			taskInput.value = '';

			function toggleIcons() {
				iconBallot.classList.toggle("ballot");
				iconBallot.classList.toggle("ballot-check");
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

			newListItem.addEventListener("click", toggleIcons);
			iconClose.addEventListener('click', deleteTask);
		} else if (listItemText.trim() == '') {
			errorMessageEmptyField();
		}
	}

	addTaskButton.addEventListener('click', controlListContent);
});
