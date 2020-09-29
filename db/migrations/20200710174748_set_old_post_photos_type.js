exports.up = async (knex) => {
  await knex('post_photos')
    .update({ type: 'image' })
    .where({
      type: null,
      deleted_at: null
    })
}

exports.down = async (knex) => {

}
