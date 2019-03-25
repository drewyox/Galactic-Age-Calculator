import $ from 'jquery';


export function age(input){
  const now = new Date();
  const birthdayInput = new Date(input);
  let yearsOld = Math.floor((((((now.getDate()+1)/30.45)+(now.getMonth()))/12)+now.getYear())-(((((birthdayInput.getDate()+1)/30.45)+(birthdayInput.getMonth()))/12)+birthdayInput.getYear()));
  return yearsOld;
}

export function expectations(expInput) {
  const lifeExpectation = expInput;
  return lifeExpectation;
}

export class AgeOnPlanets{
  constructor(earthAge, earthExp){
    this.earthAge = earthAge;
    this.earthExp = earthExp;
  }
  earthYears(){
    return Math.floor(this.earthAge);
  }
  mercuryAge(){
    return Math.floor(this.earthAge/.24);
  }
  venusAge(){
    return Math.floor(this.earthAge/.62);
  }
  marsAge(){
    return Math.floor(this.earthAge/1.88);
  }
  jupAge() {
    return Math.floor(this.earthAge/11.86);
  }
  earthExp1() {
    return (this.earthExp-this.earthAge);
  }
  mercuryExp(){
    return (this.earthExp/.24-this.earthAge/.24);
  }
  venusExp(){
    return Math.floor(this.earthExp - this.earthAge/.62)
  }
  marsExp(){
    return Math.floor(this.earthExp - this.earthAge/1.88)
  }
  jupExp(){
    return Math.floor(this.earthExp - this.earthAge/11.86)
  }
}

export function exceed(lifeExpectancy, age){
  if (age > lifeExpectancy) {
    const lifeExceed = age-lifeExpectancy;
    return lifeExceed;}
  else if (age < lifeExpectancy){
    $("#overLife").hide();
  }
}
