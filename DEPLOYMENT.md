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
- The support domain resolves to the same project.

## 5. Before going live

Replace all placeholder wallet addresses in `assets/js/products.js`:

```
REPLACE_WITH_YOUR_BTC_ADDRESS
REPLACE_WITH_YOUR_ETH_ADDRESS
REPLACE_WITH_YOUR_USDT_TRC20_ADDRESS
REPLACE_WITH_YOUR_USDT_ERC20_ADDRESS
```

The modal shows a visible demo warning until these are changed. Remove or change the warning text (`modal.warning` key in `assets/js/i18n.js`) once real addresses are in place.
