import { useReadContract } from "thirdweb/react";
import { useContractContext } from "../contexts";
import {
  CampaignBanner,
  FundCard,
  SquaredInfoCard,
  RectangularInfoCard,
  DonatorsCard,
} from "../components";
import { daysUntil } from "../utils";
import { parsedCampaigns } from "../functions/contract";
import { thirdweb } from "../assets/svg";
import { useSearchParams } from "react-router-dom";
import AnimatedLoader from "../components/AnimatedLoader";

const CampaignDetails = () => {
  const { contract } = useContractContext();
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  console.log("Id From Campaigns:", id);

  const { data: campaigns, isLoading } = useReadContract({
    contract,
    method:
      "function getCampaigns() view returns ((string title, string description, address owner, uint256 target, uint256 amountCollected, uint256 deadline, string image, address[] donators, uint256[] donations)[])",
    params: [],
  });

  const campaignToDisplay = () => {
    let campaign = parsedCampaigns(campaigns).filter(
      (campaign) => campaign.id == id
    );
    return campaign[0];
  };

  const campaign = campaignToDisplay();
  const {
    description,
    target,
    deadline,
    image,
    owner,
    amountCollected,
    donators,
    donations,
  } = campaign || {};

  const ownerCampaigns = campaigns?.filter(
    (campaign) => campaign.owner == owner
  );

  // const { data, isLoading } = useReadContract({
  //   contract,
  //   method:
  //     "function getDonators(uint256 _id) view returns (address[], uint256[])",
  //   params: [localId],
  // });

  if (isLoading) {
    return <AnimatedLoader operation={"Fetching Campaign"} />;
  }

  return (
    <div>
      <div className="flex sm:flex-row flex-col gap-4 lg:text-[12px] sm:text-[10px] text-[12px]">
        <CampaignBanner
          image={image}
          amountCollected={amountCollected}
          target={target}
        />
        <div className="flex sm:flex-col flex-row gap-4">
          <SquaredInfoCard value={daysUntil(deadline)} title={`Days Left`} />
          <SquaredInfoCard
            value={amountCollected}
            title={`Raised of ${target}`}
          />
          <SquaredInfoCard value={donators.length} title={"Total Backers"} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mt-5 sm:gap-4 gap-10 lg:text-[12px] sm:text-[10px] text-[12px]">
        <div className="overflow-hidden flex flex-col gap-7 text-slate-200">
          <div>
            <div>CREATOR</div>
            <div className="flex gap-4 mt-3">
              <img
                src={thirdweb}
                className="bg-[#1c1c24] rounded-full w-8 h-8"
              />
              <div>
                <p>{owner}</p>
                <p className="text-slate-600">
                  <span className="text-slate-300">
                    {ownerCampaigns.length}
                  </span>
                  {` Campaigns`}
                </p>
              </div>
            </div>
          </div>
          <RectangularInfoCard description={description} />
          <DonatorsCard donators={donators} donations={donations} />
        </div>
        <FundCard id={id} />
      </div>
    </div>
  );
};

export default CampaignDetails;
