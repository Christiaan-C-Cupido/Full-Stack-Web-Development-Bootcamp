var name = prompt("What is your name?");

//a Isolate the first char
var firstChar = name.slice(0,1);

//b Convert the first char to upper case
var upperCaseFirstChar = firstChar.toUpperCase();

//c Isolate the rest of the name
var restOfName = name.slice(1,name.length);

//d Convert the rest of the name to lower case
var lowerCaseRestOfName = restOfName.toLowerCase();

//e Concatenate the first char and the rest of the name
var capitalisedName = upperCaseFirstChar + lowerCaseRestOfName;
alert("Hello, " + capitalisedName + ".");