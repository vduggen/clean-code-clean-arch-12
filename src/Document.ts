export class Document {
    private isValidLength(str: any) {
        return str.length >= 11 && str.length <= 14;
    }

    private allDigitsSame(document: string) {
        const digitsDocument = document.split("");
        const firstDigit = document[0];
        return digitsDocument.every(digit => digit === firstDigit);
    }

    private getDigitByRest(rest: number) {
        return rest < 2 ? 0 : 11 - rest;
    }

    // @ts-ignore
    public validate (str) {
        if (!str) return false;
        if (!this.isValidLength(str)) return false;
        str = str.replace(/\D/g, '');
        if (this.allDigitsSame(str)) return false;
        try {
            let d1 = 0;
            let d2 = 0;
            for (let nCount = 1; nCount < str.length -1; nCount++) {  
                const digito = parseInt(str.substring(nCount -1, nCount));
                d1 += (11 - nCount) * digito;
                d2 += (12 - nCount) * digito;
            };  
            const rest1 = (d1 % 11);
            const firstDigit = this.getDigitByRest(rest1);
            d2 += 2 * firstDigit;  
            const rest2 = (d2 % 11);  
            const twoLastDigits = str.substring(str.length-2, str.length);  
            const secondDigit = this.getDigitByRest(rest2);
            const nDigResult = `${firstDigit}${secondDigit}`;
            return twoLastDigits == nDigResult;
        }catch (e){  
            console.error("Erro !"+e);  
            return false;  
        }  
    }
}