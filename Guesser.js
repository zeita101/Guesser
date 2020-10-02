function letterGuesser(){
  let alphabet = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
let randomIndex = Math.floor(Math.random()* alphabet.length);

let userGuess = prompt(`Your letter is ${alphabet[randomIndex]}. Guess the index.`)

if (!isNaN(parseInt(userGuess)) ){
  checkGuess(userGuess, randomIndex);
}else {
  userGuess = prompt(`You did not enter a number. Please try again.`)
    checkGuess(userGuess, randomIndex);

}

}
function checkGuess(userGuess, randomIndex) {

  if (userGuess == randomIndex) {
    alert("You are a genius at the alphabet!")
  }else {
    alert(`You need to learn the alphabet! The answer is ${randomIndex}`)
  }
}
letterGuesser();
// for (i=0; i<26; i++) {
// // if(answer == guess){
// // alert("");
// // break;
// // }else{
// // guess = promt("");
// // }
// // }

// const random = Math.floor(Math.random() * alphabet.length);
// console.log(random, alphabet[random]);
