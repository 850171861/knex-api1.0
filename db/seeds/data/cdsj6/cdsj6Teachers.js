const teacherData = [
  { name: '曾淑頤', profile_photo: '', username: 'sitsang', courses: ['rewohi1920s3aa', 'rewohi1920s3ab', 'rewohi1920s2aa', 'rewohi1920s2ab', 'rehist1920j3a', 'rehist1920j3b', 'rehist1920j3c', 'rehist1920j1a', 'rehist1920j1b'] },
  { name: '梁芷彤', profile_photo: '', username: 'ctleong', courses: ['rewohi1920s1aa', 'rewohi1920s1ab', 'rechhi1920s3aa', 'rehist1920s1sa', 'rehist1920j1c', 'rehist1920j1d'] },
  { name: '黃惠玲', profile_photo: '', username: 'vlvong', courses: ['rechhi1920s3ab'] },
  { name: '鄧頌賢', profile_photo: '', username: 'cytang', courses: ['rechhi1920s2aa', 'rechhi1920s2ab', 'rechhi1920s1aa', 'rechhi1920s1ab', 'recied1920j3c', 'recied1920f3a', 'rehist1920j2a', 'rehist1920j2b', 'rehist1920j2c', 'rehist1920j2d'] },
  { name: '曾國瑩', profile_photo: '', username: 'kytseng', courses: ['rechin1920s3aa', 'rechin1920s2aa'] },
  { name: '梁詠琪', profile_photo: '', username: 'wkleong', cls: '19-s3ab', courses: ['rechin1920s3ab', 'rechin1920s3sa', 'rechin1920s2sa'] },
  { name: '陳玉華', profile_photo: '', username: 'iwchan', cls: '19-j1b', courses: ['rechin1920s1aa', 'rechin1920s1sa', 'rechin1920j1b'] },
  { name: '鄭秀嫻', profile_photo: '', username: 'shchiang', cls: '19-j2a', courses: ['rechin1920j2a', 'rechin1920j1a', 'rechin1920j1c'] },
  { name: '馮麗馨', profile_photo: '', username: 'lhfong', courses: ['rechin1920j2c', 'rereed1920s2aa', 'rereed1920s2ab', 'rereed1920s2sa', 'rereed1920j2a', 'rereed1920j2b', 'rereed1920j2c', 'rereed1920j2d'] },
  { name: '李小燕', profile_photo: '', username: 'silei', cls: '19-j2b', courses: ['rechin1920s1ab', 'rechin1920j2b', 'rechin1920j2d'] },
  { name: '林英傑', profile_photo: '', username: 'yklam', cls: '19-s2ab', courses: ['rechin1920s2ab', 'rechin1920j3a', 'rechin1920j3c'] },
  { name: '王茵茵', profile_photo: '', username: 'iiwong', cls: '19-f1a', courses: ['rechin1920j3b', 'rechin1920f3a', 'rechin1920f1a'] },
  { name: '范曉敏', profile_photo: '', username: 'hmfan', courses: ['rechin1920j1d', 'rechin1920f2a', 'remusi1920j2a', 'remusi1920j2b', 'remusi1920j2c', 'remusi1920j2d', 'remusi1920f3a', 'remusi1920f2a', 'remusi1920f1a'] },
  { name: '陳嘉敏', profile_photo: '', username: 'kmchan', courses: ['recied1920s3aa', 'recied1920s3ab', 'recied1920s3sa', 'recied1920j1a', 'recied1920j1b', 'recied1920j1c', 'recied1920j1d', 'recied1920f1a'] },
  { name: '陳彩玲', profile_photo: '', username: 'clting', courses: ['recied1920s2aa', 'recied1920s2ab', 'recied1920s2sa', 'recied1920s1aa', 'recied1920s1ab', 'recied1920s1sa', 'recied1920j3a', 'recied1920j3b', 'recied1920j2a', 'recied1920j2b', 'recied1920j2c', 'recied1920j2d', 'recied1920f2a'] },
  { name: '鍾蔚琳', profile_photo: '', username: 'wlchong', courses: ['recied1920j1c', 'recied1920j1d', 'reengl1920j1b'] },
  { name: '譚嘉儀', profile_photo: '', username: 'kitam', courses: ['recied1920s3aa', 'recied1920s3ab', 'recied1920s3sa'] },
  { name: '施雅芳', profile_photo: '', username: 'nfsi', cls: '19-j3c', courses: ['rechem1920s3sa', 'rechem1920s2sa', 'rescie1920j3b', 'rescie1920j3c', 'rescie1920j2d'] },
  { name: '謝啟師', profile_photo: '', username: 'ksche', cls: '19-j1c', courses: ['rechem1920s1sa', 'rescie1920s1aa', 'rescie1920j3a', 'rescie1920j1b', 'rescie1920j1c'] },
  { name: '彭碧愉', profile_photo: '', username: 'pupang', courses: ['regeog1920s3aa', 'regeog1920s3ab', 'regeog1920s2aa', 'regeog1920s2ab', 'regeog1920s2sa', 'regeog1920j1d'] },
  { name: '陳敏儀', profile_photo: '', username: 'moschan', courses: ['regeog1920s1aa', 'regeog1920s1ab', 'regeog1920j3a', 'regeog1920j3b', 'regeog1920j3c', 'regeog1920j2a', 'regeog1920j2b', 'regeog1920j2c', 'regeog1920j2d'] },
  { name: '梁雯意', profile_photo: '', username: 'mileong', courses: ['regeog1920j1a', 'regeog1920j1b', 'regeog1920j1c', 'regeog1920f3a', 'regeog1920f2a', 'regeog1920f1a'] },
  { name: '陳艷薇', profile_photo: '', username: 'ymchan', courses: ['rereed1920s1aa', 'rereed1920s1ab', 'rereed1920s1sa', 'rereed1920j3a', 'rereed1920j3b', 'rereed1920j3c', 'rereed1920j1a', 'rereed1920j1b', 'rereed1920j1c', 'rereed1920j1d', 'rereed1920f2a', 'rereed1920f1a'] },
  { name: '陳毅棟', profile_photo: '', username: 'ntchan', courses: ['rereed1920s3aa', 'rereed1920s3ab', 'rereed1920s3sa', 'rereed1920f3a', 'rereed1920f2a', 'rereed1920f1a'] },
  { name: '朱潔貞', profile_photo: '', username: 'kcchu', cls: '19-f3a', courses: ['remath1920s1sa', 'remath1920j2d', 'remath1920f3a', 'remath1920f2a'] },
  { name: '羅國源', profile_photo: '', username: 'kulo', courses: ['remath1920s3ab', 'remath1920j2a', 'remath1920j2b'] },
  { name: '盧浩然', profile_photo: '', username: 'hilou', courses: ['remath1920s3sa'] },
  { name: '陳榮成', profile_photo: '', username: 'wschan', cls: '19-j2d', courses: ['remath1920s3aa', 'remath1920j2c', 'remath1920j2d'] },
  { name: '吳素潔', profile_photo: '', username: 'skng', cls: '19-j3a', courses: ['remath1920j3a', 'remath1920j1b', 'remath1920j1c'] },
  { name: '黃志恆', profile_photo: '', username: 'chwong', cls: '19-s1sa', courses: ['remath1920s2aa', 'remath1920s2ab', 'remath1920s1sa'] },
  { name: '陳子健', profile_photo: '', username: 'ckchan', cls: '19-j1a', courses: ['remath1920j3b', 'remath1920j3c', 'remath1920j1a'] },
  { name: '潘迪恆', profile_photo: '', username: 'thpun', courses: ['remath1920f1a', 'rescie1920f3a', 'rescie1920f2a', 'rescie1920f1a'] },
  { name: '王漪', profile_photo: '', username: 'iwong', cls: '19-s1ab', courses: ['remath1920s1aa', 'remath1920s1ab', 'remath1920j1d'] },
  { name: '陳鳯陽', profile_photo: '', username: 'fichan', courses: ['remath1920s2sa'] },
  { name: '盧敏紅', profile_photo: '', username: 'mhlou', cls: '19-s1aa', courses: ['reacco1920s3aa', 'reacco1920s3ab', 'reacco1920s2aa', 'reacco1920s2ab', 'reacco1920s1aa', 'reacco1920s1ab'] },
  { name: '何秀霞', profile_photo: '', username: 'shho17', courses: ['rehist1920f2a', 'rehist1920f1a'] },
  { name: '吳志雄', profile_photo: '', username: 'chung', cls: '19-s3sa', courses: ['rehist1920f3a', 'reengl1920s3sa', 'reengl1920f3a'] },
  { name: '李偉傑', profile_photo: '', username: 'wklei', courses: ['rephys1920s3sa', 'rephys1920s2sa', 'rescie1920j2b', 'rescie1920j2c'] },
  { name: '施美姍', profile_photo: '', username: 'mssi', cls: '19-j1d', courses: ['rephys1920s1sa', 'rescie1920s1ab', 'rescie1920j2a', 'rescie1920j1a', 'rescie1920j1d'] },
  { name: '馬俊杰', profile_photo: '', username: 'ckma', cls: '19-s2sa', courses: ['rebiol1920s3sa', 'rebiol1920s2sa', 'rebiol1920s1sa', 'rescie1920s2aa', 'rescie1920s2ab'] },
  { name: '容子健', profile_photo: '', username: 'ckiong', courses: ['reviar1920s2aa', 'reviar1920s2ab', 'reviar1920s2sa', 'reviar1920s1aa', 'reviar1920s1ab', 'reviar1920s1sa', 'reviar1920j3a', 'reviar1920j3b', 'reviar1920j3c', 'reviar1920f2a', 'reviar1920f1a'] },
  { name: '藍煥瓊', profile_photo: '', username: 'wklam', courses: ['reviar1920j2a', 'reviar1920j2b', 'reviar1920j2c', 'reviar1920j2d', 'reviar1920j1a', 'reviar1920j1b', 'reviar1920j1c', 'reviar1920j1d', 'reviar1920f3a', 'reviar1920f2a', 'reviar1920f1a'] },
  { name: '鍾巧琳', profile_photo: '', username: 'hlchong', cls: '19-s3aa', courses: ['reengl1920s3aa', 'reengl1920s2ab', 'reengl1920j2a', 'reengl1920j2b', 'reengl1920j2c', 'reengl1920j2d'] },
  { name: '伍秋月', profile_photo: '', username: 'cung', courses: ['reengl1920s1sa', 'reengl1920j3a', 'reengl1920j3c'] },
  { name: 'Amanda', profile_photo: '', username: 'aman', courses: ['reengl1920j3a', 'reengl1920j3b', 'reengl1920j3c', 'reengl1920j1a', 'reengl1920j1b', 'reengl1920j1c', 'reengl1920j1d', 'reengl1920f3a', 'reengl1920f2a', 'reengl1920f1a'] },
  { name: '何慧怡', profile_photo: '', username: 'wiho', cls: '19-j2c', courses: ['reengl1920s1aa', 'reengl1920s1ab', 'reengl1920j2c'] },
  { name: '李詩嘉', profile_photo: '', username: 'sklei', cls: '19-j3b', courses: ['reengl1920j3b', 'reengl1920j1c', 'reengl1920j1d'] },
  { name: '呂曉熲', profile_photo: '', username: 'hwlui', cls: '19-f2a', courses: ['reengl1920s3ab', 'reengl1920j2a', 'reengl1920f2a'] },
  { name: '陳恆慧', profile_photo: '', username: 'hwchan', courses: ['reengl1920s2sa', 'reengl1920j1a'] },
  { name: '譚展鴻', profile_photo: '', username: 'chtam', cls: '19-s2aa', courses: ['reengl1920s2aa', 'reengl1920j2b', 'reengl1920j2d'] },
  { name: '何嘉穎', profile_photo: '', username: 'jsantos', courses: ['report1920s3aa', 'report1920s3ab', 'report1920s2aa', 'report1920s2ab', 'report1920j3a', 'report1920j3b', 'report1920j3c', 'report1920f3a', 'report1920f2a'] },
  { name: '周麗芳', profile_photo: '', username: 'lfchao', courses: ['report1920s1aa', 'report1920s1ab', 'report1920j2a', 'report1920j2b', 'report1920j2c', 'report1920j2d', 'report1920j1a', 'report1920j1c', 'report1920j1d'] },
  { name: '吳彥南', profile_photo: '', username: 'inng', courses: ['report1920j1b', 'report1920f1a'] },
  { name: '施嘉俊', profile_photo: '', username: 'kcsi', courses: ['recosc1920s3aa', 'recosc1920s3ab', 'recosc1920s3sa', 'recosc1920j3a', 'recosc1920j3b', 'recosc1920j3c', 'recosc1920f3a', 'recosc1920f2a', 'recosc1920f1a'] },
  { name: '李漢騏', profile_photo: '', username: 'hklei', courses: ['recosc1920s2aa', 'recosc1920s2ab', 'recosc1920s2sa', 'recosc1920s1aa', 'recosc1920s1ab', 'recosc1920s1sa'] },
  { name: '胡寶輝', profile_photo: '', username: 'pfvu', courses: ['recosc1920j2a', 'recosc1920j2b', 'recosc1920j2c', 'recosc1920j2d', 'recosc1920j1a', 'recosc1920j1b', 'recosc1920j1c', 'recosc1920j1d'] },
  { name: '梁清心', profile_photo: '', username: 'csleong', courses: ['remusi1920s2aa', 'remusi1920s2ab', 'remusi1920s2sa', 'remusi1920s1aa', 'remusi1920s1ab', 'remusi1920s1sa', 'remusi1920j3a', 'remusi1920j3b', 'remusi1920j3c', 'remusi1920j1a', 'remusi1920j1b', 'remusi1920j1c', 'remusi1920j1d', 'remusi1920f3a', 'remusi1920f2a', 'remusi1920f1a'] },
  { name: '梁翠娟', profile_photo: '', username: 'ckleong', courses: ['rephed1920s3sa', 'rephed1920s2aa', 'rephed1920s1aa', 'rephed1920j3a', 'rephed1920j2c', 'rephed1920j2d', 'rephed1920j1b', 'rephed1920j1d'] },
  { name: '李冠榮', profile_photo: '', username: 'kwlei', courses: ['rephed1920s3ab', 'rephed1920s2ab', 'rephed1920s1sa', 'rephed1920j3c', 'rephed1920j2b', 'rephed1920j2c', 'rephed1920j2d', 'rephed1920j1a', 'rephed1920j1c'] },
  { name: '湯振華', profile_photo: '', username: 'cwtong', courses: ['rephed1920s3aa', 'rephed1920s2sa', 'rephed1920s1ab', 'rephed1920j3b', 'rephed1920j2a', 'rephed1920j2b', 'rephed1920j1d'] },
  { name: '陳佩瑜', profile_photo: '', username: 'puchan', courses: ['rephed1920s3ab', 'rephed1920s2ab', 'rephed1920s1ab', 'rephed1920j3b', 'rephed1920j2a', 'rephed1920f3a', 'rephed1920f2a', 'rephed1920f1a'] }
]
const cdsj6TeachersSchoolusers = []

const generateCDSJ6TeachersSchoolusers = (uuid, ctx) => {
  teacherData.forEach((teacher, index) => {
    cdsj6TeachersSchoolusers.push({
      id: uuid(),
      ...teacher,
      email: `${teacher.username}@cdsj6.edu.mo`,
      is_admin: false,
      is_teacher: true,
      groups: ['teacher'],
      created_at: new Date(),
      user_id: ctx.users.obj[teacher.username].id,
      school_id: ctx.schools.obj['school-cdsj6'].id
    })
  })
  return cdsj6TeachersSchoolusers
}

const cdsj6TeachersUsers = []

const generateCDSJ6TeachersUsers = (uuid) => {
  teacherData.forEach((teacher, index) => {
    cdsj6TeachersUsers.push({
      ...teacher,
      id: uuid(),
      is_admin: false,
      groups: ['teacher'],
      created_at: new Date(),
      email: `${teacher.username}@cdsj6.edu.mo`
    })
  })
  return cdsj6TeachersUsers
}

module.exports = {
  teacherData,
  cdsj6TeachersSchoolusers,
  generateCDSJ6TeachersSchoolusers,
  cdsj6TeachersUsers,
  generateCDSJ6TeachersUsers
}
