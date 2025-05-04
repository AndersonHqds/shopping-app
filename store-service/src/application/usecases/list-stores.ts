import { StoreRepositoryAbstract } from "src/domain/entities/repository/store-repository.abstract"

export default class ListStoresUsecase {
    constructor(private readonly storeRepository: StoreRepositoryAbstract) {}

    async execute() {
       return this.storeRepository.list();
    }
}