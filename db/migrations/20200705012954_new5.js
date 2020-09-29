exports.up = async function (knex) {
  await knex.raw(`
    ALTER TABLE post_photos
    ALTER COLUMN participant_ids TYPE VARCHAR(255)[];
  `)
  await knex.raw(`
    ALTER TABLE post_photos
    ALTER COLUMN delete_face_ids TYPE VARCHAR(255)[];
  `)
  await knex.raw(`
    ALTER TABLE posts
    ALTER COLUMN participant_ids TYPE VARCHAR(255)[];
  `)
  await knex.raw(`
    ALTER TABLE posts
    ALTER COLUMN cls_ids TYPE VARCHAR(255)[];
  `)
  await knex.raw(`
    ALTER TABLE posts
    ALTER COLUMN course_ids TYPE VARCHAR(255)[];
  `)
}

exports.down = async function (knex) {

}
