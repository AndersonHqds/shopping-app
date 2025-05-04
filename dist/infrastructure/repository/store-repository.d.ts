import { StoreRepositoryAbstract } from "src/domain/entities/repository/store-repository.abstract";
import Store from "src/domain/entities/store/store";
import { Connection } from "../database/connection";
import UpdateStoreDto from "src/domain/entities/dto/update-store.dto";
export declare class StoreRepository implements StoreRepositoryAbstract {
    private readonly connection;
    constructor(connection: Connection);
    save(store: Store): Promise<void>;
    list(): Promise<Store[]>;
    update(store: UpdateStoreDto): Promise<Store>;
    uploadPicture(picture: any, storeId: string): Promise<string>;
    updatePicture(pictureUrl: string, storeId: string): Promise<void>;
}
