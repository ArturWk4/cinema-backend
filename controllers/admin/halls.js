const HttpStatus = require("http-status-codes");
const hallService = require("../../services/halls");

const addHall = async (req, res) => {
  const { title, cinemaId } = req.body;
  const hall = await hallService.addHall({ title, cinemaId });
  if (!hall) {
    res.status(HttpStatus.BAD_REQUEST).end();
  } else {
    res.status(HttpStatus.CREATED).end();
  }
};

const getAllHalls = async (req, res) => {
  const halls = await hallService.getAllHalls();
  res.status(HttpStatus.OK).json(halls);
};

const getHall = async (req, res) => {
  const { id } = req.params;
  const hall = await hallService.getHall(id);
  if (!hall) {
    res.status(HttpStatus.NOT_FOUND).end();
  } else {
    res.status(HttpStatus.OK).json(hall);
  }
};

module.exports = {
  addHall,
  getAllHalls,
  getHall
};
