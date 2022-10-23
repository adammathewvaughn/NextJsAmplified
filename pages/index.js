/* eslint-disable react/jsx-no-undef */
import { React } from 'react';
import { div, Button, Avatar, AvatarBadge, AvatarGroup, FormControl, FormLabel, FormErrorMessage, FormHelperText, } from '@chakra-ui/react';

function Index() {
  return (
    function FormikExample() {
      function validateName(value) {
        let error
        if (!value) {
          error = 'Name is required'
        } else if (value.toLowerCase() !== 'naruto') {
          error = "Jeez! You're not a fan 😱"
        }
        return error
      }
    
      return (
        <Formik
          initialValues={{ name: 'Sasuke' }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {(props) => (
            <Form>
              <Field name='name' validate={validateName}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel>First name</FormLabel>
                    <Input {...field} placeholder='name' />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={4}
                colorScheme='teal'
                isLoading={props.isSubmitting}
                type='submit'
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      )
    }
    
  )
}

export default Index