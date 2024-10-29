
const todo = require('../models/createTodo');


exports.deleteTodo = async (req, res) => {
  try {

    const { id } = req.params;


    const response = await todo.findByIdAndDelete({ _id: id });


    res.status(200).json({
      success: true,
      data: response,
      message: "Deleted successfully"
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