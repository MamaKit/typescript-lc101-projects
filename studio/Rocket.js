"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    var _this = this;
    function Rocket(name, totalCapacity) {
        this.name = name;
        this.totalCapacity = totalCapacity;
        this.cargoItems;
        this.astronauts;
    }
    ;
    this.sumMass = function (items) {
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    this.currentMassKg = function () {
        return _this.sumMass(_this.astronauts) + _this.sumMass(_this.cargoItems);
    };
    this.canAdd = function (item) {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    };
    this.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    this.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
});
