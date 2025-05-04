import CreateStoreUseCase from './application/usecases/create-store';
import Store from './domain/entities/store/store';
import CreateStoreDto from './infrastructure/dtos/create-store.dto';
import ListStoresUsecase from './application/usecases/list-stores';
import UpdateStoreDTO from './infrastructure/dtos/update-store.dto';
import UpdateStoreUseCase from './application/usecases/update-store';
import UploadPictureUseCase from './application/usecases/upload-picture';
export declare class AppController {
    private readonly createStoreUseCase;
    private readonly listStoreUseCase;
    private readonly updateStoreUseCase;
    private readonly uploadPictureUsecase;
    constructor(createStoreUseCase: CreateStoreUseCase, listStoreUseCase: ListStoresUsecase, updateStoreUseCase: UpdateStoreUseCase, uploadPictureUsecase: UploadPictureUseCase);
    createStore(input: CreateStoreDto): Promise<void>;
    listStores(): Promise<Store[]>;
    updateStores(input: UpdateStoreDTO, id: string): Promise<Store>;
    uploadPicture(file: Express.Multer.File, id: string): Promise<void>;
}
