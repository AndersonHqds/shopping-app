/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable("stores", {
        id: { type: "uuid", primaryKey: true, default: pgm.func("gen_random_uuid()") },
        name: { type: "varchar(255)", notNull: true },
        phone: { type: "varchar(255)", notNull: true },
        street: { type: "varchar(255)", notNull: true },
        address_number: { type: "integer", notNull: true },
        district: { type: "varchar(255)", notNull: true },
        city: { type: "varchar(255)", notNull: true },
        state: { type: "varchar(255)", notNull: true },
        cep: { type: "varchar(255)", notNull: true },
        country: { type: "varchar(255)", notNull: true },
        cnpj: { type: "varchar(255)", notNull: true },
        picture: { type: "varchar(255)", notNull: false },
        description: { type: "text", notNull: false },
        created_at: { type: "timestamp", notNull: true, default: pgm.func("now()") },
        updated_at: { type: "timestamp", notNull: true, default: pgm.func("now()") },
        deleted_at: { type: "timestamp", notNull: false },
    })
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
    pgm.dropTable("store");
};
