import { View, Text } from "reactjs-view";

interface InputProps {
  label?: string;
  name: string;
  type?: string;
  formik?: any;
}

const Input = ({ label, name, formik, type = "text" }: InputProps) => {
  return (
    <View>
      <Text color="#000">{label}</Text>
      <input
        id={name}
        type={type}
        {...formik.getFieldProps(name)}
        name={name}
      />
      {formik.errors[name] && formik.touched[name] && (
        <View>{formik.errors?.[name]}</View>
      )}
    </View>
  );
};

export { Input };
