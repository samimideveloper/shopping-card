import { View } from "reactjs-view";
import { Input } from "../../../common/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import useStyles from "./style";
import { useState } from "react";
import { LoginUser } from "../../../services/loginService";
import { Text } from "reactjs-view";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../core/constans/routes";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is Required")
    .email("Inalid Email format"),
  password: Yup.string().required("password is Required"),
});

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      const { data } = await LoginUser(values);
      setError(null);
      navigate(Routes.homepage.template());
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.message);
      }
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  const classes = useStyles();
  return (
    <View className={classes.main}>
      <form onSubmit={formik.handleSubmit} style={{ width: 300 }}>
        <View>
          <Input formik={formik} name="email" label="Email" type="email" />
        </View>

        <View>
          <Input
            formik={formik}
            name="password"
            label="password"
            type="password"
          />
        </View>

        <View style={{ paddingBlock: 16 }}>
          <button type="submit" disabled={!formik.isValid}>
            ورود
          </button>
          {error && (
            <Text size={14} color="red">
              {" "}
              {error}
            </Text>
          )}
        </View>
      </form>
    </View>
  );
};
export { Login };
