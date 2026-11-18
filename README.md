# bchain.ly

Bilingual (English / Arabic) static storefront built on the [elhussary/nft-hub](https://github.com/elhussary/nft-hub) design. It shows a fixed product catalog and lets visitors pay by sending crypto directly to a wallet address.

## Features

- EN / AR language switcher with full translation of all UI text
- Arabic RTL layout with a readable Arabic font (Cairo)
- Static catalog of 6 digital artworks defined in `assets/js/products.js`, priced at about $2–$5 (converted to BTC / ETH / USDT)
- Click-to-enlarge lightbox showing reduced, watermarked previews (`© bchain.ly · 18.11.2026`); no download button, right-click and drag are blocked on previews
- Full-resolution originals are kept locally in `private-originals/` (git-ignored) and delivered by email after payment
- Crypto payment modal with network tabs (BTC, ETH, USDT-TRC20, USDT-ERC20), copyable wallet address and amount, tx-hash validation and a block-explorer link
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
2. **Products** — edit the `PRODUCTS` array in the same file (name/description translations live in `assets/js/i18n.js` under keys `product.p7` … `product.p12`). Prices are stored per network; `usd` is the approximate dollar value shown on the card.
3. **Order email** — set `ORDER_EMAIL` near the top of `assets/js/main.js` to the inbox where you want order notifications. The footer address in `index.html` should match. The form validates the email and 64-character tx hash, then opens the visitor's mail app with product, ID, price, network, amount, wallet address, buyer email, tx hash and explorer link already filled in. You verify the payment on-chain and email the full-size file from `private-originals/`.
4. **Legal pages** — the Privacy Policy and Terms links are placeholders (`#`). Add real pages before launch.

### Delivery flow (manual, no backend)

1. Buyer pays crypto to the displayed address and copies the tx hash.
2. Buyer enters email + tx hash in the modal and sends the prepared email.
3. You check the transaction on a block explorer and confirm the amount/network.
4. You email the full-resolution file from `private-originals/` to the buyer (never publish that folder).

This is intentional for the first sales. Automated delivery can be added later with BTCPay Server or Cloudflare R2 signed links.

> ⚠️ The original template repository does not include a license. Confirm reuse rights with the template owner before commercial publication.

## Image production

See [art-pipeline/README.md](./art-pipeline/README.md) for the open-source generation setup (ComfyUI + FLUX.1-schnell), prompt presets and license notes. The heavy application and model weights are deliberately **not** stored in this repository.

To add another artwork: put the full-size image in `private-originals/pNN.webp`, run `python art-pipeline/make-previews.py`, then add product `pNN` to `products.js` and its EN/AR text to `i18n.js`. Only the watermarked 720px previews in `assets/img/preview/` are deployed.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for Cloudflare Pages setup and custom domain configuration.

## Project structure

```
index.html               Main page (all UI text uses data-i18n keys)
assets/css/style.css     Template styles + bchain.ly additions
assets/js/i18n.js        EN/AR dictionary and language switcher
assets/js/products.js    Product catalog + wallet addresses
assets/js/main.js        Rendering, lightbox, modal, FAQ, AOS init
assets/img/preview/      Watermarked 720px previews (published)
private-originals/       Full-size files (local only, never published)
```
