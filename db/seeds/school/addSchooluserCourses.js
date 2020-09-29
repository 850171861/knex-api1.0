const _ = require('lodash')

let i = 0

const generateUUID = (prefix = '00000000') => () => {
  const suffix = `${++i}`.padStart(12, '0')
  return `${prefix}-0000-0000-0000-${suffix}`
}
const uuid = generateUUID('70000000')

module.exports = async function (knex, ctx) {
  const schooluserCourses = []

  // 1. 把我們變成是現在每個課程的老師
  const courses = ctx.courses.docs

  courses.forEach(course => {
    schooluserCourses.push(
      {
        id: uuid(),
        schooluser_id: ctx.schoolusers.obj.joseph.id,
        course_id: course.id,
        is_student: false,
        is_course_teacher: true,
        is_teacher: true,
        created_at: new Date(),
        school_dashboard_id: course.school_dashboard_id,
        school_id: course.school_id
      },
      {
        id: uuid(),
        schooluser_id: ctx.schoolusers.obj.comus.id,
        course_id: course.id,
        is_student: false,
        is_course_teacher: true,
        is_teacher: true,
        created_at: new Date(),
        school_dashboard_id: course.school_dashboard_id,
        school_id: course.school_id
      },
      {
        id: uuid(),
        schooluser_id: ctx.schoolusers.obj.rainwildest.id,
        course_id: course.id,
        is_student: false,
        is_course_teacher: true,
        is_teacher: true,
        created_at: new Date(),
        school_dashboard_id: course.school_dashboard_id,
        school_id: course.school_id
      },
      {
        id: uuid(),
        schooluser_id: ctx.schoolusers.obj.kevin.id,
        course_id: course.id,
        is_student: false,
        is_course_teacher: true,
        is_teacher: true,
        created_at: new Date(),
        school_dashboard_id: course.school_dashboard_id,
        school_id: course.school_id
      },
      {
        id: uuid(),
        schooluser_id: ctx.schoolusers.obj.shiwei254.id,
        course_id: course.id,
        is_student: false,
        is_course_teacher: true,
        is_teacher: true,
        created_at: new Date(),
        school_dashboard_id: course.school_dashboard_id,
        school_id: course.school_id
      },
      {
        id: uuid(),
        schooluser_id: ctx.schoolusers.obj.zsj7012.id,
        course_id: course.id,
        is_student: false,
        is_course_teacher: true,
        is_teacher: true,
        created_at: new Date(),
        school_dashboard_id: course.school_dashboard_id,
        school_id: course.school_id
      },
      {
        id: uuid(),
        schooluser_id: ctx.schoolusers.obj.pengchihui1.id,
        course_id: course.id,
        is_student: false,
        is_course_teacher: true,
        is_teacher: true,
        created_at: new Date(),
        school_dashboard_id: course.school_dashboard_id,
        school_id: course.school_id
      }
    )
  })

  // 資料庫操作
  await knex('schoolusers_courses').insert([
    ...schooluserCourses
  ])

  // 讀取資料
  const docs = await knex.select().table('schoolusers_courses')

  // 返回
  ctx.schooluserCourses = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.id
    })
  }
}
