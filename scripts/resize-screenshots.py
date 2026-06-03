"""Resize Play Store screenshots to exact 9:16 (1080x1920).

Google Play: each side 1080–7680 px, aspect 9:16 or 16:9.
Default output: 1080 x 1920 (portrait 9:16).
"""
from __future__ import annotations

from pathlib import Path

try:
    from PIL import Image
except ImportError:
    import subprocess
    import sys

    subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow", "-q"])
    from PIL import Image

# Exact 9:16 — width = 9n, height = 16n
TARGET_W = 1080
TARGET_H = 1920

SRC_DIR = Path(r"C:\Users\Keerthija Vegi\.cursor\projects\c-Users-Public-Downloads-investiq\assets")
ROOT = Path(__file__).resolve().parents[1] / "assets" / "store-screenshots"

OUTPUTS: list[tuple[str, str]] = [
    ("phone-01-welcome.png", "phone/01-welcome.png"),
    ("phone-02-quiz.png", "phone/02-quiz.png"),
    ("phone-03-persona.png", "phone/03-persona.png"),
    ("phone-04-home.png", "phone/04-home.png"),
    ("tablet7-01-welcome.png", "tablet-7/01-welcome.png"),
    ("tablet7-02-quiz.png", "tablet-7/02-quiz.png"),
    ("tablet7-03-persona.png", "tablet-7/03-persona.png"),
    ("tablet7-04-home.png", "tablet-7/04-home.png"),
    ("tablet10-01-welcome.png", "tablet-10/01-welcome.png"),
    ("tablet10-02-quiz.png", "tablet-10/02-quiz.png"),
    ("tablet10-03-persona.png", "tablet-10/03-persona.png"),
    ("tablet10-04-home.png", "tablet-10/04-home.png"),
]


def crop_resize(src: Path, dst: Path) -> None:
    target_ratio = TARGET_W / TARGET_H  # 9/16
    img = Image.open(src).convert("RGB")
    src_ratio = img.width / img.height

    if src_ratio > target_ratio:
        crop_h = img.height
        crop_w = int(round(crop_h * target_ratio))
    else:
        crop_w = img.width
        crop_h = int(round(crop_w / target_ratio))

    left = (img.width - crop_w) // 2
    top = (img.height - crop_h) // 2
    cropped = img.crop((left, top, left + crop_w, top + crop_h))
    resized = cropped.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)

    dst.parent.mkdir(parents=True, exist_ok=True)
    resized.save(dst, "PNG", optimize=True)

    out = Image.open(dst)
    ratio = out.width / out.height
    mb = dst.stat().st_size / (1024 * 1024)
    ok = out.width == TARGET_W and out.height == TARGET_H and abs(ratio - 9 / 16) < 1e-9
    status = "OK" if ok else "FAIL"
    print(f"{status} {dst.relative_to(ROOT)} -> {out.width}x{out.height} ratio={ratio:.6f} {mb:.2f}MB")


def main() -> None:
    print(f"Target: exact 9:16 = {TARGET_W}x{TARGET_H}\n")
    for src_name, rel_dst in OUTPUTS:
        src = SRC_DIR / src_name
        dst = ROOT / rel_dst
        if not src.exists():
            print(f"SKIP missing source: {src_name}")
            continue
        crop_resize(src, dst)


if __name__ == "__main__":
    main()
