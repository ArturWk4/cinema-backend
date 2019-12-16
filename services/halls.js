const hallsAccessor = require("../data-access/halls");
const cinemaAccessor = require("../data-access/cinemas");
const seatService = require("./seats");

const addHall = async ({ title, cinemaId, seats }) => {
  const cinema = await cinemaAccessor.getCinema(cinemaId);
  if (!cinema) {
    return null;
  }
  let hall = await hallsAccessor.getHallWhere({ title, cinemaId: cinema.id });
  if (hall) {
    return null;
  } else {
    hall = await hallsAccessor.addHall({ title, cinemaId });
    await seatService.addSeats(
      seats.map(item => ({ ...item, hallId: hall.dataValues.id }))
    );
  }

  return hall;
};

const getHall = id => hallsAccessor.getHall(id);

const getAllHalls = () => hallsAccessor.getAllHalls();

module.exports = {
  addHall,
  getHall,
  getAllHalls
};
