exports.up = async (knex) => {
  await knex.schema.table('attendance_rules', async table => {
    table.specificType('cls_ids', 'text[]')
    table.specificType('schooluser_ids', 'text[]')
    table.boolean('is_exempt')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('attendance_rules', function (table) {
    table.dropColumn('cls_ids')
    table.dropColumn('schooluser_ids')
    table.dropColumn('is_exempt')
  })
}
