export abstract class Connection {
    abstract query(statement: string, params: any): Promise<any>;
    abstract close(): Promise<void>;
}