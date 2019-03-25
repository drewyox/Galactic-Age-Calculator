import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import './backEnd.js';
import $ from 'jquery';
import {age, AgeOnPlanets, expectations, exceed} from "./backEnd.js";



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

    const difference = exceed(expect, age(birth));
    showLifeEXC(difference);
    function showLifeEXC(differenceLife){
      const over = age(differenceLife);
      let arf3 = new AgeOnPlanets(over, 0)
      $("#overLife").append("Wow! You're " + arf3.earthYears() + " years past the average life expectancy on Earth! ");
      $("#overLife").append("Wow! You're " + arf3.mercuryAge() + " years past the average life expectancy on Mercury! ");
      $("#overLife").append("Wow! You're " + arf3.venusAge() + " years past the average life expectancy on Venus! ");
      $("#overLife").append("Wow! You're " + arf3.marsAge() + " years past the average life expectancy on Mars! ");
      $("#overLife").append("Wow! You're " + arf3.jupAge() + " years past the average life expectancy on Jupiter! ");
    }


  });
});
