# RunPod setup — generate the "wow" sample portfolio

This is the chosen generation environment. The current SVGs are placeholders; they must be replaced with real, high-quality samples **before** any marketing or custom orders. Rule: you cannot sell what you do not own.

## What you need

- A RunPod account (https://runpod.io) with a small credit balance (~$10–20 is enough for a first batch).
- A browser. No local GPU is required.
- About 30–60 minutes for the first setup, then minutes per image.

## 1. Deploy a GPU Pod

1. Log in → **Deploy** → **GPU Pods**.
2. Choose **Community Cloud** for lower prices.
3. GPU recommendation:
   - **Best:** RTX 3090 / 4090 (24 GB VRAM) — loads full FLUX-schnell.
   - **Minimum:** RTX 3060 12 GB — use the **fp8** model variant.
   - Avoid 8 GB cards for FLUX; use SDXL there instead.
4. Template: search for a **ComfyUI** community template. If none is available, pick **RunPod PyTorch** and install ComfyUI manually (step 3).
5. Set **Container Disk** to 30 GB and **Volume** to 50 GB.
6. Expose ports: **8181** (ComfyUI HTTP) and **22** (SSH).
7. Click **Deploy On Demand** and wait until the pod shows as Running.

> 💡 Cost control: select **Stop / On-Demand** and terminate the pod when finished. You pay only while it runs.

## 2. Open the pod UI

- Click the pod's **Connect** button.
- Use **HTTP Services → port 8181** to open ComfyUI in a browser, or **JupyterLab** to access files.
- Keep the pod URL/token private.

## 3. Install ComfyUI (only if the template did not include it)

In JupyterLab → Terminal:

```bash
cd /workspace
git clone https://github.com/Comfy-Org/ComfyUI.git
cd ComfyUI
pip install -r requirements.txt
python main.py --listen 0.0.0.0 --port 8181
```

Use Python 3.10 or 3.11. If Python 3.14 is present, create a 3.11 environment first.

## 4. Download the model files

Create these folders inside `ComfyUI/models/`:

```
models/unet
models/clip
models/vae
```

Download the files below from Hugging Face (open the repo page and click the file → Download; exact names must match the workflow):

| File | Destination folder | Source repo |
|---|---|---|
| `flux1-schnell.safetensors` **or** `flux1-schnell-fp8-e4m3fn.safetensors` (12 GB card) | `models/unet` | `black-forest-labs/FLUX.1-schnell` or `Comfy-Org/flux1-schnell` |
| `t5xxl_fp8_e4m3fn.safetensors` | `models/clip` | `Comfy-Org/flux1-schnell` |
| `clip_l.safetensors` | `models/clip` | `Comfy-Org/flux1-schnell` |
| `ae.safetensors` | `models/vae` | `black-forest-labs/FLUX.1-schnell` |

If a filename differs slightly, update the matching `*_name` field in `workflow-flux-schnell.json`.

## 5. Run the first image

1. In ComfyUI, drag `art-pipeline/workflow-flux-schnell.json` onto the canvas (or Workflow → Open).
2. In the `CLIPTextEncode` node, paste a preset from `prompts.md`.
3. Keep steps = **4**, size = **1024×1024**, sampler = **euler**.
4. Change `noise_seed` to get variations; generate 10–20 and keep the best 2–3.
5. Click **Queue Prompt**. The image appears in the Save Image node and in `ComfyUI/output/`.

### Troubleshooting

| Problem | Fix |
|---|---|
| CUDA out of memory | Use the fp8 unet, set size to 768×768, restart the pod |
| Unknown node type | Update ComfyUI to the latest version |
| Black image | Check that `ae.safetensors` is in `models/vae` |
| Very slow | Confirm the pod actually has an NVIDIA GPU selected |

## 6. Upscale and export

Run Real-ESRGAN 4x on the chosen PNG (see `prompts.md`), then export:

- `master.png` — full resolution, for delivery
- `preview.webp` — compressed, for the website

## 7. Put the samples into the store

1. Copy previews to `assets/img/generated/`.
2. Update the `image` field for each product in `assets/js/products.js`.
3. Keep the product names/prices; only the images change.
4. Commit and push — Cloudflare Pages republishes automatically.

## First batch — the six samples to produce

These replace the current SVG placeholders and form the portfolio that makes a visitor say "wow":

1. **Tragic mask** — marble theatre mask on pedestal (preset 1)
2. **Amphora** — red-figure ceramic vase with geometric patterns (preset 2)
3. **Laurel capital** — carved column fragment (preset 3)
4. **Lyre medallion** — patinated bronze coin (preset 4)
5. **Tragic rosette** — symmetric temple relief (preset 5)
6. **Inscribed tablet** — eroded stone tablet with abstract glyphs (preset 6)

All must follow the store rules: **no people, no animals, no logos, no copyrighted characters**, violet→magenta rim light on charcoal.

## Only after the samples are live

Then enable the custom-order workflow: the buyer writes a description in the order form, pays, and you generate a unique piece with the same pipeline and email the master file. The form field is already wired into the order email.
