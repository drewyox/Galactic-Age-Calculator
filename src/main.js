import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import './backEnd.js';
import $ from 'jquery';
import {Tamagotchi} from "./backEnd.js";



$(document).ready(function() {

  $(".birthDateForm").submit(function(event){
    event.preventDefault();
    const birth = $("#birthDate").val();
    console.log(birth);


  });

  $('.nameIt').submit(function(event) {
    event.preventDefault();
    var name = $('input#name-input').val();
    $(".nameIt").hide();
    $('.name-out').text(name + " " + "LIVES!");
    $('.firstBorn').fadeIn(2000);
    const bongo = new Tamagotchi();
    let hungryIntervalId = bongo.hungry();
    let sleepIntervalId = bongo.sleepy();
    let boredIntervalId = bongo.bored();
    bongo.death(hungryIntervalId, sleepIntervalId, boredIntervalId);
    bongo.checkNumbers();
    bongo.sleepBar();
    bongo.foodBar();
    bongo.funBar();

    $('#feedBut').click(function() {
      bongo.feed();
      console.log(bongo.food)
    });
    $('#playBut').click(function() {
      bongo.play();
      console.log(bongo.attention)
    });
    $('#sleepBut').click(function() {
      bongo.rest();
      console.log(bongo.sleep);
    });
    $('#pickOn').click(function(){
      bongo.pickOn();
    })
    $('#inject').click(function(){
      bongo.inject();
    })
    $('.killBut').click(function() {
      bongo.kill();
      console.log(bongo.food)
    });
  });
});
