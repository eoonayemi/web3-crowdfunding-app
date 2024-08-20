import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className={`rounded-xl h-12 w-12 bg-[#1c1c24] flex justify-center items-center`}
    >
      <span className="text-[1.5rem] font-extrabold [bg-[#451105]] bg-gradient-to-br from-primary-b to-purple-600 bg-clip-text text-transparent font-jaro tracking-tighter">
        DC
      </span>
    </div>
  );
};

export default Logo;
