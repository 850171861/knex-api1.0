// import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

import {
  Textarea,
  Button,
  Image,
  Grid,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Flex,
  Text
} from '@chakra-ui/core'
import HomeworkDef from '../../components/homeworkDef'
import { Field, Form, Formik } from 'formik'

// import { createHomework } from '../../shared/graphql/mutations/homework/addHomework'

// const [addHomeworkInfo] = useMutation(createHomework)

const SbumitWork = () => {
  return (
    <HomeworkDef>
      <FormLabel htmlFor='name' fontSize={32} fontWeight={600}>發佈作業</FormLabel>
      <Box p='0 10%'>
        <Formik
          initialValues={{
            school: 'asd',
            title: '',
            content: '',
            end_at: ''
          }}
          onSubmit={(values, actions) => {
            console.log(values)
            // addHomeworkInfo(
            //   {
            //     variables: {
            //       title: values.title,
            //       content: values.content
            //     }
            //   })
            setTimeout(() => {
            // 取消button的提交的UI
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {props => (
            <Form onSubmit={props.handleSubmit}>
              <Field name='title'>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.title && form.touched.title}>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                      <Box width='120px' as='span'>作業名稱:</Box> <Input {...field} id='name' placeholder='作業名稱' />
                    </Box>
                    <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Box mt='20px' />
              <Field name='content'>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                      <Box width='120px' as='span'>作業說明:</Box> <Textarea {...field} placeholder='作業說明' />
                    </Box>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Box mt='20px' />
              <Field name='end_at'>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                      <Box width='120px' as='span'>截至時間:</Box>
                      <Box width='100%'>
                        <Input {...field} placeholder='截至時間' width='190px' />
                        {/* <Box flex='1' /> */}
                      </Box>
                    </Box>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Flex mt='20px'>
                <Text width='120px'>
                  作業對象:
                </Text>
                <Text width='100%' pr='1rem' textAlign='start'>
                  全班學生
                </Text>
              </Flex>
              <Box mt='10px' />
              <Field name='end_at'>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                      <Box width='120px' as='span'>作業附件:</Box>
                      <Box width='100%' mb='20px' textAlign='start' transform='translateY(36%)'>
                        <Button variantColor='teal' variant='outline' h='24px' mr='10px'>上傳附件</Button>
                        <span>3個附件</span>
                      </Box>
                    </Box>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Flex>
                <Box w='120px' />
                <Box w='100%'>
                  <Grid
                    templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                    gap={6}
                  >
                    <Image src='https://bit.ly/sage-adebayo' />
                    <Image src='https://bit.ly/sage-adebayo' />
                    <Image src='https://bit.ly/sage-adebayo' />
                  </Grid>
                </Box>
              </Flex>
              <Flex justifyContent='space-around' mt='20px'>
                <Button
                  size='lg'
                  variantColor='teal'
                  isLoading={props.isSubmitting}
                  type='submit'
                >
                  返回
                </Button>
                <Button
                  size='lg'
                  variantColor='teal'
                  isLoading={props.isSubmitting}
                  type='submit'
                >
                  發佈
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </HomeworkDef>
  )
}
export default SbumitWork
