# bchain.ly

Bilingual (English / Arabic) static storefront built on the [elhussary/nft-hub](https://github.com/elhussary/nft-hub) design. It shows a fixed product catalog and lets visitors pay by sending crypto directly to a wallet address.

## Features

- EN / AR language switcher with full translation of all UI text
- Arabic RTL layout with a readable Arabic font (Cairo)
- Static product catalog (10 items) defined in `assets/js/products.js`
- Crypto payment modal with network tabs (BTC, ETH, USDT-TRC20, USDT-ERC20), copyable wallet address and amount
- Order form in the modal: buyer submits email + transaction hash, which opens a ready-to-send email with all order details
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
3. **Order email** — set `ORDER_EMAIL` near the top of `assets/js/main.js` to the inbox where you want order notifications. The footer address in `index.html` should match. The form opens the visitor's mail app with product, network, amount, wallet address, buyer email and tx hash already filled in; you verify the payment on-chain and send the files back to that email.
4. **Legal pages** — the Privacy Policy and Terms links are placeholders (`#`). Add real pages before launch.

### Delivery flow (manual, no backend)

1. Buyer pays crypto to the displayed address and copies the tx hash.
2. Buyer enters email + tx hash in the modal and sends the prepared email.
3. You check the transaction on a block explorer and confirm the amount/network.
4. You email the finished files (high-res images, license, etc.) to the buyer.

This is intentional for the first sales. Automated delivery can be added later with BTCPay Server or Cloudflare R2 signed links.

> ⚠️ The original template repository does not include a license. Confirm reuse rights with the template owner before commercial publication.

## Image production

See [art-pipeline/README.md](./art-pipeline/README.md) for the open-source generation setup (ComfyUI + FLUX.1-schnell), prompt presets and license notes. The heavy application and model weights are deliberately **not** stored in this repository.

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
