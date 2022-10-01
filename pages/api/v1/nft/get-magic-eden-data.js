import axios from "axios";

const handler = async (req, res) => {
  const { mintAddress } = req.query;

  try {
    const { data } = await axios.get(
      `https://api-mainnet.magiceden.dev/v2/tokens/${mintAddress}`
    );

    res.status(200).json(data);
  } catch (error) {
    console.log("error", error);
  }
};

export default handler;
