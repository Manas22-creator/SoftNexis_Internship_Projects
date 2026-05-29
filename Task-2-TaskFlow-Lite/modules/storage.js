/* Save Tasks */

export function saveTasks(tasks){

  localStorage.setItem(
    'tasks',
    JSON.stringify(tasks)
  );

}

/* Load Tasks */

export function loadTasks(){

  return JSON.parse(
    localStorage.getItem('tasks')
  ) || [];

}