export class Address {
    constructor (
        readonly street: string,
        readonly cep: string,
        readonly number: number,
        readonly district: string,
        readonly city: string,
        readonly state: string,
        readonly country: string
    ) {
        if (typeof number !== "number") {
            throw new Error("param number should be a number")
        }
    }
}