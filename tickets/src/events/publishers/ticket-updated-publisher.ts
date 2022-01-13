import { Publisher, Subjects, TicketUpdatedEvent } from "@finc-tickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}