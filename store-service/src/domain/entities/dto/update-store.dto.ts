import { Address } from "../address";
import { StoreId } from "../store/store-id"

export default class UpdateStoreDto {
    id: StoreId;
    name: string; 
    description: string;
    phone: string; 
    address: Address;
    updatedAt: number;
    deletedAt: number;
}