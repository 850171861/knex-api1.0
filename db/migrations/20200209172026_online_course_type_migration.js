exports.up = async function (knex) {
  await knex('online_courses')
    .where({ type: 'public' })
    .update({ type: 'live' })

  await knex.schema.table('online_courses', function (table) {
    table.boolean('public')
  })

  await knex('online_courses')
    .where({ type: 'live' })
    .update({ public: true })

  await knex('online_courses')
    .where({ type: 'share' })
    .update({ public: true })
}

exports.down = async function (knex) {
}
