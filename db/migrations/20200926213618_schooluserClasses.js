// schooluser_classes
exports.up = async (knex) => {
    return knex.schema.createTable('schooluser_classes', function (table) {
        
      table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable()
      table.timestamp('modified_at')
      table.timestamp('deleted_at')
  
      table.string('schooluser_id')
      table.string('class_id')
      table.integer('num')
      table.boolean('is_student').defaultTo(false)
      table.boolean('is_class_teacher').defaultTo(false)
      table.boolean('is_teacher').defaultTo(false)
    })
  }
  
  exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('schooluser_classes')
  }