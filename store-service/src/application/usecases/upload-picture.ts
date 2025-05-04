import { StoreRepositoryAbstract } from "src/domain/entities/repository/store-repository.abstract";

export default class UploadPictureUseCase {
    constructor(private readonly storeRepository: StoreRepositoryAbstract) {}

    async execute(picture: object, storeId: string) {
        const url = await this.storeRepository.uploadPicture(picture, storeId);
        await this.storeRepository.updatePicture(url, storeId);
    }
}