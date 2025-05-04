import { Address } from "../address";
import { AggregateRoot } from "../aggregate-root.abstract";
import { StoreId } from "./store-id";

export default class Store extends AggregateRoot<StoreId> {

    updatedAt: number;

    private constructor(
        readonly id: StoreId,
        readonly name: string, 
        readonly description: string,
        readonly phone: string, 
        readonly cnpj: string,
        readonly address: Address,
        readonly picture: string = null,
        readonly createdAt: number,
        updatedAt: number,
        readonly deletedAt: number,
    ) {
        super(id);
        this.updatedAt = updatedAt;
    }

    public static newStore(name: string, description: string, phone: string, cnpj: string, address: Address): Store {
        const id = StoreId.unique();
        const now = Date.now();

        return new Store(id, name, description, phone, cnpj, address, null, now, now, null);
    }

    public static with(id: StoreId, name: string, description: string, phone: string, cnpj: string, address: Address, picture: string, createdAt: number, updatedAt: number, deletedAt: number) {
        return new Store(id, name, description, phone, cnpj, address, picture, createdAt, updatedAt, deletedAt)
    }

    public validate(handler?: any): void {
        if (!this.isValidCNPJ(this.cnpj)) {
            throw new Error("CNPJ is invalid");
        }

        if (!this.phone) {
            throw new Error("phone should be provided")
        }

        if (!this.address.city || !this.address.country || !this.address.district || !this.address.number || !this.address.state || !this.address.street) {
            throw new Error("address is missing some information")
        }

        if (!this.name) {
            throw new Error("the store name should be provided");
        }
    }

    public setUpdatedAt(date: number): void {
        this.updatedAt = date;
    }
    

    private isValidCNPJ(cnpj: string | null | undefined): boolean {
        if (!cnpj) return false;
      
        const cleaned = cnpj.replace(/[^\d]+/g, '');
      
        if (cleaned.length !== 14) return false;
      
        if (/^(\d)\1+$/.test(cleaned)) return false;
      
        const calculateDigit = (base: string, weights: number[]): number => {
          const sum = base
            .split('')
            .map((num, idx) => parseInt(num, 10) * weights[idx])
            .reduce((acc, curr) => acc + curr, 0);
      
          const remainder = sum % 11;
          return remainder < 2 ? 0 : 11 - remainder;
        };
      
        const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
      
        const base = cleaned.substring(0, 12);
        const digit1 = calculateDigit(base, weights1);
        const digit2 = calculateDigit(base + digit1, weights2);
      
        const checkDigits = cleaned.substring(12);
      
        return checkDigits === `${digit1}${digit2}`;
      }
}