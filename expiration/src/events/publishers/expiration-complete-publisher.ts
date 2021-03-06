import {
  Publisher,
  ExpirationCompleteEvent,
  Subjects,
} from "@finc-tickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
