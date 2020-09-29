// 聖若瑟教區中學第一校
const teacherData = [
  { name: '陳嘉燕', profile_photo: '', cls: '19-k1a', username: 'chankain' },
  { name: '鍾盈盈', profile_photo: '', cls: '19-k1a', username: 'iichung' },
  { name: '郭少玲', profile_photo: '', cls: '19-k1b', username: 'slkuok' },
  { name: '李穎怡', profile_photo: '', cls: '19-k1b', username: 'wilei' },
  { name: '關惠紅', profile_photo: '', cls: '19-k1c', username: 'whkuan' },
  { name: '龍倩玲', profile_photo: '', cls: '19-k1c', username: 'sllong' },
  { name: '劉美芝', profile_photo: '', cls: '19-k2a', username: 'cintialao' },
  { name: '陳可怡', profile_photo: '', cls: '19-k2a', username: 'hichan' },
  { name: '楊綺婷', profile_photo: '', cls: '19-k2b', username: 'itieong' },
  { name: '簡凱宜', profile_photo: '', cls: '19-k2b', username: 'hikan' },
  { name: '郭靜文', profile_photo: '', cls: '19-k2c', username: 'cmkuok' },
  { name: '羅曉彤', profile_photo: '', cls: '19-k2c', username: 'htlaw' },
  { name: '李麗詩', profile_photo: '', cls: '19-k3a', username: 'cclei' },
  { name: '李麗僑', profile_photo: '', cls: '19-k3a', username: 'lqli' },
  { name: '周穎詩', profile_photo: '', cls: '19-k3b', username: 'wschao' },
  { name: '陳綺雯', profile_photo: '', cls: '19-k3b', username: 'imchan' },
  { name: '麥綺琪', profile_photo: '', cls: '19-k3c', username: 'ikmak' },
  { name: '何倩馨', profile_photo: '', cls: '19-k3c', username: 'shho' },
  { name: '麥麗玲', profile_photo: '', cls: '19-k3d', username: 'llmak' },
  { name: '葉玉琪', profile_photo: '', cls: '19-k3d', username: 'ikip' },

  { name: '吳紫燕', profile_photo: '', username: 'cing' },
  { name: '湯美琪', profile_photo: '', username: 'mktong' },
  { name: '劉寶珠', profile_photo: '', username: 'mttkyi' },
  { name: '曾淑玲', profile_photo: '', username: 'slchang', is_admin: true },
  { name: '黃唐珊', profile_photo: '', username: 'tswong' }
]

const cdsj1TeachersSchoolusers = []

const generateCDSJ1TeachersSchoolusers = (uuid, ctx) => {
  for (let teacherIndex = 0; teacherIndex < teacherData.length; ++teacherIndex) {
    cdsj1TeachersSchoolusers.push({
      id: uuid(),
      ...teacherData[teacherIndex],
      email: `${teacherData[teacherIndex].username}@cdsj.edu.mo`,
      is_admin: !!teacherData[teacherIndex].is_admin,
      is_teacher: true,
      groups: ['teacher'],
      created_at: new Date(),
      user_id: ctx.users.obj[teacherData[teacherIndex].username].id,
      school_id: ctx.schools.obj['school-cdsj1'].id
    })
  }

  return cdsj1TeachersSchoolusers
}

const cdsj1TeachersUsers = []

const generateCDSJ1TeachersUsers = (uuid) => {
  for (let teacherIndex = 0; teacherIndex < teacherData.length; ++teacherIndex) {
    cdsj1TeachersUsers.push({
      ...teacherData[teacherIndex],
      id: uuid(),
      is_admin: false,
      groups: ['teacher'],
      created_at: new Date(),
      email: `${teacherData[teacherIndex].username}@cdsj.edu.mo`
    })
  }

  return cdsj1TeachersUsers
}

module.exports = {
  teacherData,
  cdsj1TeachersSchoolusers,
  generateCDSJ1TeachersSchoolusers,
  cdsj1TeachersUsers,
  generateCDSJ1TeachersUsers
}
