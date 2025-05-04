import { StoreRepositoryAbstract } from "src/domain/entities/repository/store-repository.abstract";
export default class ListStoresUsecase {
    private readonly storeRepository;
    constructor(storeRepository: StoreRepositoryAbstract);
    execute(): Promise<import("../../domain/entities/store/store").default[]>;
}
