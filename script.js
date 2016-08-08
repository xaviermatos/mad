

var name = prompt("Tell me your name");
var friend = prompt("Give me a friend's name");
var console = prompt("What is your favorite game console?");
var game = prompt("Your favorite game on that console");
var home = prompt("What's your favorite City");
var drink = prompt("What's your favorite Drink");

 var libs = ("One day " + name + " walked out of " + home + " high school. He turned to his friend, " + friend  +" and asked, do you want to play some games tonight? " + friend + " said sure, but you have to bring some of that " + drink +" . " + name + " went to his own home with " + friend +" and gave him a tour. " + friend +" noticed that " + name +" had a " + console +" , ewwwwwww said " + friend +" you have a " + console +" ?, Just kidding. " + name +" said whatever man, I'm still better than you." + friend + " said alright then let's play, so they started playing " + game +".");

$(".results").text(libs);