import { Address } from "src/domain/entities/address";
import { StoreRepositoryAbstract } from "src/domain/entities/repository/store-repository.abstract";
import Store from "src/domain/entities/store/store";
import { StoreId } from "src/domain/entities/store/store-id";

export default class UpdateStoreUseCase {
    constructor(private readonly storeRepository: StoreRepositoryAbstract) {}

    async execute(input: Input): Promise<Store> {
        return this.storeRepository.update({
            address: input.address,
            deletedAt: null,
            description: input.description,
            id: StoreId.fromString(input.id),
            name: input.name,
            phone: input.phone,
            updatedAt: Date.now()
        });
    }
}

type Input = {
    id: string;
    name: string;
    description: string;
    phone: string;
    cnpj: string;
    address: Address;
}