import { Card1 } from "../common/Card1";
import Card2 from "../common/Card2";

const Section9 = () => {
  return (
    <div className="p-20 flex flex-col gap-16">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl font-bold">Recent blog post</h1>

        <p className="text-2xl text-[#141111] opacity-80">
          Get a question? we're here to answer!
        </p>
        <a
          href=""
          className="flex hover:underline gap-2 self-end  items-center text-2xl text-[#00A5BF]"
        >
          See all <img src="/images/arrowblue.svg" alt="" className="h-5" />
        </a>
      </div>
      <div className="w-full flex">
        <div className="w-[60%]">
          <Card1 />
        </div>
        <div className="w-[40%]">
          <Card2 />
        </div>
      </div>
    </div>
  );
};

export default Section9;
