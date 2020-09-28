import gql from 'graphql-tag'
export const getHomework = gql`
  query getHomeworkQuery {
    check_work(seq_id:100,class_id:"66",homework_id:"1"){
      seq_id
      created_at
      end_at
      sum
      title
      no_submit,
      and_submit
    }
  }
`
