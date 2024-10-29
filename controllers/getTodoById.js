
const { default: mongoose } = require('mongoose');
const todo = require('../models/createTodo');

exports.getTodoById = async (req, res) => {

  try {
    const id = req.params.id
    const response = await todo.findById({ _id: id })

    res.status(200).json({
      success: true,
      data: response,
      message: `data received for id : ${id}`
    })
  }
  catch (err) {
    console.log(err);
    res.status(404).json({
      success: false,
      data: 'Record not found',
      message: err.message

    })
  }
}

