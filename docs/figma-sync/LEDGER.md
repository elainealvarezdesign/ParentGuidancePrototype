# Figma sync ledger (file mWOJYdAxkKGj0bWSO2ptGj)
Decisions: edit 24 frames in place; main home (/); add all new screens x3 bp; missing patterns -> library; Buttons -> 8px radius, 36/44/52 heights (prototype wins). Images stay as placeholders (file convention).
Pages: Layouts D 270:28, T 270:29, M 270:30. Components: Buttons 12:5, Cal 44:33, Tags 55:115, Cards 96:16, Inputs&Nav 100:2, Content Blocks 100:3, Course&Media 100:4, Icons 122:54
Frames D: CourseListing 140:210, Home 262:3731, MHS 263:3971, Coaching 264:4984, Ask 266:5414, GetHelp 267:6640, CourseDetail 256:2122, AskDetail 260:2737
Frames T: 140:411, 262:4956, 263:5547, 264:6104, 266:6538, 267:7012, 256:3506, 260:4068
Frames M: 140:570, 226:1048, 232:1024, 237:1639, 239:2717, 243:3066, 256:3715, 260:4254
Key comps: Button set 8:110 key f01b1bb7...; NavBar 133:134; Footer 133:193; FAQ 109:24; Newsletter 136:156; Teaser 105:101; Event Popover 255:375; Calendar 75:302; Event Row 48:88
Vars (VariableID:): ColorRoles Bg/Page 158:55, Surface 158:56, Subtle 158:58, Tinted 158:60, Inverse 158:61, Brand 158:62, BrandHover 158:63, BrandLight(sage) 158:66; Fg Primary 158:97, Secondary 158:98, Tertiary 158:99, Brand 158:100, Inverse 158:102; Border Default 158:111, Brand 158:116; Link Default 158:134
Spacing: XS 5:38(4) S 5:39(8) SM 146:55(12) M 5:40(16) ML 146:56(20) L 5:41(24) XL 5:42(32) 2XL 146:57(40) 3XL 146:58(48) 4XL 146:59(56) 5XL 146:60(64) None 35:3
Radius: XS 5:44(4) S 5:45(8) M 5:46(12) L 5:47(16) XL 5:48(24) Full 35:2
## Done
- Button set: 8px radius, 36/44/52, S/M Button/Small, L Button/Medium, secondary text Fg/Brand. DONE
- New var Accent Colors/Live VariableID:331:28. New comps: Icon/vimeo 332:6921, Partner Logo/Staff Guidance 332:7040 (placeholder; upload blocked: mcp.figma.com 403)
- FAQ Item, Newsletter Banner (desk 1280 full width), Feature Teaser Card (176w), Footer (+Terms, +Vimeo) updated. DONE
- Home D/T/M DONE
- Filter Chip updated (12px Medium, cream-dark, no shadow). NOTE: bound paints need resolved fallback color (use resolveForConsumer) else render black.
- New comps: Search Field 337:305, Sort Menu 337:317, Filter Bar set 337:384 (Desktop 337:331, Mobile 337:357), Section Header 337:7103 (props Title, Count, Show Count)
- Prototype bug: MHS content page 437px wide at 375 (horizontal scroll) -> fix in code later
- New screen needed: MHS State Select (form view) x3
- MHS D/T/M content DONE (filter bar, section headers, 9 cards). Button heights swept on all layout + component pages. Resource Card Description layoutGrow=1.
- TODO end: tidy component sets (variants may overlap after growth); fallback-color sweep; MHS state-select screen x3
- Parent Coaching D/T/M DONE. Section Eyebrow updated (+Show Bar#339:0), Testimonial Card italic, Hero Media 397x444, Process Stepper/Feature Row texts. NOTE: set figma.skipInvisibleInstanceChildren=false
- Button +Type Inverse, Inverse Secondary (855 variants). Course Card CTA M; Avatar sage/navy. New Photo CTA Banner set 341:235 (Title#341:0).
- Course Listing D/T/M rebuilt (hero clone from PC, filter bar w/ counts, All Courses 22, 9 cards, pagination, Photo CTA). DONE
- Lesson comps (Next Lesson primary, Mark complete teal, Lesson Label eyebrow). Course Detail frames renamed "Lesson · Free Yourself / *" (they were the lesson page). NEW screen needed: real Course Detail (overview) x3 + Milestones course + Milestones lesson.
- Hero Media now set 342:7697 (Portrait 108:75, Landscape 342:7692). Split CTA Banner set 342:7651 (D 342:7652, T 342:8368, M 342:7662). Inverse variants prop refs restored.
- Ask D/T/M DONE.
- Ask Detail, Get Help D/T/M DONE. Multi-action & Promo banners -> Inverse buttons. Inverse Secondary uses UNBOUND white w/ opacity (binding resets opacity). ALL 24 existing frames DONE.
- New comps: Outline Step set 347:80 (Number#347:0, Title#347:3), Course Mini Card 347:84 (Title#347:6, Meta#347:7), Instructor Line 347:94 (Name#347:8, Role#347:9, Show Role#347:10)
- Desktop page frames at y=0, x step 1480 (last: AskDetail x=10360). Place new frames in row y = 4200 (desktop). Lesson D kids: Nav 256:3118, Breadcrumb bar 256:3170 (texts I256:3171;103:19/22/25), Body 256:3182, LessonNav 256:3425, Footer 256:3443
- NEXT: build Course Detail (Free Yourself) D by cloning Lesson D, replace Body; then Milestones course, Milestones lesson, MHS State Select, Events(+popup), Topic, Contact, Terms, Cookies, Consent (x3 bp)
- NEW frames: Course Detail · Free Yourself D 349:2468 (x0,y4200); Course Detail · Milestones D 350:2639 (x1480,y4200). Milestones breadcrumb: hide trailing chevron (TODO).
- Lesson D body: Course Outline instance 256:3367 (items Lesson 1..4 = Lesson Item set 111:64; header Count; footer). Plan Milestones lesson: clone 256:2122 -> x2960,y4200, detach outline, add module header + 8 items.
- NEW D frames: Lesson · Milestones 352:3076 (x2960), MHS State Select 353:3060 (x4440), MHS Events 355:3192 (x5920), Events pop-up open 356:8849 (x7400). All y=4200.
- New comp Event List Item 354:390 (Title#354:0 When#354:1 Month#354:2 Day#354:3 Type#354:4). Calendar fluid + Show Header#356:0.
- TODO: Milestones lesson video time text "0:00 / 4:12"; Milestones course breadcrumb trailing chevron.
- New comps (Cards page, 'Topic page cards'): Takeaway Card 359:61 (Number#359:0 Title#359:1 Text#359:2), Session Card 359:66 (Month#359:3 Day#359:4 Weekday#359:5 Title#359:6 Time#359:7 Language#359:8), Video Card 359:86 (Kind#359:9 Duration#359:10 Title#359:11 Description#359:12). TODO: Action Card, Topic Resource Card, then Topic page D.
- Action Card 360:66 (Number#360:0 Title#360:1 Tip 1 label#360:2 Tip 1 text#360:3 Tip 2 label#360:4 Tip 2 text#360:5); Topic Resource Card 360:77 (Type#360:6 Title#360:7 Description#360:8 Link#360:9). NEXT: Topic page D at x8880,y4200
- NEW D: MHS Topic 361:3766 (x8880,y4200). NEXT: Contact Us D (x10360,y4200), legal D (Terms/Cookies/Consent) row y=6800
- NEW D: Contact Us 365:4294 (x10360,y4200). Text Input: radius S + light border.
- Oct 2: Legal D row y=6800: Terms 368:4227 (x0), Cookies Policy 369:231 (x1480), Consent Documents 370:28 (x2960; accordion cards: header row Toggle[Dot, Title, Chevron expand_less/expand_more] + Actions[Button S Download/Print], Body). New comps Icon/download 368:9756, Icon/print 368:9762.
- Oct 2: small fixes DONE: Milestones lesson time I352:3087;111:21 = "0:00 / 4:12"; Course Detail · Milestones trailing breadcrumb chevron hidden (I350:2642;103:23).
- Oct 2: Tablet row y=4600 (x = i*968), Mobile row y=7000 (x = i*575), i = order of D row (0 CD Free, 1 CD Milestones, 2 Lesson Milestones, 3 State Select, 4 Events, 5 Events pop-up, 6 Topic, 7 Contact, 8 Terms, 9 Cookies, 10 Consent).
  T: 375:28, 375:846, 379:28, 379:985, 381:28, 381:1454, 382:28, 372:316, 373:28, 373:724, 373:1214
  M: 375:477, 375:1212, 379:552, 379:1231, 381:825, 381:2067, 382:711, 372:604, 373:415, 373:969, 373:1483
  Built with a clone+reflow converter (nav 133:93/133:99, footer 133:135/133:164, Desktop→Tablet/Mobile variants, heading step-down H1/H2→H2 on T, →H3/H4 on M) + manual fixes per screen.
  Events T/M: Calendar Breakpoint=Mobile (dot style) with first Row (header) hidden; pop-up T = Desktop popover under day 10; M = bottom sheet (Breakpoint Mobile) + Scrim rect 375x812.
  Action Card 360:66 Title now FILL + wraps. Breadcrumb texts on T/M truncate with ellipsis.
- Oct 2: library cleanup: re-gridded sets 255:375, 48:88, 136:122, 136:145, 240:200, 136:221 (column, 40px padding/gap). Fallback sweep: 2 fixed on component pages, 0 on layouts.
- Oct 2: Events pop-up matches EventModal: Scrim rect navy (158:61) 10% on D 356:8849 and T 381:1454; M 381:2067 = Desktop popover 320px centered in 812px viewport + navy 30% scrim.
- Oct 2: prototype fix: MHS search input min-w-0 (no overflow at 375/768 on any route).
- Oct 2: Partner Logo/Staff Guidance = 394:14692 (112x64, image from user's rect 392:4861) on page 195:3017; showcase tile 394:14693; Home D/T/M instances 332:7045, 334:2081, 335:7037 swapped from the deleted placeholder 332:7040.
- Oct 2: prototype status tokens switched to the Figma Contrast/Soft values (success #117a3a/#d3f7df, warning #a84b02/#feeab1, error #932f2f/#fdcfcf).
- Oct 2 (final review): Partner Logo/Veterans Crisis Line 399:30 (from user's frame 392:13758, 157x64) + tile 399:31; Get Help D/T/M Veterans cards now use it (Organization frame was hidden; now visible). Showcase "Get Help logos (6)".
- New color variables: Primitive Colors 400:28 Navy Hover #284054, 400:29 Amber Base #c8893a, 400:30 Cream Dark #f0edeb, 400:31 Tint #eaf1f1, 400:32 Tint Soft #f0f6f6; Color Roles aliases 400:33 Background/Inverse Hover, 400:34 Accent Colors/Amber, 400:35 Background/Chip, 400:36 Background/Tint, 400:37 Background/Tint Soft (cards on Color Roles page). Filter Chip + Sort Menu → Background/Chip; Section Header count → Background/Tint.
- New text styles: Label/XSmall - Bold Caps (11, 15%), Label/Small - SemiBold Caps (12, 10%), Body/Medium - Italic (16); applied to the 5 unstyled texts. Typography page: new Labels section, header cleaned.
- Oct 2: Veterans logo 399:30 rebuilt as 4 flattened vectors (one per color) to bake SVG rotation/skew that rendered distorted in the editor; constrainProportions on. Confirmed OK by user.
- Oct 2: detail-page titles (Lesson FY/MS, Course Detail FY/MS, Ask Detail) now Heading/H2 - Bold - XL on D/T and Heading/H3 - Bold - L on M, matching the code h1 (28→40). Video Player already uses navy scrim (no black).
- Oct 2: renamed Brand Color/Cyan/Cyan Base (VariableID:4:5, #90b3b6) → Brand Color/Sage/Sage Base (= pg-sage). Logo fills and Tertiary Contrast alias kept; Brand page text updated.
- Oct 2: Colors page — Sage Base swatch (418:192) added first in the Brand Color/Sage row, bound to VariableID:4:5.
- Oct 2: Colors page swatches added: Navy Hover (Navy row, after Base), Cream Dark (Cream row, after Base), Tint + Tint Soft (end of Teal row), new section Brand Color/Amber (419:42) with Amber Base. All bound to their variables.
- Oct 2: Colors page semantic cards — the static 'alias'/'custom' line (83 cards) now shows the alias target ('= Navy/Navy Base') or the hex for custom values; text layer renamed 'Value'.
- Oct 2: Focus/Ring repointed from coral (Accent) to Brand Color/Sage/Sage 80 (#406064) to match the prototype focus outline; Color Roles card + description updated. Buttons page header and Lesson Navigation description cleaned (no history, Next Lesson = Primary L).
- Oct 5: token linking pass. New primitives (Primitive Colors): Slate/Slate Base 435766, Slate Light 5b6b75, Slate Muted 6e7f89; Teal/Line dee8e9, Teal/Tint Faint edf5f5; Cream/Cream Muted f3ece8; Neutral/Neutral 5 f7f8f8, Neutral 15 eef1f1; Coral/Coral Base d66f61, Hover bd594d, Active 963f37, Light f4d7d1; Green/Live 52bd95; Success/Success Contrast 117a3a; Warning/Warning Contrast a84b02, Warning Contrast Hover 8f3f01; Purple/Purple Dark 4d43a0; Yellow/Yellow Dark 7a5c14, Yellow Mid 9a7a2a; Navy/Navy 100 Alpha 6 and Alpha 14 (shadows). Unit Scale +14, +9999.
  Semantic Colors (21) and Content Type Colors (5) now alias primitives; Corner Radius Full -> Unit 9999; Typography sizes/line heights alias Unit Scale in all 4 modes. Every color variable outside Primitive Colors is now an alias (0 raw). Remaining raw values are base scales by design: breakpoints, elevation z-index, font family/weight names and weights, letter spacing, motion, opacity.
- Oct 5: aligned variables with code. Motion: Duration/Fast,Base,Slow,Slower renamed to Micro 150, Fast 220, Base 350, Reveal 550; Easing/Standard = cubic-bezier(0.25,0.46,0.45,0.94); new Easing/In Out = cubic-bezier(0.65,0,0.35,1); Decelerate/Accelerate kept, marked unused. Typography: new Code Scale/{display,h1,h2,h3,h4,body-lg,body,small,eyebrow}/{Size,Line Height,Weight} per mode (Mobile = below md). Text styles are not bound to variables, so no frame changed. Sizing Control/S,M,L = 36/44/52 (button sizes). Corner Radius XL = 28 (rounded-pg-2xl). Unit Scale +11,28,36,38,46,50,52,58. Breakpoint and radius descriptions map to Tailwind/code tokens.
  Tokens exported to docs/tokens/parent-guidance.tokens.json (W3C format, 464 tokens, aliases as references) via docs/tokens/build-tokens.py.
- Oct 6: deep audit.
  - Variables: 209 descriptions added; ALL_SCOPES removed (Primitive Colors and Elevation → [], Breakpoints → WIDTH_HEIGHT, Font/Family → FONT_FAMILY, Weight Name → FONT_STYLE, 5 Color Roles → FRAME_FILL,SHAPE_FILL). New Typography variables: Font/Weight Name/SemiBold, Italic; Font/Body Sizes/Body XSmall 12; Font/Button Sizes/Button Large 18, Medium 16, Small 14; Font/Label Sizes/Label Large 18, Medium 14, Small 12, XSmall 11 (alias Unit Scale; new Unit Scale 18 = VariableID:458:40). The 43 text styles are bound: fontFamily, fontStyle, fontSize, and lineHeight on headings.
  - New unpublished styles _Docs/{Page Title, Section Title, Group Title, Label, Spec Title, Token Name, Body, Caption, Caption Small, Meta, Cover Title}.
  - Page sweep, outside instances: fills and strokes bound to color variables (exact hex; Color Roles first, then Semantic, then Primitive; ±3/255 snap); radius → Corner Radius Scale; gap and padding → Spacing Scale (off-scale snapped as nearest, 10→8, ties up); COMPONENT_SET 5px → XS; Colors swatches 6px → S; text → exact style, else closest style per segment; Session Card → Elevation/Dropdown. Default-named layers renamed by content.
  - Remaining by design: logo art, Cover Graphic 114:28 and gap 102 (115:148), 90px padding on Terms/Cookies D (368:4371, 368:4387, 369:233, 369:240 …), and the mixed-corner glyphs 182:1967 and 182:1975.
  - Tokens JSON rebuilt: 475 tokens.
- Oct 6: new collection Semantic: Layout VariableCollectionId:482:28 (modes 482:0 Desktop Regular, 482:1 Desktop Large, 482:2 Tablet, 482:3 Mobile): Page Margin 482:29 (90/170/40/24), Page Gutter 482:30 (56/56/40/24), Content Max Width 482:31 (1100), Reading Max Width 482:32 (680). Bound paddingLeft/Right on Header/Document 368:4371, 368:4387, 369:233, 369:240, 370:30, 370:37. Explicit Layout mode on all 19 top-level frames of each Layouts page. Tokens JSON: 479.
- Oct 6: exact-match text styles Title/Card - Bold (Code Scale h3 size/LH), Body/Medium - SemiBold, Body/Small - Bold, Body/Small - Italic, Label/Medium - SemiBold Caps. Applied: D 370:258, 370:274, 350:2906, 361:3958, 332:2188, segs 350:2902, 365:4460; T 373:1225, 373:1246, 375:892, 382:41, 334:2042, segs 375:888, 372:341; M 373:1494, 373:1515, 375:1258, 382:724, 335:1996, segs 375:1254, 372:629; Content Blocks Message 108:12, 108:16 bold segs.
