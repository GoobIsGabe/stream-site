import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss'],
})
export class RouletteComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    //IMPORTANT VARIABLES
    //How many images do you have in the folder?
    let num = 21;
    //How many times do you want the cube to spin
    let maxspins = 9;
    //How fast do you want the cube to spin
    //15 -> 10 -> 6 -> 5 -> 3 -> 2 -> 1
    let speedmult = 15;

    // grabs url for any variables
    const params = new URLSearchParams(document.location.search);
    let finalPic = params.get("num");
    let rand = Math.floor(Math.random() * num + 1);

    //makes sure program won't break if there isn't a num variable
    if(!params.has('num')) finalPic = rand.toString();
  
    let randVerify = rand;
    let degrees = 0;
    let spincounter = 0;
    let randFinal = 0;

    //Typescript way of changing images
    let picone = ((document.getElementById('picone') as HTMLImageElement).src =
      '../assets/images/roulette/' + rand + '.png');
    rand = Math.floor(Math.random() * num + 1);
    let pictwo = ((document.getElementById('pictwo') as HTMLImageElement).src =
      '../assets/images/roulette/' + rand + '.png');
    rand = Math.floor(Math.random() * num + 1);
    let picthree = ((
      document.getElementById('picthree') as HTMLImageElement
    ).src = '../assets/images/roulette/' + rand + '.png');
    rand = Math.floor(Math.random() * num + 1);
    let picfour = ((
      document.getElementById('picfour') as HTMLImageElement
    ).src = '../assets/images/roulette/' + rand + '.png');

    for (let i=0; i<100000; i++) {
      rotateAnimation(i);
   }

    function rotateAnimation(i) {
      setTimeout(function() {
      let elem = document.getElementById('box');

      //sets variables for each of the sides to help with showing and hiding
      let side1 = document.getElementById('one') as HTMLElement;
      let side2 = document.getElementById('two') as HTMLElement;
      let side3 = document.getElementById('three') as HTMLElement;
      let side4 = document.getElementById('four') as HTMLElement;

      //Certain amount of spins, you may want to make this random to spice things up
      //or have increments where it gets slower
      if (spincounter < maxspins) {
        if (spincounter >= 2) speedmult = 10;
        if (spincounter >= 4) speedmult = 6;
        if (spincounter >= 5) speedmult = 5;
        if (spincounter >= 6) speedmult = 3;
        if (spincounter >= 7) speedmult = 2;
        if (spincounter >= 8) speedmult = 1;
        if (spincounter >= 8 && degrees == 90) degrees = 359;

        elem.style.webkitTransform =
          'rotateX(' + degrees * -1 * speedmult + 'deg)';
        //This is where this function gets constantly used, depending on the speed
        //LowerNum = faster
       
        degrees++;

        if (degrees * speedmult > 359) {
          //adds to spin counter, and resets degrees to count towards next rotation
          spincounter++;
          degrees = 0;
        }
        
        if (degrees * speedmult == 0  && spincounter!=9) {
          randVerify = rand;
          rand = Math.floor(Math.random() * num + 1);
          //Ensures that there will be no duplicate images
          while (randVerify == rand) {
            rand = Math.floor(Math.random() * num + 1);
          }
          pictwo = (document.getElementById('pictwo') as HTMLImageElement).src =
            '../assets/images/roulette/' + rand + '.png';
          side1.style.visibility = 'visible';
          side2.style.visibility = 'visible';
          side3.style.visibility = 'hidden';
          side4.style.visibility = 'hidden';
        }
        if (spincounter >= maxspins - 1 && degrees == 0) {
          randFinal = rand;

          pictwo = (document.getElementById('pictwo') as HTMLImageElement).src =
            '../assets/images/roulette/' + finalPic + '.png';
          picthree = (
            document.getElementById('picthree') as HTMLImageElement
          ).src = '../assets/images/roulette/' + finalPic + '.png';
          picfour = (
            document.getElementById('picfour') as HTMLImageElement
          ).src = '../assets/images/roulette/' + finalPic + '.png';
        }
        if (degrees * speedmult == 90) {
          randVerify = rand;
          rand = Math.floor(Math.random() * num + 1);
          while (randVerify == rand) {
            rand = Math.floor(Math.random() * num + 1);
          }
          picthree = (
            document.getElementById('picthree') as HTMLImageElement
          ).src = '../assets/images/roulette/' + rand + '.png';
          side1.style.visibility = 'hidden';
          side2.style.visibility = 'visible';
          side3.style.visibility = 'visible';
          side4.style.visibility = 'hidden';
        }
        if (degrees * speedmult == 180 ) {
          randVerify = rand;
          rand = Math.floor(Math.random() * num + 1);
          while (randVerify == rand) {
            rand = Math.floor(Math.random() * num + 1);
          }
          picfour = (
            document.getElementById('picfour') as HTMLImageElement
          ).src = '../assets/images/roulette/' + rand + '.png';
          side1.style.visibility = 'hidden';
          side2.style.visibility = 'hidden';
          side3.style.visibility = 'visible';
          side4.style.visibility = 'visible';
        }
        if (degrees * speedmult == 270) {
          randVerify = rand;
          rand = Math.floor(Math.random() * num + 1);
          while (randVerify == rand) {
            rand = Math.floor(Math.random() * num + 1);
          }
          picone = (document.getElementById('picone') as HTMLImageElement).src =
            '../assets/images/roulette/' + rand + '.png';
          side1.style.visibility = 'visible';
          side2.style.visibility = 'hidden';
          side3.style.visibility = 'hidden';
          side4.style.visibility = 'visible';
        }
        
        //Debugging information, can comment out on release
        document.getElementById('spincounter').innerHTML =
          'total spins: ' + spincounter;
          document.getElementById("rotation").innerHTML =
          "rotate(" + degrees + "deg)";
        }
         else {
          //enter what to do when done
          picone = (document.getElementById('picone') as HTMLImageElement).src =
          '../assets/images/roulette/' + finalPic + '.png';
          pictwo = (document.getElementById('pictwo') as HTMLImageElement).src =
          '../assets/images/roulette/' + finalPic + '.png';
          picthree = (document.getElementById('picthree') as HTMLImageElement).src =
          '../assets/images/roulette/' + finalPic + '.png';
          picfour = (document.getElementById('picfour') as HTMLImageElement).src =
          '../assets/images/roulette/' + finalPic + '.png';

          elem.style.webkitTransform = "rotateX(180deg)";    //Fixes rotation to be straight on

          picthree= (document.getElementById('picthree') as HTMLImageElement).style.animation ="dropShadow 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both, pulse 0.5s ease-in-out 3 both";
          
        // clearInterval();  
        }}, 8 * i);
        
    }
  }
  ngOnDestroy(): void {
    // let picone = (document.getElementById('picone') as HTMLImageElement).src = 'unset';
    // let pictwo = (document.getElementById('pictwo') as HTMLImageElement).src = 'unset';
    // let picthree = (document.getElementById('picthree') as HTMLImageElement).src = 'unset';
    // let picfour = (document.getElementById('picfour') as HTMLImageElement).src = 'unset';
  }
}
