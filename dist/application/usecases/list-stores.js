"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListStoresUsecase {
    constructor(storeRepository) {
        this.storeRepository = storeRepository;
    }
    async execute() {
        return this.storeRepository.list();
    }
}
exports.default = ListStoresUsecase;
//# sourceMappingURL=list-stores.js.map