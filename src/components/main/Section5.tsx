export const Section5 = () => {
  return (
    <div className="bg-[#03444F] flex flex-col gap-4 p-20 pb-10 rounded-2xl m-20 w-full text-white">
      <div className="text-4xl font-bold">Ease to Made Laundry</div>
      <div>
        <div className="w-1/2">
          Mentioned below are our ever-growing list of services. All orders come
          with free delivery
        </div>
        <div className="flex gap-2 items-center justify-end hover:underline">
          <a href="">View More</a>
          <img src="/images/arrow.svg" alt="" className="h-3" />
        </div>
      </div>
      <div>
        <img src="/images/section5arts.svg" className="h-96" alt="" />
      </div>
    </div>
  );
};
