import React from "react";

const DateInput = () => {
  return (
    <div className="relative">
      <input
        type="date"
        name="orderDate"
        className="border  p-2 rounded-lg"
        placeholder="2 Feb 2023 - 12 Feb 2023"
      />
      <label htmlFor="orderDate" className="absolute">
        Date
      </label>
    </div>
  );
};

export default DateInput;
