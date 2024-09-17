//Variables

let xp = 0;
let energy = 150;
let gold = 100;
let gemstoneUnlocked = false;

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const description = document.querySelector("#description");
const energyText = document.getElementById("energyText");
const goldText = document.getElementById("goldText");
const xpText = document.getElementById("xpText");

const buttons = [
    {
        name: "Explore Planets",
        btnText: []
    }, {
        name: "Upgrade Spaceship",
    }, {
        name: "Visit Spaceport",
    }
]

//Create objects for Planets (name, gold, xp reward, xp req, metal, energy cost, description)
//Add button functions later

const planets = [
    {
        name: "Planet Alpha",
        gold: 30,
        metal: 10,
        xpReward: 50,
        hasGemstone: 0,
        energyCost: 10,
        xpRequirement: 0,
        description: "You come across a barren planet covered in red dust. It seems empty here and the atmosphere is oddly still. What would you like to do?",
    },
    {
        name: "Planet Beta",
        gold: 50,
        metal: 30,
        xpReward: 30,
        hasGemstone: 0,
        energyCost: 10,
        xpRequirement: 0,
        description: "You come across a blue planet that vaguely resembles your home, Earth. There's no water, but an unknown liquid seeps into the dirt. What would you like to do?",
    }
]

function updateStats() {
    energyText.innerText = `Energy: ${energy}`;
    goldText.innerText = `Gold: ${gold}`;
    xpText.innerText = `Energy: ${energy}`;
}