import { Identifier } from "../identifer.abstract";
import { randomUUID } from 'crypto';

export class StoreId extends Identifier {
    private constructor(readonly value: string) {
        if (!value) {
            throw new Error("value should be provided");
        }
        super();
    } 
    
    public getValue(): string {
        return this.value;
    }

    public static unique(): StoreId {
        return new StoreId(randomUUID());
    }

    public static fromString(id: string) {
        return new StoreId(id);
    }
}