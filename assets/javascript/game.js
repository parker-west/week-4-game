console.log('Hi there! I am linked to this document');

// Initialize JQuery after DOM finishes.
$(document).ready(function() {

	//****Variables****
	//Players
	var player1 = 100;
	var player2 = 95;
	var player3 = 90;
	var player4 = 85;

	// Counters
	var playerHealth = 0;
	var enemyHealth = 0;
	var playerAttack = 0;
	var enemyAttack = 0;




	//Set event onclick event listener

	// On click...
	$('#select-player').on('click','div.players', function(event) {

	    // gets the id of clicked div with class of "players" within "select-player" div.
	    id = event.target.id;
	    //Removes class of clicked target. 
	    $(event.target).removeClass("players");
	    $(event.target).addClass("playerFighter");
	    //Sets player health.
	    playerHealth = 100;
	    //Appends target to "#your-character" div.
	    $(event.target).appendTo("#your-character");
	    //Appends all other ".player" divs to "#enemy"
	    $(".players").appendTo("#enemy");

	});

	//click to move enemey to defender div.
	$('#enemy').on('click', function(event) {

		$(event.target).addClass("enemyFighter");
		enemyHealth = 100;
		id = event.target.id;
		$(event.target).appendTo("#defender");

	});

		//On "attack" button click...
	$('#attack').on('click', function() {

		if (enemyHealth > 0 && playerHealth > 0 )  {
			enemyHealth -= (Math.floor(Math.random() * 20) + 1);
			playerHealth -= (Math.floor(Math.random() * 20) + 1);
		}	

		if (playerHealth <= 0) {
			$(".playerFighter").hide();	
		}	
		if (enemyHealth <= 0) {
			$(".enemyFighter").hide();
		} 
			
		
		console.log("enemy " + enemyHealth);
		console.log("hero " + playerHealth);

	});


		//set random playerAttack value from 1 to 20.
		//decrement attack value from enemyHealth.
		//set random enemyAttack value from 1 to 20.
		//decrement playerHealth.


		

		//if playerHealth <= 0, display loss message.
		// esle if, enemyHealth <= 0, remove (detach?) div...
			// Possible loop?
		//When no players are left in the array, display win message, and restart button?


	
	








//End of document.ready()
});


console.log('I am still working!');

