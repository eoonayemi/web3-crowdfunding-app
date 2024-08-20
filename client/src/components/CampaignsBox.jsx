/* eslint-disable react/prop-types */
import { CampaignCard } from ".";
import AnimatedLoader from "./AnimatedLoader";

const CampaignsBox = ({ campaigns, isLoading, title, noCampaignsErr }) => {
  if (campaigns.length == 0) {
    return (
      <>
        <h1 className="text-white font-semibold">{`${title} (${campaigns.length})`}</h1>
        <div className="font-extrabold text-sm text-slate-600 overflow-hidden text-wrap">
          {noCampaignsErr || "No Campaign has been added yet"}
        </div>
      </>
    );
  }
  return (
    <>
      <h1 className="text-white font-semibold">{`${title} (${campaigns.length})`}</h1>
      <div className="grid grid-cols-1 justify-center sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 overflow-hidden">
        {campaigns.map((campaign, i) => (
          <CampaignCard key={i} campaign={campaign} />
        ))}
      </div>

      {isLoading && <AnimatedLoader operation={"Fetching Campaigns"} />}
    </>
  );
};

export default CampaignsBox;
