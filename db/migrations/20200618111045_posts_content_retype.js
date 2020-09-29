
exports.up = async (knex) => {
  await knex.schema.raw('ALTER TABLE public."posts" ALTER COLUMN "content" TYPE text')
}

exports.down = async (knex) => {

}
