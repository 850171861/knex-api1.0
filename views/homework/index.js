import Link from 'next/link'
import { useQuery } from '@apollo/client'

import {
  Button,
  Flex,
  Box,
  Text,
  Radio,
  RadioGroup,
  Heading
} from '@chakra-ui/core'
import HomeworkDef from '../../components/homeworkDef'
import HomeworkList from './homeworkList'

import { getHomework } from '../../shared/graphql/queries/homework/getHomework'

const HomeworkData = () => {
  const { loading, error, data } = useQuery(getHomework)
  if (loading) return null
  if (error) return null
  console.log(data)
  const abc = data.check_work.map((item, index) => (
    <Link key={index} href='./homework/homeworkContent/index'>
      <a>
        <HomeworkList data={item} />
      </a>
    </Link>
  ))
  return abc
}

const Index = () => {
  return (
    <HomeworkDef>
      <Flex>
        <Flex flex='1'>
          <Button bg='white' color='#78A9F3' border='1px solid #78A9F3' rounded='100px' width='100%'>發佈作業</Button>
        </Flex>
        <Flex w='80%' justify='center'>
          <Text fontSize={['sm', 'md', 'lg', 'xl']}>作業列表</Text>
        </Flex>
        <Flex flex='1'>
          <Button bg='white' color='#78A9F3' border='1px solid #78A9F3' rounded='100px' width='100%'>Stem</Button>
        </Flex>
      </Flex>
      <Flex w='85%' m='0 auto' mt='20px' borderBottom='1px solid #717171' pb='10px'>
        <Flex align='center'>
          <RadioGroup isInline defaultValue='1' spacing={150}>
            <Radio size='lg' value='1' variantColor='blue'>
            全部
            </Radio>
            <Radio size='lg' value='2' variantColor='blue'>
            從
            </Radio>
          </RadioGroup>
        </Flex>
        <Flex align='center' fontSize={['5px', '10px', '15px', '1.4rem']}>
          <Text p='2px 5px' m='0 5px' bg='#C4C4C4' border='1px solid black'>2020-09-24</Text>
          <Text>到</Text>
          <Text p='2px 5px' m='0 5px' bg='#C4C4C4' border='1px solid black'>2020-09-24</Text>
          <Text mr='10px'>時間段記錄</Text>
          <Button
            bg='#4193CE'
            color='white'
            border='1px solid black'
            rounded='1%'
            size='md'
            h='30px'
          >過濾
          </Button>
        </Flex>
      </Flex>
      <Box w='70%' m='0 auto'>
        <HomeworkData />
      </Box>
    </HomeworkDef>
  )
}

export default Index
