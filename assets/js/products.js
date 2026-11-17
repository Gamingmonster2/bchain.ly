/* Static product catalog + receiving wallet addresses.
   Addresses come from the owner's donation page: https://donatr.ee/sayfe/
   USDT (ERC-20) uses the same Ethereum address as native ETH.
   See DEPLOYMENT.md if you change networks or addresses. */
window.CATALOG = (function () {
  "use strict";

  var NETWORKS = [
    {
      id: "btc",
      label: "Bitcoin (BTC)",
      address: "1MZ82X6W6JHNYSjN1xPDyRa4cz1B8RqiGG",
    },
    {
      id: "eth",
      label: "Ethereum (ETH)",
      address: "0xc6240d79d9341d6e585ca1ddb9b121c8c8a130d4",
    },
    {
      id: "usdt-trc20",
      label: "USDT (TRC-20)",
      address: "TA2528r9iLeCr33JBv9PKKv4aeyhXn568H",
    },
    {
      id: "usdt-erc20",
      label: "USDT (ERC-20)",
      address: "0xc6240d79d9341d6e585ca1ddb9b121c8c8a130d4",
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
