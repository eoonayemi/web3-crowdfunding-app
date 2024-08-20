import { useReadContract } from "thirdweb/react";
import { useContractContext } from "../contexts";
import { parsedCampaigns } from "../functions/contract";
import { CampaignsBox } from "../components";
import { useSearchParams } from "react-router-dom";

const SearchedCampaigns = () => {
  const { contract } = useContractContext();
  const { data: campaigns, isLoading } = useReadContract({
    contract,
    method:
      "function getCampaigns() view returns ((string title, string description, address owner, uint256 target, uint256 amountCollected, uint256 deadline, string image, address[] donators, uint256[] donations)[])",
    params: [],
  });
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query").toLowerCase();

  const searchedCampaigns = parsedCampaigns(campaigns).filter(
    ({ owner, title, description }) =>
      owner.toLowerCase() == query ||
      title.toLowerCase().includes(query.toString()) ||
      description.toLowerCase().includes(query)
  );

  return (
    <>
      <CampaignsBox
        campaigns={searchedCampaigns}
        isLoading={isLoading}
        title={"Searched Campaigns"}
        noCampaignsErr={`No search results on "${query}"`}
      />
    </>
  );
};

export default SearchedCampaigns;
