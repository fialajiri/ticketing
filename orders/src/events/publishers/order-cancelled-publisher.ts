import { Publisher, OrderCancelledEvent, Subjects } from "@finc-tickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
