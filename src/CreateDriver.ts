import { Driver } from "./Driver";

export class CreateDriver {
    drivers: Driver[];

    constructor() {
        this.drivers = [];
    }

    create(driver: Driver) {
        this.drivers.push(driver);
    }
}