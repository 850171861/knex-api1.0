
import { useMutation } from '@apollo/client'
import {
  Flex,
  Heading,
  Box,
  Icon
} from '@chakra-ui/core'

import { delHomework } from '../../shared/graphql/mutations/homework/delHomework'

// 時間轉換
function time (val) {
  const Y = val.getFullYear()
  const M = val.getMonth() + 1
  const D = val.getDate()
  const H = val.getHours()
  const m = val.getMinutes()
  const S = val.getSeconds()
  return (Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + S)
}

const HomeworkList = ({ data }) => {
  const startTime = time(new Date(data.issued_at))
  const endTime = time(new Date(data.end_at))
  const [delTODO] = useMutation(delHomework)

  return (
    <Box mt='15px' borderBottom='1px solid #ACACAC' pb='10px' pos='relative'>
      <Heading as='h3' fontSize={['18px', '18px', '18px', '20px']}>
        <Flex justify='center'>
          <Flex mr='10px'>{data.title}</Flex>
        </Flex>
      </Heading>
      <Flex justify='center' fontSize={['5px', '10px', '15px', '20px']} mt='10px'>
        <Flex mr='10px' color='#727272'>全部人數：{data.count}</Flex>
        <Flex mr='10px' color='#0AAF25'>已提交人數5</Flex>
        <Flex mr='10px' color='#C10A0A'>未提交人數：4</Flex>
      </Flex>
      <Flex justify='center' fontSize={['5px', '10px', '15px', '20px']}>
        <Flex mr='10px' color='#727272'>發佈時間：{startTime}</Flex>
        <Flex mr='10px' color='#727272'>截止時間：{endTime}</Flex>
      </Flex>
      <Flex pos='absolute' top='0' right='0'>
        <Box bg='#4B8CEF' w='32px' h='32px' lineHeight='28px' mr='10px' borderRadius='7px'>
          <Icon name='edit' color='white' size='18px' />
        </Box>
        <Box
          bg='red.500'
          w='32px'
          h='32px'
          lineHeight='28px'
          borderRadius='7px'
          onClick={(e) => {
            e.preventDefault()
            console.log(333)
            console.log(data.id)
            delTODO({ variables: { id: data.id } })
          }}
        >
          <Icon name='delete' color='white' size='18px' />
        </Box>
      </Flex>
    </Box>
  )
}
export default HomeworkList
