import express from "express";
import { CreatePassenger } from "./CreatePassenger";
import { CreateDriver } from "./CreateDriver";
const app = express();

app.use(express.json());

app.post("/passengers", function (req, res) {
    const { name, email, document } = req.body;
    const createPassenger = new CreatePassenger();
    const passenger_id = createPassenger.create(name, email, document);
    res.json({ passenger_id });
});

app.post("/drivers", function (req, res) {
    const { name, email, document, car_plate } = req.body;
    const createDriver = new CreateDriver();
    const driver_id = createDriver.create(name, email, document, car_plate);
    res.json({ driver_id });
});

app.listen(3000);