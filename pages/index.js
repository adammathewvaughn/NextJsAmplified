/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import {
  Button,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import styles from '../styles/Home.module.css'
import { Form, Formik, Field } from "formik";

// function FormikExample() {
// }

export default function Index() {
  const [name, setName] = useState("Sasuke"); // or do just ("") like below
  const [email, setEmail] = useState("");

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  function handleSubmit(name, email) {
    setName(name);
    setEmail(email);
    // possibly call validateName here?
  }

  return (
    <div className={styles.cheyenne}>
      <Formik
        initialValues={{ name, email }}
        onSubmit={(values, actions) => {
          alert("hey");
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form noValidate={true}>
            {/* <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>First name</FormLabel>
                <Input {...field} placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field> */}

            <FormLabel>Email</FormLabel>
            <Field type="email" name="email" placeholder="Enter email" />
 
            <Field type="email" name="name" validate={validateName}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>First name</FormLabel>
                {/* <Input {...field} placeholder="name" /> */}
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
            {/* </Field> */}
            
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
