import DocumentInvalidException from "./DocumentInvalidException";

export class Document {
    private readonly MINIMUN_LENGTH = 11;
    private readonly MAXIMUM_LENGTH = 14;
    private readonly DOCUMENT_WITHOUT_LAST_DIGIT_LENGHT = 11;

    constructor(
        private readonly document: unknown
    ) {
        this.validate();
    }

    private isValidLength(str: any) {
        return str.length >= this.MINIMUN_LENGTH && str.length <= this.MAXIMUM_LENGTH;
    }

    private allDigitsSame(document: unknown) {
        const digitsDocument = String(document).split("");
        const firstDigit = digitsDocument[0];
        return digitsDocument.every(currentDigit => currentDigit === firstDigit);
    }

    private getDigitByRestDivision(restDivision: number) {
        return restDivision < 2 ? 0 : this.DOCUMENT_WITHOUT_LAST_DIGIT_LENGHT - restDivision;
    }

    private getRestDivisionDigitBySumDigits(sumDigits: number) {
        return sumDigits % this.DOCUMENT_WITHOUT_LAST_DIGIT_LENGHT;
    }

    private getTotalAllDigits(document: string) {
        const sizeDocumentWithTwoDigits = document.length + 2;
        let total = 0;
        const digitsDocument = document.split("");
        digitsDocument.forEach((currentDigit, index) => {
            const indexIncremented = index + 1;
            const currentNumberMultiplication = sizeDocumentWithTwoDigits - indexIncremented;
            const currentDigitNumber = +currentDigit;
            const sum = currentNumberMultiplication * currentDigitNumber;
            total += sum;
        });
        return total;
    }

    private getDocumentWithoutTwoLastDigits(document: string) {
        return document.substring(0, document.length - 2);
    }

    private getFirstDigit(document: string) {
        const documentWithoutTwoLastDigits = this.getDocumentWithoutTwoLastDigits(document);
        const sumFirstDigit = this.getTotalAllDigits(documentWithoutTwoLastDigits);
        const restDivision = this.getRestDivisionDigitBySumDigits(sumFirstDigit);
        return this.getDigitByRestDivision(restDivision);
    }

    private getSecondDigit(document: string, firstDigit: number) {
        const documentWithoutTwoLastDigits = this.getDocumentWithoutTwoLastDigits(document);
        const documentWithNewFirstDigit = `${documentWithoutTwoLastDigits}${firstDigit}`;
        const sumSecondDigit = this.getTotalAllDigits(documentWithNewFirstDigit);
        const restDivision = this.getRestDivisionDigitBySumDigits(sumSecondDigit)
        return this.getDigitByRestDivision(restDivision);
    }

    private getTwoLastDigitsCalculated(document: string) {
        const firstDigit = this.getFirstDigit(document);
        const secondDigit = this.getSecondDigit(document, firstDigit);
        return `${firstDigit}${secondDigit}`;
    }

    private getLastTwoDigitsIsValid(document: string) {
        const twoLastDigitsCalculated = this.getTwoLastDigitsCalculated(document);
        const oldTwoLastDigits = document.substring(document.length - 2);
        return twoLastDigitsCalculated === oldTwoLastDigits;
    }

    private getDocument() {
        return String(this.document);
    }

    private getFormatted() {
        return this.getDocument().replace(/\D/g, '');
    }

    private validate() {
        if (!this.document) throw new DocumentInvalidException();
        if (!this.isValidLength(this.document)) throw new DocumentInvalidException();
        const documentFormatted = this.getFormatted();
        if (this.allDigitsSame(documentFormatted)) throw new DocumentInvalidException();
        if (!this.getLastTwoDigitsIsValid(documentFormatted)) throw new DocumentInvalidException();
    }
}