import { Module } from "@nestjs/common";
import { Connection } from "./database/connection";
import PgPromiseAdapter from "./database/pg-promise-adapter";

@Module({
    providers: [
        {
            provide: Connection,
            useClass: PgPromiseAdapter,
        }
    ],
    exports: [Connection]
})

export class DatabaseModule {}