import { cardTypeRegExp } from "../card-type-regex";


test.each([
    { data: "4929333965908135", expected: "visa" },
    { data: "5475038139920214", expected: "mastercard" },
    { data: "341530878253354", expected: "amex" },
    { data: "3529089166890037", expected: "jcb" },
    { data: "00000010", expected: "unknown" },
  ])("check card-type-regex functionality", ({ data, expected }) => {
    expect(cardTypeRegExp(data)).toEqual(expected);
  });