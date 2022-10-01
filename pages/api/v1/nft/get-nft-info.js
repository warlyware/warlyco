import axios from "axios";

const ENV_URL = process.env.ENV_URL || "http://localhost:3000";
const SPECIAL_CASE_COLLECTIONS = [
  "blocksmith_labs", // Blocksmith Labs
];

const getHowRareCollectionName = (collection) => {
  switch (collection) {
    case "blocksmith_labs":
      return "blocksmithlabs";
    default:
      return collection;
  }
};

const modelHowRare = ({
  rank,
  attributes,
  rank_algo: rankAlgorithm,
  link,
  attributes: howRareAttributes,
  collectionName,
}) => ({
  rank,
  attributes,
  rankAlgorithm,
  link,
  attributes: howRareAttributes,
  collectionName,
});

const buildNftLinks = (mintAddress) => ({
  opensea: `https://opensea.io/assets/solana/${mintAddress}`,
  rarible: `https://rarible.com/token/solana/${mintAddress}`,
  magicEden: `https://magic.eden/asset/${mintAddress}`,
  howRare: `https://howrare.is/nft/${mintAddress}`,
  moonrank: `https://moonrank.app/${mintAddress}`,
});

const modelNftData = ({ metaplex, moonrank, howRare, magicEden }) => {
  const {
    name,
    symbol,
    descrption,
    seller_fee_basis_points: sellerFeeBasisPoint,
    external_url: externalUrl,
    attributes,
    collection,
    properties,
    image,
  } = metaplex.json;
  const {
    uri,
    isMutable,
    primarySaleHappened,
    editionNonce,
    creators,
    tokenStandard,
    collection: collectionMeta,
    collectionDetails,
    uses,
    metadataAddress,
    mint,
    edition,
    updateAuthorityAddress,
  } = metaplex;
  const {
    owner: ownerAddress,
    supply,
    collection: magicEdenCollectionName,
    listings,
    activities,
  } = magicEden;
  return {
    metadataAddress,
    ownerAddress,
    mintAddres: mint.address,
    rank: {
      moonrank: Number(moonrank?.rank) ? Number(moonrank.rank) : null,
      howRare: howRare?.rank,
      howRareDetailed: howRare ? modelHowRare(howRare) : null,
      traitNormalized: howRare ? howRare.all_ranks.trait_normalized : null,
      statisticalRarity: howRare ? howRare.all_ranks.statistical_rarity : null,
    },
    updateAuthorityAddress,
    name,
    attributes: attributes.map(({ trait_type, value }) => ({
      traitType: trait_type,
      value,
    })),
    supply,
    symbol,
    descrption,
    sellerFeeBasisPoint,
    externalUrl,
    collection: {
      ...collectionMeta,
      collectionDetails,
      magicEdenCollectionName,
      ...collection,
    },
    properties,
    image,
    uri,
    isMutable,
    primarySaleHappened,
    editionNonce,
    creators,
    tokenStandard,
    uses,
    listings,
    activities,
    mint,
    edition,
    links: buildNftLinks(mint.address, howRare),
  };
};

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
  } catch (error) {
    console.error("error", error);
  }

  const { collection } = combindedData.magicEden;

  if (collection) {
    let howRareCollectionName = collection;
    if (SPECIAL_CASE_COLLECTIONS.includes(collection)) {
      howRareCollectionName = getHowRareCollectionName(collection);
    }
    try {
      const { data } = await axios.get(
        `https://api.howrare.is/v0.1/collections/${howRareCollectionName}`
      );

      if (!data?.result?.data) {
        throw new Error("No result");
      }
      const { items } = data.result.data;
      const howRare = items?.find((nft) => nft.mint === mintAddress);
      combindedData.howRare = howRare;
      combindedData.howRare.collectionName = howRareCollectionName;
    } catch (error) {
      howRareCollectionName = null;
      console.error("error", error);
    }

    if (!combindedData.howRare) {
      howRareCollectionName = combindedData.metaplex?.json?.symbol;
      try {
        const { data: dataFromSymbol } = await axios.get(
          `https://api.howrare.is/v0.1/collections/${combindedData.metaplex?.json?.symbol}`
        );
        const { items } = dataFromSymbol.result.data;
        const howRare = items?.find((nft) => nft.mint === mintAddress);
        combindedData.howRare = howRare;
        combindedData.howRare.collectionName = howRareCollectionName;
      } catch (error) {
        howRareCollectionName = null;
        console.error("error", error);
      }
    }
  }

  console.log("raw howRare", combindedData.howRare);

  const modeledData = modelNftData(combindedData);

  res.status(200).json(modeledData);
};

export default handler;
