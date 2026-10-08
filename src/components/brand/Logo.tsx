import svgPaths from "./logo-paths";

/* Parent Guidance logo (brand artwork, exported from Figma). The only place where raw hex colors are allowed:
 * logo colors are part of the mark, not UI tokens.
 *
 * <Logo />       light version for dark surfaces (navbar).
 * <LogoColor />  full-color version for light surfaces (footer).
 * Both are decorative: wrap them in a link or element that carries the accessible name.
 */

export function Logo() {
  return (
    <div className="relative h-6 w-[105px]">
      <svg
        aria-hidden="true"
        className="absolute inset-0 block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 105 24"
      >
        <g clipPath="url(#clip0_logo)">
          <path d={svgPaths.p37d85f80} fill="#90B4B6" /* brand artwork */ />
          <path d={svgPaths.p336c2a30} className="fill-pg-cream" />
          <path d={svgPaths.p32c63380} className="fill-pg-cream" />
          <path d={svgPaths.p1e05f500} className="fill-pg-cream" />
          <path d={svgPaths.p847a600} className="fill-pg-cream" />
          <path d={svgPaths.p168e6c00} className="fill-pg-cream" />
          <path d={svgPaths.p2b3a1d00} className="fill-pg-cream" />
          <path d={svgPaths.p3fa63800} className="fill-pg-cream" />
          <path d={svgPaths.pf80fc40} className="fill-pg-cream" />
          <path d={svgPaths.p6808200} className="fill-pg-cream" />
          <path d={svgPaths.p2166ae80} className="fill-pg-cream" />
          <path d={svgPaths.p29ca9340} className="fill-pg-cream" />
          <path d={svgPaths.p49f4100} className="fill-pg-cream" />
          <path d={svgPaths.p97f3000} className="fill-pg-cream" />
          <path d={svgPaths.p32da5e00} className="fill-pg-cream" />
          <path d={svgPaths.p38b34680} className="fill-pg-cream" />
          <path d={svgPaths.p2bca3000} className="fill-pg-cream" />
          <path d={svgPaths.p26a7d100} className="fill-pg-cream" />
          <path d={svgPaths.p161a88c0} className="fill-pg-cream" />
          <path d={svgPaths.p38cd2100} className="fill-pg-cream" />
        </g>
        <defs>
          <clipPath id="clip0_logo">
            <rect fill="white" height="24" width="105" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export function LogoColor() {
  return (
    <div className="relative h-[28px] w-[117px]">
      <svg
        aria-hidden="true"
        className="absolute inset-0 block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 117.188 28.4089"
      >
        <g>
          <path d={svgPaths.p23de9500} fill="#A1BFB9" />
          <path d={svgPaths.p2d0057f0} fill="#58595B" />
          <path d={svgPaths.p53a0dc0} fill="#58595B" />
          <path d={svgPaths.p1db09d00} fill="#58595B" />
          <path d={svgPaths.p30f51e80} fill="#58595B" />
          <path d={svgPaths.p12d56200} fill="#58595B" />
          <path d={svgPaths.p163dd400} fill="#58595B" />
          <path d={svgPaths.p2daeb230} fill="#58595B" />
          <path d={svgPaths.p26c12980} fill="#58595B" />
          <path d={svgPaths.pb673200} fill="#58595B" />
          <path d={svgPaths.p19cdd800} fill="#58595B" />
          <path d={svgPaths.pbf01600} fill="#58595B" />
          <path d={svgPaths.p310e1000} fill="#58595B" />
          <path d={svgPaths.p321a3a00} fill="#58595B" />
          <path d={svgPaths.p3b105f00} fill="#8A9695" />
          <path d={svgPaths.p29bbe980} fill="#58595B" />
          <path d={svgPaths.p11bd1ec0} fill="#58595B" />
          <path d={svgPaths.p33948680} fill="#58595B" />
          <path d={svgPaths.p108a7c00} fill="#58595B" />
          <path d={svgPaths.pbb23600} fill="#58595B" />
        </g>
      </svg>
    </div>
  );
}
