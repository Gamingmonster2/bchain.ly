# Prompt presets — ancient / tragic, no living beings

Use these directly in the `CLIPTextEncode` node of `workflow-flux-schnell.json`. FLUX-schnell does not need a negative prompt node; if you switch to SDXL, add the shared negative prompt below.

## Base style suffix (append to every prompt)

```
ancient Greek tragedy artifact, museum display, marble and aged bronze, fine cracks and patina, dramatic chiaroscuro lighting, deep violet #2600fc to magenta #ff00ea rim light, dark charcoal background, hyper-detailed, ultra sharp, square 1:1 composition, centered object, clean negative space, no text, no watermark, no people, no animals, no logos, no copyrighted characters
```

## Preset 1 — Tragic mask artifact

```
an ancient marble tragic theatre mask resting on a stone pedestal, empty eye openings, carved grooves, worn edges, cracked surface
```
+ base style suffix

## Preset 2 — Red-figure amphora

```
a single ancient ceramic amphora with geometric meander patterns and abstract floral motifs, cracked glaze, two handles, no faces
```
+ base style suffix

## Preset 3 — Laurel column capital

```
a fragment of an ancient marble column capital carved with a laurel wreath and rosette, weathered stone, chipped corners
```
+ base style suffix

## Preset 4 — Lyre medallion

```
an oversized ancient bronze coin medallion with abstract relief of a lyre and olive branches, green patina, raised rim
```
+ base style suffix

## Preset 5 — Tragic rosette

```
a symmetric stone rosette relief with radiating petals and a hollow center, ancient temple fragment, geometric tragedy motif
```
+ base style suffix

## Preset 6 — Inscribed tablet

```
a broken ancient stone tablet with abstract geometric inscription marks, no readable letters, chipped edges, dust and erosion
```
+ base style suffix

## SDXL negative prompt

```
people, person, human, face, hands, animals, pets, cartoon, anime, text, letters, watermark, signature, logo, brand, low quality, blurry, distorted, extra limbs, deformed
```

## Settings

| Field | FLUX.1-schnell | SDXL fallback |
|---|---|---|
| Steps | 4 | 30–40 |
| Sampler | euler | dpmpp_2m |
| Scheduler | simple | karras |
| Size | 1024 × 1024 | 1024 × 1024 |
| Guidance | not used | 6–8 |
| Seeds | try 10–20 seeds, keep the best | same |

## Upscaling (after generation)

Install Real-ESRGAN and run 4x on the chosen PNG:

```bash
pip install realesrgan
realesrgan-ncnn-vulkan -i input.png -o output_4x.png -n realesrgan-x4plus -s 4
```

Then open in an editor and:
1. Crop to exactly 1:1.
2. Export `PNG` (master) and `WebP` quality 90 (web).
3. For print: 300 DPI, 3000×3000 or larger.

## Naming convention

```
assets/img/generated/<preset-name>-<seed>.png
```

Example: `tragic-mask-84217.png`. Update `assets/js/products.js` with the final path.
