"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_id_1 = require("../../domain/entities/store/store-id");
class UpdateStoreUseCase {
    constructor(storeRepository) {
        this.storeRepository = storeRepository;
    }
    async execute(input) {
        return this.storeRepository.update({
            address: input.address,
            deletedAt: null,
            description: input.description,
            id: store_id_1.StoreId.fromString(input.id),
            name: input.name,
            phone: input.phone,
            updatedAt: Date.now()
        });
    }
}
exports.default = UpdateStoreUseCase;
//# sourceMappingURL=update-store.js.map