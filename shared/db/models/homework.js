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
    create_at,
    modified_at,
    deleted_at,
    end_at,
    work_content,
    fraction,
    schooluser_id,
    files
  } = args
  return knex('homework')
    .insert({
      title: title,
      created_at: create_at,
      modified_at: modified_at,
      deleted_at: deleted_at,
      end_at: end_at,
      work_content: work_content,
      fraction: fraction,
      schooluser_id: schooluser_id,
      files
    }).returning('*')
}

module.exports = {
  getHomeWork,
  createHomework
}
