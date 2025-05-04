import { Module } from "@nestjs/common";
import { StoreRepositoryAbstract } from "src/domain/entities/repository/store-repository.abstract";
import CreateStoreUseCase from "src/application/usecases/create-store";
import { RepositoryModule } from "./repository.module";
import ListStoresUsecase from "src/application/usecases/list-stores";
import UpdateStoreUseCase from "src/application/usecases/update-store";
import UploadPictureUseCase from "src/application/usecases/upload-picture";

@Module({
    imports: [RepositoryModule],
    providers: [
        {
            provide: CreateStoreUseCase,
            useFactory: (repo: StoreRepositoryAbstract) => {
                return new CreateStoreUseCase(repo);
            },
            inject: [StoreRepositoryAbstract]
        },
        {
            provide: ListStoresUsecase,
            useFactory: (repo: StoreRepositoryAbstract) => {
                return new ListStoresUsecase(repo);
            },
            inject: [StoreRepositoryAbstract]
        },
        {
            provide: UpdateStoreUseCase,
            useFactory: (repo: StoreRepositoryAbstract) => {
                return new UpdateStoreUseCase(repo);
            },
            inject: [StoreRepositoryAbstract]
        },
        {
            provide: UploadPictureUseCase,
            useFactory: (repo: StoreRepositoryAbstract) => {
                return new UploadPictureUseCase(repo);
            },
            inject: [StoreRepositoryAbstract]
        }
    ],
    exports: [CreateStoreUseCase, ListStoresUsecase, UpdateStoreUseCase, UploadPictureUseCase]
})

export class UseCaseModule {};