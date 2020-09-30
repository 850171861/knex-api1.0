const { db: knex } = require('../knex')
const { v4: uuidv4 } = require('uuid')

// 根據ID判斷是學生還是老師
const getHomeWorksByClsId = async (clsId) => {
  // 查询班级人数
  const result = await knex('schooluser_classes as sc')
    .joinRaw('left join  homework as h on h.cls_id = sc.cls_id')
    .where('sc.cls_id', clsId)
    .andWhere('sc.is_student', false)
    .count()
    .then((rows) => {
      return rows.length ? parseInt(rows[0].count) : 0
    })

  return result
}
// 当前班级作业
const getHomeWorks = async (clsId) => {
  return knex('homework').where({ cls_id: clsId })
}

// 创建作业
const createHomework = (args) => {
  const {
    schoolId,
    title,
    content
  } = args.input

  console.log(args, title)
  return knex('homework')
    .insert({
      id: uuidv4(),
      created_at: new Date(),
      // modified_at: '',
      // deleted_at: '',
      school_id: schoolId,
      // cls_id: '',
      // course_id: '',
      // creator_id: '',
      title: title,
      content: content
      // issued_at: issuedAt,
      // allow_submit_at: allowSubmitAt,
      // end_at: end_at
    })
    .returning('*')
}

const updateHomework = (args) => {
  const {
    title,
    content,
    clsId
  } = args.input
  return knex('homework')
    .where('id', '=', args.input.id).update({
      title: title,
      // created_at: createAt,
      // modified_at: modifiedAt,
      // deleted_at: deletedAt,
      // end_at: endAt,
      content: content,
      cis_id: clsId
    }).returning('*')
}

const delHomework = (args) => {
  console.log(args)

  return knex('homework')
    .where('id', '=', args.input.id).del().returning('*')
}
module.exports = {
  getHomeWorksByClsId,
  getHomeWorks,
  createHomework,
  updateHomework,
  delHomework
}
