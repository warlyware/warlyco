import axios from "axios";
import { Connection, PublicKey } from "@solana/web3.js";
import { Metaplex, Nft } from "@metaplex-foundation/js";

const ENV_URL = "http://localhost:3000";

const handler = async (req, res) => {
  const { mintAddress } = req.query;

  try {
    const combindedData = {};
    try {
      const { data: moonrank } = await axios.get(
        `${ENV_URL}/api/nft/get-moonrank-data?mintAddress=${mintAddress}`
      );
      combindedData.moonrank = moonrank;
    } catch (error) {
      console.error("error", error);
    }
    try {
      const { data: metaplex } = await axios.get(
        `${ENV_URL}/api/nft/get-metaplex-data?mintAddress=${mintAddress}`
      );
      combindedData.metaplex = metaplex;
    } catch (error) {
      console.error("error", error);
    }
    try {
      const { data: magicEden } = await axios.get(
        `${ENV_URL}/api/nft/get-magic-eden-data?mintAddress=${mintAddress}`
      );
      combindedData.magicEden = magicEden;
    } catch (error) {
      console.error("error", error);
    }

    res.status(200).json(combindedData);
  } catch (error) {
    console.log("error", error);
  }
};

export default handler;
