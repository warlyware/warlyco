import axios from "axios";
import { Connection, PublicKey } from "@solana/web3.js";
import { Metaplex, Nft } from "@metaplex-foundation/js";

const ENV_URL = process.env.ENV_URL || "http://localhost:3000";

const handler = async (req, res) => {
  const { mintAddress } = req.query;

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

  if (collection) {
    try {
      const { data } = await axios.get(
        `https://api.howrare.is/v0.1/collections/${collection}`
      );

      const { items } = data.result.data;
      const howRare = items?.find((nft) => nft.mint === mintAddress);
      combindedData.howRare = howRare;
      // console.log("howRare", howRare);
    } catch (error) {
      console.error("error", error);
    }

    if (combindedData.howRare) return;
    try {
      const { data: dataFromSymbol } = await axios.get(
        `https://api.howrare.is/v0.1/collections/${combindedData.metaplex.json.symbol}`
      );
      const { items } = dataFromSymbol.result.data;
      const howRare = items?.find((nft) => nft.mint === mintAddress);
      combindedData.howRare = howRare;
    } catch (error) {
      console.error("error", error);
    }
  }
  res.status(200).json(combindedData);
};

export default handler;
