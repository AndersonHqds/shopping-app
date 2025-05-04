import * as pgPromise from "pg-promise";
import { Connection } from "./connection";
import { Injectable } from "@nestjs/common";

export default class PgPromiseAdapter implements Connection  {

    connection: any;

    constructor() {
        console.log(pgPromise);
        this.connection = pgPromise()("postgres://postgres:123456@localhost:5432/app")
    }

    query(statement: string, params: any): Promise<any> {
        return this.connection.query(statement, params);
    }
    
    close(): Promise<void> {
        return this.connection.$pool.end();
    }
}