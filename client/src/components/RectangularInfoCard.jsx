/* eslint-disable react/prop-types */
const RectangularInfoCard = ({ description }) => {
  return (
    <div>
      <div>STORY</div>
      <div className="flex gap-2 mt-2 text-slate-600 text-[14px]">
        {description}
      </div>
    </div>
  );
};

export default RectangularInfoCard;
