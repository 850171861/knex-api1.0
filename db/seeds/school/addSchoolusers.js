const _ = require('lodash')
const { generateCDSJ1StudentsSchoolusers } = require('../data/cdsj1/cdsj1Students')
const { generateCDSJ1TeachersSchoolusers } = require('../data/cdsj1/cdsj1Teachers')

const { generateCDSJ6StudentsSchoolusers } = require('../data/cdsj6/cdsj6Students')
const { generateCDSJ6TeachersSchoolusers } = require('../data/cdsj6/cdsj6Teachers')

const { generateFatimaStudentsSchoolusers } = require('../data/fatima/fatimaStudents')
const { generateFatimaTeachersSchoolusers } = require('../data/fatima/fatimaTeachers')
const { generateFatimaParamedicsSchoolusers } = require('../data/fatima/fatimaParamedic')

const { generateMadalenaStudentsSchoolusers } = require('../data/madalena/madalenaStudents')
const { generateMadalenaTeachersSchoolusers } = require('../data/madalena/madalenaTeachers')
const { generateMadalenaParamedicsSchoolusers } = require('../data/madalena/madalenaParamedic')

const { generateRegionStudentsSchoolusers } = require('../data/region/regionStudents')
const { generateRegionTeachersSchoolusers } = require('../data/region/regionTeachers')

const { generateAdminSchoolusers } = require('../data/admin/users')

let i = 0
const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('20000000')

module.exports = async function (knex, ctx) {
  // 建立資料
  const schoolusers = []

  // 學校id, 用於開發人員 admin
  const schoolIds = [
    ctx.schools.obj['school-cdsj1'].id,
    ctx.schools.obj['school-cdsj6'].id,
    ctx.schools.obj['school-fatima'].id,
    ctx.schools.obj['school-madalena'].id,
    ctx.schools.obj['school-region'].id
  ]

  // 開發人員 admin
  schoolIds.forEach(schoolId => {
    schoolusers.push(...generateAdminSchoolusers(uuid, ctx, schoolId))
  })

  // 聖若瑟教區中學第一校（学生）
  schoolusers.push(
    ...generateCDSJ1StudentsSchoolusers(uuid, ctx).map(doc => _.omit(doc, ['cls', 'courses', 'num', 'face_id', 'image_id']))
  )
  // 聖若瑟教區中學第六校（学生）
  schoolusers.push(
    ...generateCDSJ6StudentsSchoolusers(uuid, ctx).map(doc => _.omit(doc, ['cls', 'courses', 'num', 'face_id', 'image_id']))
  )
  // 化地瑪聖母女子學校（学生）
  schoolusers.push(
    ...generateFatimaStudentsSchoolusers(uuid, ctx).map(doc => _.omit(doc, ['cls', 'courses', 'num', 'face_id', 'image_id']))
  )

  // 聖瑪大肋納學校（學生）
  schoolusers.push(
    ...generateMadalenaStudentsSchoolusers(uuid, ctx).map(doc => _.omit(doc, ['cls', 'courses', 'num', 'face_id', 'image_id']))
  )

  // 地域中學（學生）
  schoolusers.push(
    ...generateRegionStudentsSchoolusers(uuid, ctx).map(doc => _.omit(doc, ['cls', 'courses', 'num', 'face_id', 'image_id']))
  )

  // 聖若瑟教區中學第一校（老师）
  schoolusers.push(
    ...generateCDSJ1TeachersSchoolusers(uuid, ctx).map(doc => _.omit(doc, ['cls', 'courses', 'face_id', 'image_id']))
  )
  // 聖若瑟教區中學第六校（老师）
  schoolusers.push(
    ...generateCDSJ6TeachersSchoolusers(uuid, ctx).map(doc => _.omit(doc, ['cls', 'courses', 'face_id', 'image_id']))
  )

  // 化地瑪聖母女子學校（老師）
  schoolusers.push(
    ...generateFatimaTeachersSchoolusers(uuid, ctx).map(doc => _.omit(doc, ['cls', 'courses', 'face_id', 'image_id']))
  )

  // 聖瑪大肋納學校（老師）
  schoolusers.push(
    ...generateMadalenaTeachersSchoolusers(uuid, ctx).map(doc => _.omit(doc, ['cls', 'courses', 'face_id', 'image_id']))
  )

  // 地域中學（老師）
  schoolusers.push(
    ...generateRegionTeachersSchoolusers(uuid, ctx).map(doc => _.omit(doc, ['cls', 'courses', 'face_id', 'image_id']))
  )

  // 化地瑪聖母女子學校（護理）
  schoolusers.push(
    ...generateFatimaParamedicsSchoolusers(uuid, ctx)
  )

  // 聖瑪大肋納學校（護理）
  schoolusers.push(
    ...generateMadalenaParamedicsSchoolusers(uuid, ctx)
  )

  // 資料庫操作
  const data = [...schoolusers]
  while (data.length) {
    console.log('add schoolusers data.length', data.length)

    const dataSplice = data.splice(0, 500)
    await knex('schoolusers').insert([...dataSplice])
  }

  // // 資料庫操作
  // await knex('schoolusers').insert([
  //   ...schoolusers
  // ])

  // 讀取資料
  const docs = [...schoolusers]
  // const docs = await knex.select().table('schoolusers')

  // 返回
  ctx.schoolusers = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.username
    })
  }
}
