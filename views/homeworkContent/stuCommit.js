// import Link from 'next/link'
import {
  Box,
  Heading,
  Text,
  Flex,
  Textarea,
  Button,
  Grid,
  Image
} from '@chakra-ui/core'
// import { GrSearch } from 'react-icons/gr'
import { Formik } from 'formik'
export default function homeworkList () {
  return (
    <Box>
      <Flex alignItems='center'>
        <Text as='span' d='inline-block' bg='#C4C4C4' h='1px' flex='1' />
        <Heading as='h2' size='xl' flex='1'>提交作業</Heading>
        <Text as='span' d='inline-block' bg='#C4C4C4' h='1px' flex='1' />
      </Flex>
      <Formik
        initialValues={{ name: 'jared' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <Flex>
              <Text flexBasis='90px'>作業説明：</Text>
              <Textarea
                type='text'
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name='name'
                size='sm'
              />
            </Flex>
            <Flex mt='20px' textAlign='start'>
              <Box flexBasis='80px'>
                <Text>
                  上傳附件：
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
            <Button type='submit' variantColor='green' mt='20px'>提交</Button>
          </form>
        )}
      />
    </Box>
  )
}
