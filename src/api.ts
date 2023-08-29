import express from "express";
import { CreatePassenger } from "./CreatePassenger";
const app = express();

app.use(express.json());

app.post("/passengers", function (req, res) {
    const { name, email, document } = req.body;
    const createPassenger = new CreatePassenger();
    const passenger_id = createPassenger.create(name, email, document);
    res.json({ passenger_id });
});

app.post("/drivers", function (req, res) {});

app.listen(3000);