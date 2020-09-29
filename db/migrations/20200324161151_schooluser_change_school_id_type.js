exports.up = async (knex) => {
  return knex.schema.table('schoolusers', table => {
    table.dropColumn('school_id')
    // school ids
    table.specificType('school_ids', 'text[]')
  })
}

exports.down = async (knex) => {

}
