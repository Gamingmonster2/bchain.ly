# bchain.ly

Bilingual (English / Arabic) static storefront built on the [elhussary/nft-hub](https://github.com/elhussary/nft-hub) design. It shows a fixed product catalog and lets visitors pay by sending crypto directly to a wallet address.

## Features

- EN / AR language switcher with full translation of all UI text
- Arabic RTL layout with a readable Arabic font (Cairo)
- Static product catalog (6 items) defined in `assets/js/products.js`
- Crypto payment modal with network tabs (BTC, ETH, USDT-TRC20, USDT-ERC20), copyable wallet address and amount
- FAQ accordion, responsive layout, AOS scroll animations
- No build step — plain HTML, CSS and JavaScript, ready for Cloudflare Pages

## Local preview

Open `index.html` directly in a browser, or serve the folder:

```bash
npx serve .
```

Then visit `http://localhost:3000`.

## Configure before going live

1. **Wallet addresses** — already configured from the owner's donation page (`https://donatr.ee/sayfe/`) for BTC, ETH, USDT-TRC20 and USDT-ERC20. Verify them before accepting real payments; edit `assets/js/products.js` if you change wallets.
2. **Products** — edit the `PRODUCTS` array in the same file (name/description translations live in `assets/js/i18n.js` under keys `product.p1` … `product.p6`).
3. **Contact** — update `hello@bchain.ly` in `index.html` if needed.
4. **Legal pages** — the Privacy Policy and Terms links are placeholders (`#`). Add real pages before launch.

> ⚠️ The original template repository does not include a license. Confirm reuse rights with the template owner before commercial publication.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for Cloudflare Pages setup and custom domain configuration.

## Project structure

```
index.html               Main page (all UI text uses data-i18n keys)
assets/css/style.css     Template styles + bchain.ly additions
assets/js/i18n.js        EN/AR dictionary and language switcher
assets/js/products.js    Product catalog + wallet addresses
assets/js/main.js        Rendering, modal, FAQ, AOS init
```
