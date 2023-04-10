const Label = (prop: { titile: string; for?: string }) => {
  return <label htmlFor={prop.for}>{prop.titile}</label>;
};

export default Label;
