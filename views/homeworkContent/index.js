import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import React, { useState } from 'react'

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
import HomeworkTabList from './tabList'
import StuCommit from './stuCommit'

const Index = () => {
  const [teaORstu, setTeaORstu] = useState(true) // 模擬學生或老師
  const rolesChange = () => setTeaORstu(!teaORstu)
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
            <Box w='80%'>
              <Textarea
                placeholder='test'
              />
            </Box>
          </Flex>
          <Text textAlign={['left']} mt='20px'>作業對象：全班同學</Text>
          <Flex mt='20px' textAlign='start'>
            <Box flexBasis='80px'>
              <Text>
                作業附件：
              </Text>
            </Box>
            <Box flex='1'>
              <Box mb='20px'>
                <Button variantColor='teal' variant='outline' h='24px' mr='10px'>查看附件</Button>
                <span>3個附件</span>
              </Box>
              <Grid
                flex='1'
                templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                gap={6}
              >
                <Image src='https://bit.ly/sage-adebayo' />
                <Image src='https://bit.ly/sage-adebayo' />
                <Image src='https://bit.ly/sage-adebayo' />
              </Grid>
            </Box>
          </Flex>
          <Button onClick={rolesChange}>切換角色暫時用於測試</Button>
          {teaORstu ? <HomeworkTabList /> : <StuCommit />}
        </Box>
      </Box>
    </HomeworkDef>
  )
}

export default Index
