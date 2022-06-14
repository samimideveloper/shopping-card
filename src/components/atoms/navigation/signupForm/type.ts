import { createFormContext } from "react-hook-form-context";

export interface signupFormProps {
  name: string;
  email: string;
  phoneNumber: number;
  password: string | number;
}

export const signupFormInitialValue: signupFormProps = {
  email: "",
  name: "",
  phoneNumber: 0,
  password: "",
};
export const SignUpFormContext = createFormContext(signupFormInitialValue);
