export class Document {
    private isValidLength(str: any) {
        return str.length >= 11 && str.length <= 14;
    }

    private allDigitsSame(str: any) {
        // @ts-ignore
        return str.split("").every(c => c === str[0]);
    }

    // @ts-ignore
    public validate (str) {
        if (!str) return false;
        if (!this.isValidLength(str)) return false;
        str = str.replace(/\D/g, '');
        if (this.allDigitsSame(str)) return false;
        try {
            let digito = 0;
            let d1 = 0;
            let d2 = 0;
            for (let nCount = 1; nCount < str.length -1; nCount++) {  
                digito = parseInt(str.substring(nCount -1, nCount));
                d1 += ( 11 - nCount ) * digito;
                d2 += ( 12 - nCount ) * digito;
            };  
            let rest = (d1 % 11);
            const dg1 = (rest < 2) ? 0 : 11 - rest;
            d2 += 2 * dg1;  
            rest = (d2 % 11);  
            const nDigVerific = str.substring(str.length-2, str.length);  
            const dg2 = (rest < 2) ? 0 : 11 - rest;
            const nDigResult = "" + dg1 + "" + dg2;
            return nDigVerific == nDigResult;
        }catch (e){  
            console.error("Erro !"+e);  
            return false;  
        }  
    }
}