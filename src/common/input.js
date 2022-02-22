import { View } from "reactjs-view";
const Input = ({ label, name, formik, type = "text" }) => {
  return (
    <View>
      <label htmlFor={name}>{label}</label>
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
