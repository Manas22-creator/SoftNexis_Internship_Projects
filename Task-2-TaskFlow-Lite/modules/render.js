/* Escape HTML */

function escapeHTML(str){

  return str.replace(
    /[&<>"']/g,

    tag => ({
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;',
      "'":'&#39;'
    }[tag])

  );

}

/* Render Task List */

export function renderTaskList(
  taskListElement,
  tasks
){

  taskListElement.innerHTML = '';

  /* Empty State */

  if(tasks.length === 0){

    taskListElement.innerHTML = `

      <li class="empty-state">

        <h3>No Tasks Yet</h3>

        <p>Add your first task!</p>

      </li>

    `;

    return;
  }

  /* Render Tasks */

  tasks.forEach(task => {

    const taskElement =
      document.createElement('li');

    taskElement.className =
      `task ${task.completed ? 'completed' : ''}`;

    taskElement.dataset.id = task.id;

    taskElement.innerHTML = `

      <label>

        <input
          type="checkbox"
          ${task.completed ? 'checked' : ''}
        >

        <span>
          ${escapeHTML(task.text)}
        </span>

      </label>

      <div class="task-actions">

        <button
          class="delete-btn"
          aria-label="Delete Task"
        >
          Delete
        </button>

      </div>

    `;

    taskListElement.appendChild(taskElement);

  });

}

/* Update Stats */

export function updateTaskStats(tasks){

  const totalTasks =
    document.getElementById('total-tasks');

  const completedTasks =
    document.getElementById('completed-tasks');

  totalTasks.textContent =
    tasks.length;

  completedTasks.textContent =
    tasks.filter(
      task => task.completed
    ).length;

}