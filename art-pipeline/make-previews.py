"""Build watermarked, reduced-size previews from the private full-size originals.

Run from anywhere:
    python art-pipeline/make-previews.py

Full-size files live in private-originals/ (git-ignored, never deployed).
Only the previews in assets/img/preview/ are published on the site.
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "private-originals"
OUT_DIR = ROOT / "assets" / "img" / "preview"

CREATED_DATE = "18.11.2026"
PREVIEW_SIZE = (720, 720)
FONT_PATH = Path(r"C:\Windows\Fonts\arial.ttf")
FONT_BOLD_PATH = Path(r"C:\Windows\Fonts\arialbd.ttf")
WATERMARK = f"bchain.ly  ·  {CREATED_DATE}"

PRODUCT_IDS = ["p7", "p8", "p9", "p10", "p11", "p12"]


def build_preview(source: Path, product_id: str) -> Path:
    image = Image.open(source).convert("RGBA")
    image.thumbnail(PREVIEW_SIZE, Image.Resampling.LANCZOS)
    width, height = image.size

    font = ImageFont.truetype(str(FONT_BOLD_PATH), 24)
    small = ImageFont.truetype(str(FONT_PATH), 18)

    # Repeated diagonal watermark over the whole image.
    layer = Image.new("RGBA", (width * 2, height * 2), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    box = draw.textbbox((0, 0), WATERMARK, font=font)
    text_width = box[2] - box[0]
    step_x = text_width + 110
    step_y = 92
    for row, y in enumerate(range(-height, height * 3, step_y)):
        offset = (row % 2) * (step_x // 2)
        for x in range(-width, width * 3, step_x):
            draw.text((x + offset, y), WATERMARK, font=font, fill=(255, 255, 255, 58))
    layer = layer.rotate(28, resample=Image.Resampling.BICUBIC)
    layer = layer.crop((width // 2, height // 2, width // 2 + width, height // 2 + height))
    image = Image.alpha_composite(image, layer)

    # Bottom signature strip: site, creation date, product number.
    draw = ImageDraw.Draw(image, "RGBA")
    strip_height = 44
    draw.rectangle((0, height - strip_height, width, height), fill=(15, 5, 29, 165))
    label = f"PREVIEW  ·  © bchain.ly  ·  {CREATED_DATE}  ·  #{product_id}"
    draw.text((14, height - strip_height + 11), label, font=small, fill=(255, 255, 255, 235))

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    target = OUT_DIR / f"{product_id}.webp"
    image.convert("RGB").save(target, "WEBP", quality=80, method=6)
    return target


def main() -> None:
    for product_id in PRODUCT_IDS:
        candidates = list(SOURCE_DIR.glob(f"{product_id}*.webp"))
        if not candidates:
            print(f"missing original for {product_id}")
            continue
        target = build_preview(candidates[0], product_id)
        print(f"{candidates[0].name} -> {target.name}")


if __name__ == "__main__":
    main()
