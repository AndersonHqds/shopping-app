import { Address } from "src/domain/entities/address";

export default class UpdateStoreDTO {
    name: string;
    description: string;
    phone: string;
    cnpj: string;
    address: Address;
}