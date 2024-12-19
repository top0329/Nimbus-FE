import Moralis from 'moralis';

export async function getTokenPrice() {
  try {
    if (!Moralis.Core.isStarted) {
      await Moralis.start({
        apiKey: process.env.MORALIS_API_KEY,
      });
    }

    const response = await Moralis.EvmApi.token.getTokenPrice({
      chain: '0x1',
      include: 'percent_change',
      exchange: 'uniswapv2',
      address: '0xBE4D9c8C638B5f0864017d7F6A04b66c42953847',
    });

    return response.raw.usdPrice;
  } catch (err) {
    console.error(err);
  }
}