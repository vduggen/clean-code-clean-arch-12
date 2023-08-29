import { Document } from "./Document";
import { Driver } from "./Driver";
import { UUID } from "./types/UUID";
import crypto from 'node:crypto';

export class CreateDriver {
    drivers: Driver[];

    constructor() {
        this.drivers = [];
    }

    create(
        name: string,
        email: string,
        document: Document,
        car_plate: string
    ): UUID {
        const driver = new Driver(name, email, document, car_plate);
        const id = crypto.randomUUID();
        this.drivers.push({
            id,
            ...driver
        });
        return id;
    }
}