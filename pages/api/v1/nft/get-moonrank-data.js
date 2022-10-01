import scrapeIt from "scrape-it";

const handler = async (req, res) => {
  const { mintAddress } = req.query;

  try {
    const scraped = await scrapeIt(`https://moonrank.app/${mintAddress}`, {
      title: ".text-mr-heading-purple-unimportant",
      rank: ".text-mr-lumen-purple > span",
    });

    const { title, rank } = scraped.data;
    const returnObj = {
      title,
      rank: rank.replaceAll(/\D/g, ""),
    };
    return res.status(200).send(returnObj);
  } catch (error) {
    console.log("error", error);
  }
};

export default handler;
