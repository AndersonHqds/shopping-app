"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pgPromise = require("pg-promise");
class PgPromiseAdapter {
    constructor() {
        console.log(pgPromise);
        this.connection = pgPromise()("postgres://postgres:123456@localhost:5432/app");
    }
    query(statement, params) {
        return this.connection.query(statement, params);
    }
    close() {
        return this.connection.$pool.end();
    }
}
exports.default = PgPromiseAdapter;
//# sourceMappingURL=pg-promise-adapter.js.map