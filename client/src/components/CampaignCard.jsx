import { Folder } from "../assets/icons";
import { daysUntil, shortenAddress, shortenStr } from "../utils";
import { thirdweb } from "../assets/svg";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const CampaignCard = ({
  campaign: {
    title,
    description,
    target,
    deadline,
    image,
    owner,
    amountCollected,
    id,
  },
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(
      `/campaign-details/${title.toLowerCase().split(" ").join("-")}?id=${id}`
    );
  };

  console.log("From CampaignCard", id);
  return (
    <div
      className="flex flex-col gap-3 flex-1 bg-[#1c1c24] p-3 rounded-xl text-slate-600"
      onClick={handleClick}
    >
      <div>
        <img
          src={image}
          className="w-full object-cover rounded-xl h-[200px] sm:h-[120px]"
        />
      </div>

      <div className="flex flex-col justify-center gap-2 flex-1">
        <div className="flex gap-2 items-center text-sm">
          <Folder />
          <p>Campaign</p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-white text-[13px] font-semibold">{title}</h2>
          <p className="text-[12px] text-nowrap overflow-hidden">
            {shortenStr(description)}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-sm font-bold">{amountCollected}</span>
            <span className="text-[10px] font-semibold text-slate-700">
              {" "}
              Raised of {target}
            </span>
          </div>{" "}
          <div className="flex flex-col">
            <span className="text-sm font-bold">{daysUntil(deadline)}</span>
            <span className="text-[10px] font-semibold text-slate-700">
              Days Left
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 h-10">
          <div className="w-5">
            <img
              src={thirdweb}
              className="object-contain bg-black rounded-full"
            />
          </div>
          <div className="text-[8.5px] max-lg:text-[8px] w-25 overflow-hidden">
            by
            <span className="font-bold text-[8.5px] max-lg:text-[8px]">
              {" " + shortenAddress(owner)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
