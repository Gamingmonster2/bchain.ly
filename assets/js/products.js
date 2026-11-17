/* Static product catalog + placeholder wallet addresses.
   Replace every `REPLACE_WITH_YOUR_...` value with your real receiving address
   before publishing. See DEPLOYMENT.md. */
window.CATALOG = (function () {
  "use strict";

  var NETWORKS = [
    {
      id: "btc",
      label: "Bitcoin (BTC)",
      address: "REPLACE_WITH_YOUR_BTC_ADDRESS",
    },
    {
      id: "eth",
      label: "Ethereum (ETH)",
      address: "REPLACE_WITH_YOUR_ETH_ADDRESS",
    },
    {
      id: "usdt-trc20",
      label: "USDT (TRC-20)",
      address: "REPLACE_WITH_YOUR_USDT_TRC20_ADDRESS",
    },
    {
      id: "usdt-erc20",
      label: "USDT (ERC-20)",
      address: "REPLACE_WITH_YOUR_USDT_ERC20_ADDRESS",
    },
  ];

  var PRODUCTS = [
    {
      id: "p1",
      image: "./assets/img/art_01.png",
      category: "gift",
      price: { btc: "0.00045 BTC", eth: "0.0065 ETH", "usdt-trc20": "29 USDT", "usdt-erc20": "29 USDT" },
    },
    {
      id: "p2",
      image: "./assets/img/art_02.png",
      category: "sub",
      price: { btc: "0.00078 BTC", eth: "0.011 ETH", "usdt-trc20": "49 USDT", "usdt-erc20": "49 USDT" },
    },
    {
      id: "p3",
      image: "./assets/img/features-01.png",
      category: "asset",
      price: { btc: "0.0011 BTC", eth: "0.016 ETH", "usdt-trc20": "79 USDT", "usdt-erc20": "79 USDT" },
    },
    {
      id: "p4",
      image: "./assets/img/features-02.png",
      category: "service",
      price: { btc: "0.0016 BTC", eth: "0.023 ETH", "usdt-trc20": "99 USDT", "usdt-erc20": "99 USDT" },
    },
    {
      id: "p5",
      image: "./assets/img/features-03.png",
      category: "asset",
      price: { btc: "0.0023 BTC", eth: "0.033 ETH", "usdt-trc20": "149 USDT", "usdt-erc20": "149 USDT" },
    },
    {
      id: "p6",
      image: "./assets/img/art_04.png",
      category: "service",
      price: { btc: "0.0031 BTC", eth: "0.045 ETH", "usdt-trc20": "199 USDT", "usdt-erc20": "199 USDT" },
    },
  ];

  return {
    networks: NETWORKS,
    products: PRODUCTS,
  };
})();
