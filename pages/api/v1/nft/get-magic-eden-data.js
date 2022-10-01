import axios from "axios";

const handler = async (req, res) => {
  const { mintAddress } = req.query;

  try {
    const { data } = await axios.get(
      `https://api-mainnet.magiceden.dev/v2/tokens/${mintAddress}`
    );

    const { data: listings } = await axios.get(
      `https://api-mainnet.magiceden.dev/v2/tokens/${mintAddress}/activities`
    );

    const { data: activities } = await axios.get(
      `https://api-mainnet.magiceden.dev/v2/tokens/${mintAddress}/activities`
    );

    res.status(200).json({ listings, activities, ...data });
  } catch (error) {
    console.log("error", error);
  }
};

export default handler;
