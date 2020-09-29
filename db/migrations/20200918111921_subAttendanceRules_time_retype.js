
exports.up = async (knex) => {
  await knex.schema.raw('ALTER TABLE public."sub_attendance_rules" ALTER COLUMN "start_time" TYPE time')
  await knex.schema.raw('ALTER TABLE public."sub_attendance_rules" ALTER COLUMN "end_time" TYPE time')
}

exports.down = async (knex) => {
  await knex.schema.raw('ALTER TABLE public."sub_attendance_rules" ALTER COLUMN "start_time" TYPE timestamp')
  await knex.schema.raw('ALTER TABLE public."sub_attendance_rules" ALTER COLUMN "end_time" TYPE timestamp')
}
