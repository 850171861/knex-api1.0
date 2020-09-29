exports.up = async function (knex) {
  await knex.schema.table('posts', table => {
    table.specificType('cls_ids', 'text[]')
    table.specificType('course_ids', 'text[]')
  })
}

exports.down = async function (knex) {

}
