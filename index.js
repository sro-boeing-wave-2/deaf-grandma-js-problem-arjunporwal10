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
let flag = 1;
let countbye = 0;
while (flag == 1) {
  let userinput = prompt();
  if (userinput == 'BYE') {
    countbye += 1;
    if (countbye == 3) {
      return;
    }
    print('NO, NOT SINCE 1930');
    continue;

  }
  if (isUppercase(userinput)) {
    print('NO, NOT SINCE 1930');
  }
  else {
    print('HUH?! SPEAK UP, SONNY!');
  }
}
