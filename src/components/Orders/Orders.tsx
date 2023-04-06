import React from "react";
import DashboardNav from "../common/DashboardNav";
import Drawer from "../common/Drawer";

const Orders = () => {
  return (
    <div className="container  mx-auto bg-white">
      <Drawer
        content={
          <>
            <DashboardNav />
          </>
        }
      />
    </div>
  );
};

export default Orders;
