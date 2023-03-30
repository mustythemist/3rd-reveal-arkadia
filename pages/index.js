import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import CodeSnippet from "../components/DemoCodeSnippet";
import styles from "../styles/Home.module.css";

export default function Home() {

  const address = useAddress();

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

      <hr className={`${styles.divider} ${styles.spacerTop}`} />

      {/* <h2>Code Snippet</h2> */}

      {/* <CodeSnippet
        text={`<ConnectWallet accentColor="#f213a4" colorMode="dark" />`}
      /> */}
    </div>
  );
}
