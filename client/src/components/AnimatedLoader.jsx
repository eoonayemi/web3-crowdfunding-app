/* eslint-disable react/prop-types */
import { Loader } from "../assets/icons";

const AnimatedLoader = ({ operation }) => {
  return (
    <div className="absolute flex flex-col  justify-center items-center inset-0 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 z-50">
      <Loader className="animate-spin text-3xl text-primary-b" />
      <span className="text-sm font-bold text-white">{operation}</span>
    </div>
  );
};

export default AnimatedLoader;
