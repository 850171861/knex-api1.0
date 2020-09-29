exports.up = async function (knex) {
  await knex.raw(`
    ALTER TABLE assessment_templates
    ADD COLUMN assessment_report_id VARCHAR(255);
  `)
}

exports.down = async function (knex) {

}
