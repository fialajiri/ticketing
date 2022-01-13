import { Publisher, OrderCreatedEvent, Subjects } from "@finc-tickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
