import DashboardNav from "../common/DashboardNav";
import Drawer from "../common/Drawer";
import PromoCard from "../common/PromoCard";
import DateInput from "../common/forms/DateInput";

const Orders = () => {
  return (
    <div className=" bg-white">
      <Drawer
        active="orders"
        content={
          <>
            <DashboardNav title="Orders" />
            <div className="grid xl:grid-cols-3 px-10 py-20 xl:py-10">
              <div className="xl:col-span-2">
                <div>
                  <h1>My Orders</h1>
                  <div>
                    <DateInput />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-bold">Promotions</p>
                <PromoCard />
                <PromoCard />
                <PromoCard />
              </div>
            </div>
          </>
        }
      />
    </div>
  );
};

export default Orders;
