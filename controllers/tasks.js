const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});

    res.status(200).json({
      status: "success",
      data: { tasks, nbHits: tasks.length }
    });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json({ task });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};

const getTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOne({ _id: taskID });

    res.status(200).json({ task });
  } catch (e) {
    res.status(404).json({ msg: `no task with id ${taskID}.` });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.deleteOne({ _id: taskID });

    res.status(200).json({ task });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json(task);
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};

// same as updateTask but is called when PUT request is received.
const editTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json(task);
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask
};
