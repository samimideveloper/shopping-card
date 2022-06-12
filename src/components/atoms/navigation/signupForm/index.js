import { View, Text } from "reactjs-view";
import { Input } from "../../../../common/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../../core/constans/routes";
import useStyle from "./style";
import { useState } from "react";
import { SignUpUser } from "../../../../services/signUpService";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .min(6, "Name lenght is not valid"),
  email: Yup.string()
    .required("Email is Required")
    .email("Inalid Email format"),
  phoneNumber: Yup.string()
    .required("phoneNumber is Required")
    .matches(/^[0-9]{11}$/, "invalid Phone number")
    .nullable(),
  password: Yup.string().required("password is Required"),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Must contain 8 character"
  // )
  passwordConfirm: Yup.string()
    .required("pasword confirm is required")
    .oneOf([Yup.ref("password"), null], "password must match"),
});

const SignUpForm = (props) => {
  console.log(props);
  const classes = useStyle();
  const navigate = useNavigate();
  const [error, seterror] = useState(null);
  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;

    const userData = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };
    try {
      const { data } = await SignUpUser(userData);
      navigate(Routes.homepage.template());
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        seterror(error.response.data.message);
      }
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <View className={classes.main}>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="name" label="Name" />
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="phoneNumber"
          label="phone Number"
          type="tel"
        />
        <Input
          formik={formik}
          name="password"
          label="password"
          type="password"
        />
        <Input
          formik={formik}
          name="passwordConfirm"
          label="password Confirm"
          type="password"
        />
        <View style={{ paddingBlock: 16 }}>
          <button type="submit" disabled={!formik.isValid}>
            ثبت نام
          </button>
          {error && (
            <Text style={{ marginBlock: 8 }} size={16} color="red">
              {error}
            </Text>
          )}
        </View>
        <button onClick={() => navigate(Routes.login.template())}>
          قبلا ثبت نام کرده اید؟
        </button>
      </form>
    </View>
  );
};
export { SignUpForm };
