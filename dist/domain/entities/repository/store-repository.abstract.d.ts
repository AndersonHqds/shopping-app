import UpdateStoreDto from "../dto/update-store.dto";
import Store from "../store/store";
export declare abstract class StoreRepositoryAbstract {
    abstract save(store: Store): Promise<void>;
    abstract list(): Promise<Store[]>;
    abstract update(store: UpdateStoreDto): Promise<Store>;
    abstract uploadPicture(picture: any, storeId: string): Promise<string>;
    abstract updatePicture(pictureUrl: string, storeId: string): Promise<void>;
}
