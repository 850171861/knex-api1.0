const { classesData: classes } = require('./regionClasses')
const usersData = []

let clsIndex = 0
let classesLength = classes.length
let numIndex = 0

for (let index = 0; index < 1125; index++) {
  // 如果索引大於班級長度則，從0開始
  if (classesLength - 1 < clsIndex) {
    clsIndex = 0
  }

  if (index % 25 === 0 && index !== 0) {
    clsIndex = (classesLength - 1 <= clsIndex) ? 0 : clsIndex + 1
    numIndex = 0
  }

  usersData.push({
    username: `student${(index + 1)}`,
    name: `student${(index + 1)}`,
    is_admin: false,
    groups: ['student'],
    cls: classes[clsIndex].slug,
    num: ++numIndex
  })
}


const regionStudentsSchoolusers = []
const generateRegionStudentsSchoolusers = (uuid, ctx) => {
  usersData.forEach((user, index) => {
    regionStudentsSchoolusers.push({
      ...user,
      email: `${user.username}@student.region.edu.com`,
      id: uuid(),
      is_student: true,
      is_admin: false,
      groups: ['student'],
      created_at: new Date(),
      user_id: ctx.users.obj[user.username].id,
      school_id: ctx.schools.obj['school-region'].id
    })
  })
  return regionStudentsSchoolusers
}

const regionStudentsUsers = []
const generateRegionStudentsUsers = (uuid) => {
  usersData.forEach((user, index) => {
    regionStudentsUsers.push(
      {
        ...user,
        email: `${user.username}@student.region.edu.com`,
        id: uuid(),
        is_admin: false,
        groups: ['student'],
        created_at: new Date()
      }
    )
  })

  return regionStudentsUsers
}

module.exports = {
  usersData,
  regionStudentsSchoolusers,
  generateRegionStudentsSchoolusers,
  regionStudentsUsers,
  generateRegionStudentsUsers
}
