
const _ = require('lodash')
const { classesData: classes } = require('./regionClasses')
const teachersDate = []

let clsIndex = 0
let classesLength = classes.length

for (let index = 1; index <= 62; index++) {
  // { name: '林蘊華', profile_photo: '', username: 'LamVanVa', cls: '', courses: [] }
  teachersDate.push(
    {
      username: 'teacher' + index,
      name: 'teacher' + index,
      is_admin: false,
      groups: ['teacher'],
      courses: [],
      profile_photo: ''
    }
  )
}

// 給每一個班配一個班主任
classes.forEach(cls => {
  let stopWhile = false
  do {
    const teacherRandom = parseInt(Math.random() * teachersDate.length)
    // 去查找這個老師有沒有這個班級代碼
    const teacher = teachersDate[teacherRandom]
    // 如果沒有班級代碼就給他一個
    if (!teacher.cls) {
      teachersDate[teacherRandom].cls = cls.slug
      stopWhile = true
    }
  } while (!stopWhile)
})

const regionTeachersSchoolusers = []
const generateRegionTeachersSchoolusers = (uuid, ctx) => {
  teachersDate.forEach((teacher, index) => {
    regionTeachersSchoolusers.push({
      id: uuid(),
      ...teacher,
      email: `${teacher.username}@region.edu.mo`,
      is_admin: false,
      is_teacher: true,
      groups: ['teacher'],
      created_at: new Date(),
      user_id: ctx.users.obj[teacher.username].id,
      school_id: ctx.schools.obj['school-region'].id
    })
  })
  return regionTeachersSchoolusers
}

const regionTeachersUsers = []
const generateRegionTeachersUsers = (uuid) => {
  teachersDate.forEach((teacher, index) => {
    regionTeachersUsers.push({
      ...teacher,
      id: uuid(),
      is_admin: false,
      groups: ['teacher'],
      created_at: new Date(),
      email: `${teacher.username}@region.edu.mo`
    })
  })
  return regionTeachersUsers
}

module.exports = {
  teachersDate,
  regionTeachersSchoolusers,
  generateRegionTeachersSchoolusers,
  regionTeachersUsers,
  generateRegionTeachersUsers
}
