
const todo = require('../models/createTodo');

exports.getTodo = async (req, res) => {

  try {

    const response = await todo.find({});

    res.status(200).json(
      {
        success: true,
        data: response,
        message: "Data fetched successfully!"
      }
    )
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Not Found",
      message: err.message
    })
  }
}