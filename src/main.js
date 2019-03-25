import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import './backEnd.js';
import $ from 'jquery';
import {age} from "./backEnd.js";



$(document).ready(function() {

  $(".birthDateForm").submit(function(event){
    event.preventDefault();
    const birth = $("#birthDate").val();
    console.log(birth);
    const normalAge = age(birth);
    console.log(normalAge);


  });
});
