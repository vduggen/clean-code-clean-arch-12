export default class DocumentInvalidException extends Error {
    constructor() {
        super();
        this.name = "DOCUMENT_INVALID";
        this.message = "Documento inválido";
    }
}