exports.up = async (knex) => {
  await knex.schema.table('users', table => {
    table.dropColumn('provider_id')
    table.dropColumn('fb_provider_id')
    table.dropColumn('github_provider_id')
    table.dropColumn('github_username')
    table.dropColumn('description')
    table.dropColumn('website')
  })
  await knex.schema.table('classes', table => {
    table.dropColumn('archived_at')
  })
  await knex.schema.table('courses', table => {
    table.dropColumn('archived_at')
    table.renameColumn('unit', 'credits')
  })
  await knex.schema.table('schools', table => {
    table.dropColumn('login_by_username')
    table.dropColumn('login_by_email')
    table.dropColumn('login_by_sms')
    table.dropColumn('login_by_google')
    table.dropColumn('login_by_mail_authentication')
  })
  await knex.schema.table('schoolusers', table => {
    table.dropColumn('google_provider_id')
    table.dropColumn('password')
    table.dropColumn('phone_number')
  })
}

exports.down = async (knex) => {

}
