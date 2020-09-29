const paramedicsData = [
  { name: '洪情芽', username: 'HongChengNga', profile_photo: '' }
]

const madalenaParamedicsSchoolusers = []

const generateMadalenaParamedicsSchoolusers = (uuid, ctx) => {
  for (let paramedicIndex = 0; paramedicIndex < paramedicsData.length; ++paramedicIndex) {
    madalenaParamedicsSchoolusers.push({
      id: uuid(),
      ...paramedicsData[paramedicIndex],
      email: `${paramedicsData[paramedicIndex].username}@madalena.edu.mo`,
      is_admin: !!paramedicsData[paramedicIndex].is_admin,
      is_paramedic: true,
      groups: ['paramedic'],
      created_at: new Date(),
      user_id: ctx.users.obj[paramedicsData[paramedicIndex].username].id,
      school_id: ctx.schools.obj['school-madalena'].id
    })
  }

  return madalenaParamedicsSchoolusers
}

const madalenaParamedicsUsers = []

const generateMadalenaParamedicsUsers = (uuid) => {
  for (let paramedicIndex = 0; paramedicIndex < paramedicsData.length; ++paramedicIndex) {
    madalenaParamedicsUsers.push({
      ...paramedicsData[paramedicIndex],
      id: uuid(),
      is_admin: false,
      groups: ['paramedic'],
      created_at: new Date(),
      email: `${paramedicsData[paramedicIndex].username}@madalena.edu.mo`
    })
  }

  return madalenaParamedicsUsers
}

module.exports = {
  paramedicsData,
  madalenaParamedicsSchoolusers,
  generateMadalenaParamedicsSchoolusers,
  madalenaParamedicsUsers,
  generateMadalenaParamedicsUsers
}