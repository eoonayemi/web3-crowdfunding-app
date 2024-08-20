import { Logo, CustomButton, SearchBox, MenuDrawer } from "../components";
import { Menu } from "../assets/icons";
import { thirdweb } from "../assets/svg";
import { useState } from "react";
import { useContractContext } from "../contexts";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { connectWallet, isConnecting, address } = useContractContext();
  const navigate = useNavigate();
  console.log("Address from TopBar", address);
  return (
    <div className="flex justify-between items-center sm:shadow-none sm:bg-transparent sm:static fixed inset-x-0 bg-[#1c1c24] bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0 p-4 sm:p-0 mb-5 sm:mb-0 sm:mt-5 z-10">
      <div className="sm:hidden">
        <Logo />
      </div>

      <div className="max-md:hidden lg:w-[30rem]">
        <SearchBox />
      </div>

      <div className="max-sm:hidden flex justify-end items-center gap-5 flex-1">
        {address ? (
          <CustomButton
            label={"Create a Campaign"}
            styles={"bg-primary-b"}
            onClick={() => navigate("/create-campaign")}
          />
        ) : (
          <CustomButton
            label={isConnecting ? "Connecting" : "Connect"}
            styles={"bg-violet-500"}
            onClick={() => connectWallet()}
            disabled={isConnecting}
          />
        )}
        <button className="bg-[#1c1c24] rounded-full">
          {/* <Wallet className="text-slate-500 text-xl" /> */}
          <img src={thirdweb} alt="thirdweb" className="w-12" />
        </button>
      </div>

      <div className="sm:hidden" onClick={() => setOpenDrawer((val) => !val)}>
        <Menu className="text-slate-500 text-[2.5rem]" />
      </div>

      <MenuDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </div>
  );
};

export default TopBar;
