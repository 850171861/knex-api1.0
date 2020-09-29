exports.up = async (knex) => {
  await knex.schema.dropTableIfExists('campus')
  await knex.schema.dropTableIfExists('evalution_forms')
  await knex.schema.dropTableIfExists('evalution_reports')
  await knex.schema.dropTableIfExists('evalutions')
  await knex.schema.dropTableIfExists('everyday')
  await knex.schema.dropTableIfExists('online_courses')
  await knex.schema.dropTableIfExists('school_dashboards')
  await knex.schema.renameTable('schooluser_classes', 'schoolusers_classes')
  await knex.schema.renameTable('schooluser_courses', 'schoolusers_courses')
  await knex.schema.dropTableIfExists('schoolyears')
  await knex.schema.dropTableIfExists('users_online_courses')
  await knex.schema.dropTableIfExists('users_trophies')
}

exports.down = async (knex) => {

}
