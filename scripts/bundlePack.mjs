import { ThirdwebSDK } from "@thirdweb-dev/sdk"

import dotenv from "dotenv";
dotenv.config();

(async () => {
    debugger;
    const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

    const packAddress = "0x54e641D0E35c901b1211738071A036B41d65A389";
    const cardAddress = "0x8A21099e06B3dA6e79cc7B4c88Eee948D3DFBd7f";

    const pack = sdk.getContract(packAddress, "pack");

    const card = sdk.getContract(cardAddress, "edition");
    await (await card).setApprovalForAll(packAddress, true);
    console.log("Approved card contract to transfer cards to pack contract");

    const packImage = "ipfs://QmXXkXhhsUpQxTWKD84zU5F7CMVs9TAhteSBk1A69edZXM/z4979911481893_05079081c823296c63f288ebe2469125.jpg";

    console.log("Creating items");
    const createPacks = (await pack).create({
        packMetadata: {
            name: "Weapon pack",
            description: "A new card weapon pack",
            image: packImage,
        },
        erc1155Rewards: [
            {
                contractAddress: cardAddress,
                tokenId: 0,
                quantityPerReward: 1,
                totalRewards: 50,
            },
            {
                contractAddress: cardAddress,
                tokenId: 1,
                quantityPerReward: 1,
                totalRewards: 50,
            },
            {
                contractAddress: cardAddress,
                tokenId: 3,
                quantityPerReward: 1,
                totalRewards: 50,
            },
            {
                contractAddress: cardAddress,
                tokenId: 4,
                quantityPerReward: 1,
                totalRewards: 50,
            },
        ],
        rewardsPerPack: 3,
    });

    console.log("Item created");
})();