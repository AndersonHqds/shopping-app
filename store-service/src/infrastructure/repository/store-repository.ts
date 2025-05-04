import { Injectable } from "@nestjs/common";
import { StoreRepositoryAbstract } from "src/domain/entities/repository/store-repository.abstract";
import Store from "src/domain/entities/store/store";
import { Connection } from "../database/connection";
import { Address } from "src/domain/entities/address";
import UpdateStoreDto from "src/domain/entities/dto/update-store.dto";
import { writeFileSync } from 'fs';
import { join } from 'path';
import { extension } from 'mime-types';


@Injectable()
export class StoreRepository implements StoreRepositoryAbstract {
    constructor(private readonly connection: Connection) {}
    
    async save(store: Store): Promise<void> {
        await this.connection.query(`
            INSERT INTO stores 
                (id, name, phone, street, address_number, district, city, state, cep, country, cnpj, picture, description, created_at, updated_at) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
        `,
            [
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
            ]
        );
    }

    async list(): Promise<Store[]> {
        const storesData = await this.connection.query('SELECT * FROM stores', []);
        if (!storesData) throw new Error("Stores not found");

        const stores: Store[] = storesData.map(storeData => {
            const address = new Address(storeData.street, storeData.cep, storeData.address_number, storeData.district, storeData.city, storeData.state, storeData.country);
            return Store.with( storeData.id, storeData.name, storeData.description, storeData.phone, storeData.cnpj, address, storeData.picture, storeData.created_at, storeData.updated_at, storeData.deleted_at)
        });

        return stores;
    }

    async update(store: UpdateStoreDto): Promise<Store> {
        const [storeUpdated] = await this.connection.query(`
            UPDATE stores SET name = $1, phone = $2, street = $3, address_number = $4, district = $5, city = $6, state = $7, cep = $8, country = $9, description = $10, updated_at = $11 
            WHERE id = $12 RETURNING *`,
            [
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
            ]
        );

        const storeInstance = Store.with(
            storeUpdated.id,
            storeUpdated.name,
            storeUpdated.description,
            storeUpdated.phone,
            storeUpdated.cnpj,
            new Address(storeUpdated.street, storeUpdated.cep, storeUpdated.address_number, storeUpdated.district, storeUpdated.city, storeUpdated.state, storeUpdated.country),
            storeUpdated.picture,
            storeUpdated.created_at, 
            storeUpdated.updated_at, 
            storeUpdated.deleted_at
        );

        storeInstance.setUpdatedAt(storeUpdated.updated_at);

        return storeInstance;
    }

    async uploadPicture(picture: any, storeId: string): Promise<string> {
        const rootDir = process.cwd(); 
        const uploadDir = join(rootDir, 'uploads');
        const ext = extension(picture.mimetype);
        const fileName = `${storeId}.${ext}`;
        const filePath = join(uploadDir, fileName);

        writeFileSync(filePath, picture.buffer);
        return filePath;
    }

    async updatePicture(pictureUrl: string, storeId: string): Promise<void> {
        await this.connection.query(
            "UPDATE stores SET picture = $1 WHERE id = $2",
            [pictureUrl, storeId]
        );
    }
}