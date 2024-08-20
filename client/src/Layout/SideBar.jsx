import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "../components";
import { navlinks } from "./../constants/index";
import { Sun } from "../assets/icons";

const SideBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="hidden ml-5 pt-4 sm:flex flex-col justify-start items-center gap-10">
      <Logo />
      <div className="flex flex-col bg-[#1c1c24] rounded-3xl p-4 gap-2.5 justify-center items-center">
        {navlinks.map(({ Icon, link, disabled }, i) => (
          <div
            key={i}
            className={`${link === pathname && "bg-[#2c2f32]"} p-3 rounded-xl`}
          >
            <Icon
              className={`${
                link === pathname ? "text-primary-b" : "text-slate-500"
              } text-[1.5rem]`}
              onClick={() => !disabled && navigate(link)}
            />
          </div>
        ))}

        <div className="p-3 shadow-custom rounded-xl mt-5">
          <Sun className="text-slate-500 text-[1.5rem]" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
