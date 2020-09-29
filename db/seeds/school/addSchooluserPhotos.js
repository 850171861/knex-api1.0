const _ = require('lodash')

const { cdsj1StudentsSchoolusers } = require('../data/cdsj1/cdsj1Students')
const { cdsj6StudentsSchoolusers } = require('../data/cdsj6/cdsj6Students')
const { fatimaStudentsSchoolusers } = require('../data/fatima/fatimaStudents')
const { madalenaStudentsSchoolusers } = require('../data/madalena/madalenaStudents')

module.exports = async function (knex, ctx) {
  const schooluserPhotos = []

  // ** CDSJ1 **
  cdsj1StudentsSchoolusers.forEach(schooluser => {
    if (!schooluser.image_id) return
    schooluserPhotos.push({
      schooluser_id: schooluser.id,
      key: schooluser.profile_photo.replace('https://macau-school.s3-ap-northeast-1.amazonaws.com/', ''),
      url: schooluser.profile_photo,
      image_id: schooluser.image_id,
      face_id: schooluser.face_id,
      school_id: ctx.schools.obj['school-cdsj1'].id
    })
  })

  // ** CDSJ6 **
  cdsj6StudentsSchoolusers.forEach(schooluser => {
    if (!schooluser.image_id) return
    schooluserPhotos.push({
      schooluser_id: schooluser.id,
      key: schooluser.profile_photo.replace('https://macau-school.s3-ap-northeast-1.amazonaws.com/', ''),
      url: schooluser.profile_photo,
      image_id: schooluser.image_id,
      face_id: schooluser.face_id,
      school_id: ctx.schools.obj['school-cdsj6'].id
    })
  })

  // ** Fatima **
  fatimaStudentsSchoolusers.forEach(schooluser => {
    if (!schooluser.image_id) return
    schooluserPhotos.push({
      schooluser_id: schooluser.id,
      key: schooluser.profile_photo.replace('https://macau-school.s3-ap-northeast-1.amazonaws.com/', ''),
      url: schooluser.profile_photo,
      image_id: schooluser.image_id,
      face_id: schooluser.face_id,
      school_id: ctx.schools.obj['school-fatima'].id
    })
  })

  // ** Madalena **
  madalenaStudentsSchoolusers.forEach(schooluser => {
    if (!schooluser.image_id) return
    schooluserPhotos.push({
      schooluser_id: schooluser.id,
      key: schooluser.profile_photo.replace('https://macau-school.s3-ap-northeast-1.amazonaws.com/', ''),
      url: schooluser.profile_photo,
      image_id: schooluser.image_id,
      face_id: schooluser.face_id,
      school_id: ctx.schools.obj['school-madalena'].id
    })
  })

  // 資料庫操作
  const data = [...schooluserPhotos]
  while (data.length) {
    console.log('add schooluser photos data.length', data.length)

    const dataSplice = data.splice(0, 500)
    await knex('schooluser_photos').insert([...dataSplice])
  }

  // await knex('schooluser_photos').insert([
  //   ...schooluserPhotos
  // ])

  // 讀取資料
  const docs = [...schooluserPhotos]
  // const docs = await knex.select().table('schooluser_photos')

  // 返回
  ctx.schooluserPhotos = {
    docs,
    obj: _.keyBy(docs, (o) => {
      return o.id
    })
  }
}
