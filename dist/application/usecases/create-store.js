"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateStoreUseCase {
    constructor(storeRepository) {
        this.storeRepository = storeRepository;
    }
    async execute(store) {
        store.validate();
        await this.storeRepository.save(store);
    }
}
exports.default = CreateStoreUseCase;
//# sourceMappingURL=create-store.js.map