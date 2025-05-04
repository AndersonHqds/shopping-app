import { StoreRepositoryAbstract } from "src/domain/entities/repository/store-repository.abstract";
export default class UploadPictureUseCase {
    private readonly storeRepository;
    constructor(storeRepository: StoreRepositoryAbstract);
    execute(picture: object, storeId: string): Promise<void>;
}
