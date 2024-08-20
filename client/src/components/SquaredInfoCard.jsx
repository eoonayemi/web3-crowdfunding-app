/* eslint-disable react/prop-types */
const SquaredInfoCard = ({ value, title }) => {
  return (
    <div className="flex-1 bg-[#1c1c24] flex flex-col sm:w-[6rem] rounded-lg overflow-hidden h-[6rem]">
      <div className="flex-1 flex justify-center items-center">
        <span className="font-bold text-white lg:text-lg sm:text-sm text-lg">
          {value}
        </span>
      </div>
      <div className="bg-[#2c2f32] bg-opacity-50 text-center text-gray-500 lg:py-2 sm:py-1 py-2">
        {title}
      </div>
    </div>
  );
};

export default SquaredInfoCard;
