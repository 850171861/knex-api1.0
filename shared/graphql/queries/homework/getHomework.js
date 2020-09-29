import gql from 'graphql-tag'
export const getHomework = gql`
  query getHomeworkQuery {
    homeworksByClsId(clsId:"40000000-0000-0000-0000-000000000093"){
      id
      # seq_id
      # created_at
      # modifiedAt
      # deletedAt
      # schoolId
      # cls_id
      # course_id
      # creator_id
      title
      # content
      # fraction
      # submit_at
      issued_at
      # allowSubmit_at
      end_at
      count
    }
  }
`
