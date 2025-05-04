import { Entity } from "./entity.abstract";
import { Identifier } from "./identifer.abstract";
export declare abstract class AggregateRoot<ID extends Identifier> extends Entity<ID> {
    protected constructor(id: Identifier);
}
