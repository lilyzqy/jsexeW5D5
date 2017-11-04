class Game{
  constructor(){
    this.stacks = new Array;
  }

  promptMove(cb){
    console.log(this.stacks);
    reader.question("Move from which stack?",(firstanswer)=>{
      this.fromStackIdx = parseInt(firstanswer,10);
      reader.question("Move to which stack?",(secondanswer)=>{
        this.toStackIdx = parseInt(secondanswer,10);
        cb(firstanswer,secondanswer);
      });
    });
  }

  isValidMove(fromStackIdx, toStackIdx) {
    const fromStack = this.stacks[fromStackIdx];
    const toStack = this.stacks[toStackIdx];
    if (fromStack[fromStack.length - 1] > toStack[toStack.length - 1]) {
      return false;
    } else if (fromStack.length === 0) {
      return false;
    } else {
      return true;
    }
  }

}

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
