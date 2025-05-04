"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aggregate_root_abstract_1 = require("../aggregate-root.abstract");
const store_id_1 = require("./store-id");
class Store extends aggregate_root_abstract_1.AggregateRoot {
    constructor(id, name, description, phone, cnpj, address, picture = null, createdAt, updatedAt, deletedAt) {
        super(id);
        this.id = id;
        this.name = name;
        this.description = description;
        this.phone = phone;
        this.cnpj = cnpj;
        this.address = address;
        this.picture = picture;
        this.createdAt = createdAt;
        this.deletedAt = deletedAt;
        this.updatedAt = updatedAt;
    }
    static newStore(name, description, phone, cnpj, address) {
        const id = store_id_1.StoreId.unique();
        const now = Date.now();
        return new Store(id, name, description, phone, cnpj, address, null, now, now, null);
    }
    static with(id, name, description, phone, cnpj, address, picture, createdAt, updatedAt, deletedAt) {
        return new Store(id, name, description, phone, cnpj, address, picture, createdAt, updatedAt, deletedAt);
    }
    validate(handler) {
        if (!this.isValidCNPJ(this.cnpj)) {
            throw new Error("CNPJ is invalid");
        }
        if (!this.phone) {
            throw new Error("phone should be provided");
        }
        if (!this.address.city || !this.address.country || !this.address.district || !this.address.number || !this.address.state || !this.address.street) {
            throw new Error("address is missing some information");
        }
        if (!this.name) {
            throw new Error("the store name should be provided");
        }
    }
    setUpdatedAt(date) {
        this.updatedAt = date;
    }
    isValidCNPJ(cnpj) {
        if (!cnpj)
            return false;
        const cleaned = cnpj.replace(/[^\d]+/g, '');
        if (cleaned.length !== 14)
            return false;
        if (/^(\d)\1+$/.test(cleaned))
            return false;
        const calculateDigit = (base, weights) => {
            const sum = base
                .split('')
                .map((num, idx) => parseInt(num, 10) * weights[idx])
                .reduce((acc, curr) => acc + curr, 0);
            const remainder = sum % 11;
            return remainder < 2 ? 0 : 11 - remainder;
        };
        const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const base = cleaned.substring(0, 12);
        const digit1 = calculateDigit(base, weights1);
        const digit2 = calculateDigit(base + digit1, weights2);
        const checkDigits = cleaned.substring(12);
        return checkDigits === `${digit1}${digit2}`;
    }
}
exports.default = Store;
//# sourceMappingURL=store.js.map