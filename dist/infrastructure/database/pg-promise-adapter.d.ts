import { Connection } from "./connection";
export default class PgPromiseAdapter implements Connection {
    connection: any;
    constructor();
    query(statement: string, params: any): Promise<any>;
    close(): Promise<void>;
}
