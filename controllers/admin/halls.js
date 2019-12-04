const HttpStatus = require("http-status-codes");
const hallService = require("../../services/halls");
const { validateHall } = require("../../utils/validation");

const addHall = async (req, res) => {
  const { title, cinemaId } = req.body;
  if (!validateHall(title, cinemaId)) {
    res.status(HttpStatus.BAD_REQUEST).end();
  } else {
    await hallService.addHall({ title, cinemaId });
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
