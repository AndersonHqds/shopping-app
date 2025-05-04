import { Module } from "@nestjs/common";
import { StoreRepositoryAbstract } from "src/domain/entities/repository/store-repository.abstract";
import { StoreRepository } from "./repository/store-repository";
import { DatabaseModule } from "./database.module";

@Module({
    imports: [DatabaseModule],
    providers: [
        {
            provide: StoreRepositoryAbstract,
            useClass: StoreRepository,
        }
    ],
    exports: [StoreRepositoryAbstract]
})

export class RepositoryModule {};