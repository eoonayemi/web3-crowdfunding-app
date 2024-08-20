/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { createWallet } from "thirdweb/wallets";
import { useActiveAccount } from "thirdweb/react";
import { getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { client } from "./client";
import { useConnect } from "thirdweb/react";

const ContractContext = createContext();

export const ContractContextProvider = ({ children }) => {
  const currentAcct = useActiveAccount();
  const address = currentAcct?.address;
  const { connect, isConnecting, error } = useConnect();
  const chain = defineChain(84532);
  const [userAddress, setUserAddress] = useState(
    () => sessionStorage.getItem("userAddress") || address
  );

  const connectWallet = () =>
    connect(async () => {
      const metamask = createWallet("io.metamask");
      await metamask.connect({ client });
      return metamask;
    });

  if (error) {
    console.log("Connect Wallet Error:", error.message);
  }

  const contract = getContract({
    client,
    chain,
    address: import.meta.env.VITE_CONTRACT_ADDRESS,
  });

  useEffect(() => {
    if (address) {
      sessionStorage.setItem("userAddress", address);
      setUserAddress(address);
    }
  }, [address]);

  console.log("userAddress", userAddress);

  return (
    <ContractContext.Provider
      value={{
        isConnecting,
        connectWallet,
        address: userAddress || null,
        contract,
        client,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export const useContractContext = () => useContext(ContractContext);
