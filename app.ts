#! /usr/bin/env node
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name:string) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 50;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name:string) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
import inquirer from "inquirer";
let player = await inquirer.prompt([{
        type: "input",
        name: "name",
        message: "WELCOME TO THE LEGENDS GAME PLEASE ENTER UR NAME: "
    }]);
let opponent = await inquirer.prompt([{
        name: "select",
        type: "list",
        message: "CHOOSE YOUR OPPONENT",
        choices: ["ASSASSIN (easy)", "DRIGION (medium)", "KING COBRA (insane)"]
    }]);
let p1 = new Player(player.name);
let O1 = new Opponent(opponent.select);
do {
    if (opponent.select == "ASSASSIN (easy)") {
        let ask = await inquirer.prompt([{
                type: "list",
                name: "opt",
                message: "SELECT THE ACTION",
                choices: ["ATTACK", "HEAL", "RUN FOR UR LIFE"]
            }]);
        if (ask.opt == "ATTACK") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${O1.name} fuel is ${O1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("YOU LOSS BETTER LUCK NEXT TIME"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(chalk.bold.red(`${O1.name} fuel is ${O1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (O1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("YOU WIN"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "HEAL") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`YOU DRINK HEAL PORTION UR FEUL IS ${p1.fuel}`));
        }
        if (ask.opt == "RUN FOR UR LIFE") {
            console.log(chalk.red.bold.italic("YOU LOSS BETTER LUCK NEXT TIME"));
            process.exit();
        }
    }
    if (opponent.select == "DRIGION (medium)") {
        let ask = await inquirer.prompt([{
                type: "list",
                name: "opt",
                message: "SELECT THE ACTION",
                choices: ["ATTACK", "HEAL", "RUN FOR UR LIFE"]
            }]);
        if (ask.opt == "ATTACK") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${O1.name} fuel is ${O1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("YOU LOSS BETTER LUCK NEXT TIME"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(chalk.bold.red(`${O1.name} fuel is ${O1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (O1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("YOU WIN"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "HEAL") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`YOU DRINK HEAL PORTION UR FEUL IS ${p1.fuel}`));
        }
        if (ask.opt == "RUN FOR UR LIFE") {
            console.log(chalk.red.bold.italic("YOU LOSS BETTER LUCK NEXT TIME"));
            process.exit();
        }
    }
    if (opponent.select === "KING COBRA (insane)") {
        let ask = await inquirer.prompt([{
                type: "list",
                name: "opt",
                message: "SELECT THE ACTION",
                choices: ["ATTACK", "HEAL", "RUN FOR UR LIFE"]
            }]);
        if (ask.opt == "ATTACK") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${O1.name} fuel is ${O1.fuel}`));
            }
            if (p1.fuel <= 0) {
                console.log(chalk.red.bold.italic("YOU LOSS BETTER LUCK NEXT TIME"));
                process.exit();
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(chalk.bold.red(`${O1.name} fuel is ${O1.fuel}`));
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                if (O1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("YOU WIN"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "HEAL") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`YOU DRINK HEAL PORTION UR FEUL IS ${p1.fuel}`));
        }
        if (ask.opt == "RUN FOR UR LIFE") {
            console.log(chalk.red.bold.italic("YOU LOSS BETTER LUCK NEXT TIME"));
            process.exit();
        }
    }
} while (true);
