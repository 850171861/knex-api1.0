exports.up = async function (knex) {
  await knex.raw(`
    ALTER TABLE schooluser_photos
    ADD COLUMN school_id VARCHAR(255);
  `)

  await knex.raw(`
    ALTER TABLE schoolusers
    ALTER COLUMN groups TYPE VARCHAR(255)[];
  `)

  await knex.raw(`
    ALTER TABLE users ALTER COLUMN is_admin SET DEFAULT false;
  `)

  await knex.raw(`
    ALTER TABLE users
    ALTER COLUMN groups TYPE VARCHAR(255)[];
  `)
}

exports.down = async function (knex) {

}
