console.log("Welcome to the world little tomagatchi!");

// User Stories


// Name your Pet Page
//  - css - Tree, sunshine, and butterflies will remain on the page
// 	- Player transitions onto the name your pet page.
// 	- Player names their pet by inputting the name into the next box
// 	- input displays on the page
	
// Play Page

// 	- Game transitions into the Play page where the pet name card is displayed
// 	-  (specification) Pet name card : Profile picture, Name, age
// 			§ (specification) age will increase by 2 years every minute.  
// 			§ Ice box - profile picture can change depending on happiness state
		
// 	- 3 graphics poof onto the page with 3 bars that decrease over time
// 		○ (specification) Hungry - (high rate dependent on age) this bar will decrease at a rate of … ?? If depletes, move to Death page
// 		○ (specification) Sleepiness - (high rate dependent on age).  this bar increases over time.  Too sleepy will decrease happiness.
// 		○ (specification) Happiness - this bar decreases over time
// 		○ (specification) if any bar decreases it will die
		
// 	- Player must click the corresponding buttons to keep the bar from depleting 
// 		○ (specification) Hungry button
// 		○ (specification) Energy button
// 		○ (specification) Happiness button
		
// 	- if Tomagatchi dies, game transitions into the "Death page"

// Death page
// 	- User views a death page
// 	- graphics change to a graveyard background
// 	- Pet card displays: ${Name} has died of ${which bar depleted}

//** PROGRAM LOGIC  **//

//** STEP 0 - add HTML structure elements */
// added divs for the 3 main pages of the game: start page, play page and death page
//** STEP 1 - Create tomagatchi object */
// Name will be parsed from the user input space when naming tomagatchi
//

const tomagatchi = {
    name: "",
    age: 30,
    hungerScale: 10,
    energyScale: 10,
    happinessScale: 10,

    petName () {
        $age = $("<input class='age' type='text' placeholder='Age of your pet?'?></input>")
        $name = $("#petname").val();
        tomagatchi.name = $name;
        $("h1").text(`Hi ${$name}!!`);
        $("input").fadeOut(100);
        $("#petsubmit").fadeOut(100);
        $profileStats = $(".stats");
        $($profileStats).prepend(`<p>Name: ${$name}</p><p class="agescale">Age: ${tomagatchi.age}</p><p class="hungerscale">Hungry: ${tomagatchi.hungerScale}</p><p class="energyscale">Energy: ${tomagatchi.energyScale}</p><p class="happyscale">Happy: ${tomagatchi.happinessScale}</p>`);
        $hungryButton = $("<button id='hungrybutton'>HUNGRY!</button>");
        $energyButton = $("<button id='energybutton'>Need Energy!</button>");
        $happyButton = $("<button id= 'happybutton'>Play with me!</button>");
        $(".hungry").after($hungryButton);
        $(".energy").after($energyButton);
        $(".happy").after($happyButton);
        tomagatchi.startTimer();
        tomagatchi.ageTimer();
        $("#hungrybutton").on("click", tomagatchi.feedMe);
    },
    ageTimer(){
        tomagatchi.age = setInterval(tomagatchi.ageCounter, 1000)
    },
    ageCounter () {
        
        tomagatchi.age++;
        $(".agescale").text(`Age: ${tomagatchi.age}`)
        if(tomagatchi.age >= 18) {
            $("img").attr("src", "adolescentdragon.jpeg");
        }
        if(tomagatchi.age >= 30) {
            // $adultDragon.css()
            $("img").addClass("adultdragon");
            $("section.profilepic").addClass("adultdragon")
            $("img").attr("src", "adultdragon.jpeg");
            

        }
    },
// Modified from Dalton's reduceTime method in PokeASquare

    startTimer(){
    // setInterval(function to run, time between each run)
        tomagatchi.hungerScale = setInterval(tomagatchi.reduceHunger, 1000);
  },

    startEnergyTimer() {
        console.log("Energy Timer");
  },

    startHappyTimer() {

    },


    reduceHunger(){
        tomagatchi.hungerScale--;
        tomagatchi.energyScale--;
        tomagatchi.happinessScale--;
        $(".hungerscale").text(`Hungry: ${tomagatchi.hungerScale}`);
        $(".energyscale").text(`Energy: ${tomagatchi.hungerScale}`);
        $(".happyscale").text(`Happy: ${tomagatchi.hungerScale}`);
        if(tomagatchi.hungerScale <= 0){
          clearInterval(tomagatchi.hungerScale);
        }
      },

      feedMe () {
          console.log("Feed me!");
          tomagatchi.hungerScale = tomagatchi.hungerScale + 1;
        //   $("p.hungerscale").text(`Hungry: ${tomagatchi.hungerScale}`)
      }


}

$("#petsubmit").on("click", tomagatchi.petName);




