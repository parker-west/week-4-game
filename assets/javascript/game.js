console.log('Hi there! I am linked to this document');

// Initialize JQuery after DOM finishes.
$(document).ready(function() {

	//****Variables****

	// Counters
	var playerHealth = 0;
	var enemyHealth = 0;

	var fighters = ["one","two","three"];


	//Hide buttons on initialization
	$("#reset").hide();
	$("#attack").hide();

	//Set event onclick event listener

	// On click...
	$('#select-player').on('click','div.players', function(event) {

	    // gets the id of clicked div with class of "players" within "select-player" div.
	    id = event.target.id;
	    //Remove class of clicked target. 
	    $(event.target).removeClass("players");
	    //Add playerFigter class.
	    $(event.target).addClass("playerFighter");
	    //Sets player health.
	    playerHealth = $(event.target).attr("data-value");
	    console.log(playerHealth);
	    //Appends target to "#your-character" div.
	    $(event.target).appendTo("#your-character");
	    //Appends all other ".player" divs to "#enemy"
	    $(".players").appendTo("#enemy");
	    

	});

	//click to move enemey to defender div.
	$('#enemy').on('click', function(event) {

		$(event.target).addClass("enemy-fighter");
		enemyHealth = $(event.target).attr("data-value");
		console.log(enemyHealth);
		id = event.target.id;
		$(event.target).appendTo("#defender");
		$("#attack").show();

	});

		//On "attack" button click...
	$('#attack').on('click', function() {

		$("#reset").hide();

		var attackPower = 40;

		if (enemyHealth > 0 && playerHealth > 0 )  {
			var playerHitPower = (Math.floor(Math.random() * attackPower) + 10);
			enemyHealth -= playerHitPower;
			$(".enemy-fighter > span").html(enemyHealth);
			var enemyHitPower = (Math.floor(Math.random() * 20) + 10);
			playerHealth -= enemyHitPower;
			$(".playerFighter > span").html(playerHealth);
			$(".status").html("You hit enemy with " + playerHitPower + " damage and enemy hit you with " + enemyHitPower + " damage.");

		}	

		if (playerHealth <= 0) {
			$(".playerFighter").hide();
			$("#reset").show();
			$('#reset').click(function() {
				location.reload();
			});
			//display reset button
		}	
		
		if (enemyHealth <= 0) {
			$(".enemy-fighter").hide();
			$("#reset").hide();
			attackPower += 10;
			fighters.pop();
			$("#attack").hide();
				
			//print to select new enemy.
			console.log(attackPower);
		}

		if (fighters.length === 0) {
				$("#reset").show();
				$('#reset').click(function() {
				location.reload();
			});
			}
		
		if (enemyHealth <= 0 && playerHealth <= 0) {
			
			console.log("Double Kill");
			$("#reset").show();
			$('#reset').click(function() {
				location.reload();
			});
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