import { Document } from "../Document";

describe('Document', function() {
    test('Deve retornar exceção se for enviado um valor null', function() {
        const exception = () => new Document(null);
        expect(exception).toThrow("Documento inválido");
    })

    test('Caso o tamanho da string for menor que 11 deve retornar exceção', function() {
        const exception = () => new Document("123.456");
        expect(exception).toThrow("Documento inválido");
    })

    test('Caso o tamanho da string for maior que 14 deve retornar exceção', function() {
        const exception = () => new Document("123.456.789.012.345.67");
        expect(exception).toThrow("Documento inválido");
    })

    test('Caso os números do documento forem repetidos deve retornar exceção', function() {
        const exception = () => new Document("33333333333333");
        expect(exception).toThrow("Documento inválido");
    })

    test('CPF com primeiro dígito 0', function() {
        const exception = () => new Document("123.456.789-00");
        expect(exception).toThrow("Documento inválido");
    })

    test('CPF com segundo dígito 0', function() {
        const exception = () => new Document("987.654.321-98");
        expect(exception).toThrow("Documento inválido");
    })

    test('CPF Inválido', function() {
        const exception = () => new Document("111.444.777-05");
        expect(exception).toThrow("Documento inválido");
    })

    test('CPF Válido', function() {
        const document = new Document("092.216.699-47");;
        expect(document).toBeTruthy();
    })
})