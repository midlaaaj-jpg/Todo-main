
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name is too short")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

const FormikLgn = () => {
  return (
    <div>
      <h1>Signup</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name" placeholder="Name" />

            {errors.name && touched.name ? (
              <div>{errors.name}</div>
            ) : null}

            <Field
              name="email"
              type="email"
              placeholder="Email"
            />

            {errors.email && touched.email ? (
              <div>{errors.email}</div>
            ) : null}

            <Field
              name="password"
              type="password"
              placeholder="Password"
            />

            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}

            <Field
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />

            {errors.confirmPassword && touched.confirmPassword ? (
              <div>{errors.confirmPassword}</div>
            ) : null}

            <button type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikLgn;

