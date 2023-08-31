import { Document } from "./Document";
import { Passenger } from "./Passenger";
import { UUID } from "./types/UUID";
import crypto from 'node:crypto';

export class CreatePassenger {
    passengers: Passenger[];

    constructor() {
        this.passengers = [];
    }

    create(
        name: string,
        email: string,
        document: unknown
    ): UUID {
        const documentValidated = new Document(document);
        const passenger = new Passenger(name, email, documentValidated);
        const id = crypto.randomUUID();
        this.passengers.push({
            id,
            ...passenger
        });
        return id;
    }
}