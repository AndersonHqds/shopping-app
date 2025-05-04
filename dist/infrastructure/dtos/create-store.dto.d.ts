import { Address } from "src/domain/entities/address";
export default class CreateStoreDto {
    name: string;
    description: string;
    phone: string;
    cnpj: string;
    address: Address;
}
