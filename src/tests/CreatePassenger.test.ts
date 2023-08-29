import axios from "axios"

test('Deve criar um passageiro e retornar o passenger_id', async function () {
    const { data } = await axios.post('http://127.0.0.1:3000/passengers', {
        name: "Vitor Luiz Duggen",
        email: "test@gmail.com",
        document: "70106501011"
    });
    expect(data).toHaveProperty('passenger_id');
})