# Image request log

Use this file to record every image supplied by the owner with its generation prompt. It keeps the catalog reproducible and documents the rights story.

## How to add a new image to the site

1. Copy the full-size image into `private-originals/pNN.webp` (this folder is git-ignored and never deployed).
2. Run `python art-pipeline/make-previews.py` to create the watermarked 720px preview in `assets/img/preview/pNN.webp`.
3. Add a product entry to `assets/js/products.js` with a new `id` (`p13`, `p14`, …), the preview `image` path, a `usd` price and the converted prices per network.
4. Add `product.<id>.name` and `product.<id>.desc` to **both** dictionaries in `assets/js/i18n.js`.
5. Update the catalog count in `README.md`.
6. Add a row below with the original prompt and any rights warning.
7. Commit and push; Cloudflare Pages republishes automatically. Keep `private-originals/` locally for delivery.

## Preview policy (19 Nov 2026)

- The six original hand-made SVGs and their products (`p1`–`p6`, gift cards / subscriptions / services) were **removed**. Only the six owner-supplied artworks remain.
- Published images are 720px previews stamped `© bchain.ly · 18.11.2026 · #pNN` with a repeated diagonal watermark. The full 1024px files stay in `private-originals/` and are emailed after payment.
- Prices were lowered to about **$2–$5** per artwork (BTC/ETH amounts recalculated from CoinGecko rates on 19 Nov 2026).

## Log

| ID | File | Product | Prompt (original) | Rights / warning |
|---|---|---|---|---|
| p7 | `futuristic-parametric-architecture.webp` | Parametric Architecture | `A futuristic abstract architectural parametric design, minimalist white concrete structure with sharp geometric shadows, cinematic lighting, ultra-detailed 8k, photorealistic architectural visualization, no humans, no living creatures.` | Generated via FLUX.1-schnell (Apache-2.0 weights). Neutral title/description used on site. |
| p8 | `tunisian-desert-film-set.webp` | Desert Film Set | `Aerial drone shot of the Star Wars filming location in the Tunisian desert, specifically the village of Mos Espa set among palm trees and sand dunes, geometric mud-brick architecture, cinematic lighting, high angle, sharp details, 8k resolution, no people, no living creatures.` | ⚠️ The original prompt names a registered trademark/franchise. The public title and description intentionally avoid the brand name. Do not use the brand name in marketing or NFT metadata without permission. |
| p9 | `libyan-sahara-dunes.webp` | Sahara Golden Dunes | `Epic cinematic landscape of the Libyan Sahara desert with massive orange sand dunes, a distant camel caravan appearing as tiny silhouettes far in the distance (no facial details visible), sunset golden hour light creating long shadows, vastness and isolation, hyper-realistic, 8k.` | ⚠️ Contains tiny distant animal silhouettes — a deviation from the store's "no living beings" rule. Owner-supplied; listed with a neutral description. Reconsider if you want a strictly creature-free catalog. |
| p10 | `libyan-bedla-wardrobe.webp` | Libyan Bedla | `Artistic still life photography of a traditional Libyan female folk dress (Libyan Bedla) displayed intricately folded inside an antique, open wooden wardrobe. Luxurious silver and gold embroidery detail visible, traditional jewelry resting near it. Nobody is wearing the dress. Warm, moody cinematic lighting from a side window, vintage atmosphere, ultra-detailed, photorealistic, 8k.` | No person shown; traditional clothing and jewelry only. |
| p11 | `retro-anime-steak-fries.webp` | Retro Anime Steak & Fries | `A 2D anime style digital illustration of a white ceramic plate on a wooden table, featuring a juicy sliced grilled steak sprinkled with green herbs, paired with golden crispy french fries. Warm rising steam. Retro anime art style, vibrant colors, clean lines, cozy atmosphere.` | Food illustration; no people, animals or logos shown. Style differs from the photorealistic samples — owner-supplied. |
| p12 | `retro-anime-spaghetti.webp` | Retro Anime Spaghetti | `2D anime style digital illustration of a white ceramic plate on a wooden table, filled with delicious spaghetti pasta topped with a rich red tomato marinara sauce and a fresh green basil leaf on top. Rising steam lines. Retro anime aesthetic, vibrant and appetizing colors, clean outlines.` | Food illustration; no people, animals or logos shown. Same retro anime set as p11 — owner-supplied. |

## Note on generated images

The source model for these images is FLUX.1-schnell (Apache-2.0), so commercial use of the outputs is permitted. This does not clear third-party trademark or recognizable-location claims; review each image before listing it.
