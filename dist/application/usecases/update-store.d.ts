import { Address } from "src/domain/entities/address";
import { StoreRepositoryAbstract } from "src/domain/entities/repository/store-repository.abstract";
import Store from "src/domain/entities/store/store";
export default class UpdateStoreUseCase {
    private readonly storeRepository;
    constructor(storeRepository: StoreRepositoryAbstract);
    execute(input: Input): Promise<Store>;
}
type Input = {
    id: string;
    name: string;
    description: string;
    phone: string;
    cnpj: string;
    address: Address;
};
export {};
