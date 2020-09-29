// const omitBy = require('lodash/omitBy')
// const isUndefined = require('lodash/isUndefined')
const { db: knex } = require('../knex')

// 根据班级id拿到班级人数
const clsMember = async (clsId) => {
  return knex('homework')
    .where({
      cls_id: clsId
    })
}

module.exports = {
  clsMember
}

