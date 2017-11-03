class Clock {
  constructor() {
    // 1. Create a Date object.
    const date = new Date;

    // 2. Store the hours, minutes, and seconds.
    [this.hours, this.minutes, this.seconds] = [date.getHours(), date.getMinutes(),
      date.getSeconds()];

    // 3. Call printTime.
    this.printTime();

    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
    // setInterval(this._tick, 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    // console.log(`this is ${this.constructor.name}`);
    this.seconds++;
    if (this.seconds > 60){
      this.minutes++;
      this.seconds = 0;
    }
    if (this.minutes > 60){
      this.hours++;
      this.minutes = 0;
    }
    // 2. Call printTime.
    this.printTime();
  }
}

// const clock = new Clock();

//// addNumbers

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    // reader.question("Please give me a number.", (answer, 10) => { parseInt })
    reader.question("Please give me a number.", function(answer) {
      sum += parseInt(answer, 10);
      console.log(`The partial sum is ${sum}`);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
