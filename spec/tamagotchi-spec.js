import {age, AgeOnPlanets} from "../src/backEnd.js";

describe ("The age functions", function() {

  it('should take the date of a birthday, and create an age in earth years', function(){
    const testDate = new Date(1992, 9, 23);
    expect(age(testDate)).toEqual(26);
  })

  it('should calculate their age on other planets using their age in earth years, Mercury', function(){
    const test = new AgeOnPlanets(26, 0)
    expect(test.mercuryAge()).toEqual(108);
  })

  it('should calculate their age on other planets using their age in earth years Venus', function(){
    const test = new AgeOnPlanets(26 0)
    expect(test.venusAge()).toEqual(41);
  })

  it('should calculate their age on other planets using their age in earth years, Mars', function(){
    const test = new AgeOnPlanets(26, 0)
    expect(test.marsAge()).toEqual(13);
  })

  it('should calculate their age on other planets using their age in earth years, Jupiter', function(){
    const test = new AgeOnPlanets(26, 0)
    expect(test.jupAge()).toEqual(2);
  })

  it('should calculate how much time they have left based on life expectancy on the relative planet'function(){
    const test = new AgeOnPlanets(26, 0)
  })

  it('should print how many years above the life expectancy you are if applicable')


});



  //
  // it('should count down by one every 6 seconds', function(){
  //   jasmine.clock().tick(6001);
  //   bingo.hungry();
  //   bingo.sleepy();
  //   bingo.bored();
  //   expect(bingo.food, bingo.sleep, bingo.attention).toEqual(9, 10, 8);
  // });
  //
  // it('should display death message when any stat gets to 0', function(){
  //   bingo.attention = 0;
  //   expect(bingo.death()).toEqual(true);
  // })
  //
  //
  // it('should have a progress bar that depletes based on the stat', function(){
  //   jasmine.clock().tick(5001)
  //   expect(bingo.sleepBar()).toEqual(3)
  // })
