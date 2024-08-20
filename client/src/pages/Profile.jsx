import { useReadContract } from "thirdweb/react";
import { useContractContext } from "../contexts";
import { CampaignsBox } from "../components";
import { parsedCampaigns } from "../functions/contract";

const Profile = () => {
  const { contract, address } = useContractContext();
  const { data: campaigns, isLoading } = useReadContract({
    contract,
    method:
      "function getCampaigns() view returns ((string title, string description, address owner, uint256 target, uint256 amountCollected, uint256 deadline, string image, address[] donators, uint256[] donations)[])",
    params: [],
  });

  const myCampaigns = parsedCampaigns(campaigns).filter(
    ({ owner }) => owner == address
  );

  return (
    <>
      <CampaignsBox
        campaigns={myCampaigns}
        isLoading={isLoading}
        title={"My Campaigns"}
        noCampaignsErr={"You haven't created any campaign"}
      />
    </>
  );
};

export default Profile;
