import DashboardNav from "../common/DashboardNav";
import Drawer from "../common/Drawer";
import PromoCard from "../common/PromoCard";

const Promotions2 = () => {
  return (
    <div className=" bg-white">
      <Drawer
        active="promo"
        content={
          <>
            <DashboardNav title="Promotions" />
            <div className="flex flex-col px-10 gap-8 py-20 xl:py-10">
              <h1 className="text-4xl font-bold">Promotions</h1>
              <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                <PromoCard />
                <PromoCard />
                <PromoCard />
                <PromoCard />
                <PromoCard />
                <PromoCard />
                <PromoCard />
                <PromoCard />
                <PromoCard />
              </div>
            </div>
          </>
        }
        modelContent={
          <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
            <p className="font-bold text-xl">Don't miss out...</p>
            <p className="text-4xl font-semibold text-[#03444F]">
              Get 15% off on your order!
            </p>
            <p className="text-[#BBBBBB] text-xl">
              Use discount code below and{" "}
              <span className="text-[#00A5BF] font-bold">save 15%</span> on this
              order
            </p>
            <p className="w-full p-4 bg-[#00A5BF] text-center text-xl rounded-lg border-dashed border-black border-2">
              SAVE15NOW
            </p>
          </div>
        }
        modelstate="checked"
      />
    </div>
  );
};

export default Promotions2;
