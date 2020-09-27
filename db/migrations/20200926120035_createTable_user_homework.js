exports.up = async (knex) => {
    return knex.schema.createTable('user_homework', function (table) {
      table.increments('seq_id')
      // 创建时间
      table.timestamp('created_at')
      // 修改时间
      table.timestamp('modified_at')
      // 删除时间
      table.timestamp('deleted_at')
      // 連homework的id
      table.string('homework_id')
      // 學生ID
      table.string('schooluser_id')
      // 附件
      table.json('files')
      // 该字段判断是否提交過作业
      table.boolean('is_submit')
      // 学生的分数
      table.integer('points')
      // 老师的評語
      table.string('evaluation')
    })
  }
  
  exports.down = async (knex) => {
  
  }
  