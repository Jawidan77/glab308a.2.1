// Part 1: Initial adventurer object
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"]
    }
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
};

// Example: Accessing Robin's inventory and rolling dice
console.log(adventurer.inventory);  // ["sword", "potion", "artifact"]
adventurer.roll();  // Random dice roll

// Part 2: Character class
class Character {
  static MAX_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = Character.MAX_HEALTH;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

// Re-creating Robin, Leo, and Frank using the Character class
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Part 3 and Part 4: Adventurer class with role validation and static properties
class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard", "Rogue"];

  constructor(name, role) {
    super(name);
    if (!Adventurer.ROLES.includes(role)) {
      throw new Error(`Invalid role: ${role}. Choose from: ${Adventurer.ROLES.join(", ")}`);
    }
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    this.roll();
  }
}

// Creating Robin as an Adventurer
const adventurerRobin = new Adventurer("Robin", "Fighter");
adventurerRobin.inventory.push("sword", "potion", "artifact");
console.log(adventurerRobin);
adventurerRobin.scout();  // Robin scouts ahead and rolls dice

// Example: Creating an adventurer with an invalid role (will throw an error)
try {
  const adventurerSam = new Adventurer("Sam", "Rogue");  // This will throw an error
} catch (error) {
  console.error(error.message);  // Output: Invalid role: Rogue. Choose from: Fighter, Healer, Wizard
}