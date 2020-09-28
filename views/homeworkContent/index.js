import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

import {
  Text,
  Heading,
  Textarea,
  Flex,
  Box,
  Button,
  Image,
  Grid
} from '@chakra-ui/core'

import HomeworkDef from '../../components/homeworkDef'
import HomeworkStu from './homeworkStu'
import HomeworkTabList from './homeworkStu'

const Index = () => {
  return (
    <HomeworkDef>
      <Box p='10px 30px'>
        <Heading as='h3' size='lg' mb='10px'>2020-09-25 K1A 語文作業</Heading>
        <Text borderBottom='1px solid black' pb='10px'>
        發佈時間：2020-09-24 18:00  截止時間：2020-09-25 08:30 滿分：100
        </Text>
        <Box p='0 15px'>
          <Flex mt='20px'>
            <Text>
            作業說明：
            </Text>
            <Flex w='80%'>
              <Textarea
                value='test'
                placeholder='Here is a sample placeholder'
                size='sm'
              />
            </Flex>
          </Flex>
          <Text textAlign={['left']} mt='20px'>作業對象：全班同學</Text>
          <Flex mt='20px'>
            <Box w='103%'>

            <Text>
                作業附件：
              </Text>
          </Box>
            <Box>
            <Box textAlign='start' mb='20px'>
                <Button variantColor='teal' variant='outline' h='24px' mr='10px'>查看附件</Button>
                <span>3個附件</span>
              </Box>
            <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
                <Image src='https://bit.ly/sage-adebayo' />
                <Image src='https://bit.ly/sage-adebayo' />
                <Image src='https://bit.ly/sage-adebayo' />
                <Image src='https://bit.ly/sage-adebayo' />
              </Grid>
          </Box>
          </Flex>
          <Text textAlign={['left']} mt='20px'>查看作業：</Text>
          <HomeworkTabList />
        </Box>
      </Box>
    </HomeworkDef>
  )
}

export default Index
