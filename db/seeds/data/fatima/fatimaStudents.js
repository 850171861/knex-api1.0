const _ = require('lodash')

const { students: attending_students_01 } = require('./attendingSchool/students_01')
const { students: attending_students_02 } = require('./attendingSchool/students_02')
const { students: leave_students_01 } = require('./leaveSchool/students_01')
const { students: leave_students_02 } = require('./leaveSchool/students_02')
const { students: leave_students_03 } = require('./leaveSchool/students_03')
const { students: leave_students_04 } = require('./leaveSchool/students_04')

// 化地瑪聖母女子學校 學生
let usersData = [
  ...attending_students_01,
  ...attending_students_02,
  ...leave_students_01,
  ...leave_students_02,
  ...leave_students_03,
  ...leave_students_04
]

let i = 0
// 添加上 用教青局id 作為 username的名稱，如果沒有則模式使用student加索引
usersData = usersData.map(user => (
  {
    ...user,
    username: (user.edu_no ? user.edu_no : `student${++i}`)
  }
))

const omitField = [
  'nationality', 'enrollment_at', 'birth_at',
  'birthplace', 'phone_number', 'address',
  'father_name', 'father_phone', 'mother_name',
  'mother_phone', 'guardianship', 'guardian_name',
  'guardian_phone', 'id_type', 'id_issue_location',
  'goldcard_no'
]

// schooluser
const fatimaStudentsSchoolusers = []
const generateFatimaStudentsSchoolusers = (uuid, ctx) => {
  usersData.forEach((user, index) => {
    user = _.omit(user, omitField)
    fatimaStudentsSchoolusers.push({
      ...user,
      email: `${user.edu_no}@student.fatima.edu.mo`,
      id: uuid(),
      is_student: true,
      is_admin: false,
      groups: ['student'],
      // profile_photo: `${user.profile_photo}/${user.cls}/${user.edu_no}.jpg`,
      created_at: new Date(),
      user_id: ctx.users.obj[user.username].id,
      school_id: ctx.schools.obj['school-fatima'].id
    })
  })
  return fatimaStudentsSchoolusers
}

// users
const fatimaStudentsUsers = []
const generateFatimaStudentsUsers = (uuid) => {
  usersData.forEach((user, index) => {
    user = _.omit(user, omitField)
    fatimaStudentsUsers.push(
      {
        ...user,
        email: `${user.edu_no}@student.fatima.edu.mo`,
        id: uuid(),
        is_admin: false,
        groups: ['student'],
        created_at: new Date()
      }
    )
  })

  return fatimaStudentsUsers
}

// students
const fatimaStudents = []
const generateFatimaStudents = (uuid, ctx) => {
  usersData.forEach((user, index) => {
    user = _.omit(user, ['archived_at', 'archived_reason'])
    fatimaStudents.push({
      ...user,
      id: uuid(),
      created_at: new Date(),
      schooluser_id: ctx.schoolusers.obj[user.username].id,
      school_id: ctx.schools.obj['school-fatima'].id
    })
  })
  return fatimaStudents
}

module.exports = {
  usersData,
  fatimaStudentsSchoolusers,
  generateFatimaStudentsSchoolusers,
  fatimaStudentsUsers,
  generateFatimaStudentsUsers,
  fatimaStudents,
  generateFatimaStudents
}
