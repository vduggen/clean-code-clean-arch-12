import { Document } from "../Document";

describe('Document', function() {
    test('Deve retornar false se for enviado um valor null', function() {
        const document = new Document();
        expect(document.validate(null)).toBeFalsy();
    })

    test('Deve retornar undefined se for enviado undefined', function() {
        const document = new Document();
        expect(document.validate(undefined)).toBeFalsy();
    })

    test('Caso o tamanho da string for menor que 11 deve retornar false', function() {
        const document = new Document();
        expect(document.validate("123.456")).toBeFalsy();
    })

    test('Caso o tamanho da string for maior que 14 deve retornar false', function() {
        const document = new Document();
        expect(document.validate("123.456.789.012.345.67")).toBeFalsy();
    })

    test('Caso os números do documento forem repetidos deve retornar false', function() {
        const document = new Document();
        expect(document.validate("33333333333333")).toBeFalsy();
    })

    test('CPF com primeiro dígito 0', function() {
        const document = new Document();
        expect(document.validate("123.456.789-00")).toBeFalsy();
    })

    test('CPF com segundo dígito 0', function() {
        const document = new Document();
        expect(document.validate("987.654.321-98")).toBeFalsy();
    })

    test('CPF Inválido', function() {
        const document = new Document();
        expect(document.validate("111.444.777-05")).toBeFalsy();
    })

    test('CPF Válido', function() {
        const document = new Document();
        expect(document.validate("092.216.699-47")).toBeTruthy();
    })
})