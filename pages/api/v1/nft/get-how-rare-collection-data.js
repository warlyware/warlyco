import axios from "axios";

const handler = async (req, res) => {
  const { collection } = req.query;

  try {
    const { data } = await axios.get(
      `https://api.howrare.is/v0.1/collections/${collection}`
    );

    res.status(200).json(data);
  } catch (error) {
    console.log("error", error);
  }
};

export default handler;
