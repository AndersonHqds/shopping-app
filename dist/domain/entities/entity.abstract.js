"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    constructor(id) {
        this.id = id;
        if (!id) {
            throw new Error("id should be provided");
        }
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.abstract.js.map