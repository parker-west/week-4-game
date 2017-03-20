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

	var players = ["playerOne", "playerTwo", "playerThree", "playerFour"];
  
    
	$('#select-player').on('click','div.players', function(e) {

	    console.log('.player clicked');
	    id = e.target.id; // gets the id
	    $(e.target).removeClass(".player");
	    $(e.target).appendTo("#your-character");

	    

    
	});

	
	









});


console.log('I am still working!');

