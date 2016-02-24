$( document ).ready(function() {
console.log( "ready!" );
});
 
$ ("#grayButton") .click (switchGray);

function switchGray () {
	$ ('body') .css("background-color", "gray");
	$( 'p' ).removeClass( "rotating" );
}

$ ("#whiteButton") .click (switchWhite);

function switchWhite () {
	$ ('body') .css("background-color", "white");
	$ ('p') .addClass ("rotating") ;
	console.log ("I'm white!") ;
}

$("#blueButton") .click (switchBlue);

function switchBlue () {
$ ('body') .css("background-color", "blue");


}









// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;

// function switchGray() {
//   document.body.style.backgroundColor = 'gray';
//  document.body.style.color = 'white';
// }

// function switchWhite() {
//   document.body.style.backgroundColor = 'white';
//   document.body.style.color = 'black';
// }
