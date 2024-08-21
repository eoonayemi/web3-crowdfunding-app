[![Header](https://i.imghippo.com/files/0Zvc01724257132.gif)](https://decentra-crowd.vercel.app)

# Setting Up the Web3 Blockchain Crowdfunding App

This guide will walk you through the process of setting up the Web3 Blockchain Crowdfunding App on your local machine.

## Prerequisites

Before you begin, ensure you have Node.js installed on your system.

## Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/eoonayemi/web3-crowdfunding-app.git
cd web3-crowdfunding-app
```

## Deploying the smart contract

1. **Create Wallet and Deposit Faucet**:
   - Download the Metamask Wallet extension at [Metamask](https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?utm_source=google.com&pli=1)
   - Create a Metamask wallet using the extension
   - Connect your Metamask and add Base Sepolia Testnet to your Metamask at [Chainlist](https://chainlist.org/?testnets=true&search=84532)
   - Copy the address of your Metamask wallet
   - Visit [Thirdweb Base Sepolia Testnet Page](https://thirdweb.com/base-sepolia-testnet)
   - Connect your metamask wallet and get free ETH faucet in your wallet, so you will use it for transaction on the application

2. **Thirdweb Setup**: 
    - Connect your Metamask wallet and sign in at [Thirdweb](https://thirdweb.com/login).
    - After sign in, navigate to the `Settings` tab on your Thirdweb's dashboard at [Settings](https://thirdweb.com/dashboard/settings/api-keys)
    - Create an API key (You can allow all domains to avoid issues or add your allowed custon domains)
    - Once you create the API key, click on "account abstraction" and copy the secretKey as you would need it for smart contract deployment
      
3. **Smart Contarct Setup and Deployment**:
    - Navigate to your to `web3` folder 
    - Install dependencies using the command: `npm install`
    - Deploy the smart contract using the command with your previously copied secretKey: `npx thirdweb deploy -k [your-secret-Key]`
    - Wait until it processes to the point the command generates a link
    - Click the link, it will direct you to the page where you would select the preferred blockchain network to deploy the smart contract
    - Choose Base Sepolia Testnet because that was the network used for the project (You choose a network of your choice if you understand Thirdweb to change the project configuration to your preferred network)
    - After choosing the network, click on `Deploy` to deploy the smart contract
    - If properly setup, you should see your deployed smart contract on your Thirdweb's dashboard
    - Copy the address of the smart contract and save it for later because it will be need to app when integrating it with the smart contarct
  

## Frontend Configuration

1. **Environment Files**: Navigate to the `client` folder and create a file: `.env`:

    ```plaintext
    VITE_THIRDWEB_CLIENT_ID=
    VITE_CONTRACT_ADDRESS=
    ```

2. **VITE_THIRDWEB_CLIENT_ID**:
    - The `VITE_THIRDWEB_CLIENT_ID` will be the CLIENT ID from the API key you created earlier
    - So, go back to [Settings](https://thirdweb.com/dashboard/settings/api-keys) and copy that CLIENT ID
3.  **VITE_CONTRACT_ADDRESS**:
    - The `VITE_CONTRACT_ADDRESS` will be the address of the smart contract you just deployed
    - If you copied it the earlier, get from where you kept it and paste it to the .env file

## Running the Application
    - Open a new terminal and navigate to the `client` directory.
    - Install dependencies: `npm install`.
    - Start the frontend application: `npm run dev`.
    - The application should now be running on `http://localhost:5173` but verify this in your command line terminal


