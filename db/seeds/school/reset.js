module.exports = async function (knex) {
  // Deletes ALL existing entries
  // 刪除 schools 所有資料

  await knex('users').del()
  await knex('schools').del()
  await knex('schoolusers').del()
  await knex('schools_dashboards').del()
  await knex('classes').del()
  await knex('courses').del()
  await knex('schoolusers_classes').del()
  await knex('schoolusers_courses').del()
  await knex('assessment_templates').del()
  await knex('assessment_reports').del()
  await knex('assessments').del()
  await knex('schooluser_photos').del()
  await knex('posts').del()
  await knex('post_photos').del()
  await knex('talents').del()
  await knex('intelligences').del()
  await knex('students').del()
  await knex('medical_records').del()
  await knex('special_health_conditions').del()
  await knex('preventives_isolation').del()
  await knex('notifications').del()
  await knex('attendance_rules').del()
  await knex('sub_attendance_rules').del()
  await knex('punch_records').del()

  await knex('homework').del()
  await knex('schooluser_homework').del()
  await knex('homework_files').del()
  await knex('homework_score').del()
}
