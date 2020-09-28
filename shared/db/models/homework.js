// const omitBy = require('lodash/omitBy')
// const isUndefined = require('lodash/isUndefined')
const { db: knex } = require('../knex')

// 查询作业表
const getHomeWork = () => {
  return knex('homework').select()
}
// 创建作业表
const createHomework = (args) => {
  const {
    title,
    createAt,
    modifiedAt,
    deletedAt,
    endAt,
    workContent,
    fraction,
    schooluserId,
    files
  } = args.input
  return knex('homework')
    .insert({
      title: title,
      created_at: createAt,
      modified_at: modifiedAt,
      deleted_at: deletedAt,
      end_at: endAt,
      work_content: workContent,
      fraction: fraction,
      schooluser_id: schooluserId,
      files
    }).returning('*')
}

/* const updateHomework = (args) => {
  console.log(args)
  const {
    title,
    createAt,
    modifiedAt,
    deletedAt,
    endAt,
    workContent,
    fraction,
    schooluserId,
    files
  } = args.input
  return knex('homework')
    .where('seq_id', '=', args.seq_id).update({
      title: title,
      created_at: createAt,
      modified_at: modifiedAt,
      deleted_at: deletedAt,
      end_at: endAt,
      work_content: workContent,
      fraction: fraction,
      schooluser_id: schooluserId,
      files
    }).returning('*')
} */

// 老师查看自己发布作业列表
const checkWork = (args) => {
  const homework = knex('homework').where('fraction', '=', args.seq_id)
  const schooluser_classes = knex('schooluser_classes').where('class_id', '=', args.class_id)
  const user_homework = knex('user_homework').where('is_submit', '=', 'false').andWhere(builder => {
    return builder.where('homework_id', '=', args.homework_id)
  })
  console.log(homework)
  var arr = []
  // 当前没提交人数
  for (var i = 0; i < user_homework.length; i++) {
    arr.push(user_homework[i].is_submit)
  }
  for (var i = 0; i < homework.length; i++) {
    // 当前班的总人数
    homework[i].sum = parseInt(schooluser_classes.length)
    // 未提交人数
    homework[i].no_submit = parseInt(arr.length)
    // 已经提交人数
    homework[i].and_submit = homework[i].sum - parseInt(arr.length)
  }
  return homework
}

module.exports = {
  getHomeWork,
  createHomework,
  checkWork
}
