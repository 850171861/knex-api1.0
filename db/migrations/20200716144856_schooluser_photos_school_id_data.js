
exports.up = async (knex) => {
  const dbSchooluserPhotos = await knex('schooluser_photos as sp')
    .select('sp.id', 'su.school_id')
    .leftJoin('schoolusers as su', knex.raw('su.id::text'), 'sp.schooluser_id')
    // .where({
    //   'su.deleted_at': null,
    //   'sp.deleted_at': null,
    //   'sp.school_id': null
    // })

  for (let i = 0; i < dbSchooluserPhotos.length; i++) {
    await knex('schooluser_photos')
      .update({ school_id: dbSchooluserPhotos[i].school_id })
      .where({ id: dbSchooluserPhotos[i].id })
  }
}

exports.down = async (knex) => {

}
