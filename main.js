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

const locations = [
    {
        name: "Spaceship",
        gold: 0,
        metal: 0,
        xpReward: 0,
        hasGemstone: 0,
        energyCost: 0,
        xpRequirement: 0,
        buttonText: ["Explore Planets", "Upgrade Spaceship", "Visit Spaceport"],
        buttonFunction: [goPlanets, upgradeShip, goSpaceport],
        description: "You have returned to your spaceship. What would you like to do?"
    }, {
        name: "Spaceport",
        gold: 0,
        xpReward: 0,
        hasGemstone: 0,
        energyCost: 0,
        xpRequirement: 0,
        buttonText: ["Buy Upgrades", "Check Ship Status", "Return"],
        buttonFunction: [buyUpgrade, checkShipStatus, returnShip],
        description: "You have entered the spaceport. Here, you can use the materials you've found to upgrade your spaceship. You can find these materials by exploring planets. What would you like to do?"
    }, {
        //initial planet set
        name: "Planet Alpha",
        gold: 30,
        metal: 10,
        xpReward: 50,
        hasGemstone: 0,
        energyCost: 10,
        xpRequirement: 0,
        description: "You come across a barren planet covered in rust-colored rocks and dust. It's incredibly quiet here and the atmosphere is oddly still. What would you like to do?"
    }, {
        name: "Planet Beta",
        gold: 40,
        metal: 30,
        xpReward: 30,
        hasGemstone: 0,
        energyCost: 10,
        xpRequirement: 0,
        description: "You come across a blue planet that vaguely resembles your home, Earth. There's no water here, but an unknown liquid seeps into the dirt. What would you like to do?"
    }, {
        name: "Planet Gamma",
        gold: 50,
        metal: 20,
        xpReward: 40,
        hasGemstone: 0,
        energyCost: 10,
        xpRequirement: 0,
        description: "You come across a planet covered in glistening ice. The snow-capped mountains looming in the distance are breathtaking, but too dangerous to navigate. What would you like to do?"
    }, {
        //second set
        name: "Planet Delta",
        gold: 40,
        metal: 25,
        xpReward: 40,
        hasGemstone: 3, //30% chance of gemstone appearing
        energyCost: 30,
        xpRequirement: 100,
        description: "You come across a vibrant green planet, but the plant life isn't something you've ever seen before. You notice bioluminescent flora that lights up wherever you step. What would you like to do?"
    }, {
        //second set
        name: "Planet Zeta",
        gold: 80,
        metal: 50,
        xpReward: 50,
        hasGemstone: 3,
        energyCost: 30,
        xpRequirement: 100,
        description: "You come across a metallic planet gleaming from rare minerals. The surface is dotted with bits of gold shining through, reminiscent of the stars above. What would you like to do?"
    }, {
        name: "Planet Omega",
        gold: 60,
        metal: 20,
        xpReward: 35,
        hasGemstone: 3,
        energyCost: 30,
        xpRequirement: 100,
        description: "You come across a planet containing the remnants of a civilization long gone. The ancient buildings are in ruin, making you wonder what happened here. What would you like to do?"
    }, {
        //final planet set - highest chance of gemstone
        name: "Planet Lambda",
        gold: 70,
        metal: 15,
        xpReward: 50,
        hasGemstone: 5,
        energyCost: 50,
        xpRequirement: 200,
        description: "You come across a planet veiled with a humid layer of fog. A thick mass of clouds swirls overhead, and it seems like a storm is coming soon. What would you like to do?"
    }, {
        name: "Planet Echo",
        gold: 90,
        metal: 40,
        xpReward: 30,
        hasGemstone: 5,
        energyCost: 50,
        xpRequirement: 200,
        description: "You come across a planet burning with red lava seeping from a volcano in the distance. The air is heavy with ash and smoke. What would you like to do?"
    }, {
        name: "Planet Nova",
        gold: 40,
        metal: 60,
        xpReward: 50,
        hasGemstone: 5,
        energyCost: 50,
        xpRequirement: 200,
        description: "You come across a lush planet filled with exotic creatures. The air is fragrant with blooming flowers and you see something watching you from within them. What would you like to do?"
    }
]

function updateStats() {
    energyText.innerText = `Energy: ${energy}`;
    goldText.innerText = `Gold: ${gold}`;
    xpText.innerText = `Energy: ${energy}`;
}

//Location Update and Initialize Buttons

function update(locationIndex) {
    const currentLocation = locations[locationIndex];

    //Update Button Text
    btn1.innerText = location[buttonText][0];
    btn2.innerText = location[buttonText][1];
    btn3.innerText = location[buttonText][2];

    //Initialize
    btn1.onclick = location[buttonFunction][0];
    btn2.onclick = location[buttonFunction][1];
    btn3.onclick = location[buttonFunction][2];

    //Update Description
    description.innerHTML = location.text;
}

function initialPlanets() {
    
}