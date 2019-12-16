const TicketService = require("../database/models/ticketService");

const addTicketService = async ticketService =>
  TicketService.create(ticketService);

module.exports = {
  addTicketService
};
