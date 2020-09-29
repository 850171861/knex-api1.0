
exports.up = async (knex) => {
  await knex.schema.renameTable('notification_replies', 'users_notifications')
}

exports.down = async (knex) => {

}
