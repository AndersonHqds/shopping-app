"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UploadPictureUseCase {
    constructor(storeRepository) {
        this.storeRepository = storeRepository;
    }
    async execute(picture, storeId) {
        const url = await this.storeRepository.uploadPicture(picture, storeId);
        await this.storeRepository.updatePicture(url, storeId);
    }
}
exports.default = UploadPictureUseCase;
//# sourceMappingURL=upload-picture.js.map