# Sourcing 8–9 sellable images — research notes (2026)

## 1. Generating the images yourself (recommended)

For only 8–9 pieces, generating originals is stronger than reselling someone else's files: no competing seller, unique catalog, and a clear rights story.

| Option | Cost | Commercial rights | Notes |
|---|---|---|---|
| Adobe Firefly | Free tier + paid | Yes for eligible features; check exact plan | Adobe states it does not train Firefly on customer content. IP indemnification is tied to eligible enterprise entitlements, not every free account. |
| Microsoft Bing Image Creator (DALL·E) | Free with account | Verify Microsoft terms before resale | Quick, but check output rights and whether images are visible/public. |
| Pollinations.ai | Free API, no signup for basic use | ⚠️ Verify terms | Terms page is JavaScript-rendered; confirm commercial/resale rights in writing before selling outputs. |
| Open weights self-hosted: FLUX.2 klein 4B, Z-Image-Turbo, Qwen-Image-Edit | Free weights + GPU time | Apache-2.0 → commercial self-hosting allowed | Needs a GPU; use the RunPod path in this folder. Best control and no per-image fee. |
| Midjourney | Paid only | Paid plan required; Pro/Mega needed for companies over $1M revenue | Public and remixable by default; Stealth needs higher plan. |
| Stable Diffusion 3.5 | Free weights | Community license: commercial under $1M annual revenue with registration | Above threshold needs separate license. |
| GPT Image 2 / Google Nano Banana | Paid API / access-route dependent | Yes under applicable terms | Indemnification and training rules differ by plan and region. |

Sources: Everypixel Journal, "Can You Use AI-Generated Images Commercially? 14 Generators Compared", 16 Oct 2026 — https://journal.everypixel.com/ai-generated-images-commercial-use

## 2. The "buy low, sell high" model — what is actually legal

### Standard stock licenses do NOT allow it

Adobe Stock's own license page says a buyer **may not**:

> "Distribute the stand-alone file."
> "Create merchandise, templates, or other products for resale or distribution where the primary value of the product is associated with the asset itself."

This applies to Standard, Enhanced **and Extended** licenses. Shutterstock's help center likewise says standard licenses are generally not transferable to a client, and its terms prohibit reselling/redistributing content or displaying it as a gallery for third-party selection.

Source: https://stock.adobe.com/license-terms and https://www.shutterstock.com/help/en/articles/10617062-are-licenses-transferrable

**Conclusion:** buying a $10 stock image and delivering the file to your customer for $20 is a license violation, even if you paid for the image.

### What DOES allow it: PLR / MRR / white-label

You need a product whose license explicitly grants **resale rights**, not merely "commercial use":

- **Creative Fabrica PLR products** — e.g. *Printable Wall Art PLR Resell Rights* (33 JPG files, 300 DPI, 5 sizes, tagged `Resellable`, `Private Label Rights`, `White Label`). Many such listings are only available through their subscription.
- **Etsy PLR / MRR bundles** — large bundles of digital products with resale rights; license terms vary by shop, read each listing.
- **Specialist PLR shops** — e.g. PLR Fairy, Boundless PLR, Digital Biz PLR; quality varies.

Source example: https://www.creativefabrica.com/product/printable-wall-art-plr-resell-rights/

### Affiliate programs are a different model

Creative Fabrica, Envato and Shutterstock have affiliate programs that pay commission when someone buys **through your link**. The customer pays the platform directly; you do not collect crypto and you do not deliver the file. This does not fit the current bchain.ly checkout, unless you change the flow to a pure referral link.

## 3. Verdict for bchain.ly

| Goal | Best route |
|---|---|
| 8–9 unique, high-quality samples | Generate originals with Firefly free tier or self-hosted Apache-2.0 models on RunPod |
| Zero generation, fastest listing | Buy one PLR/MRR bundle **with explicit resale rights**, then list at a higher price and deliver the file |
| Avoid legal problems | Keep a record of: source, exact license, model/tool version, date, and whether resale is permitted |

Important: "commercial use" means you may use the image in a project. It does **not** mean you may resell the image file as the product itself. Only PLR/MRR/white-label grants that.

The store rule still applies: no living beings, no logos, no copyrighted characters — check PLR bundles manually, since many contain people and animals.
