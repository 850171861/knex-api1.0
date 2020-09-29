exports.up = async (knex) => {
  await knex.schema.table('schoolusers', function (table) {
    // 是否是監護人
    table.boolean('is_guardian').defaultTo(false)
    // 監護人的孩子id，複數
    table.specificType('children_ids', 'text[]')
  })
}

exports.down = async (knex) => {
  await knex.schema.table('schoolusers', function (table) {
    table.dropColumn('is_guardian')
    table.dropColumn('children_ids')
  })
}
