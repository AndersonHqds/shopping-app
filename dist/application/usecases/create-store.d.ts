import { StoreRepositoryAbstract } from "src/domain/entities/repository/store-repository.abstract";
import Store from "src/domain/entities/store/store";
export default class CreateStoreUseCase {
    readonly storeRepository: StoreRepositoryAbstract;
    constructor(storeRepository: StoreRepositoryAbstract);
    execute(store: Store): Promise<void>;
}
