"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const create_store_1 = require("./application/usecases/create-store");
const store_1 = require("./domain/entities/store/store");
const create_store_dto_1 = require("./infrastructure/dtos/create-store.dto");
const list_stores_1 = require("./application/usecases/list-stores");
const update_store_dto_1 = require("./infrastructure/dtos/update-store.dto");
const update_store_1 = require("./application/usecases/update-store");
const platform_express_1 = require("@nestjs/platform-express");
const upload_picture_1 = require("./application/usecases/upload-picture");
let AppController = class AppController {
    constructor(createStoreUseCase, listStoreUseCase, updateStoreUseCase, uploadPictureUsecase) {
        this.createStoreUseCase = createStoreUseCase;
        this.listStoreUseCase = listStoreUseCase;
        this.updateStoreUseCase = updateStoreUseCase;
        this.uploadPictureUsecase = uploadPictureUsecase;
    }
    async createStore(input) {
        console.log({ input });
        const store = store_1.default.newStore(input.name, input.description, input.phone, input.cnpj, input.address);
        return this.createStoreUseCase.execute(store);
    }
    async listStores() {
        return this.listStoreUseCase.execute();
    }
    async updateStores(input, id) {
        return this.updateStoreUseCase.execute({ ...input, id });
    }
    async uploadPicture(file, id) {
        console.log(file);
        return this.uploadPictureUsecase.execute(file, id);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)("/"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_store_dto_1.default]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createStore", null);
__decorate([
    (0, common_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "listStores", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_store_dto_1.default, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateStores", null);
__decorate([
    (0, common_1.Post)("/:id/picture/upload"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "uploadPicture", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('store'),
    __metadata("design:paramtypes", [create_store_1.default,
        list_stores_1.default,
        update_store_1.default,
        upload_picture_1.default])
], AppController);
//# sourceMappingURL=app.controller.js.map