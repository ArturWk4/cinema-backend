const HttpStatus = require("http-status-codes");

const filmsService = require("../../services/films");

const addFilm = async (req, res) => {
    const {title, description, startsAt, endsAt} = req.body;
};
