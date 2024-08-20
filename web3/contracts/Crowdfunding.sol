// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Crowdfunding {
    struct Campaign {
        string title;
        string description;
        address owner;
        uint256 target;
        uint256 amountCollected;
        uint256 deadline;
        string image;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;

    uint256 public numOfCampaigns = 0;

    function createCampaign(string memory _title, string memory _description, address _owner, uint256 _target, uint256 _deadline, string memory _image) public returns (uint256) {
        Campaign storage newCampaign = campaigns[numOfCampaigns];

        require(_deadline > block.timestamp, "Deadline should be anytime in the future");

        newCampaign.title = _title;
        newCampaign.description = _description;
        newCampaign.owner = _owner;
        newCampaign.target = _target;
        newCampaign.amountCollected = 0;
        newCampaign.deadline = _deadline;
        newCampaign.image = _image;

        numOfCampaigns++;

        return numOfCampaigns - 1;
    }

    function fundCampaign(uint256 _id) public payable {
        uint256 amt = msg.value;

        Campaign storage campaign = campaigns[_id];

        campaign.donators.push(msg.sender);
        campaign.donations.push(amt);

        (bool sent,) = payable(campaign.owner).call{value: amt}("");

        if (sent) {
            campaign.amountCollected += amt;
        }
    }

    function getDonators(uint256 _id) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numOfCampaigns);

        for (uint i = 0; i < numOfCampaigns; i++) {
            Campaign storage item = campaigns[i];
            allCampaigns[i] = item;
        }

        return allCampaigns;
    }
}
