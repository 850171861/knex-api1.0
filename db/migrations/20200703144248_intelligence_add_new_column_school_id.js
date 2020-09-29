exports.up = async (knex) => {
  await knex.schema.table('intelligences', function (table) {
    table.string('school_id')
  })
}

exports.down = async (knex) => {

}
