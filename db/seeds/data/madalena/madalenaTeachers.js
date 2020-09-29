// 沒有的班主任資料： p3b 吳靜雯、p4a 黃嘉業
const teachersDate = [
  { name: '劉美玲', username: 'LauDosReisRita', cls: '', is_director: true },
  { name: '蔡兆明', username: 'ChoiSioMeng', cls: '', is_director: true },
  { name: '何潔冰', username: 'HoKitPeng', cls: '', is_director: true },
  { name: '沈美怡', username: 'SamMeiI', cls: '', is_director: true },
  { name: '何淑卿', username: 'HoSokHeng', cls: '' },
  { name: '幸紫茵', username: 'HangChiIan', cls: 'p2b' },
  { name: '李英', username: 'LeiIeng', cls: '' },
  { name: '吳少珊', username: 'NgSioSan', cls: 'p2a' },
  { name: '李淑芬', username: 'LeiSokFan', cls: 'p1a' },
  { name: '吳麗珊', username: 'NgLaiSan', cls: '' },
  { name: '李卓然', username: 'LeiCheokIn', cls: '' },
  { name: '龔情君', username: 'KongChengKuan', cls: 'p1b' },
  { name: '許美玲', username: 'HoiMeiLeng', cls: 'p3a' },
  { name: '曾月嫦', username: 'ChangUtSeong', cls: '' },
  { name: '唐思敏', username: 'TongSiMan', cls: '' },
  { name: '梅楚瑩', username: 'MuiChoIeng', cls: 'p6b' },
  { name: '岑偉康', username: 'SamWaiHong', cls: '', is_director: true },
  { name: '吳靜文', username: 'NgChengMan', cls: '' },
  { name: '廖振全', username: 'LioChanChun', cls: '', is_director: true },
  { name: '陳春梅', username: 'ChanChonMui', cls: 'p5b' },
  { name: '陳敬岷', username: 'ChanKengMan', cls: '' },
  { name: '王志杰', username: 'WongChiKit', cls: 'p6a' },
  { name: '李亨智', username: 'LeiHangChi', cls: 'p4b' },
  { name: '區奕軒', username: 'AoIekHin', cls: 'p5a' },
  { name: '黃家業', username: 'WongKaIp', cls: '' },
  { name: '何語軒', username: 'HoUHin', cls: '' },
  { name: '梁敏英', username: 'LeungArchesManYingMarina', cls: '' },
  { name: '譚冠烽', username: 'TamKunFong', cls: '' },
  { name: '梁芷晴', username: 'LeongChiCheng', cls: '' },
  { name: '施佩娜', username: 'SiPuiNa', cls: 'k1a' },
  { name: '唐鳳儀', username: 'TongFongI', cls: 'k2b' },
  { name: '劉友釵', username: 'LaoIaoChai', cls: 'k1c' },
  { name: '岑慧愉', username: 'SamWaiU', cls: 'k1b' },
  { name: '鄧利利', username: 'TangLeiLei', cls: 'k3a' },
  { name: '裴先妍', username: 'PuiSinIn', cls: 'k3c' },
  { name: '吳嘉敏', username: 'NgKaMan', cls: 'k2a' },
  { name: '毛沛欣', username: 'MouPuiIan', cls: 'k1b' },
  { name: '馮嘉寶', username: 'FongKaPou', cls: 'k2b' },
  { name: '葉詠詩', username: 'IpWengSi', cls: 'k3b' },
  { name: '陳慕儀', username: 'ChanMouI', cls: 'k1c' },
  { name: '高穎姿', username: 'KouWengChi', cls: 'k2c' },
  { name: '鄭嘉儀', username: 'CheangKaI', cls: 'k2a' },
  { name: '黃嵐萍', username: 'WongLamPeng', cls: 'k1a' },
  { name: '陳韻琦', username: 'ChanWanKei', cls: 'k3b' },
  { name: '符靜雯', username: 'FuChengMan', cls: 'k3a' },
  { name: '李芷惠', username: 'LeiChiWai', cls: 'k2c' },
  { name: '李啓誠', username: 'LeiKaiSeng', cls: '' },
  { name: '黃靜渟', username: 'WongChengTeng', cls: 'k3c' },
  { name: '張溢敏', username: 'CheongIatMan', cls: '' },
  { name: '巢曉嵐', username: 'ChauHioLam', cls: '' },
  { name: '趙柳金', username: 'ChioLaoKam', cls: '' },
  { name: '李萬慶', username: 'LeiManHeng', cls: '' },
  { name: '張妙霞', username: 'ZhangMiaoXia', cls: '' },
  { name: '張艷萍', username: 'CheongImPeng', cls: '' },
  { name: '李雯娟', username: 'LeiManKun', cls: '' },
  { name: '陳玉梅', username: 'ChanIokMui', cls: '' },
  { name: '劉思明', username: 'LauSiMeng', cls: '' },
  { name: '郭少金', username: 'KwokSiuKam', cls: '' },
  { name: '黃彩琴', username: 'WongChoiKam', cls: '' },
  { name: '陳詠儀', username: 'ChanWengI', cls: '' },
  { name: '林蘊華', username: 'LamVanVa', cls: '' },
]

const madalenaTeachersSchoolusers = []

const generateMadalenaTeachersSchoolusers = (uuid, ctx) => {
  teachersDate.forEach((teacher, index) => {
    madalenaTeachersSchoolusers.push({
      id: uuid(),
      ...teacher,
      email: `${teacher.username}@madalena.edu.mo`,
      is_admin: false,
      is_teacher: true,
      groups: ['teacher'],
      created_at: new Date(),
      user_id: ctx.users.obj[teacher.username].id,
      school_id: ctx.schools.obj['school-madalena'].id
    })
  })
  return madalenaTeachersSchoolusers
}

const madalenaTeachersUsers = []

const generateMadalenaTeachersUsers = (uuid) => {
  teachersDate.forEach((teacher, index) => {
    madalenaTeachersUsers.push({
      ...teacher,
      id: uuid(),
      is_admin: false,
      groups: ['teacher'],
      created_at: new Date(),
      email: `${teacher.username}@madalena.edu.mo`
    })
  })
  return madalenaTeachersUsers
}

module.exports = {
  teachersDate,
  madalenaTeachersSchoolusers,
  generateMadalenaTeachersSchoolusers,
  madalenaTeachersUsers,
  generateMadalenaTeachersUsers
}
