import { Connection, PublicKey } from "@solana/web3.js";
import { Metaplex, Nft } from "@metaplex-foundation/js";

const handler = async (req, res) => {
  const { mintAddress } = req.query;

  try {
    const connection = new Connection(process.env.NEXT_PUBLIC_RPC_ENDPOINT);
    const metaplex = Metaplex.make(connection);
    const data = await metaplex
      .nfts()
      .findByMint({ mintAddress: new PublicKey(mintAddress) })
      .run();

    res.status(200).json(data);
  } catch (error) {
    console.log("error", error);
  }
};

export default handler;
