import { validCardNumber } from "./luhn-validator";
import { cardTypeRegExp } from "./card-type-regex";


const cardNumber = document.querySelector('.card-number');
const checkBtn = document.querySelector('.check');
const cardlist = document.querySelectorAll('.card');


  checkBtn.onclick =(e) => {
    e.preventDefault();
    let value = cardNumber.value;
    if(!validCardNumber(value) === true) {
      alert("Invalid card number");
      [...cardlist].forEach(card => {
        card.classList.add("inactive");
      })
    } else {
      let cardtype = cardTypeRegExp(value);
      [...cardlist].forEach(card => {
        if (card.classList.contains(cardtype)) {
          card.classList.remove("inactive");
        }
      })
    }
  };


