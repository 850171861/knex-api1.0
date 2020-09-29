exports.up = async function (knex) {
  await knex.raw(`
    ALTER TABLE assessment_reports
    ALTER COLUMN schooluser_ids TYPE VARCHAR(255)[];
  `)
  await knex.raw(`
    ALTER TABLE assessment_reports
    ALTER COLUMN cls_ids TYPE VARCHAR(255)[];
  `)
}

exports.down = async function (knex) {

}
