import { Identifier } from "./identifer.abstract";
export declare abstract class Entity<ID extends Identifier> {
    readonly id: Identifier;
    protected constructor(id: Identifier);
    abstract validate(handler?: any): void;
}
