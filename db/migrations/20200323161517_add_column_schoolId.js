
exports.up = async (knex) => {
  await knex.schema.table('evalution_forms', function (table) {
    // 學校的 id
    table.string('school_id')
  })
  await knex.schema.table('evalution_reports', function (table) {
    // 學校的 id
    table.string('school_id')
  })
}

exports.down = async (knex) => {

}
