import axios from "axios"
import { CreatePassenger } from "../CreatePassenger";
import DocumentInvalidException from "../DocumentInvalidException";

describe('Integração', function() {
    test('Deve criar um passageiro e retornar o passenger_id', async function () {
        const { data } = await axios.post('http://127.0.0.1:3000/passengers', {
            name: "Vitor Luiz Duggen",
            email: "test@gmail.com",
            document: "70106501011"
        });
        expect(data).toHaveProperty('passenger_id');
    })
})

describe('Unitário', function() {
    test('Deve criar um passageiro com documento inválido', function() {
        expect(() => {
            const createPassenger = new CreatePassenger();
            createPassenger.create("Vitor Luiz Duggen", "test@gmail.com", "123")
        }).toThrow(DocumentInvalidException);
    })
})