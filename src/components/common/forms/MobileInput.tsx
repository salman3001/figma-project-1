const MobileInput = (prop: { placeholder: string; name: string }) => {
  return (
    <div className="flex">
      <select className="w-[30%] border-y rounded-l-lg rounded-r-none">
        <option value="+1" className="flex justify-center text-center">
          +1
        </option>
        <option value="+1" className="flex justify-center text-center">
          +2
        </option>
        <option value="+1" className="flex justify-center text-center">
          +3
        </option>
      </select>
      <input
        className=" border p-4 w-full text-black rounded-l-none"
        type="number"
        name={prop.name}
        id=""
        placeholder={prop.placeholder}
        style={{
          borderBottomLeftRadius: "0px",
          borderTopLeftRadius: "0px",
        }}
      />
    </div>
  );
};

export default MobileInput;
