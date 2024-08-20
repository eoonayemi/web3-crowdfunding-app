import { toEther } from "thirdweb";

const parsedCampaigns = (campaigns) => {
  if (!campaigns) return [];
  const parsedCampaigns = campaigns.map((campaign, i) => ({
    ...campaign,
    target: toEther(campaign.target),
    amountCollected: toEther(campaign.amountCollected),
    deadline: Number(campaign.deadline),
    id: i,
  }));
  return parsedCampaigns;
};

export default parsedCampaigns;
