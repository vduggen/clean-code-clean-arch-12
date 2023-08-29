import { Document } from "./Document";
import { Passenger } from "./Passenger";
import { UUID } from "./types/UUID";
const crypto = require('node:crypto');

export class CreatePassenger {
    passengers: Passenger[];

    constructor() {
        this.passengers = [];
    }

    create(
        name: string,
        email: string,
        document: Document
    ): UUID {
        const passenger = new Passenger(name, email, document);
        const id = crypto.randomUUID();
        this.passengers.push({
            id,
            ...passenger
        });
        return id;
    }
}