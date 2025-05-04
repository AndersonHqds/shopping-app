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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreRepository = void 0;
const common_1 = require("@nestjs/common");
const store_1 = require("../../domain/entities/store/store");
const connection_1 = require("../database/connection");
const address_1 = require("../../domain/entities/address");
const fs_1 = require("fs");
const path_1 = require("path");
const mime_types_1 = require("mime-types");
let StoreRepository = class StoreRepository {
    constructor(connection) {
        this.connection = connection;
    }
    async save(store) {
        await this.connection.query(`
            INSERT INTO stores 
                (id, name, phone, street, address_number, district, city, state, cep, country, cnpj, picture, description, created_at, updated_at) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
        `, [
            store.id.getValue(),
            store.name,
            store.phone,
            store.address.street,
            store.address.number,
            store.address.district,
            store.address.city,
            store.address.state,
            store.address.cep,
            store.address.country,
            store.cnpj,
            store.picture,
            store.description,
            new Date(store.createdAt),
            new Date(store.updatedAt)
        ]);
    }
    async list() {
        const storesData = await this.connection.query('SELECT * FROM stores', []);
        if (!storesData)
            throw new Error("Stores not found");
        const stores = storesData.map(storeData => {
            const address = new address_1.Address(storeData.street, storeData.cep, storeData.address_number, storeData.district, storeData.city, storeData.state, storeData.country);
            return store_1.default.with(storeData.id, storeData.name, storeData.description, storeData.phone, storeData.cnpj, address, storeData.picture, storeData.created_at, storeData.updated_at, storeData.deleted_at);
        });
        return stores;
    }
    async update(store) {
        const [storeUpdated] = await this.connection.query(`
            UPDATE stores SET name = $1, phone = $2, street = $3, address_number = $4, district = $5, city = $6, state = $7, cep = $8, country = $9, description = $10, updated_at = $11 
            WHERE id = $12 RETURNING *`, [
            store.name,
            store.phone,
            store.address.street,
            store.address.number,
            store.address.district,
            store.address.city,
            store.address.state,
            store.address.cep,
            store.address.country,
            store.description,
            new Date(store.updatedAt),
            store.id.getValue()
        ]);
        const storeInstance = store_1.default.with(storeUpdated.id, storeUpdated.name, storeUpdated.description, storeUpdated.phone, storeUpdated.cnpj, new address_1.Address(storeUpdated.street, storeUpdated.cep, storeUpdated.address_number, storeUpdated.district, storeUpdated.city, storeUpdated.state, storeUpdated.country), storeUpdated.picture, storeUpdated.created_at, storeUpdated.updated_at, storeUpdated.deleted_at);
        storeInstance.setUpdatedAt(storeUpdated.updated_at);
        return storeInstance;
    }
    async uploadPicture(picture, storeId) {
        const rootDir = process.cwd();
        const uploadDir = (0, path_1.join)(rootDir, 'uploads');
        const ext = (0, mime_types_1.extension)(picture.mimetype);
        const fileName = `${storeId}.${ext}`;
        const filePath = (0, path_1.join)(uploadDir, fileName);
        (0, fs_1.writeFileSync)(filePath, picture.buffer);
        return filePath;
    }
    async updatePicture(pictureUrl, storeId) {
        await this.connection.query("UPDATE stores SET picture = $1 WHERE id = $2", [pictureUrl, storeId]);
    }
};
exports.StoreRepository = StoreRepository;
exports.StoreRepository = StoreRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [connection_1.Connection])
], StoreRepository);
//# sourceMappingURL=store-repository.js.map