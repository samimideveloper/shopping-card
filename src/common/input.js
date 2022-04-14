import { View, Text } from "reactjs-view";
const Input = ({ label, name, formik, type = "text" }) => {
  return (
    <View>
      <Text color="#000" htmlFor={name}>
        {label}
      </Text>
      <input
        id={name}
        type={type}
        {...formik.getFieldProps(name)}
        name={name}
      />
      {formik.errors[name] && formik.touched[name] && (
        <View>{formik.errors[name]}</View>
      )}
    </View>
  );
};

export { Input };
