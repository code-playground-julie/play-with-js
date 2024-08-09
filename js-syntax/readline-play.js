import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const askQuestion = () => {
  rl.question("", (command) => {
    console.log(">", command);

    // process.exit();

    askQuestion();
  });
};

askQuestion();

