const primeGenerator = require('../primeGenerator');

exports.createNumbers = async (req, res) => {
  try {
    var array = await primeGenerator(req.query.n);
    let newArr = [];
    let l = array.length;
    if (req.query.page) {
      const { page, limit } = req.query;
      let start = (page - 1) * limit;
      let end = page * limit;
      array = array.slice(start, end);
    }

    res.status(200).json({
      data: array
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};
