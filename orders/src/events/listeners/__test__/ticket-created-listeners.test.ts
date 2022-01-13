import { TicketCreatedEvent } from "@finc-tickets/common";
import { Message } from "node-nats-streaming";
import { TicketCreatedListener } from "../ticket-created-listener";
import { natsWrapper } from "../../../nats-wrapper";
import mongoose from "mongoose";
import { Ticket } from "../../../models/ticket";

const setup = async () => {
  // create an instance of listener
  const listener = new TicketCreatedListener(natsWrapper.client);

  // create a fake data event
  const data: TicketCreatedEvent["data"] = {
    version: 0,
    id: new mongoose.Types.ObjectId().toHexString(),
    title: "concert",
    price: 10,
    userId: new mongoose.Types.ObjectId().toHexString(),
  };

  // create a fake message object
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, data, msg };
};

it("created and saves a ticket", async () => {
  const { listener, data, msg } = await setup();

  // call the onMessage functin with the data object and the message object
  await listener.onMessage(data, msg);

  // write asserions to make sure a ticket was created
    const ticket = await Ticket.findById(data.id)
    expect(ticket).toBeDefined();
    expect(ticket!.title).toEqual(data.title)
    expect(ticket!.price).toEqual(data.price)
});

it("acks a message", async () => {
    const { listener, data, msg } = await setup();
  
    // call the onMessage functin with the data object and the message object
    await listener.onMessage(data, msg);

  // write asserions to make sure a ticket was created
  expect(msg.ack).toHaveBeenCalled()
});
