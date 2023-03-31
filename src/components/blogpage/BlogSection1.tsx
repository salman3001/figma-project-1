import EmailSubscribe from "../common/EmailSubscribe";

const BlogSection1 = () => {
  return (
    <section className=" p-5 md:p-20 text-white ">
      <div className="bg-[#02A5BF] rounded-2xl p-5 md:p-20 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl">All blog posts</h1>
        <p className="opacity-80 max-w-sm justify-center">
          Mentioned below are our ever-growing list of services. All orders come
          with free delivery
        </p>
        <EmailSubscribe />
      </div>
    </section>
  );
};

export default BlogSection1;
