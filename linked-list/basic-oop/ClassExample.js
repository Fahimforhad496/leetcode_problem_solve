class Animal {
    species;
    legs;
    sound;
    type;
    description;

    constructor(species, legs, sound, type, description) {
        this.species = species;
        this.legs = legs;
        this.sound = sound;
        this.type = type;
        this.description = description;
    }
    sleep() {
        return `The ${this.species} is sleeping. zzzzz`;
    }
    eat() {
        return `The ${this.species} is eating. Nom! Nom! Nom`;
    }
    info(key) {
        if (key === "legs") {
            return `The ${this.species} has ${this.legs} legs.`;
        }
        if (key === "sound") {
            return `The ${this.species} sounds like ${this.sound}.`;
        }
        return `Description of ${this.species}: ${this.description}`;
    }
}
const cow = new Animal(
    "Cow",
    4,
    "Moooooooooooooooo",
    "Domestic",
    "The life of a cow in a human world is quite a sad story. Let's not discuss this."
);
const findingLegs = cow.info("sound");
console.log(findingLegs);
console.log(cow.info("dunno"));
console.log(cow.sleep());
