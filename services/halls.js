const hallsAccessor = require("../data-access/halls");
const cinemaAccessor = require("../data-access/cinemas");
const seatService = require("./seats");

const addHall = async ({ title, cinemaId, seats }) => {
  const cinema = await cinemaAccessor.getCinema(cinemaId);
  if (!cinema) {
    return null;
  }
  const hall = await hallsAccessor.getOrCreate(
    { title, cinemaId: cinema.id },
    { title, cinemaId: cinema.id }
  );
  seats.forEach(seat => {
    seatService.addSeat({ ...seat, hallId: hall[0].dataValues.id });
  });

  return hall;
};

const getHall = id => hallsAccessor.getHall(id);

const getAllHalls = () => hallsAccessor.getAllHalls();

module.exports = {
  addHall,
  getHall,
  getAllHalls
};
