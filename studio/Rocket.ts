import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

export class Rocket implements Payload {
    name: string;
    totalCapacity: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    massKg: number;

    constructor (name: string, totalCapacity: number) {
        this.name = name;
        this.totalCapacity = totalCapacity;
    };

    sumMass ( items: Payload[] ): number {
        let sum: number = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };

    currentMassKg() {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };

    canAdd (item: Payload): boolean {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacity;
    };

    addCargo (cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    };

    addAstronaut (astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    };
}