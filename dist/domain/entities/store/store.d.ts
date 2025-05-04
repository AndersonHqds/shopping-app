import { Address } from "../address";
import { AggregateRoot } from "../aggregate-root.abstract";
import { StoreId } from "./store-id";
export default class Store extends AggregateRoot<StoreId> {
    readonly id: StoreId;
    readonly name: string;
    readonly description: string;
    readonly phone: string;
    readonly cnpj: string;
    readonly address: Address;
    readonly picture: string;
    readonly createdAt: number;
    readonly deletedAt: number;
    updatedAt: number;
    private constructor();
    static newStore(name: string, description: string, phone: string, cnpj: string, address: Address): Store;
    static with(id: StoreId, name: string, description: string, phone: string, cnpj: string, address: Address, picture: string, createdAt: number, updatedAt: number, deletedAt: number): Store;
    validate(handler?: any): void;
    setUpdatedAt(date: number): void;
    private isValidCNPJ;
}
