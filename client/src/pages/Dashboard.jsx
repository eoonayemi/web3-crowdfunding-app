import { useReadContract } from "thirdweb/react";
import { useContractContext } from "../contexts";
import { CampaignsBox } from "../components";
import { parsedCampaigns } from "../functions/contract";

const Dashboard = () => {
  const { contract } = useContractContext();
  const { data: campaigns, isLoading } = useReadContract({
    contract,
    method:
      "function getCampaigns() view returns ((string title, string description, address owner, uint256 target, uint256 amountCollected, uint256 deadline, string image, address[] donators, uint256[] donations)[])",
    params: [],
  });

  return (
    <>
      <CampaignsBox
        campaigns={parsedCampaigns(campaigns)}
        isLoading={isLoading}
        title={"All Campaigns"}
      />
    </>
  );
};

export default Dashboard;
