// import Link from 'next/link'
import {
  Box,
  Avatar,
  Flex,
  Text,
  Icon
} from '@chakra-ui/core'
// import { GrSearch } from 'react-icons/gr'
export default function homeworkList () {
  return (
    <Flex alignItems='center' p='10px' borderBottom='1px solid #CCCCCC'>
      <Avatar name='kita' src='../pic/1.jpg' mr='10px' />
      <Box textAlign='start'>
        <Text>姓名：kita</Text>
        <Text>學號：01</Text>
        <Text>評分：未評分</Text>
      </Box>
      <Box flex='1' />
      <Box fontSize='1.2rem' mr='3%'>
        準時交
      </Box>
      <Box
        bg='#4B8CEF'
        w='40px'
        h='40px'
        lineHeight='36px'
        borderRadius='7px'
      >
        <Icon name='search' color='white' size='22px' />
      </Box>
    </Flex>
  )
}
