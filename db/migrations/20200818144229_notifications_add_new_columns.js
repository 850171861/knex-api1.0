
exports.up = async (knex) => {
  await knex.schema.table('notifications', function (table) {
    // 給全校老師
    table.boolean('is_all_teachers').defaultTo(false)
    // 給全校學生
    table.boolean('is_all_students').defaultTo(false)

    // 給學生本人
    table.boolean('is_to_students').defaultTo(false)
    // 給學生家長
    table.boolean('is_to_guardians').defaultTo(false)
  })
}

exports.down = async (knex) => {
  await knex.schema.table('notifications', function (table) {
    table.dropColumn('is_all_teachers')
    table.dropColumn('is_all_students')
    table.dropColumn('is_to_students')
    table.dropColumn('is_to_guardian')
  })
}
