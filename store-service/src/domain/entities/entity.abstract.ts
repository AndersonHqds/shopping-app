import { Identifier } from "./identifer.abstract";

export abstract class Entity<ID extends Identifier> {

    protected constructor (readonly id: Identifier) {
        if (!id) {
            throw new Error("id should be provided");
        }
    }

    public abstract validate(handler?: any): void;

}