module.exports = async function (knex) {
  // Deletes ALL existing entries
  // 刪除 schools 所有資料

  await knex('homework').del()
  await knex('schooluser_homework').del()
  await knex('homework_files').del()
  await knex('homework_score').del()
  await knex('classes').del()
  await knex('schooluser').del()
  await knex('schools').del()
  await knex('courses').del()
  await knex('schooluser_classes').del()
}
