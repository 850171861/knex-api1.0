/**
 * @namespace ClsMember
 */

/**
 * @name db.schoolusers_classes
 * @memberof ClsMember
 * @instance
 * @param doc
 * @param {UUID} doc.id uuid
 * @param {Int} doc.seq_id 短 id
 * @param {Date} doc.created_at 建立時間
 * @param {Date} doc.modified_at 修改時間
 * @param {Date} doc.deleted_at 刪除時間
 * @param {String} doc.schooluser_id schooluser id
 * @param {String} doc.cls_id 班 id
 * @param {Boolean} doc.is_student 是否學生
 * @param {Boolean} doc.is_cls_teacher 是否班主任
 * @param {Boolean} doc.is_teacher 是否老師
 * @param {Int} doc.num 學生專有，學號
 * @param {Date} doc.archived_at 已封存的日期, 什麼時候會封存，例如轉班
 * @param {String} doc.school_dashboard_id Dashboard id
 * @param {String} doc.school_id 學校 id
 */

// - id: uuid
// - seq_id: 短 id
// - created_at: 建立時間
// - modified_at: 修改時間
// - deleted_at: 刪除時間
// - schooluser_id: schooluser id
// - cls_id: 班 id
// - is_student: 是否學生
// - is_cls_teacher: 是否班主任
// - is_teacher: 是否老師
// - num: 學生專有，學號
// - archived_at: 已封存的日期, 什麼時候會封存，例如轉班
// - school_dashboard_id: Dashboard id
// - school_id: 學校 id

/**
 * @name Type.ClsMember
 * @memberof ClsMember
 * @instance
 *
 * @param ClsMember
 * @param {UUID} ClsMember.id uuid
 * @param {Int} ClsMember.seqId 短 id
 * @param {Date} ClsMember.createdAt 建立時間
 * @param {Date} ClsMember.modifiedAt 修改時間
 * @param {Date} ClsMember.deletedAt 刪除時間
 * @param {String} ClsMember.schooluserId schooluser id
 * @param {String} ClsMember.clsId 班 id
 * @param {Boolean} ClsMember.isStudent 是否學生
 * @param {Boolean} ClsMember.isClsTeacher 是否班主任
 * @param {Boolean} ClsMember.isTeacher 是否老師
 * @param {Int} ClsMember.num 學生專有，學號
 * @param {Date} ClsMember.archivedAt 已封存的日期, 什麼時候會封存，例如轉班
 * @param {String} ClsMember.schoolDashboardId Dashboard id
 * @param {String} ClsMember.schoolId 學校 id
 */

/**
 * @name Query.clsMember
 * @memberof ClsMember
 * @instance
 * @function
 * @param {ID} id uuid or seq id
 * @returns {ClsMember} ClsMember Type
 */
/**
 * @name Mutation.addClsMember
 * @memberof ClsMember
 * @instance
 * @function
 * @param {ID} id uuid or seq id
 * @returns {ClsMember} ClsMember Type
 */
/**
 * @name Mutation.editClsMember
 * @memberof ClsMember
 * @instance
 * @function
 * @param {ID} id uuid or seq id
 * @returns {ClsMember} ClsMember Type
 */
/**
 * @name Mutation.removeClsMember
 * @memberof ClsMember
 * @instance
 * @function
 * @param {ID} id uuid or seq id
 * @returns {ClsMember} ClsMember Type
 */

const ClsMember = /* GraphQL */`
  type ClsMember{
    # uuid
    id: ID!
    # 短id
    seqId: Int
    # 建立時間
    createdAt: Date!
    # 修改時間
    modifiedAt: Date
    # 對應用戶的id
    schooluserId: String
    # 對應班級的id
    clsId: String
    # 在班上的學號，只有學生才有
    num: Int
    # 是否為學生
    isStudent: Boolean
    # 是否為班主任
    isClsTeacher: Boolean
    # 是否為老師
    isTeacher: Boolean
  }

`
module.exports = ClsMember

