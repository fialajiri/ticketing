import { Publisher, Subjects, TicketCreatedEvent } from "@finc-tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}

