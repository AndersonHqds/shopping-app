import { Identifier } from "../identifer.abstract";
export declare class StoreId extends Identifier {
    readonly value: string;
    private constructor();
    getValue(): string;
    static unique(): StoreId;
    static fromString(id: string): StoreId;
}
