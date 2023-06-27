export function validCardNumber(input) {
        if (/[^0-9-\s]+/.test(input)) return false;
        var nCheck = 0, nDigit = 0, bEven = false;
        input = input.replace(/\D/g, "");
    
        for (var n = input.length - 1; n >= 0; n--) {
            var cDigit = input.charAt(n),
                nDigit = parseInt(cDigit, 10);
    
            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }
    
            nCheck += nDigit;
            bEven = !bEven;
        }
    
        return (nCheck % 10) == 0;
    }