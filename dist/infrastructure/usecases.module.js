"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseModule = void 0;
const common_1 = require("@nestjs/common");
const store_repository_abstract_1 = require("../domain/entities/repository/store-repository.abstract");
const create_store_1 = require("../application/usecases/create-store");
const repository_module_1 = require("./repository.module");
const list_stores_1 = require("../application/usecases/list-stores");
const update_store_1 = require("../application/usecases/update-store");
const upload_picture_1 = require("../application/usecases/upload-picture");
let UseCaseModule = class UseCaseModule {
};
exports.UseCaseModule = UseCaseModule;
exports.UseCaseModule = UseCaseModule = __decorate([
    (0, common_1.Module)({
        imports: [repository_module_1.RepositoryModule],
        providers: [
            {
                provide: create_store_1.default,
                useFactory: (repo) => {
                    return new create_store_1.default(repo);
                },
                inject: [store_repository_abstract_1.StoreRepositoryAbstract]
            },
            {
                provide: list_stores_1.default,
                useFactory: (repo) => {
                    return new list_stores_1.default(repo);
                },
                inject: [store_repository_abstract_1.StoreRepositoryAbstract]
            },
            {
                provide: update_store_1.default,
                useFactory: (repo) => {
                    return new update_store_1.default(repo);
                },
                inject: [store_repository_abstract_1.StoreRepositoryAbstract]
            },
            {
                provide: upload_picture_1.default,
                useFactory: (repo) => {
                    return new upload_picture_1.default(repo);
                },
                inject: [store_repository_abstract_1.StoreRepositoryAbstract]
            }
        ],
        exports: [create_store_1.default, list_stores_1.default, update_store_1.default, upload_picture_1.default]
    })
], UseCaseModule);
;
//# sourceMappingURL=usecases.module.js.map