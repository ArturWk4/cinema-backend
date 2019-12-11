const Ticket = require("../database/models/ticket");

const addTicket = async ticket => Ticket.create(ticket);
const findTicketWhere = async where => Ticket.findOne({ where });

module.exports = {
  addTicket,
  findTicketWhere
};
