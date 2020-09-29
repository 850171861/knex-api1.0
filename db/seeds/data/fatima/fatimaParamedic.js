const paramedicsData = [
  { name: '梁漪茵', username: 'bsn2014031', profile_photo: '' },
  { name: '陳注蓉', username: 'bsn2015044', profile_photo: '' },
  { name: '陳顏纓', username: 'colorchan', profile_photo: '' },
  { name: '周華斌', username: 'angus', profile_photo: '' }
]

const fatimaParamedicsSchoolusers = []

const generateFatimaParamedicsSchoolusers = (uuid, ctx) => {
  for (let paramedicIndex = 0; paramedicIndex < paramedicsData.length; ++paramedicIndex) {
    fatimaParamedicsSchoolusers.push({
      id: uuid(),
      ...paramedicsData[paramedicIndex],
      email: `${paramedicsData[paramedicIndex].username}@fatima.edu.mo`,
      is_admin: !!paramedicsData[paramedicIndex].is_admin,
      is_paramedic: true,
      groups: ['paramedic'],
      created_at: new Date(),
      user_id: ctx.users.obj[paramedicsData[paramedicIndex].username].id,
      school_id: ctx.schools.obj['school-fatima'].id
    })
  }

  return fatimaParamedicsSchoolusers
}

const fatimaParamedicsUsers = []

const generateFatimaParamedicsUsers = (uuid) => {
  for (let paramedicIndex = 0; paramedicIndex < paramedicsData.length; ++paramedicIndex) {
    fatimaParamedicsUsers.push({
      ...paramedicsData[paramedicIndex],
      id: uuid(),
      is_admin: false,
      groups: ['paramedic'],
      created_at: new Date(),
      email: `${paramedicsData[paramedicIndex].username}@fatima.edu.mo`
    })
  }

  return fatimaParamedicsUsers
}

module.exports = {
  paramedicsData,
  fatimaParamedicsSchoolusers,
  generateFatimaParamedicsSchoolusers,
  fatimaParamedicsUsers,
  generateFatimaParamedicsUsers
}