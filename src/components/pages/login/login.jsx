import { View } from "reactjs-view";
import { Input } from "../../../common/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import useStyles from "./style";

const initialValues = {
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is Required")
    .email("Inalid Email format"),
  password: Yup.string().required("password is Required"),
});

const Login = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  const classes = useStyles();
  return (
    <View className={classes.main}>
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="email" label="Email" type="email" />

        <Input
          formik={formik}
          name="password"
          label="password"
          type="password"
        />

        <View style={{ paddingBlock: 16 }}>
          <button type="submit" disabled={!formik.isValid}>
            ورود
          </button>
        </View>
      </form>
    </View>
  );
};
export { Login };
