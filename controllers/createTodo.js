
const todo = require('../models/createTodo');


exports.createTodo = async (req, res) => {
  try {

    const { title, description } = req.body;

    const response = await todo.create({ title, description });

    res.status(200).json(
      {

        success: true,
        data: response,
        message: "Data Added Successfully"
      }

    )
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Server Error",
      message: err.message
    })
  }
}