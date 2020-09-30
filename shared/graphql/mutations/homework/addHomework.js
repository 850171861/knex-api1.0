import gql from 'graphql-tag'
export const createHomework = gql`
  mutation AddHomeworkMutation($title:String,$content:String){
    createHomework(title:$title,content:$content){
      title
    }
  }
`
