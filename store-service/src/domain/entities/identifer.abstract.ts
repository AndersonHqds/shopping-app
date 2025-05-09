import { ValueObject } from "./value-object.abstract";

export abstract class Identifier extends ValueObject {
    public abstract getValue(): string;
}