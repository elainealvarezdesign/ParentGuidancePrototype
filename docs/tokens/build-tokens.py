"""Builds parent-guidance.tokens.json (W3C Design Tokens format) from the Figma variables of the
"Design system - PG" library, exported on October 5, 2026.

Every alias is kept as a reference ("{Collection.Group.Name}") so tools such as Style Dictionary or
Tokens Studio resolve it. Collections with several modes (Typography) store the Desktop Regular value in
$value and every mode under $extensions["figma.modes"].

Run: python3 docs/tokens/build-tokens.py
"""
import json
from pathlib import Path

# --- Primitive Colors -----------------------------------------------------------------------------
PRIMITIVE_COLORS = """
Brand Color/Navy/Navy Base=1c3243
Brand Color/Navy/Navy Hover=284054
Brand Color/Navy/Navy 10=d2d6d9
Brand Color/Navy/Navy 20=a4adb4
Brand Color/Navy/Navy 30=77848e
Brand Color/Navy/Navy 40=495b69
Brand Color/Navy/Navy 50=1c3243
Brand Color/Navy/Navy 60=192d3c
Brand Color/Navy/Navy 70=152633
Brand Color/Navy/Navy 80=121f2a
Brand Color/Navy/Navy 90=0e1922
Brand Color/Navy/Navy 100=0b1319
Brand Color/Navy/Navy 100 Alpha 6=0b13190f
Brand Color/Navy/Navy 100 Alpha 14=0b131924
Brand Color/Slate/Slate Base=435766
Brand Color/Slate/Slate Light=5b6b75
Brand Color/Slate/Slate Muted=6e7f89
Brand Color/Teal/Teal Base=59797d
Brand Color/Teal/Teal 10=90b3b6
Brand Color/Teal/Teal 20=77999c
Brand Color/Teal/Teal 30=5d8083
Brand Color/Teal/Teal 40=44676a
Brand Color/Teal/Teal 50=2a4d50
Brand Color/Teal/Teal 60=113437
Brand Color/Teal/Teal 70=012b30
Brand Color/Teal/Teal 80=04181a
Brand Color/Teal/Teal 90=142f33
Brand Color/Teal/Teal 100=000104
Brand Color/Teal/Tint=eaf1f1
Brand Color/Teal/Tint Soft=f0f6f6
Brand Color/Teal/Tint Faint=edf5f5
Brand Color/Teal/Line=dee8e9
Brand Color/Sage/Sage Base=90b3b6
Brand Color/Sage/Sage 10=dee4e5
Brand Color/Sage/Sage 20=cdd7d8
Brand Color/Sage/Sage 30=acbcbe
Brand Color/Sage/Sage 40=9bafb1
Brand Color/Sage/Sage 50=8ba1a4
Brand Color/Sage/Sage 60=7a9497
Brand Color/Sage/Sage 70=59797d
Brand Color/Sage/Sage 80=406064
Brand Color/Sage/Sage 90=26464a
Brand Color/Sage/Sage 100=0d2d31
Brand Color/Cream/Cream Base=f9f4f1
Brand Color/Cream/Cream Dark=f0edeb
Brand Color/Cream/Cream Muted=f3ece8
Brand Color/Cream/Cream 10=fefdfc
Brand Color/Cream/Cream 20=fdfbf9
Brand Color/Cream/Cream 30=fbf8f7
Brand Color/Cream/Cream 40=faf6f4
Brand Color/Cream/Cream 50=f9f4f1
Brand Color/Cream/Cream 60=e0dcd9
Brand Color/Cream/Cream 70=bbb7b5
Brand Color/Cream/Cream 80=959291
Brand Color/Cream/Cream 90=706e6c
Brand Color/Cream/Cream 100=4b4948
Brand Color/Peach/Peach Base=e8a497
Brand Color/Peach/Peach 10=f3d1cb
Brand Color/Peach/Peach 20=f1c8c1
Brand Color/Peach/Peach 30=efbfb6
Brand Color/Peach/Peach 40=edb6ac
Brand Color/Peach/Peach 50=e8a497
Brand Color/Peach/Peach 60=ce8a7e
Brand Color/Peach/Peach 70=b57164
Brand Color/Peach/Peach 80=9b584b
Brand Color/Peach/Peach 90=823e31
Brand Color/Peach/Peach 100=692518
Brand Color/Coral/Coral Base=d66f61
Brand Color/Coral/Coral Hover=bd594d
Brand Color/Coral/Coral Active=963f37
Brand Color/Coral/Coral Light=f4d7d1
Brand Color/Amber/Amber Base=c8893a
Brand Color/Green/Live=52bd95
Brand Color/Purple/Purple Base=6d5fc7
Brand Color/Purple/Purple Light=eae8fa
Brand Color/Purple/Purple Dark=4d43a0
Brand Color/Yellow/Yellow Base=ad8a37
Brand Color/Yellow/Yellow Light=fbeed3
Brand Color/Yellow/Yellow Mid=9a7a2a
Brand Color/Yellow/Yellow Dark=7a5c14
Neutral Base/White=ffffff
Semantic Colors/Success/Success 10=d3f7df
Semantic Colors/Success/Success 20=98e5b4
Semantic Colors/Success/Success 30=5dd489
Semantic Colors/Success/Success 40=22c160
Semantic Colors/Success/Success 50=11ddaa
Semantic Colors/Success/Success 60=19934a
Semantic Colors/Success/Success 70=14813f
Semantic Colors/Success/Success 80=0f6832
Semantic Colors/Success/Success 90=0a4f25
Semantic Colors/Success/Success 100=053618
Semantic Colors/Success/Success Contrast=117a3a
Semantic Colors/Warning/Warning 10=feeab1
Semantic Colors/Warning/Warning 20=fdd077
Semantic Colors/Warning/Warning 30=fcb73d
Semantic Colors/Warning/Warning 40=fb9d03
Semantic Colors/Warning/Warning 50=e78503
Semantic Colors/Warning/Warning 60=d46d02
Semantic Colors/Warning/Warning 70=c05502
Semantic Colors/Warning/Warning 80=9f4602
Semantic Colors/Warning/Warning 90=7e3701
Semantic Colors/Warning/Warning 100=5d2801
Semantic Colors/Warning/Warning Contrast=a84b02
Semantic Colors/Warning/Warning Contrast Hover=8f3f01
Semantic Colors/Error/Error 10=fdcfcf
Semantic Colors/Error/Error 20=fc9c9a
Semantic Colors/Error/Error 30=fb6964
Semantic Colors/Error/Error 40=fa372f
Semantic Colors/Error/Error 50=d82f2f
Semantic Colors/Error/Error 60=b6272f
Semantic Colors/Error/Error 70=932f2f
Semantic Colors/Error/Error 80=7d2121
Semantic Colors/Error/Error 90=671313
Semantic Colors/Error/Error 100=500504
Semantic Colors/Information/Information 10=cde3fd
Semantic Colors/Information/Information 20=97bff9
Semantic Colors/Information/Information 30=619cf6
Semantic Colors/Information/Information 40=2b78f2
Semantic Colors/Information/Information 50=1d63dc
Semantic Colors/Information/Information 60=104fc5
Semantic Colors/Information/Information 70=023aaf
Semantic Colors/Information/Information 80=052e85
Semantic Colors/Information/Information 90=08235a
Semantic Colors/Information/Information 100=0b1730
Semantic Colors/Neutral/Neutral 5=f7f8f8
Semantic Colors/Neutral/Neutral 10=f8fafa
Semantic Colors/Neutral/Neutral 15=eef1f1
Semantic Colors/Neutral/Neutral 20=f0f3f3
Semantic Colors/Neutral/Neutral 30=e2e7e8
Semantic Colors/Neutral/Neutral 40=c9d0d2
Semantic Colors/Neutral/Neutral 50=a5b0b6
Semantic Colors/Neutral/Neutral 60=7f8d93
Semantic Colors/Neutral/Neutral 70=627279
Semantic Colors/Neutral/Neutral 80=43545c
Semantic Colors/Neutral/Neutral 90=293a41
Semantic Colors/Neutral/Neutral 100=18272d
"""

UNIT_SCALE = [0, 2, 4, 8, 11, 12, 14, 16, 18, 20, 24, 28, 32, 36, 38, 40, 44, 46, 48, 50, 52, 56, 58, 64, 9999]

# --- Aliases: "Name > Collection:Target" (Collection P = Primitive Colors, S = Semantic Colors) ---------
P, S, U = "Primitive Colors", "Semantic Colors", "Primitive: Unit Scale"
SEMANTIC_COLORS = f"""
Accent Colors/Primary Contrast > P:Brand Color/Teal/Teal Base
Accent Colors/Primary Hover > P:Brand Color/Sage/Sage 80
Accent Colors/Primary Pressed > P:Brand Color/Sage/Sage 90
Accent Colors/Primary Active > P:Brand Color/Teal/Teal 60
Accent Colors/Secondary Contrast > P:Brand Color/Teal/Teal Base
Accent Colors/Tertiary Contrast > P:Brand Color/Sage/Sage Base
Accent Colors/Accent Strong > P:Brand Color/Coral/Coral Base
Accent Colors/Accent Hover > P:Brand Color/Coral/Coral Hover
Accent Colors/Accent Active > P:Brand Color/Coral/Coral Active
Accent Colors/Accent Soft > P:Brand Color/Peach/Peach Base
Accent Colors/Accent Subtle > P:Brand Color/Coral/Coral Light
Accent Colors/On Brand > P:Neutral Base/White
Accent Colors/Live > P:Brand Color/Green/Live
Background Colors/Background Canvas > P:Brand Color/Cream/Cream Base
Background Colors/Surface Primary > P:Neutral Base/White
Background Colors/Surface Secondary > P:Brand Color/Cream/Cream Muted
Background Colors/Surface Neutral > P:Semantic Colors/Neutral/Neutral 5
Background Colors/Surface Accent > P:Brand Color/Teal/Tint Faint
Background Colors/Surface Elevated > P:Neutral Base/White
Background Colors/Surface Inverse > P:Brand Color/Navy/Navy Base
Background Colors/Surface Disabled > P:Semantic Colors/Neutral/Neutral 15
Background Colors/Surface Tertiary > P:Brand Color/Teal/Line
Text Colors/Primary Text > P:Brand Color/Navy/Navy Base
Text Colors/Secondary Text > P:Brand Color/Slate/Slate Base
Text Colors/Tertiary Text > P:Brand Color/Slate/Slate Light
Text Colors/Brand > P:Brand Color/Sage/Sage 80
Text Colors/Disabled > P:Semantic Colors/Neutral/Neutral 50
Text Colors/On Dark Backgrounds > P:Neutral Base/White
Text Colors/Text on Accents > P:Semantic Colors/Neutral/Neutral 90
Text Colors/Text Color Pressed > P:Brand Color/Navy/Navy 70
Success Colors/Contrast > P:Semantic Colors/Success/Success Contrast
Success Colors/Hover > P:Semantic Colors/Success/Success 80
Success Colors/Pressed > P:Semantic Colors/Success/Success 90
Success Colors/Active > P:Semantic Colors/Success/Success 100
Success Colors/Soft > P:Semantic Colors/Success/Success 10
Success Colors/On Success > P:Neutral Base/White
Warning Colors/Contrast > P:Semantic Colors/Warning/Warning Contrast
Warning Colors/Hover > P:Semantic Colors/Warning/Warning Contrast Hover
Warning Colors/Pressed > P:Semantic Colors/Warning/Warning 90
Warning Colors/Active > P:Semantic Colors/Warning/Warning 100
Warning Colors/Soft > P:Semantic Colors/Warning/Warning 10
Warning Colors/On Warning > P:Neutral Base/White
Error Colors/Contrast > P:Semantic Colors/Error/Error 70
Error Colors/Hover > P:Semantic Colors/Error/Error 80
Error Colors/Pressed > P:Semantic Colors/Error/Error 90
Error Colors/Active > P:Semantic Colors/Error/Error 100
Error Colors/Soft > P:Semantic Colors/Error/Error 10
Error Colors/On Error > P:Neutral Base/White
Shadow Colors/Ambient > P:Brand Color/Navy/Navy 100 Alpha 6
Shadow Colors/Key > P:Brand Color/Navy/Navy 100 Alpha 14
Icon Colors/Default > P:Brand Color/Slate/Slate Base
Icon Colors/Strong > P:Brand Color/Navy/Navy Base
Icon Colors/Muted > P:Brand Color/Slate/Slate Muted
Icon Colors/Disabled > P:Semantic Colors/Neutral/Neutral 50
Icon Colors/On Dark > P:Neutral Base/White
Icon Colors/Brand > P:Brand Color/Teal/Teal Base
Icon Colors/Success > P:Semantic Colors/Success/Success Contrast
Icon Colors/Warning > P:Semantic Colors/Warning/Warning Contrast
Icon Colors/Error > P:Semantic Colors/Error/Error 70
"""

COLOR_ROLES = """
Background/Page > S:Background Colors/Background Canvas
Background/Surface > S:Background Colors/Surface Primary
Background/Raised > S:Background Colors/Surface Elevated
Background/Subtle > S:Background Colors/Surface Secondary
Background/Muted > S:Background Colors/Surface Neutral
Background/Tinted > S:Background Colors/Surface Accent
Background/Tint > P:Brand Color/Teal/Tint
Background/Tint Soft > P:Brand Color/Teal/Tint Soft
Background/Chip > P:Brand Color/Cream/Cream Dark
Background/Inverse > S:Background Colors/Surface Inverse
Background/Inverse Hover > P:Brand Color/Navy/Navy Hover
Background/Brand > S:Accent Colors/Primary Contrast
Background/Brand Hover > S:Accent Colors/Primary Hover
Background/Brand Pressed > S:Accent Colors/Primary Pressed
Background/Brand Active > S:Accent Colors/Primary Active
Background/Brand Light > S:Accent Colors/Tertiary Contrast
Background/Brand Secondary > S:Accent Colors/Secondary Contrast
Background/Accent > S:Accent Colors/Accent Strong
Background/Accent Hover > S:Accent Colors/Accent Hover
Background/Accent Pressed > S:Accent Colors/Accent Active
Background/Accent Soft > S:Accent Colors/Accent Soft
Background/Accent Subtle > S:Accent Colors/Accent Subtle
Background/Positive > S:Success Colors/Contrast
Background/Positive Hover > S:Success Colors/Hover
Background/Positive Pressed > S:Success Colors/Pressed
Background/Positive Active > S:Success Colors/Active
Background/Positive Subtle > S:Success Colors/Soft
Background/Warning > S:Warning Colors/Contrast
Background/Warning Hover > S:Warning Colors/Hover
Background/Warning Pressed > S:Warning Colors/Pressed
Background/Warning Active > S:Warning Colors/Active
Background/Warning Subtle > S:Warning Colors/Soft
Background/Negative > S:Error Colors/Contrast
Background/Negative Hover > S:Error Colors/Hover
Background/Negative Pressed > S:Error Colors/Pressed
Background/Negative Active > S:Error Colors/Active
Background/Negative Subtle > S:Error Colors/Soft
Background/Disabled > S:Background Colors/Surface Disabled
Background/Track > S:Background Colors/Surface Tertiary
Background/Scrim > S:Shadow Colors/Ambient
On Background/Brand > S:Accent Colors/On Brand
On Background/Inverse > S:Text Colors/On Dark Backgrounds
On Background/Brand Light > S:Text Colors/Primary Text
On Background/Subtle > S:Text Colors/Primary Text
On Background/Accent > S:Text Colors/Text on Accents
On Background/Positive > S:Success Colors/On Success
On Background/Warning > S:Warning Colors/On Warning
On Background/Negative > S:Error Colors/On Error
On Background/Disabled > S:Text Colors/Disabled
Foreground/Primary > S:Text Colors/Primary Text
Foreground/Secondary > S:Text Colors/Secondary Text
Foreground/Tertiary > S:Text Colors/Tertiary Text
Foreground/Brand > S:Text Colors/Brand
Foreground/Disabled > S:Text Colors/Disabled
Foreground/Inverse > S:Text Colors/On Dark Backgrounds
Foreground/Positive > S:Success Colors/Contrast
Foreground/Warning > S:Warning Colors/Contrast
Foreground/Negative > S:Error Colors/Contrast
Foreground/Icon > S:Icon Colors/Default
Foreground/Icon Strong > S:Icon Colors/Strong
Foreground/Icon Muted > S:Icon Colors/Muted
Foreground/Icon Brand > S:Icon Colors/Brand
Foreground/Icon Inverse > S:Icon Colors/On Dark
Border/Default > S:Background Colors/Surface Tertiary
Border/Subtle > S:Background Colors/Surface Secondary
Border/Divider > S:Background Colors/Surface Tertiary
Border/Faint > S:Background Colors/Surface Disabled
Border/Strong > S:Text Colors/Secondary Text
Border/Control > S:Text Colors/Tertiary Text
Border/On Media > S:Background Colors/Surface Primary
Border/Brand > S:Accent Colors/Primary Contrast
Border/Brand Hover > S:Accent Colors/Primary Hover
Border/Brand Pressed > S:Accent Colors/Primary Pressed
Border/Brand Active > S:Accent Colors/Primary Active
Border/Positive > S:Success Colors/Contrast
Border/Positive Hover > S:Success Colors/Hover
Border/Positive Pressed > S:Success Colors/Pressed
Border/Positive Active > S:Success Colors/Active
Border/Warning > S:Warning Colors/Contrast
Border/Warning Hover > S:Warning Colors/Hover
Border/Warning Pressed > S:Warning Colors/Pressed
Border/Warning Active > S:Warning Colors/Active
Border/Negative > S:Error Colors/Contrast
Border/Negative Hover > S:Error Colors/Hover
Border/Negative Pressed > S:Error Colors/Pressed
Border/Negative Active > S:Error Colors/Active
Border/Disabled > S:Text Colors/Disabled
Border/Inverse > S:Text Colors/On Dark Backgrounds
Link/Default > S:Text Colors/Brand
Link/Hover > S:Accent Colors/Primary Pressed
Link/Pressed > S:Accent Colors/Primary Active
Link/Disabled > S:Text Colors/Disabled
Link/Inverse > S:Accent Colors/Tertiary Contrast
Link/Inverse Hover > S:Text Colors/On Dark Backgrounds
Focus/Ring > P:Brand Color/Sage/Sage 80
Focus/Inverse > S:Text Colors/On Dark Backgrounds
Accent Colors/Amber > P:Brand Color/Amber/Amber Base
"""

CATEGORY_COLORS = """
Child & Teen Development/Primary > P:Brand Color/Teal/Teal 60
Child & Teen Development/Background > P:Brand Color/Teal/Teal 10
Child & Teen Development/Text > P:Brand Color/Teal/Teal 90
Behavior/Primary > P:Brand Color/Sage/Sage 60
Behavior/Background > P:Brand Color/Sage/Sage 10
Behavior/Text > P:Brand Color/Sage/Sage 90
Emotions/Primary > P:Brand Color/Peach/Peach 60
Emotions/Background > P:Brand Color/Peach/Peach 10
Emotions/Text > P:Brand Color/Peach/Peach 90
Screen Time/Primary > P:Brand Color/Navy/Navy 50
Screen Time/Background > P:Brand Color/Navy/Navy 10
Screen Time/Text > P:Brand Color/Navy/Navy 90
"""

EVENT_TYPE_COLORS = """
Session/Background > S:Accent Colors/Secondary Contrast
Session/Text > S:Accent Colors/On Brand
Workshop/Background > P:Brand Color/Navy/Navy Base
Workshop/Text > S:Accent Colors/On Brand
"""

CONTENT_TYPE_COLORS = """
Video/Background > P:Semantic Colors/Success/Success 10
Video/Icon > P:Semantic Colors/Success/Success 70
Video/Text > P:Semantic Colors/Success/Success 80
Article/Background > P:Semantic Colors/Neutral/Neutral 20
Article/Icon > P:Brand Color/Navy/Navy Base
Article/Text > P:Brand Color/Navy/Navy Base
Guide/Background > P:Brand Color/Purple/Purple Light
Guide/Icon > P:Brand Color/Purple/Purple Base
Guide/Text > P:Brand Color/Purple/Purple Dark
Worksheet/Background > P:Brand Color/Yellow/Yellow Light
Worksheet/Icon > P:Brand Color/Yellow/Yellow Mid
Worksheet/Text > P:Brand Color/Yellow/Yellow Dark
"""

SPACING = {"None": 0, "2XS": 2, "XS": 4, "S": 8, "SM": 12, "M": 16, "ML": 20, "L": 24, "XL": 32, "2XL": 40, "3XL": 48, "4XL": 56, "5XL": 64}
RADIUS = {"XS": 4, "S": 8, "M": 12, "L": 16, "XL": 28, "Full": 9999}
SIZING = {"Icon/XS": 16, "Icon/S": 20, "Icon/M": 24, "Icon/L": 32, "Icon/XL": 40, "Control/S": 36, "Control/M": 44, "Control/L": 52,
          "Avatar/XS": 16, "Avatar/S": 24, "Avatar/M": 32, "Avatar/L": 40, "Avatar/XL": 56,
          "Target/Minimum": 24, "Target/Dense": 32, "Target/Comfortable": 44}
BREAKPOINTS = {"XS": 375, "SM": 768, "MD": 1024, "LG": 1280, "XL": 1440}
ELEVATION = {"Z-0": 0, "Z-Dropdown": 100, "Z-Sticky": 200, "Z-Overlay": 300, "Z-Modal": 400, "Z-Toast": 500}
LETTER_SPACING = {"None": 0, "Subtle": -0.2, "Snug": -0.5, "Tight": -1, "Tighter": -1.5, "Wide": 0.5}
OPACITY = {"Disabled": 40, "Scrim": 50, "Muted": 60, "Placeholder": 35, "Glass": 25, "Hover Overlay": 8, "Pressed Overlay": 12}
DURATION = {"Instant": 0, "Micro": 150, "Fast": 220, "Base": 350, "Reveal": 550}
EASING = {"Standard": [0.25, 0.46, 0.45, 0.94], "In Out": [0.65, 0, 0.35, 1], "Decelerate": [0, 0, 0, 1], "Accelerate": [0.3, 0, 1, 1]}

MODES = ["Desktop Large", "Desktop Regular", "Tablet", "Mobile"]
# Code Scale: token -> (desktop size, mobile size, desktop line height, mobile line height, weight)
CODE_SCALE = {"display": (50, 38, 58, 44, 700), "h1": (40, 28, 46, 32, 700), "h2": (24, 24, 32, 32, 700), "h3": (20, 20, 28, 28, 600),
              "h4": (16, 16, 24, 24, 700), "body-lg": (16, 16, 24, 24, 400), "body": (14, 14, 20, 20, 400),
              "small": (12, 12, 16, 16, 400), "eyebrow": (11, 11, 16, 16, 600)}
# Figma heading styles: name -> (sizes per mode, line heights per mode, weight)
FIGMA_HEADINGS = {"H1": ([48, 48, 48, 32], [56, 56, 56, 40], 300), "H2": ([40, 40, 32, 24], [48, 48, 40, 32], 400),
                  "H3": ([32, 32, 24, 16], [40, 40, 32, 24], 500), "H4": ([24, 24, 16, 16], [32, 32, 24, 24], 700),
                  "H5": ([16] * 4, [24] * 4, 700)}
BODY_SIZES = {"Body Xtra Large": 24, "Body Large": 20, "Body Medium": 16, "Body Small": 14, "Body XSmall": 12}
BUTTON_SIZES = {"Button Large": 18, "Button Medium": 16, "Button Small": 14}
LABEL_SIZES = {"Label Large": 18, "Label Medium": 14, "Label Small": 12, "Label XSmall": 11}

ROOT = {}


def put(collection, name, token):
    node = ROOT.setdefault(collection, {})
    *groups, leaf = name.split("/")
    for g in groups:
        node = node.setdefault(g, {})
    node[leaf] = token


def ref(collection, name):
    return "{" + collection + "." + name.replace("/", ".") + "}"


def unit(n):
    return ref(U, str(n))


def aliases(collection, block, type_="color"):
    for line in block.strip().splitlines():
        name, target = (s.strip() for s in line.split(">"))
        col, tname = target.split(":", 1)
        put(collection, name, {"$type": type_, "$value": ref({"P": P, "S": S}[col], tname)})


for line in PRIMITIVE_COLORS.strip().splitlines():
    name, hexv = line.split("=")
    put(P, name, {"$type": "color", "$value": "#" + hexv})
for n in UNIT_SCALE:
    put(U, str(n), {"$type": "dimension", "$value": f"{n}px"})
aliases(S, SEMANTIC_COLORS)
aliases("Semantic: Color Roles", COLOR_ROLES)
aliases("Semantic: Category Colors", CATEGORY_COLORS)
aliases("Semantic: Event Type Colors", EVENT_TYPE_COLORS)
aliases("Semantic: Content Type Colors", CONTENT_TYPE_COLORS)
for coll, table in [("Spacing Scale", SPACING), ("Corner Radius Scale", RADIUS), ("Semantic: Sizing", SIZING)]:
    for k, n in table.items():
        put(coll, k, {"$type": "dimension", "$value": unit(n)})
for k, n in BREAKPOINTS.items():
    put("Breakpoints", k, {"$type": "dimension", "$value": f"{n}px"})
for k, n in ELEVATION.items():
    put("Elevation", k, {"$type": "number", "$value": n})
for k, n in LETTER_SPACING.items():
    put("Semantic: Letter Spacing", k, {"$type": "dimension", "$value": f"{n}px"})
for k, n in OPACITY.items():
    put("Semantic: Opacity", k, {"$type": "number", "$value": n / 100})
for k, n in DURATION.items():
    put("Semantic: Motion", f"Duration/{k}", {"$type": "duration", "$value": f"{n}ms"})
for k, v in EASING.items():
    put("Semantic: Motion", f"Easing/{k}", {"$type": "cubicBezier", "$value": v})

T = "Typography"


def moded(type_, values):
    tok = {"$type": type_, "$value": values[MODES.index("Desktop Regular")]}
    if len(set(values)) > 1:
        tok["$extensions"] = {"figma.modes": dict(zip(MODES, values))}
    return tok


put(T, "Font/Family", {"$type": "fontFamily", "$value": "Poppins"})
for wn in ["Light", "Regular", "Medium", "SemiBold", "Bold", "Italic", "Bold Italic"]:
    put(T, f"Font/Weight Name/{wn}", {"$type": "string", "$value": wn})
for k, n in BODY_SIZES.items():
    put(T, f"Font/Body Sizes/{k}", {"$type": "dimension", "$value": unit(n)})
for k, n in BUTTON_SIZES.items():
    put(T, f"Font/Button Sizes/{k}", {"$type": "dimension", "$value": unit(n)})
for k, n in LABEL_SIZES.items():
    put(T, f"Font/Label Sizes/{k}", {"$type": "dimension", "$value": unit(n)})
for h, (sizes, lhs, w) in FIGMA_HEADINGS.items():
    put(T, f"Font/Heading/{h}/Size", moded("dimension", [unit(x) for x in sizes]))
    put(T, f"Font/Heading/{h}/Line Height", moded("dimension", [unit(x) for x in lhs]))
    put(T, f"Font/Heading/{h}/Weight", {"$type": "fontWeight", "$value": w})
for t, (ds, ms, dl, ml, w) in CODE_SCALE.items():
    put(T, f"Code Scale/{t}/Size", moded("dimension", [unit(ds)] * 3 + [unit(ms)]))
    put(T, f"Code Scale/{t}/Line Height", moded("dimension", [unit(dl)] * 3 + [unit(ml)]))
    put(T, f"Code Scale/{t}/Weight", {"$type": "fontWeight", "$value": w})

out = Path(__file__).with_name("parent-guidance.tokens.json")
out.write_text(json.dumps(ROOT, indent=2, ensure_ascii=False) + "\n")


# Sanity check: every reference resolves
def walk(node, path=()):
    for k, v in node.items():
        if isinstance(v, dict) and "$value" in v:
            yield path + (k,), v
        elif isinstance(v, dict) and not k.startswith("$"):
            yield from walk(v, path + (k,))


tokens = {".".join(p): v for p, v in walk(ROOT)}
missing = []
for p, v in tokens.items():
    vals = list(v.get("$extensions", {}).get("figma.modes", {}).values()) + [v["$value"]]
    for x in vals:
        if isinstance(x, str) and x.startswith("{") and x[1:-1] not in tokens:
            missing.append(f"{p} -> {x}")
print(f"{len(tokens)} tokens written to {out.name}; unresolved references: {len(missing)}")
for m in missing:
    print("  ", m)
