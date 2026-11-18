# Image request log

Use this file to record every image supplied by the owner with its generation prompt. It keeps the catalog reproducible and documents the rights story.

## How to add a new image to the site

1. Copy the image into `assets/img/generated/` with a short English filename.
2. Add a product entry to `assets/js/products.js` with a new `id` (`p9`, `p10`, …), the `image` path, a category and prices.
3. Add `product.<id>.name` and `product.<id>.desc` to **both** dictionaries in `assets/js/i18n.js`.
4. Update the catalog count in `README.md`.
5. Add a row below with the original prompt and any rights warning.
6. Commit and push; Cloudflare Pages republishes automatically.

## Log

| ID | File | Product | Prompt (original) | Rights / warning |
|---|---|---|---|---|
| p7 | `futuristic-parametric-architecture.webp` | Parametric Architecture | `A futuristic abstract architectural parametric design, minimalist white concrete structure with sharp geometric shadows, cinematic lighting, ultra-detailed 8k, photorealistic architectural visualization, no humans, no living creatures.` | Generated via FLUX.1-schnell (Apache-2.0 weights). Neutral title/description used on site. |
| p8 | `tunisian-desert-film-set.webp` | Desert Film Set | `Aerial drone shot of the Star Wars filming location in the Tunisian desert, specifically the village of Mos Espa set among palm trees and sand dunes, geometric mud-brick architecture, cinematic lighting, high angle, sharp details, 8k resolution, no people, no living creatures.` | ⚠️ The original prompt names a registered trademark/franchise. The public title and description intentionally avoid the brand name. Do not use the brand name in marketing or NFT metadata without permission. |
| p9 | `libyan-sahara-dunes.webp` | Sahara Golden Dunes | `Epic cinematic landscape of the Libyan Sahara desert with massive orange sand dunes, a distant camel caravan appearing as tiny silhouettes far in the distance (no facial details visible), sunset golden hour light creating long shadows, vastness and isolation, hyper-realistic, 8k.` | ⚠️ Contains tiny distant animal silhouettes — a deviation from the store's "no living beings" rule. Owner-supplied; listed with a neutral description. Reconsider if you want a strictly creature-free catalog. |
| p10 | `libyan-bedla-wardrobe.webp` | Libyan Bedla | `Artistic still life photography of a traditional Libyan female folk dress (Libyan Bedla) displayed intricately folded inside an antique, open wooden wardrobe. Luxurious silver and gold embroidery detail visible, traditional jewelry resting near it. Nobody is wearing the dress. Warm, moody cinematic lighting from a side window, vintage atmosphere, ultra-detailed, photorealistic, 8k.` | No person shown; traditional clothing and jewelry only. |

## Note on generated images

The source model for these images is FLUX.1-schnell (Apache-2.0), so commercial use of the outputs is permitted. This does not clear third-party trademark or recognizable-location claims; review each image before listing it.
