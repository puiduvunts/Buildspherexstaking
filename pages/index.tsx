import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <Image src="/icons/mainlogoo.png" alt="drop" width={200} height={200} />
      <h1 className={styles.h1}>BuildSphereX Nft Staking</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/mint")}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/logo5.png" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Mint an NFT</h2>
          <p className={styles.selectBoxDescription}>
            Here you can mint a Nft what can be used to earn BSX.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/stake")}
        >
          {/* Staking an NFT */}
          <Image src="/icons/logo5.png" alt="token" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Stake Your NFT</h2>
          <p className={styles.selectBoxDescription}>
            Use youre Nft for staking to earn BSX.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
