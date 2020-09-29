const reset = require('./school/reset')
const addUsers = require('./school/addUsers')
const addSchools = require('./school/addSchools')
const addSchoolusers = require('./school/addSchoolusers')
const addSchoolsDashboards = require('./school/addSchoolsDashboards')
const addClasses = require('./school/addClasses')
const addCourses = require('./school/addCourses')
const addSchooluserClasses = require('./school/addSchooluserClasses')
const addSchooluserCourses = require('./school/addSchooluserCourses')
const addAssessmentTemplates = require('./school/addAssessmentTemplates')
const addAssessmentReports = require('./school/addAssessmentReports')
const addAssessments = require('./school/addAssessments')
const addSchooluserPhotos = require('./school/addSchooluserPhotos')
const addIntelligences = require('./school/addIntelligences')
const addTalents = require('./school/addTalents')
const addMedicalRecords = require('./school/addMedicalRecords')
const addSpecialHealthConditions = require('./school/addSpecialHealthConditions')
const addPreventivesIsolation = require('./school/addPreventivesIsolation')
const addStudents = require('./school/addStudents')
const addNotifications = require('./school/addNotifications')
const addAttendanceRules = require('./school/addAttendanceRules')
const addSubAttendanceRules = require('./school/addSubAttendanceRules')
const addPunchRecords = require('./school/addPunchRecords')

const homework = require('./school/addHomework')
const homeworkFiles = require('./school/addHomeworkFiles')
const homeworkScore = require('./school/addHomeworkScore')
const schooluserHomework = require('./school/addSchooluserHomework')

const ctx = {}

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // 刪除 schools 所有資料
  await reset(knex)

  // 新增 users
  await addUsers(knex, ctx)
  console.log('> added users:', ctx.users.docs.length)

  // 新增 schools
  await addSchools(knex, ctx)
  console.log('> added schools:', ctx.schools.docs.length)

  // 新增 schoolusers
  await addSchoolusers(knex, ctx)
  console.log('> added schoolusers:', ctx.schoolusers.docs.length)

  // 新增 school dashboards
  await addSchoolsDashboards(knex, ctx)
  console.log('> added schools dashboards:', ctx.schoolsDashboards.docs.length)

  // 新增 school classes
  await addClasses(knex, ctx)
  console.log('> added classes:', ctx.classes.docs.length)

  // 新增 school courses
  await addCourses(knex, ctx)
  console.log('> added courses:', ctx.courses.docs.length)

  // 新增 schooluser classes
  await addSchooluserClasses(knex, ctx)
  console.log('> added schooluser classes:', ctx.schooluserClasses.docs.length)

  // 新增 schooluser courses
  await addSchooluserCourses(knex, ctx)
  console.log('> added schooluser courses:', ctx.schooluserCourses.docs.length)

  // 新增 assessment templates
  await addAssessmentTemplates(knex, ctx)
  console.log('> added assessment templates:', ctx.assessmentTemplates.docs.length)

  // 新增 assessment reports
  await addAssessmentReports(knex, ctx)
  console.log('> added assessment reports:', ctx.assessmentReports.docs.length)

  // 新增 assessments
  await addAssessments(knex, ctx)
  console.log('> added assessments:', ctx.assessments.docs.length)

  // 新增 schooluser photos
  await addSchooluserPhotos(knex, ctx)
  console.log('> added schooluser photos:', ctx.schooluserPhotos.docs.length)

  await addIntelligences(knex, ctx)
  console.log('> added intelligences:', ctx.intelligences.docs.length)

  await addTalents(knex, ctx)
  console.log('> added talents:', ctx.talents.docs.length)

  // 新增 students
  await addStudents(knex, ctx)
  console.log('> added students:', ctx.students.docs.length)

  // 新增 medical records
  await addMedicalRecords(knex, ctx)
  console.log('> added medical records:', ctx.medicalRecords.docs.length)

  await addSpecialHealthConditions(knex, ctx)
  console.log('added special health conditions:', ctx.specialHealthConditions.docs.length)

  // 新增 preventives isolation
  await addPreventivesIsolation(knex, ctx)
  console.log('added preventives isolation:', ctx.preventivesIsolation.docs.length)

  await addNotifications(knex, ctx)
  console.log('added notifications:', ctx.notifications.docs.length)

  await addAttendanceRules(knex, ctx)
  console.log('added attendanceRules:', ctx.attendanceRules.docs.length)

  await addSubAttendanceRules(knex, ctx)
  console.log('added subAttendanceRules:', ctx.subAttendanceRules.docs.length)

  await addPunchRecords(knex, ctx)
  console.log('added punchRecords:', ctx.punchRecords.docs.length)

  await homework(knex, ctx)
  console.log('> added homework:', ctx.homework.docs.length)

  await homeworkFiles(knex, ctx)
  console.log('> added homeworkFiles:', ctx.homeworkFiles.docs.length)

  await homeworkScore(knex, ctx)
  console.log('> added homeworkScore:', ctx.homeworkScore.docs.length)

  await schooluserHomework(knex, ctx)
  console.log('> added schooluserHomework:', ctx.schooluserHomework.docs.length)
}
