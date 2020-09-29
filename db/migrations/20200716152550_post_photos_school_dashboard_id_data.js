
exports.up = async (knex) => {
  const dbPostPhotos = await knex('post_photos as pp')
    .select('pp.id', 'p.school_dashboard_id')
    .innerJoin('posts as p', knex.raw('p.id::text'), 'pp.post_id')
    // .where({
    //   'su.deleted_at': null,
    //   'sp.deleted_at': null,
    //   'sp.school_id': null
    // })

  for (let i = 0; i < dbPostPhotos.length; i++) {
    await knex('post_photos')
      .update({ school_dashboard_id: dbPostPhotos[i].school_dashboard_id })
      .where({ id: dbPostPhotos[i].id })
  }
}

exports.down = async (knex) => {

}
