const reset = require('./school/reset')

const homework = require('./school/addHomework')
const homeworkFiles = require('./school/addHomeworkFiles')
const homeworkScore = require('./school/addHomeworkScore')
const schooluserHomework = require('./school/addSchooluserHomework')
const classes = require('./school/addClasses')
const schools = require('./school/addSchools')
const schooluser = require('./school/addSchooluser')
const courses = require('./school/addCoures')
const schooluserClasses = require('./school/addSchooluserClasses')

const ctx = {}

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // 刪除 schools 所有資料
  await reset(knex)

  await homework(knex, ctx)
  console.log('> added homework:', ctx.homework.docs.length)

  await homeworkFiles(knex, ctx)
  console.log('> added homeworkFiles:', ctx.homeworkFiles.docs.length)

  await homeworkScore(knex, ctx)
  console.log('> added homeworkScore:', ctx.homeworkScore.docs.length)

  await schooluserHomework(knex, ctx)
  console.log('> added schooluserHomework:', ctx.schooluserHomework.docs.length)

  await classes(knex, ctx)
  console.log('> added classes:', ctx.classes.docs.length)

  await schools(knex, ctx)
  console.log('> added schools:', ctx.schools.docs.length)

  await schooluser(knex, ctx)
  console.log('> added schooluser:', ctx.schooluser.docs.length)

  await courses(knex, ctx)
  console.log('> added courses:', ctx.courses.docs.length)

  await schooluserClasses(knex, ctx)
  console.log('> added schooluserClasses:', ctx.schooluserClasses.docs.length)
}
