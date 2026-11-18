# art-pipeline — local/open-source image production

This folder contains the **small, text-only** parts of the image production setup. The ComfyUI application and model weights are large (several GB) and are **not** committed to this repository. They live in a separate local folder or on a cloud GPU machine.

## Chosen path

**ComfyUI + FLUX.1-schnell** for generation, with **SDXL** as a lighter fallback, then **Real-ESRGAN 4x** upscaling. Reason: FLUX-schnell weights are usable commercially, quality is high, and ComfyUI gives full control over the workflow.

## Where to run it

**Fastest free option for the first 8–9 samples:** the public Hugging Face Space [black-forest-labs/FLUX.1-schnell](https://huggingface.co/spaces/black-forest-labs/FLUX.1-schnell) runs FLUX.1-schnell on free ZeroGPU; no local GPU or payment is needed. Model weights are Apache-2.0 and the Space code is MIT, so outputs can be used commercially.

**For larger batches or full control:** RunPod GPU — follow [runpod-setup.md](./runpod-setup.md). For all other free options and resale licensing, see [sourcing-options.md](./sourcing-options.md).

| Option | Status on the current machine | Notes |
|---|---|---|
| Cloud GPU (RunPod) | ✅ Chosen | Rent a GPU only while generating. Start from a ComfyUI template, upload this workflow, download the finished PNGs. |
| Local machine (this PC) | ⚠️ Possible but impractical | Intel HD Graphics 530, no CUDA, Python 3.14. CPU-only generation takes many minutes per image and FLUX may not load at all. Use only for small tests at 512px. |
| Hosted API (Replicate / fal.ai) | ✅ Easy, paid | No setup, but costs per image and needs an account/key. |

## Steps (cloud GPU)

1. Create a RunPod or Colab instance with an NVIDIA GPU (8 GB VRAM minimum, 12 GB+ preferred).
2. Install ComfyUI (Python 3.10–3.12) and start it with `--listen` if using RunPod.
3. Download the FLUX-schnell files into `ComfyUI/models/`:
   - `unet/flux1-schnell.safetensors`
   - `clip/t5xxl_fp8_e4m3fn.safetensors`
   - `clip/clip_l.safetensors`
   - `vae/ae.safetensors`
4. Upload `workflow-flux-schnell.json` from this folder into the ComfyUI UI (Workflow → Open, or drag and drop).
5. Replace the prompt text in the `CLIPTextEncode` node with one from `prompts.md`.
6. Queue the prompt, then download the result from `ComfyUI/output/`.
7. Upscale 4x with Real-ESRGAN (see `prompts.md`), export the final WebP into `private-originals/pNN.webp`.
8. Run `python art-pipeline/make-previews.py` to produce the watermarked 720px preview in `assets/img/preview/`.
9. Add or update the product entry in `assets/js/products.js` and its translation keys in `assets/js/i18n.js`.

`make-previews.py` requires Pillow (`python -m pip install Pillow`). Only the previews are published; `private-originals/` is git-ignored and used for manual email delivery.

## Rules for this store

- No living beings: no people, animals, or real brand logos in generated art.
- Prefer museum artifacts, marble, bronze, pottery, abstract geometry, ancient tragedy motifs.
- Keep the brand palette: `#2600fc → #ff00ea` rim light on a dark charcoal background.
- Output 1:1 at 1024px base, upscaled to 3000–4000px for sale.

## What is intentionally NOT here

- The ComfyUI source and Python packages (hundreds of MB, and not useful inside a static site).
- Model weights (multi-GB, and each has its own license).
- Any API keys or credentials.
