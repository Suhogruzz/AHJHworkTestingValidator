export function cardTypeRegExp(input) {
    let name = 'unknown';
    return (
        /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(input)
          ? (name = "mastercard")
          : /^4[0-9]{12}(?:[0-9]{3})?$/.test(input)
          ? (name = "visa")
          : /^3[47][0-9]{13}$/.test(input)
          ? (name = "amex")
          : /^(?:2131|1800|35\d{3})\d{11}$/.test(input)
          ? (name = "jcb")
          : /^3(?:0[0-5]|[68])/.test(input)
          ? (name = "mir")
          : /^220(0|4)/.test(input),
        name
      );
}