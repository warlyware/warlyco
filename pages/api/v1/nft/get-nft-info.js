import axios from "axios";
import { Connection, PublicKey } from "@solana/web3.js";
import { Metaplex, Nft } from "@metaplex-foundation/js";

const ENV_URL = process.env.ENV_URL || "http://localhost:3000";

const handler = async (req, res) => {
  const { mintAddress } = req.query;

  try {
    const combindedData = {};
    try {
      const { data: moonrank } = await axios.get(
        `${ENV_URL}/api/v1/nft/get-moonrank-data?mintAddress=${mintAddress}`
      );
      // console.log("moonrank", moonrank);
      combindedData.moonrank = moonrank;
    } catch (error) {
      console.error("error", error);
    }
    try {
      const { data: metaplex } = await axios.get(
        `${ENV_URL}/api/v1/nft/get-metaplex-data?mintAddress=${mintAddress}`
      );
      // console.log("metaplex", metaplex);
      combindedData.metaplex = metaplex;
    } catch (error) {
      console.error("error", error);
    }
    try {
      const { data: magicEden } = await axios.get(
        `${ENV_URL}/api/v1/nft/get-magic-eden-data?mintAddress=${mintAddress}`
      );
      combindedData.magicEden = magicEden;
      console.log("magicEden", magicEden);
    } catch (error) {
      console.error("error", error);
    }

    const { collection } = combindedData.magicEden;
    console.log(collection);
    if (collection) {
      try {
        const { data: howRare } = await axios.get(
          `${ENV_URL}/api/v1/nft/get-how-rare-nft-data?collection=${collection}&mintAddress=${mintAddress}`
        );
        combindedData.howRare = howRare;
        // console.log("howRare", howRare);
      } catch (error) {
        console.error("error", error);
      }
    }

    res.status(200).json(combindedData);
  } catch (error) {
    console.log("error", error);
  }
};

export default handler;
