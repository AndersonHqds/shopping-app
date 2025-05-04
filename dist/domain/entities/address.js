"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor(street, cep, number, district, city, state, country) {
        this.street = street;
        this.cep = cep;
        this.number = number;
        this.district = district;
        this.city = city;
        this.state = state;
        this.country = country;
        if (typeof number !== "number") {
            throw new Error("param number should be a number");
        }
    }
}
exports.Address = Address;
//# sourceMappingURL=address.js.map