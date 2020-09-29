exports.up = async (knex) => {
  await knex.schema.table('assessment_reports', table => {
    table.renameColumn('submissionStartDate', 'submission_start_date')
    table.renameColumn('submissionEndDate', 'submission_end_date')
  })
}

exports.down = async (knex) => {

}
