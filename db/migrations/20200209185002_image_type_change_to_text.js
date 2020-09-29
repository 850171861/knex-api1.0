exports.up = async function (knex) {
  await knex.raw(`
    ALTER TABLE online_courses ALTER COLUMN image TYPE text;
    ALTER TABLE users ALTER COLUMN profile_photo TYPE text;
  `)
}

exports.down = async function (knex) {
}
