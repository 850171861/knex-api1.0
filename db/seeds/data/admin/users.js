const adminData = [
  { username: 'comus', name: '梁駿豪', email: 'comus.leong@gmail.com', profile_photo: '' },
  { username: 'joseph', name: 'joseph', email: 'josephpeng1014@gmail.com', profile_photo: '' },
  { username: 'rainwildest', name: 'rainwildest', email: 'rainwildest@gmail.com', profile_photo: '' },
  { username: 'kevin', name: 'kevin', email: 'ma76538@gmail.com', profile_photo: '' },
  { username: 'shiwei254', name: 'shiwei254', email: 'shiwei254@gmail.com', profile_photo: '' },
  { username: 'zsj7012', name: 'zsj7012', email: 'zsj7012@gmail.com', profile_photo: '' },
  { username: 'pengchihui1', name: 'pengchihui1', email: 'pengchihui1@gmail.com', profile_photo: '' },
  { username: 'ZachCheong', name: '張嘉宏', email: 'evilbob@hotmail.com.tw', profile_photo: '' },
  { username: 'zero', name: 'zero', email: 'q443086229@gmail.com', profile_photo: '' },
  { username: 'stella', name: 'stella', email: 'stellalok712@gmail.com', profile_photo: '' }
]

const adminSchoolusers = []
const generateAdminSchoolusers = (uuid, ctx, schoolId) => {
  const users = []
  for (let adminIndex = 0; adminIndex < adminData.length; ++adminIndex) {
    users.push({
      id: uuid(),
      ...adminData[adminIndex],
      is_admin: true,
      // is_teacher: true,
      groups: ['admin'],
      created_at: new Date(),
      user_id: ctx.users.obj[adminData[adminIndex].username].id,
      school_id: schoolId
    })
  }

  adminSchoolusers.push(...users)
  return users
}

const adminUsers = []
const generateAdminUsers = (uuid) => {
  for (let adminIndex = 0; adminIndex < adminData.length; ++adminIndex) {
    adminUsers.push({
      ...adminData[adminIndex],
      id: uuid(),
      is_admin: true,
      groups: ['admin'],
      created_at: new Date()
    })
  }

  return adminUsers
}

module.exports = {
  adminData,
  adminSchoolusers,
  generateAdminSchoolusers,
  adminUsers,
  generateAdminUsers
}
