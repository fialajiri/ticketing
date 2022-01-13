import { Subjects, Publisher, PaymentCreatedEvent } from "@finc-tickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
