"""One-shot image optimizer for sgdietz-site/public/art.

For each .jpg, produces:
  - <name>.webp       (max 1200px wide, q=82)
  - <name>.jpg        (replaces original; max 1600px wide, optimized JPEG q=85)
The HTML can then use <picture> with WebP + JPEG fallback.
"""
from pathlib import Path
from PIL import Image

SRC = Path(__file__).parent / "public" / "art"
WEBP_MAX = 1200
JPG_MAX = 1600

for jpg in sorted(SRC.glob("*.jpg")):
    img = Image.open(jpg).convert("RGB")
    name = jpg.stem
    w, h = img.size

    # WebP version
    if w > WEBP_MAX:
        scale = WEBP_MAX / w
        webp_size = (WEBP_MAX, int(h * scale))
    else:
        webp_size = (w, h)
    webp_img = img.resize(webp_size, Image.LANCZOS) if webp_size != (w, h) else img
    webp_path = SRC / f"{name}.webp"
    webp_img.save(webp_path, "WEBP", quality=82, method=6)

    # Optimized JPEG fallback
    if w > JPG_MAX:
        scale = JPG_MAX / w
        jpg_size = (JPG_MAX, int(h * scale))
    else:
        jpg_size = (w, h)
    jpg_img = img.resize(jpg_size, Image.LANCZOS) if jpg_size != (w, h) else img
    jpg_img.save(jpg, "JPEG", quality=85, optimize=True, progressive=True)

    print(f"{name:25s}  {jpg.stat().st_size//1024:>5}K jpg   {webp_path.stat().st_size//1024:>5}K webp")
