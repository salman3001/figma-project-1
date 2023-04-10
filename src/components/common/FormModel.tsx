import { ReactNode } from "react";

interface IProp {
  content: ReactNode;
}

const FormModel = (prop: IProp) => {
  return (
    <>
      <input
        type="checkbox"
        className="peer hidden h-0 w-0"
        id="modal-check"
        name="modal-check"
      />
      <div className="backdrop-brightness-[30%] p-10 flex  justify-center items-center fixed container2  h-screen w-full peer-checked:hidden visible ">
        <div className="grow max-w-2xl rounded-xl relative h-1/2 bg-white flex flex-col items-center justify-center p-16 gap-6">
          <label
            htmlFor="modal-check"
            className="absolute top-5 font-[10] cursor-pointer opacity-60 text-4xl right-6"
          >
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
            >
              <line
                x1="26.7285"
                y1="1.68637"
                x2="2.68689"
                y2="25.728"
                stroke="#827575"
                stroke-width="2"
                stroke-linecap="round"
              />
              <line
                x1="1"
                y1="-1"
                x2="35"
                y2="-1"
                transform="matrix(-0.707107 -0.707107 0.621422 -0.783476 26.7285 25.728)"
                stroke="#827575"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </label>
          {prop.content}
        </div>
      </div>
    </>
  );
};

export default FormModel;
