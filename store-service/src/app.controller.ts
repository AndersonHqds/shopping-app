import { Body, Controller, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import CreateStoreUseCase from './application/usecases/create-store';
import Store from './domain/entities/store/store';
import CreateStoreDto from './infrastructure/dtos/create-store.dto';
import ListStoresUsecase from './application/usecases/list-stores';
import UpdateStoreDTO from './infrastructure/dtos/update-store.dto';
import UpdateStoreUseCase from './application/usecases/update-store';
import { FileInterceptor } from '@nestjs/platform-express';
import UploadPictureUseCase from './application/usecases/upload-picture';

@Controller('store')
export class AppController {
  constructor(
    private readonly createStoreUseCase: CreateStoreUseCase,
    private readonly listStoreUseCase: ListStoresUsecase,
    private readonly updateStoreUseCase: UpdateStoreUseCase,
    private readonly uploadPictureUsecase: UploadPictureUseCase,
  ) {}

  @Post("/")
  async createStore(@Body() input: CreateStoreDto): Promise<void> {
    console.log({ input });
    const store: Store = Store.newStore(input.name, input.description, input.phone, input.cnpj, input.address);
    
    return this.createStoreUseCase.execute(store);
  }

  @Get("/")
  async listStores(): Promise<Store[]> {
    return this.listStoreUseCase.execute();
  }

  @Put("/:id")
  async updateStores(@Body() input: UpdateStoreDTO, @Param('id') id: string): Promise<Store> {
    return this.updateStoreUseCase.execute({ ...input, id });
  }

  @Post("/:id/picture/upload")
  @UseInterceptors(FileInterceptor('file'))
  async uploadPicture(@UploadedFile() file: Express.Multer.File, @Param('id') id: string) {
    console.log(file);
    return this.uploadPictureUsecase.execute(file, id);
  }
}
