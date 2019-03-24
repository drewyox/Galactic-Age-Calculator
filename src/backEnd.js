import $ from 'jquery';

export function age(input){
  const now = new Date();
  const birthdayInput = new Date(input);
  let yearsOld = ((((now.getDate()/30.45)+(now.getMonth()))/12)+now.getYear())-((((birthdayInput.getDate()/30.45)+(birthdayInput.getMonth()))/12)+birthdayInput.getYear());
  return yearsOld;
}


export class Tamagotchi {
  constructor () {
    this.food = 10;
    this.sleep = 10;
    this.attention = 10;
  }

  endIt(intervalId){
    clearInterval(intervalId);
  }

  hungry() {
  var hungryId = setInterval(() => {
      this.food--;
    }, 6000);
    return hungryId;
  }

  sleepy() {
  var sleepyId = setInterval(() => {
      this.sleep--;
    }, 7000);
    return sleepyId;
  }
  bored() {
  var boredId = setInterval(() => {
      this.attention--;
    }, 4000);
    return boredId;
  }


  sleepBar(){
    setInterval(() => {
      var progress = this.sleep/10;
      if (progress > .7) {
        $(".fullS").css({"height": "100%", "background-color": "green"});
      }
      if (progress <= .7) {
        $(".fullS").css({"height": "75%", "background-color": "lightgreen"});
      }
      if (progress  <= .5) {
        $(".fullS").css({"height": "50%", "background-color": "orange"});
      }
      if (progress  <= .25) {
        $(".fullS").css({"height": "25%", "background-color": "red"});
      }
      if (progress <= 0) {
        $(".fullS").css({"height": "100%", "background-color": "black"});
        $(".firstBorn").hide();
        $(".firstDead").show();
        $("button").hide();
        $(".tamaHome").addClass("deadAnimation");
      }
    },  1000)
  }

  death(hungryId, sleepyId, boredId, dethId) {
    let dead = false;
    var intervalId = setInterval(() => {
      if (this.food <= 0 || this.sleep <= 0 || this.attention <= 0) {
        if (!dead) {
          this.endIt(hungryId);
          this.endIt(sleepyId);
          this.endIt(boredId);
          this.endIt(intervalId);

          dead = true;
        }
        console.log("test");
        return true;

      }
    }, 1000);
    return intervalId;
  };

  pickOn() {
    this.attention--;
  }

  kill() {
    this.sleep = 0;
    this.attention = 0;
    this.food = 0;
  }

  inject() {
    this.sleep -= 3;
    this.attention += 3;
    this.food--;
  }

  feed () {
    this.food += 3;
  };

  rest() {
    this.sleep = 10;
  };

  play () {
    this.attention++;
  };

  checkNumbers() {
    setInterval(() => {
      console.log(this.food, this.sleep, this.attention);


    }, 1000)
  }


  foodBar(){
    setInterval(() => {
     var progress = this.food/10;
       if (progress > .7) {
         $(".fullF").css({"height": "100%", "background-color": "green"});
       }
       if (progress <= .7) {
         $(".fullF").css({"height": "75%", "background-color": "lightgreen"});
       }
       if (progress  <= .5) {
         $(".fullF").css({"height": "50%", "background-color": "orange"});
       }
       if (progress  <= .25) {
         $(".fullF").css({"height": "25%", "background-color": "red"});
       }
       if (progress <= 0) {
         $(".fullF").css({"height": "100%", "background-color": "black"});
         $(".firstBorn").hide();
         $(".firstDead").show();
         $("button").hide();
         $(".tamaHome").addClass("deadAnimation");
       }
   },  1000)
 }

 funBar(){
   setInterval(() => {
    var progress = this.attention/10;
      if (progress > .7) {
        $(".fullA").css({"height": "100%", "background-color": "green"});
      }
      if (progress <= .7) {
        $(".fullA").css({"height": "75%", "background-color": "lightgreen"});
      }
      if (progress  <= .5) {
        $(".fullA").css({"height": "50%", "background-color": "orange"});
      }
      if (progress  <= .25) {
        $(".fullA").css({"height": "25%", "background-color": "red"});
      }
      if (progress <= 0) {
        $(".fullA").css({"height": "100%", "background-color": "black"});
        $(".firstBorn").hide();
        $(".firstDead").show();
        $("button").hide();
        $(".tamaHome").addClass("deadAnimation");
      }
  },  1000)
}





}
