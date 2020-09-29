
exports.up = function (knex) {
  return knex('users')
    .where({ email: 'comus.leong@gmail.com' })
    .update({ is_admin: true })
}

exports.down = async function (knex) {

}
