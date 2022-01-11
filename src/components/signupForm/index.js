import { View } from "reactjs-view";
import { Input } from "../../common/input";
import { useFormik } from "formik";
import * as Yup from "Yup";

const initialValues = {
	name: "",
	email: "",
	phoneNumber: "",
	password: "",
	passwordConfirm: "",
};
const onSubmit = (values) => {
	console.log(values);
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
	password: Yup.string()
		.required("password is Required")
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			"Must contain 8 character",
		),
	passwordConfirm: Yup.string()
		.required("pasword confirm is required")
		.oneOf([Yup.ref("password"), null], "password must match"),
});

const SignUpForm = () => {
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
		validateOnMount: true,
	});
	return (
		<View>
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
				<button type="submit" disabled={!formik.isValid}></button>
			</form>
		</View>
	);
};
export { SignUpForm };
