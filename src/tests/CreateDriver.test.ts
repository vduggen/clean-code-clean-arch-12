import axios from "axios"
import { CreateDriver } from "../CreateDriver";
import DocumentInvalidException from "../DocumentInvalidException";

describe('Integração', function() {
    test('Deve criar um motorista e retornar o driver_id', async function () {
        const { data } = await axios.post('http://127.0.0.1:3000/drivers', {
            name: "Vitor Luiz Duggen",
            email: "test@gmail.com",
            document: "70106501011",
            car_plate: "321312"
        });
        expect(data).toHaveProperty('driver_id');
    })
})

describe('Unitário', function() {
    test('Deve criar um motorista com documento inválido', function() {
        expect(() => {
            const createDriver = new CreateDriver();
            createDriver.create("Vitor Luiz Duggen", "test@gmail.com", "123", "1321")
        }).toThrow(DocumentInvalidException);
    })
})