/* Imports */

import {
  saveTasks,
  loadTasks
}
from './modules/storage.js';

import {
  renderTaskList,
  updateTaskStats
}
from './modules/render.js';

import {
  validateTaskInput
}
from './modules/validation.js';

/* Elements */

const taskForm =
  document.getElementById('task-form');

const taskInput =
  document.getElementById('task-input');

const taskList =
  document.getElementById('task-list');

const filterButtons =
  document.querySelectorAll('.filter-btn');

/* Load Tasks */

let tasks = loadTasks();

/* Current Filter */

let currentFilter = 'all';

/* Create Task */

function createTask(text){

  return {

    id: Date.now(),

    text: text.trim(),

    completed: false,

    createdAt:
      new Date().toISOString()

  };

}

/* Render App */

function renderApp(){

  let filteredTasks = tasks;

  /* Filtering */

  if(currentFilter === 'active'){

    filteredTasks =
      tasks.filter(
        task => !task.completed
      );

  }

  if(currentFilter === 'completed'){

    filteredTasks =
      tasks.filter(
        task => task.completed
      );

  }

  renderTaskList(
    taskList,
    filteredTasks
  );

  updateTaskStats(tasks);

}

/* Initial Render */

renderApp();

/* Add Task */

taskForm.addEventListener(
  'submit',

  e => {

    e.preventDefault();

    const taskText =
      taskInput.value;

    /* Validation */

    if(
      !validateTaskInput(taskText)
    ){
      return;
    }

    /* Create Task */

    const newTask =
      createTask(taskText);

    /* Add to Array */

    tasks.push(newTask);

    /* Save */

    saveTasks(tasks);

    /* Re-render */

    renderApp();

    /* Reset Input */

    taskInput.value = '';

  }
);

/* Event Delegation */

taskList.addEventListener(
  'click',

  e => {

    const taskElement =
      e.target.closest('.task');

    if(!taskElement) return;

    const taskId =
      Number(taskElement.dataset.id);

    const taskIndex =
      tasks.findIndex(
        task => task.id === taskId
      );

    /* Delete Task */

    if(
      e.target.classList.contains(
        'delete-btn'
      )
    ){

      const confirmDelete =
        confirm(
          'Delete this task?'
        );

      if(confirmDelete){

        tasks.splice(taskIndex,1);

        saveTasks(tasks);

        renderApp();

      }

    }

  }
);

/* Toggle Completion */

taskList.addEventListener(
  'change',

  e => {

    const taskElement =
      e.target.closest('.task');

    if(!taskElement) return;

    const taskId =
      Number(taskElement.dataset.id);

    const task =
      tasks.find(
        task => task.id === taskId
      );

    if(e.target.type === 'checkbox'){

      task.completed =
        e.target.checked;

      saveTasks(tasks);

      renderApp();

    }

  }
);

/* Filters */

filterButtons.forEach(button => {

  button.addEventListener(
    'click',

    () => {

      /* Remove Active */

      filterButtons.forEach(btn => {

        btn.classList.remove(
          'active'
        );

      });

      /* Add Active */

      button.classList.add(
        'active'
      );

      /* Change Filter */

      currentFilter =
        button.dataset.filter;

      renderApp();

    }

  );

});

/* Dark Mode Toggle */

const darkModeButton =
  document.createElement('button');

darkModeButton.textContent =
  'Dark Mode';

darkModeButton.className =
  'dark-mode-btn';

document.querySelector(
  '.header'
).appendChild(darkModeButton);

/* Toggle Dark */

darkModeButton.addEventListener(
  'click',

  () => {

    document.body.classList.toggle(
      'dark-mode'
    );

    /* Update Button Text */

    if(
      document.body.classList.contains(
        'dark-mode'
      )
    ){

      darkModeButton.textContent =
        'Light Mode';

    } else {

      darkModeButton.textContent =
        'Dark Mode';

    }

  }
);