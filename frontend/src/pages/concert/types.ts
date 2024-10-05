export interface ICreateOrEditTicket {
  name: string;
  description?: string;
  price: number;
  quantity: number;
  startDateTime: string;
  endDateTime: string;
}

export interface ITicket extends ICreateOrEditTicket {
  ticketId: string;
  soldOut: number;
}
