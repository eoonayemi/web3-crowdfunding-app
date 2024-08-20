import { prepareContractCall } from "thirdweb";
import { toWei } from "thirdweb/utils";

const fundCampaign = ({ id, contract, sendTrx, fund }) => {
  const transaction = prepareContractCall({
    contract,
    method: "function fundCampaign(uint256 _id) payable",
    params: [id],
    value: toWei(fund.toString()),
  });
  sendTrx(transaction);
};

export default fundCampaign;
