/* eslint-disable react/prop-types */
const CampaignBanner = ({ image, amountCollected, target }) => {
  const percentDonated = (Number(amountCollected) * 100) / Number(target);
  return (
    <div className="flex-1">
      <img
        src={image}
        alt="campaign-img"
        className="w-full object-cover rounded-lg md:h-[15rem] lg:h-[25rem] xl:h-[25rem]"
      />
      <div className="bg-[#1c1c24] h-[0.3rem] mt-1 rounded-sm overflow-hidden">
        <div
          className="bg-primary-b h-full"
          style={{
            width: `${percentDonated}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default CampaignBanner;
