import { Document } from "../Document";

describe('Document', function() {
    test('Deve retornar false se for enviado um valor null', function() {
        const document = new Document(null);
        expect(document.validate()).toBeFalsy();
    })

    test('Deve retornar undefined se for enviado undefined', function() {
        const document = new Document(undefined);
        expect(document.validate()).toBeFalsy();
    })

    test('Caso o tamanho da string for menor que 11 deve retornar false', function() {
        const document = new Document("123.456");
        expect(document.validate()).toBeFalsy();
    })

    test('Caso o tamanho da string for maior que 14 deve retornar false', function() {
        const document = new Document("123.456.789.012.345.67");
        expect(document.validate()).toBeFalsy();
    })

    test('Caso os números do documento forem repetidos deve retornar false', function() {
        const document = new Document("33333333333333");
        expect(document.validate()).toBeFalsy();
    })

    test('CPF com primeiro dígito 0', function() {
        const document = new Document("123.456.789-00");
        expect(document.validate()).toBeFalsy();
    })

    test('CPF com segundo dígito 0', function() {
        const document = new Document("987.654.321-98");
        expect(document.validate()).toBeFalsy();
    })

    test('CPF Inválido', function() {
        const document = new Document("111.444.777-05");
        expect(document.validate()).toBeFalsy();
    })

    test('CPF Válido', function() {
        const document = new Document("092.216.699-47");
        expect(document.validate()).toBeTruthy();
    })
})