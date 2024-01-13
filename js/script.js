	const taskInput = document.getElementById('taskInput');
	const listItem = document.getElementById('listItem');

	function addTask() {
		let newItem = document.getElementById('taskInput').value;
		const taskText = taskInput.value.trim();

		if (newItem.trim() == '' || newItem.trim() == null) {
			// alert('Warning! An empty field cannot be added.');
			return;
		} else {
			let li = document.createElement('li');

			li.textContent = taskText;
			listItem.appendChild(li);
			li.classList.add('todo__task-list__item');
			taskInput.value = '';
		}
	}

	function completeTask(event) {
		let task = event.target;
		task.classList.toggle('comleted');
	}

	let li = document.createElement("li");

	li.addEventListener('click', completeTask);