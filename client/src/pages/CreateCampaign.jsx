import { Calendar, CashGive } from "../assets/icons";
import { FormField, CustomButton } from "../components";
import { campaignFormFields } from "../constants";
import { useEffect, useState } from "react";
import { useContractContext } from "../contexts";
import { getMilliseconds } from "../utils";
import { useNavigate } from "react-router-dom";
import { toWei } from "thirdweb/utils";
import { useSendAndConfirmTransaction } from "thirdweb/react";
import { createCampaign } from "../functions/contract";
import { Loader } from "../assets/icons";

const CreateCampaign = () => {
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });
  const {
    mutate: sendTrx,
    isSuccess,
    status,
    isPending,
  } = useSendAndConfirmTransaction();
  const { contract, address: owner } = useContractContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      alert("Campaign created");
      navigate("/profile");
    }
    if (status == "error") {
      alert("Campaign submission failed or rejected");
    }
  }, [isSuccess, status, navigate]);

  const onSubmitCampaign = async (e) => {
    e.preventDefault();
    if (!owner) {
      return alert("Connect your wallet");
    }
    await createCampaign({
      ...form,
      deadline: getMilliseconds(form.deadline),
      target: toWei(form.target),
      owner,
      sendTrx,
      contract,
    });
  };

  return (
    <div className="bg-[#1c1c24] rounded-xl p-5 flex_v_center gap-10 sm:p-10">
      <div className="bg-gray-700 text-white font-bold text-center py-5 rounded-xl text-xl sm:text-2xl sm:w-80 w-52 mx-auto mb-6">
        Create a Campaign
      </div>

      <form className="flex flex-col gap-10" onSubmit={onSubmitCampaign}>
        <div className="flex max-md:flex-col gap-10">
          <FormField
            {...campaignFormFields.name}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <FormField
            {...campaignFormFields.title}
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>

        <FormField
          {...campaignFormFields.description}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <div className="bg-violet-500 rounded-xl px-4 py-8 flex_center gap-2">
          <CashGive className="text-[3rem] text-white" />
          <span className="text-[1.5rem] font-bold text-white">
            You will get 100% of the donated amount!
          </span>
        </div>

        <div className="flex max-md:flex-col gap-10">
          <FormField
            {...campaignFormFields.goal}
            value={form.goal}
            onChange={(e) => setForm({ ...form, target: e.target.value })}
          />
          <div className="flex-1 relative">
            <FormField
              {...campaignFormFields.endDate}
              value={form.endDate}
              onChange={(e) => setForm({ ...form, deadline: e.target.value })}
            />
            <Calendar className="text-slate-500 absolute text-lg top-[3rem] right-[0.9rem]" />
          </div>
        </div>

        <FormField
          {...campaignFormFields.image}
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <div className="sm:self-center sm:mt-5 mb-5">
          <CustomButton
            type="submit"
            label={isPending ? "Approve Transaction..." : "Create a Campaign"}
            styles={"bg-primary-b w-full"}
            disabled={isPending}
          />
        </div>
      </form>

      {isPending && (
        <div className="absolute flex flex-col  justify-center items-center inset-0 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 z-50">
          <Loader className="animate-spin text-3xl text-primary-b" />
          <span className="text-sm font-bold">Creating Campaign</span>
        </div>
      )}
    </div>
  );
};

export default CreateCampaign;
