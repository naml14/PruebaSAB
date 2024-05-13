/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('usuario').then((exists) => {
    if (!exists) {
      return knex.schema.createTable("usuario", function (table) {
        table.increments("usuario_id").primary();
        table.string("nombre").notNullable();
        table.string("apellido").notNullable();
        table.string("email").notNullable();
        table.specificType('dni', 'bigint').notNullable();
      });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
