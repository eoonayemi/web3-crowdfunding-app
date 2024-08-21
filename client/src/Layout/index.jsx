/* eslint-disable react/prop-types */
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import SearchBox from "../components/SearchBox";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex gap-6 sm:gap-10 xl:gap-28 md:gap-12 overflow-hidden h-screen">
      <SideBar />
      <div className="flex-1 overflow-y-auto">
        <div className="flex px-5 pb-4 flex-col gap-5 sm:mr-10 xl:mr-28 md:mr-12">
          <TopBar />
          <div className="md:hidden sm:w-[27rem] mt-24 sm:mt-0">
            <SearchBox />
          </div>
          <div className="flex flex-col gap-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
