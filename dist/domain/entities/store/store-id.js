"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreId = void 0;
const identifer_abstract_1 = require("../identifer.abstract");
const crypto_1 = require("crypto");
class StoreId extends identifer_abstract_1.Identifier {
    constructor(value) {
        if (!value) {
            throw new Error("value should be provided");
        }
        super();
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    static unique() {
        return new StoreId((0, crypto_1.randomUUID)());
    }
    static fromString(id) {
        return new StoreId(id);
    }
}
exports.StoreId = StoreId;
//# sourceMappingURL=store-id.js.map