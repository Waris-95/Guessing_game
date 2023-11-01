const readline = require('readline');
const chalk = require('chalk');

const figlet = require('figlet');
const player = require('play-sound')();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// ASCII Art and Welcome
console.log(
    chalk.yellow(
        figlet.textSync('Number Guesser', { horizontalLayout: 'full' })
    )
);

console.log(chalk.green('Guess a number between 1 and 100!'));

const askQuestion = () => {
    rl.question(chalk.cyan('Your guess: '), (answer) => {
        const userGuess = parseInt(answer, 10);

        if (isNaN(userGuess)) {
            console.log(chalk.red('Please enter a valid number.'));
            return askQuestion();
        }

        attempts++;

        if (userGuess < randomNumber) {
            console.log(chalk.magenta('Too low!'));
            return askQuestion();
        } else if (userGuess > randomNumber) {
            console.log(chalk.magenta('Too high!'));
            return askQuestion();
        } else {
            console.log(chalk.green(`Correct! The number was ${randomNumber}.`));
            console.log(chalk.blue(`You guessed it in ${attempts} attempts.`));
            // Play a victory sound (assuming you have victory.mp3 in the same directory)
            const path = require('path');
            const soundPath = path.join(__dirname, 'victory.mp3');
            player.play(soundPath, (err) => {
});
            rl.close();
        }
    });
};

askQuestion();


