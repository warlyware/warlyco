import axios from "axios";

const handler = async (req, res) => {
  const { collection, mintAddress } = req.query;

  try {
    const { data } = await axios.get(
      `https://api.howrare.is/v0.1/collections/${collection}`
    );

    const { items } = data.result.data;
    const nft = items.find((nft) => nft.mint === mintAddress);
    console.log(nft);

    res.status(200).json(nft);
  } catch (error) {
    console.log("error", error);
  }
};

export default handler;
