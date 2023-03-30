import { ConnectWallet, useAddress, useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import { useEffect } from "react";
import CodeSnippet from "../components/DemoCodeSnippet";
import styles from "../styles/Home.module.css";

export default function Home() {

  // const address = useAddress();
  // Your smart contract address
  // const contractAddress = "0x830A0C890A1F969586612b1FD98480e9406941f4";

  // const { contract } = useContract(
  //   "0x3a88e821D5F8cFB1694e9C23BE2CD68B6a3c12B7"
  // );


  // const { data, isLoading, error } = useOwnedNFTs(contract, address);
  // console.log('data', data);
  // console.log('isLoading', isLoading);
  // console.log('error', error);


  const address = useAddress();
  const { contract } = useContract('0x3c178321f5BC73494046a46b5A065F9211b7C65E');
  const { data, isLoading, error } = useOwnedNFTs(
    contract,
    address,
  );

  console.log('data', data);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Connect Wallet </h1>
      {/* <p style={{ marginBottom: 24 }}>
        Allow users to connect to your app with the wallet of their choice.
      </p> */}
      <h2>Address{address}</h2>
      <ConnectWallet accentColor="#f213a4" colorMode="dark" />

      <h3>NFTs : {data && data.metadata.id}</h3>

      <hr className={`${styles.divider} ${styles.spacerTop}`} />

      {/* <h2>Code Snippet</h2> */}

      {/* <CodeSnippet
        text={`<ConnectWallet accentColor="#f213a4" colorMode="dark" />`}
      /> */}
    </div>
  );
}
