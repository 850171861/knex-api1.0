
exports.up = async (knex) => {
  await knex.schema.table('notifications', function (table) {
    // 對應的 label ids
    table.string('label_ids')
  })
  await knex.schema.table('classes', function (table) {
    // 對應的 label ids
    table.string('label_ids')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('notifications', function (table) {
    table.dropColumn('label_ids')
  })
  await knex.schema.table('classes', function (table) {
    table.dropColumn('label_ids')
  })
}
