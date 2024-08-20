import { prepareContractCall } from "thirdweb";

const createCampaign = async ({
  title,
  description,
  target,
  deadline,
  image,
  owner,
  sendTrx,
  contract,
}) => {
  const transaction = await prepareContractCall({
    contract,
    method:
      "function createCampaign(string _title, string _description, address _owner, uint256 _target, uint256 _deadline, string _image) returns (uint256)",
    params: [title, description, owner, target, deadline, image],
  });
  await sendTrx(transaction);
};

export default createCampaign;
