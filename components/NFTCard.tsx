import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import type { FC } from "react";
import {
  nftDropContractAddress,
  stakingContractAddress,
} from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const bsxAddress = "0x8Ae711a3A64c96fF55dAFa1f4dfef85ADC254e0f";
const stakingAddress = "0x154cd2Dd17D75F1Af0bB38438dAb1cA6a3B98f80";

interface NFTCardProps {
  tokenId: number;
}

const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
  const { contract } = useContract(bsxAddress, "nft-drop");
  const { data: nft } = useNFT(contract, tokenId);

  return (
    <>
      {nft && (
        <div className={styles.nftBox}>
          {nft.metadata && (
            <ThirdwebNftMedia
              metadata={nft.metadata}
              className={styles.nftMedia}
            />
          )}
          <h3>{nft.metadata.name}</h3>
          <Web3Button
            action={(contract) => contract?.call("withdraw", [[nft.metadata.id]])}
            contractAddress={stakingAddress}
          >
            Withdraw
          </Web3Button>
        </div>
      )}
    </>
  );
};
export default NFTCard;
