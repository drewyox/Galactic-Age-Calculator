import $ from 'jquery';

export function age(input){
  const now = new Date();
  const birthdayInput = new Date(input);
  let yearsOld = ((((now.getDate()/30.45)+(now.getMonth()))/12)+now.getYear())-((((birthdayInput.getDate()/30.45)+(birthdayInput.getMonth()))/12)+birthdayInput.getYear());
  return yearsOld;
}
