import axios from "axios"

test('Deve criar um motorista e retornar o driver_id', async function () {
    const { data } = await axios.post('http://127.0.0.1:3000/drivers', {
        name: "Vitor Luiz Duggen",
        email: "test@gmail.com",
        document: "70106501011",
        car_plate: "321312"
    });
    expect(data).toHaveProperty('driver_id');
})