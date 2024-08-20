/* eslint-disable react/prop-types */
import { toEther } from "thirdweb";
const DonatorsCard = ({ donators, donations }) => {
  return (
    <div className=" text-white">
      <h2>DONATORS</h2>
      <div className="flex justify-between">
        <div>
          {donators.map((donator, i) => (
            <div key={i}>
              <p>{`${i + 1}. ${donator}`}</p>
            </div>
          ))}
        </div>
        <div className="text-slate-500">
          {donations.map((donation, i) => (
            <div key={i}>
              <p>{toEther(donation)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonatorsCard;
