exports.up = async function (knex) {
  await knex.raw(`
    ALTER TABLE assessment_reports ALTER COLUMN is_english SET DEFAULT false;
  `)
}

exports.down = async function (knex) {

}
