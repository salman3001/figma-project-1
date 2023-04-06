import { ReactNode } from "react";

interface IDrawer {
  content: ReactNode;
}

function Drawer(prop: IDrawer) {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* <!-- Page content here --> */}
        {prop.content}
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <div className="menu flex flex-col justify-between items-center p-4 w-80 bg-[#03444F] text-white">
          {/* <!-- Sidebar content here --> */}
          <div className="w-full flex flex-col items-center justify-center">
            <img
              src={
                import.meta.env.VITE_BASE_URL + "/images/launder-logo-white.svg"
              }
              alt=""
            />
            <div className="divider"></div>
          </div>
          <div className="flex grow  flex-col items-center gap-5 py-8 ">
            <div className="rounded-full ring-8 p-1 overflow-hidden ring-white ">
              <img
                src={import.meta.env.VITE_BASE_URL + "/images/Avatar.png"}
                alt=""
              />
            </div>
            <p className="text-2xl font-bold">Jackson Howell </p>
            <ul className="w-48">
              <li className="">
                <a className="flex  items-center w-full">
                  <img
                    src={import.meta.env.VITE_BASE_URL + "/images/orders.svg"}
                    className="bg-white p-1 rounded-lg"
                    alt=""
                  />
                  <p>Orders</p>
                </a>
              </li>
              <li className="">
                <a className="flex  items-center w-full">
                  <img
                    src={import.meta.env.VITE_BASE_URL + "/images/orders.svg"}
                    className="bg-white p-1 rounded-lg"
                    alt=""
                  />
                  <p>promotions</p>
                </a>
              </li>
              <li className="">
                <a className="flex  items-center w-full">
                  <img
                    src={import.meta.env.VITE_BASE_URL + "/images/orders.svg"}
                    className="bg-white p-1 rounded-lg"
                    alt=""
                  />
                  <p>My Account</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col py-12">
            <div className="divider"></div>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
