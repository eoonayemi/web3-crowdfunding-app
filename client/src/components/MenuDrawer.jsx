/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
import { navlinks } from "./../constants/index";
import CustomButton from "./CustomButton";
import { useContractContext } from "../contexts";

const MenuDrawer = ({ openDrawer, setOpenDrawer }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { connectWallet, isConnecting, address } = useContractContext();

  const onMenuClick = ({ disabled, link }) => {
    if (!disabled) {
      navigate(link);
      setOpenDrawer(false);
    }
  };

  return (
    <div
      className={`fixed bg-[#1c1c24] top-[5rem] right-5 left-5 z-20 duration-500 transition-all shadow-custom ${
        openDrawer ? "translate-x-0" : "-translate-y-[50rem]"
      }`}
    >
      <ul className="py-3">
        {navlinks.map(({ name, link, Icon, disabled }) => (
          <li
            key={name}
            className={`${
              pathname === link
                ? "text-primary-b bg-[#2c2f32]"
                : "text-slate-500"
            } flex items-center gap-5 py-4 px-10 cursor-pointer`}
            onClick={() => onMenuClick({ disabled, link })}
          >
            <Icon className="text-xl" />
            <span className="capitalize">{name}</span>
          </li>
        ))}
      </ul>
      {address ? (
        <CustomButton
          label={"Create a Campaign"}
          styles={"bg-primary-b mx-10 mb-5"}
          onClick={() => navigate("/create-campaign") ?? setOpenDrawer(false)}
        />
      ) : (
        <CustomButton
          label={isConnecting ? "Connecting" : "Connect"}
          styles={"bg-violet-500 mx-10 mb-5"}
          onClick={() => connectWallet()}
          disabled={isConnecting}
        />
      )}
    </div>
  );
};

export default MenuDrawer;
