import { validCardNumber } from "../luhn-validator";


test.each([
    { data: "4929333965908135", expected: true },
    { data: "2221006602159853", expected: true },
    { data: "341530878253354", expected: true },
    { data: "3529089166890037", expected: true },
    { data: "6011611851389187", expected: true },
    { data: "4485222326949670", expected: true },
    { data: "2dd00000004", expected: false },
    { data: "110000000000010", expected: false },
  ])("check luhn validator", ({ data, expected }) => {
    expect(validCardNumber(data)).toEqual(expected);
  });