import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";

var Rocket = /** @class */ (function (){
    function Rocket(name: string, totalCapacity: number) {
        this.name = name;
        this.totalCapacity = totalCapacity;
        this.cargoItems;
        this.astronauts;
    };

    this.sumMass = function( items: Payload[] ): number {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };

    this.currentMassKg = () => {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };

    this.canAdd = function (item: Payload): boolean {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    };

    this.addCargo = function (cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    };

    this.addAstronaut= function (astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    };
});