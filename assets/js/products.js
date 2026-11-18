/* Static product catalog + receiving wallet addresses.
   Addresses come from the owner's donation page: https://donatr.ee/sayfe/
   USDT (ERC-20) uses the same Ethereum address as native ETH.
   Prices are small USD amounts converted with CoinGecko rates on 19 Nov 2026:
   BTC ≈ $62,322 · ETH ≈ $1,763.28 · USDT ≈ $1. Re-check before large changes.
   Images are reduced, watermarked previews; full-size originals stay private. */
window.CATALOG = (function () {
  "use strict";

  var NETWORKS = [
    {
      id: "btc",
      label: "Bitcoin (BTC)",
      address: "1MZ82X6W6JHNYSjN1xPDyRa4cz1B8RqiGG",
      explorer: "https://blockchain.com/btc/tx/",
    },
    {
      id: "eth",
      label: "Ethereum (ETH)",
      address: "0xc6240d79d9341d6e585ca1ddb9b121c8c8a130d4",
      explorer: "https://etherscan.io/tx/",
    },
    {
      id: "usdt-trc20",
      label: "USDT (TRC-20)",
      address: "TA2528r9iLeCr33JBv9PKKv4aeyhXn568H",
      explorer: "https://tronscan.org/#/transaction/",
    },
    {
      id: "usdt-erc20",
      label: "USDT (ERC-20)",
      address: "0xc6240d79d9341d6e585ca1ddb9b121c8c8a130d4",
      explorer: "https://etherscan.io/tx/",
    },
  ];

  var PRODUCTS = [
    {
      id: "p7",
      image: "./assets/img/preview/p7.webp",
      category: "asset",
      usd: 3,
      price: { btc: "0.00004814 BTC", eth: "0.001701 ETH", "usdt-trc20": "3 USDT", "usdt-erc20": "3 USDT" },
    },
    {
      id: "p8",
      image: "./assets/img/preview/p8.webp",
      category: "asset",
      usd: 2.5,
      price: { btc: "0.00004011 BTC", eth: "0.001418 ETH", "usdt-trc20": "2.5 USDT", "usdt-erc20": "2.5 USDT" },
    },
    {
      id: "p9",
      image: "./assets/img/preview/p9.webp",
      category: "asset",
      usd: 5,
      price: { btc: "0.00008023 BTC", eth: "0.002836 ETH", "usdt-trc20": "5 USDT", "usdt-erc20": "5 USDT" },
    },
    {
      id: "p10",
      image: "./assets/img/preview/p10.webp",
      category: "asset",
      usd: 4,
      price: { btc: "0.00006418 BTC", eth: "0.002268 ETH", "usdt-trc20": "4 USDT", "usdt-erc20": "4 USDT" },
    },
    {
      id: "p11",
      image: "./assets/img/preview/p11.webp",
      category: "asset",
      usd: 2,
      price: { btc: "0.00003209 BTC", eth: "0.001134 ETH", "usdt-trc20": "2 USDT", "usdt-erc20": "2 USDT" },
    },
    {
      id: "p12",
      image: "./assets/img/preview/p12.webp",
      category: "asset",
      usd: 3.5,
      price: { btc: "0.00005616 BTC", eth: "0.001985 ETH", "usdt-trc20": "3.5 USDT", "usdt-erc20": "3.5 USDT" },
    },
  ];

  return {
    networks: NETWORKS,
    products: PRODUCTS,
  };
})();
