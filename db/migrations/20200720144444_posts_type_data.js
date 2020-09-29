
exports.up = async (knex) => {
  await knex('posts')
    .update({ type: 'person' })
    .whereNull('type')
}

exports.down = async (knex) => {

}
