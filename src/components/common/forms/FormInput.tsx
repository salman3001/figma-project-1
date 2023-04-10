const FormInput = (prop: {
  placeholder: string;
  name: string;
  type: string;
}) => {
  return (
    <input
      className=" "
      type={prop.type}
      name={prop.name}
      id=""
      placeholder={prop.placeholder}
    />
  );
};

export default FormInput;
