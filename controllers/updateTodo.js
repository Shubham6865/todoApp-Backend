
const todo = require('../models/createTodo');


exports.updateTodo = async (req, res) => {
  try {

    const { id } = req.params;
    const { title, description } = req.body;

    const response = await todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updateAt: Date.now() }
    )

    res.status(200).json({
      success: true,
      data: response,
      message: "updated successfully"
    })
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