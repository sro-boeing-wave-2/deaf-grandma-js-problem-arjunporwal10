/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */
print('What do you want to say to Grandma!!');
let countbye = 0;
let userinput;
while (countbye < 2) {
  userinput = prompt();
  if (isUppercase(userinput)) {
    const thing = getRandomValue(30, 50);
    print(`NO, NOT SINCE 19${thing}`);
  } else {
    print('HUH?! SPEAK UP, SONNY!');
  }
  if (userinput === 'BYE') {
    countbye += 1;
  } else {
    countbye = 0;
  }
}
