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
