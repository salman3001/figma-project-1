const Section6 = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <Card />
          <img
            src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Section6;

const Card = () => (
  <div className="bg-[#F5F7F9] p-8 rounded-2xl  flex flex-col gap-2">
    <img src="/images/bluestars.svg" className="h-4 self-start " alt="" />
    <h1 className="text-xl font-bold">Great design and support</h1>
    <p className="text-[#545252]">
      It is a long established fact that a reader will be distracted by the
      readable content
    </p>
    <p className="pt-4 text-[#545252]">Natalia Ramos </p>
  </div>
);
