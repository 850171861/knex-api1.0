exports.up = async function (knex) {
  await knex.raw(`
    ALTER TABLE courses ALTER COLUMN term SET DEFAULT 0;
  `)
  await knex.raw(`
    ALTER TABLE courses ALTER COLUMN credits SET DEFAULT 0;
  `)
}

exports.down = async function (knex) {

}
