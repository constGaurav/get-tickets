import { ICreateOrEditTicket } from "../types";

export const validateTicketData = (ticket: ICreateOrEditTicket) => {
  if (!ticket.name.trim()) {
    return "Ticket name is required";
  }
  if (!ticket.price) {
    return "Ticket price is required";
  }
  if (!ticket.quantity || ticket.quantity < 1) {
    return "Ticket quantity is required and should be greater than 0";
  }
  if (!ticket.startDateTime) {
    return "Start date is required";
  }
  if (!ticket.endDateTime) {
    return "End date is required";
  }

  const startDate = new Date(ticket.startDateTime);
  const endDate = new Date(ticket.endDateTime);
  if (startDate >= endDate) {
    return "Start date should be before end date";
  }
};
