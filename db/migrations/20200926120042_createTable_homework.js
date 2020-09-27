
exports.up = async (knex) => {
    return knex.schema.createTable('homework', function (table) {
      table.increments('seq_id')
      // 创建时间
      table.timestamp('created_at')
      // 修改时间
      table.timestamp('modified_at')
      // 删除时间
      table.timestamp('deleted_at')
      // 标题
      table.string('title')
      // 截至时间
      table.timestamp('end_at')
      // 作业说明
      table.string('work_content')
      // 分数制
      table.integer('fraction')
      // 班级id
      table.string('cls_id')
      // 老师id
      table.string('schooluser_id')
      // 附件
      table.json('files')
    })
  }
  
  exports.down = async (knex) => {
  
  }
  