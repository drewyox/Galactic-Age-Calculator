import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import './backEnd.js';
import $ from 'jquery';
import {age, AgeOnPlanets, expectations} from "./backEnd.js";



$(document).ready(function() {

  $(".birthDateForm").submit(function(event){
    event.preventDefault();
    const birth = $("#birthDate").val();
    const expect = $("#lifeExpectancy").val();

    display(birth);
    function display(birthDaze){
      const normalAge = age(birthDaze);
      let arf = new AgeOnPlanets(normalAge, 0);
        $("#ageOutput").append("You are " + arf.earthYears() + " years old on Earth. ");
        $("#ageOutput").append("You are " + arf.mercuryAge() + " years old on Mercury. ");
        $("#ageOutput").append("You are " + arf.venusAge() + " years old on Venus. ");
        $("#ageOutput").append("You are " + arf.marsAge() + " years old on Mars. ");
        $("#ageOutput").append("You are " + arf.jupAge() + " years old on Jupiter. ");
    }
    displayEx(expect);
    function displayEx(expect1){
      const lExpect = expectations(expect1);
      let arf2 = new AgeOnPlanets(0, lExpect);
      $("#ageOutput").append("You have " + arf2.earthExp1() + " years remaining on Earth. ");
      $("#ageOutput").append("You have " + arf2.mercuryExp() + " years remaining on Mercury. ");
      $("#ageOutput").append("You have " + arf2.venusExp() + " years remaining on Venus. ");
      $("#ageOutput").append("You have " + arf2.marsExp() + " years remaining on Mars. ");
      $("#ageOutput").append("You have " + arf2.jupExp() + " years remaining on Jupiter. ");
    }
  });
});
