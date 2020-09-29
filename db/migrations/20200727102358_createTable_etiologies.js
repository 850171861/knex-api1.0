
exports.up = async (knex) => {
  await knex.schema.createTable('etiologies', function (table) {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
    table.timestamp('modified_at')
    table.timestamp('deleted_at')
    table.increments('seq_id')

    // 病因名稱
    table.string('name')
    // 病因英文名稱
    table.string('english_name')
    // 病因所屬學校id
    table.string('school_id')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('etiologies')
}
