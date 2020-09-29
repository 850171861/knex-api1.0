exports.up = async (knex) => {
  return knex.schema.table('schoolusers', table => {
    table.dropColumn('school_ids')
    // school ids
    table.string('school_id')
  })
}

exports.down = async (knex) => {

}
