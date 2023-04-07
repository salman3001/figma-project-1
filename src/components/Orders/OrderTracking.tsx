import DashboardNav from "../common/DashboardNav";
import Drawer from "../common/Drawer";
import PromoCard from "../common/PromoCard";
import DateInput from "../common/forms/DateInput";
import SelectInput from "../common/forms/SelectInput";
import OrderCard from "../common/OrderCard";

const OrderTracking = () => {
  return (
    <div className=" bg-white">
      <Drawer
        active="orders"
        content={
          <>
            <DashboardNav title="Orders" />
            <div className="grid xl:grid-cols-3 px-10 gap-8 py-20 xl:py-10">
              <div className="xl:col-span-2 flex flex-col gap-4">
                <div className="flex justify-between flex-col gap-4 md:flex-row ">
                  <h1 className="text-4xl font-bold">My Orders</h1>
                  <div className="flex gap-2 flex-wrap">
                    <SelectInput
                      name="orderType"
                      options={["Upcomming", "option2", "Option3"]}
                      default="Upcomming"
                    />
                    <DateInput />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <OrderCard status="Processing" expanded={false} index={1} />
                  <OrderCard status="Delivered" expanded={false} index={2} />
                  <OrderCard status="Delivered" expanded={true} index={3} />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-2xl font-bold">Promotions</p>
                <PromoCard />
                <PromoCard />
                <PromoCard />
              </div>
            </div>
          </>
        }
        modelContent={
          <div className="w-full h-full flex justify-center items-center">
            <img
              src={
                import.meta.env.VITE_BASE_URL + "/images/Trackbar-assigned.svg"
              }
              alt=""
              className="h-full w-auto"
            />
          </div>
        }
        modelstate="checked"
      />
    </div>
  );
};

export default OrderTracking;
