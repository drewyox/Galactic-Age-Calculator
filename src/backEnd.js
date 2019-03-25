import $ from 'jquery';

export function age(input){
  const now = new Date();
  console.log(now);
  const birthdayInput = new Date(input);
  console.log(birthdayInput);
  let yearsOld = Math.floor((((((now.getDate()+1)/30.45)+(now.getMonth()))/12)+now.getYear())-(((((birthdayInput.getDate()+1)/30.45)+(birthdayInput.getMonth()))/12)+birthdayInput.getYear()));
  return yearsOld;
}

export class AgeOnPlanets{
  constructor(earthAge){
    this.earthAge = earthAge;
    mercuryAge(){
      return this.earthAge/.24;
    }  

}
