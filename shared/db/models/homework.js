const { db: knex } = require('../knex')

// 根據ID判斷是學生還是老師
const getHomeWorksByClsId = async (clsId) => {
  // 查询班级人数
  const result = await knex('schoolusers_classes as sc')
    .joinRaw('left join  homework as h on h.cls_id = sc.cls_id')
    .where('sc.cls_id', clsId)
    .andWhere('sc.is_student', true)
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

const uuID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = uuID('15000000')

// 创建作业
const createHomework = (args) => {
  const {
    schoolId,
    title,
    content,
    issuedAt,
    allowSubmitAt,
    endAt
  } = args.input
  return knex('homework')
    .insert({
      id: uuid(),
      created_at: new Date(),
      modified_at: '',
      deleted_at: '',
      school_id: schoolId,
      cls_id: '',
      course_id: '',
      creator_id: '',
      title: title,
      content: content,
      issued_at: issuedAt,
      allow_submit_at: allowSubmitAt,
      end_at: endAt
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

module.exports = {
  getHomeWorksByClsId,
  getHomeWorks,
  createHomework
  /*,
  checkWork */
}
