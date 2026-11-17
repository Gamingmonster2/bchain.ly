# Deployment — Cloudflare Pages

This site is static (HTML/CSS/JS only), so Cloudflare Pages can build and host it directly from GitHub.

## 1. Push to GitHub

The repo is already cloned from `Gamingmonster2/bchain.ly` and `origin` points to
`https://github.com/Gamingmonster2/bchain.ly.git`.

```bash
git add .
git commit -m "Add bilingual bchain.ly storefront with product catalog and crypto payments"
git push origin main
```

`gh` CLI is not installed in this environment; use a Git credential (PAT or GitHub CLI on another machine) for the push.

## 2. Create the Cloudflare Pages project

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Choose **GitHub**, authorize Cloudflare, and select `Gamingmonster2/bchain.ly`.
3. Build settings:
   - **Production branch:** `main`
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (root)
4. Click **Save and Deploy**. The first deploy will publish at `https://bchain-ly.pages.dev`.

No environment variables or framework presets are required.

## 3. Custom domains

In the Pages project → **Custom domains**:

1. Add **`bchain.ly`** and set it as the primary domain.
2. Add **`blockchain.com.ly`** as the supporting/alias domain.

For each domain Cloudflare will show the required DNS records. In your DNS zone add:

| Type  | Name              | Value                         |
| ----- | ----------------- | ----------------------------- |
| CNAME | `bchain.ly`       | `<your-project>.pages.dev`    |
| CNAME | `blockchain.com.ly` | `<your-project>.pages.dev`  |

Wait for the DNS check to pass. Cloudflare provisions SSL certificates automatically.

### Optional: redirect the supporting domain

If `blockchain.com.ly` should only forward visitors to the primary domain, add a Pages **Redirect rule** (Workers & Pages → your project → Settings → Redirects) or create a `_redirects` file in the repo root:

```
https://blockchain.com.ly/*  https://bchain.ly/:splat  301
```

Skip this if you want both domains to serve the site independently (the current setup does).

## 4. Verify

- `https://bchain.ly` loads the EN site.
- The `عربي` switch flips all text to Arabic and sets `<html dir="rtl">`.
- Opening a product shows the payment modal with network tabs and a copyable address.
- The modal's order form accepts an email and transaction hash and opens a prepared email to `ORDER_EMAIL`.
- The support domain resolves to the same project.

## 5. Before going live

Wallet addresses are already set in `assets/js/products.js` from the owner's donation page (`https://donatr.ee/sayfe/`):

- BTC: `1MZ82X6W6JHNYSjN1xPDyRa4cz1B8RqiGG`
- ETH / USDT-ERC-20: `0xc6240d79d9341d6e585ca1ddb9b121c8c8a130d4`
- USDT-TRC-20: `TA2528r9iLeCr33JBv9PKKv4aeyhXn568H`

Double-check the first and last characters against your wallet app before accepting payments, and test with a small amount.

Also confirm `ORDER_EMAIL` in `assets/js/main.js` points to a mailbox you actually read. Buyers submit their email and tx hash there; after verifying the payment on-chain, send them the purchased files from that same mailbox.
