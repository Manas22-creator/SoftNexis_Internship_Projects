import { validateTask } from "../utils/validation.js";

let tasks = [];
let currentId = 1;

export const getTasks = (req, res) => {
  res.status(200).json(tasks);
};

export const getTaskById = (req, res) => {

  const id = Number(req.params.id);

  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  res.status(200).json(task);
};

export const createTask = (req, res) => {

  const { text } = req.body;

  const error = validateTask(text);

  if (error) {
    return res.status(400).json({
      error
    });
  }

  const task = {
    id: currentId++,
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };

  tasks.push(task);

  res.status(201).json(task);
};

export const updateTask = (req, res) => {

  const id = Number(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  task.text = req.body.text ?? task.text;
  task.completed = req.body.completed ?? task.completed;

  res.status(200).json(task);
};

export const deleteTask = (req, res) => {

  const id = Number(req.params.id);

  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  tasks.splice(index, 1);

  res.status(204).send();
};