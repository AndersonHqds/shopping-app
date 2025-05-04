"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryModule = void 0;
const common_1 = require("@nestjs/common");
const store_repository_abstract_1 = require("../domain/entities/repository/store-repository.abstract");
const store_repository_1 = require("./repository/store-repository");
const database_module_1 = require("./database.module");
let RepositoryModule = class RepositoryModule {
};
exports.RepositoryModule = RepositoryModule;
exports.RepositoryModule = RepositoryModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [
            {
                provide: store_repository_abstract_1.StoreRepositoryAbstract,
                useClass: store_repository_1.StoreRepository,
            }
        ],
        exports: [store_repository_abstract_1.StoreRepositoryAbstract]
    })
], RepositoryModule);
;
//# sourceMappingURL=repository.module.js.map