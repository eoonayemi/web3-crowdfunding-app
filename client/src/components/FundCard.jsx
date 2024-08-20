/* eslint-disable react/prop-types */
import CustomButton from "./CustomButton";
import FormField from "./FormField";
import { useState, useEffect } from "react";
import { useSendAndConfirmTransaction } from "thirdweb/react";
// import { useNavigate } from "react-router-dom";
import { useContractContext } from "../contexts";
import { fundCampaign } from "../functions/contract";
import { Loader } from "../assets/icons";

const FundCard = ({ id }) => {
  const [fund, setFund] = useState("");
  const {
    mutate: sendTrx,
    data: trxReceipt,
    isPending,
    isSuccess,
    status,
  } = useSendAndConfirmTransaction();
  const mutation = useSendAndConfirmTransaction();
  const { contract, address: owner } = useContractContext();
  // const navigate = useNavigate();

  console.log("Id From FundCard:", id);

  console.log("trxReceipt:", trxReceipt);
  console.log("mutation:", mutation);

  const onFundCampaign = async (e) => {
    e.preventDefault();
    if (!owner) {
      return alert("Connect your wallet");
    }
    if (!fund) {
      return alert("Enter the amount you want to donate");
    }
    fundCampaign({
      id,
      sendTrx,
      contract,
      fund,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      alert("Transaction successful");
      setFund("");
    }
    if (status == "error") {
      alert("Transaction failed or rejected");
      setFund("");
    }
  }, [isSuccess, status]);

  return (
    <div className="text-slate-200">
      <h2>FUND</h2>
      <div className="bg-[#1c1c24] flex flex-col mt-3 p-4 rounded-lg gap-3">
        <p className="text-center text-slate-500 font-semibold">
          Pledge without reward
        </p>
        <FormField
          styles={"py-2"}
          inputType={"number"}
          placeholder={"ETH 0.1"}
          step={1}
          onChange={(e) => setFund(e.target.value)}
          value={fund}
        />
        <div className="bg-[#13131a] p-4 rounded-md">
          <p>Back it because you believe in it</p>
          <p className="text-slate-500 mt-3">
            Support the project for no reward just because it speaks to you
          </p>
        </div>
        <CustomButton
          label={"Fund Campaign"}
          styles={"bg-violet-600 py-2 rounded-lg"}
          onClick={onFundCampaign}
        />
      </div>

      {isPending && (
        <div className="absolute flex flex-col  justify-center items-center inset-0 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 z-50">
          <Loader className="animate-spin text-3xl text-primary-b" />
          <span className="text-sm font-bold">Transaction In Progress</span>
        </div>
      )}
    </div>
  );
};

export default FundCard;
