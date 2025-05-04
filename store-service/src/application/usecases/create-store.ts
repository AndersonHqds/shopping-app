import { StoreRepositoryAbstract } from "src/domain/entities/repository/store-repository.abstract";
import Store from "src/domain/entities/store/store";

export default class CreateStoreUseCase {
    constructor (readonly storeRepository: StoreRepositoryAbstract) {}

    async execute(store: Store) {
        store.validate();
        await this.storeRepository.save(store);
    }
}