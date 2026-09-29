import svgPaths from "./svg-m66lx5e5y6";
import imgImage13 from "./f075cf3868341d1ced5b7049edc0996923832898.png";
import imgImage5 from "./1138b3a262907e92d450eba80453cde440ebaa2a.png";
import imgImage6 from "./9442d656bc4ddba2d2248ba316dce480f313b27a.png";
import { imgGroup } from "./svg-sk414";

function Heading() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#2c415e] text-[0px] text-center w-full">
          <span className="leading-[41.25px] text-[30px]">Welcome to the</span>
          <span className="leading-[41.25px] text-[30px]">{` `}</span>
          <span className="font-['Poppins:Bold_Italic',sans-serif] italic leading-[41.25px] text-[#59797d] text-[30px]">Mental Health Series</span>
        </p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2c415e] text-[14px] whitespace-nowrap">Central School District · Arizona</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[799px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Search1() {
  return (
    <div className="bg-white col-1 h-[30.898px] ml-0 mt-0 relative rounded-[8px] row-1 w-full" data-name="Search 1">
      <div aria-hidden className="absolute border border-[#efefef] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function VuesaxLinearSearchNormal() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/search-normal">
      <div className="absolute inset-[-1.04%]">
        <svg className="block size-full" fill="none" height="16.3333" preserveAspectRatio="none" viewBox="0 0 16.3333 16.3333" width="16.3333">
          <g id="search-normal">
            <path d={svgPaths.pb1c300} id="Vector" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d="M14.8333 14.8333L13.5 13.5" id="Vector_2" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <g id="Vector_3" opacity="0" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[10px] h-[15.449px] items-center ml-[3.19%] mt-[7.72px] relative rounded-[8px] row-1 w-[23.66%]" data-name="search">
      <div className="relative shrink-0 size-[16px]" data-name="search-normal">
        <VuesaxLinearSearchNormal />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Regular',sans-serif] h-[30px] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] tracking-[0.2px] w-[204px]">
        <p className="leading-[normal]">Anxiety in Childrens</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 grid-rows-[max-content] inline-grid ml-0 mt-[1.1px] place-items-start relative row-1 w-[99.87%]">
      <Search1 />
      <Search />
    </div>
  );
}

function Search2() {
  return (
    <div className="bg-[#90b3b6] col-1 content-stretch flex h-[30.898px] items-center justify-center ml-[89.62%] mt-0 relative rounded-[8px] row-1 w-[10.38%]" data-name="Search">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:Medium',sans-serif] h-[30px] justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] text-center tracking-[0.2px] w-[84px]">
        <p className="leading-[normal]">Search</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Group2 />
      <Search2 />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-white h-[60px] relative rounded-[24px] shrink-0 w-[659px]" data-name="search bar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[16px] pl-[24px] pr-[23px] pt-[17px] relative size-full">
        <Group3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[702.982px] items-center max-w-[1024px] relative shrink-0 w-[825px]" data-name="Container">
      <Container2 />
      <SearchBar />
      <div className="h-[416.47px] relative rounded-[23.456px] shrink-0 w-[659.5px]" data-name="image 13">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[23.456px] size-full" src={imgImage13} />
      </div>
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="bg-[#f9f4f1] h-[557px] relative shrink-0 w-[1280px]" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function ContentPage() {
  return (
    <div className="bg-[#f9f4f1] h-[714px] relative shrink-0 w-full" data-name="ContentPage">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-end px-[56px] relative size-full">
          <ContainerMargin />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return <div className="bg-[#90b3b6] h-[20px] relative rounded-[33554400px] shrink-0 w-[4px]" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#2c415e] text-[18px] whitespace-nowrap">Resource Library</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#e8f1f1] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90b3b6] text-[12px] whitespace-nowrap">16 resources</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container6 />
        <Heading1 />
        <Text />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[14px] top-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p2725de00} id="Vector" stroke="#B0B8C1" strokeWidth="1.16667" />
          <path d="M9.625 9.625L12.25 12.25" id="Vector_2" stroke="#B0B8C1" strokeLinecap="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[34px] left-0 rounded-[14px] top-0 w-[208px]" data-name="Text Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip pl-[37px] pr-[17px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c0cdd4] text-[12px] w-full">Filter resources…</p>
      </div>
      <div aria-hidden className="absolute border border-[#e8ebed] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[34px] relative shrink-0 w-[208px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <TextInput />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container5 />
        <Container7 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#223143] relative rounded-[33554400px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">All</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_2px_rgba(0,0,0,0.07)] relative rounded-[33554400px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#717182] text-[12px] text-center whitespace-nowrap">Anxiety</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_2px_rgba(0,0,0,0.07)] relative rounded-[33554400px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#717182] text-[12px] text-center whitespace-nowrap">Depression</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_2px_rgba(0,0,0,0.07)] relative rounded-[33554400px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#717182] text-[12px] text-center whitespace-nowrap">Parenting</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_2px_rgba(0,0,0,0.07)] relative rounded-[33554400px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#717182] text-[12px] text-center whitespace-nowrap">Teen Health</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_2px_rgba(0,0,0,0.07)] relative rounded-[33554400px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#717182] text-[12px] text-center whitespace-nowrap">Self-Care</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_2px_rgba(0,0,0,0.07)] relative rounded-[33554400px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#717182] text-[12px] text-center whitespace-nowrap">Crisis</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[52px] relative shrink-0 w-[912px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start pt-[20px] relative size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#e8f1f1] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
        <div className="relative shrink-0 size-[16px]" data-name="play_circle">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                <path d={svgPaths.p308c8130} fill="#59797D" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#59797d] text-[10px] whitespace-nowrap">Video</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#2c415e] text-[14px] whitespace-nowrap">{`ABC’s of Substance Use & Vaping`}</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="flex-[58.5_0_0] min-h-px relative w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#717182] text-[12px] w-[254px]">Recognize and address risk and health impact in teens</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#f9f4f1] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#90b3b6] text-[10px] whitespace-nowrap">Parenting</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#b0b8c1] text-[10px] whitespace-nowrap">8 min</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p7f8ed00} id="Vector" stroke="#C0CDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text3 />
        <Icon1 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[5px] relative size-full">
        <Text2 />
        <Container12 />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white col-1 drop-shadow-[0px_2px_5px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container10 />
        <Heading2 />
        <Paragraph1 />
        <Container11 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#eef0f3] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
        <div className="relative shrink-0 size-[16px]" data-name="article">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[12.5%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                <g id="Vector">
                  <path d={svgPaths.p26f92c80} fill="#2C415E" />
                  <path d={svgPaths.p4aa5c80} fill="#2C415E" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#2c415e] text-[10px] whitespace-nowrap">Article</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#2c415e] text-[14px] whitespace-nowrap">Body Positivity: Nurturing Self-Image</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="flex-[58.5_0_0] min-h-px relative w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#717182] text-[12px] w-[254px]">Promote body positivity with strategies for self-acceptance</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#f9f4f1] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#90b3b6] text-[10px] whitespace-nowrap">Anxiety</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#b0b8c1] text-[10px] whitespace-nowrap">5 min read</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p7f8ed00} id="Vector" stroke="#C0CDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text6 />
        <Icon2 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[5px] relative size-full">
        <Text5 />
        <Container15 />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white col-2 drop-shadow-[0px_2px_5px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container13 />
        <Heading3 />
        <Paragraph2 />
        <Container14 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#e8f1f1] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
        <div className="relative shrink-0 size-[16px]" data-name="play_circle">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                <path d={svgPaths.p308c8130} fill="#59797D" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#59797d] text-[10px] whitespace-nowrap">Video</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#59797d] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">New</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text7 />
        <Text8 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#2c415e] text-[14px] whitespace-nowrap">Building Your Child’s Confidence</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="flex-[58.5_0_0] min-h-px relative w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#717182] text-[12px] w-[254px]">Foster a healthy identity in your child with professional insights</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#f9f4f1] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#90b3b6] text-[10px] whitespace-nowrap">Self-Care</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#b0b8c1] text-[10px] whitespace-nowrap">6-part series</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p7f8ed00} id="Vector" stroke="#C0CDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text10 />
        <Icon3 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[5px] relative size-full">
        <Text9 />
        <Container18 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-white col-3 drop-shadow-[0px_2px_5px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[16px] row-1 self-stretch shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container16 />
        <Heading4 />
        <Paragraph3 />
        <Container17 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-[#f0edf7] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
        <div className="relative shrink-0 size-[16px]" data-name="assignment">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 12 13.3333" width="12">
                <path d={svgPaths.p2a787c0} fill="#6B5C8D" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#6b5c8d] text-[10px] whitespace-nowrap">Guide</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text11 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#2c415e] text-[14px] whitespace-nowrap">Bullying - Stop the Cycle</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="flex-[58.25_0_0] min-h-px relative w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#717182] text-[12px] w-[254px]">Identify and address bullying with expert tips and strategies</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#f9f4f1] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#90b3b6] text-[10px] whitespace-nowrap">Depression</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#b0b8c1] text-[10px] whitespace-nowrap">7 min read</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p7f8ed00} id="Vector" stroke="#C0CDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text13 />
        <Icon4 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[5px] relative size-full">
        <Text12 />
        <Container21 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-white col-1 drop-shadow-[0px_2px_5px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[16px] row-2 self-stretch shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container19 />
        <Heading5 />
        <Paragraph4 />
        <Container20 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="bg-[#f7f0e8] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
        <div className="relative shrink-0 size-[16px]" data-name="create">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[12.5%_12.49%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12.0017 12" width="12.0017">
                <path d={svgPaths.p1ad4ca80} fill="#8D6B3A" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#8d6b3a] text-[10px] whitespace-nowrap">Worksheet</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text14 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#2c415e] text-[14px] whitespace-nowrap">
          <p className="leading-[19.25px] mb-0 whitespace-pre">{`Compassionate Parenting & `}</p>
          <p className="leading-[19.25px] whitespace-pre">Self-Compassion</p>
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="flex-[58.25_0_0] min-h-px relative w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#717182] text-[12px] w-[254px]">Practical tools for reducing day-to-day stress as a family.</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="bg-[#f9f4f1] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#90b3b6] text-[10px] whitespace-nowrap">Parenting</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#b0b8c1] text-[10px] whitespace-nowrap">Printable</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p7f8ed00} id="Vector" stroke="#C0CDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text16 />
        <Icon5 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[5px] relative size-full">
        <Text15 />
        <Container24 />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-white col-2 drop-shadow-[0px_2px_5px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[16px] row-2 self-stretch shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container22 />
        <Heading6 />
        <Paragraph5 />
        <Container23 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="bg-[#eef0f3] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
        <div className="relative shrink-0 size-[16px]" data-name="article">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[12.5%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                <g id="Vector">
                  <path d={svgPaths.p26f92c80} fill="#2C415E" />
                  <path d={svgPaths.p4aa5c80} fill="#2C415E" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#2c415e] text-[10px] whitespace-nowrap">Article</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text17 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#2c415e] text-[14px] w-[254px]">De-escalating Cycles of Conflicts</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[38.5px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#717182] text-[12px] w-[254px]">Resolve conflicts using internal Family Systems</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="bg-[#f9f4f1] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#90b3b6] text-[10px] whitespace-nowrap">Anxiety</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#b0b8c1] text-[10px] whitespace-nowrap">6 min read</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p7f8ed00} id="Vector" stroke="#C0CDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text19 />
        <Icon6 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[5px] relative size-full">
        <Text18 />
        <Container27 />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-white col-3 drop-shadow-[0px_2px_5px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[16px] row-2 self-stretch shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container25 />
        <Heading7 />
        <Paragraph6 />
        <Container26 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="bg-[#f0edf7] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
        <div className="relative shrink-0 size-[16px]" data-name="assignment">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 12 13.3333" width="12">
                <path d={svgPaths.p2a787c0} fill="#6B5C8D" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#6b5c8d] text-[10px] whitespace-nowrap">Guide</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text20 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#2c415e] text-[14px] whitespace-nowrap">Depression: You’re Not Alone</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[57.75px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#717182] text-[12px] w-[254px]">Understand the complexity, symptoms and early intervention</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="bg-[#f9f4f1] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#90b3b6] text-[10px] whitespace-nowrap">Parenting</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#b0b8c1] text-[10px] whitespace-nowrap">10 min read</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p7f8ed00} id="Vector" stroke="#C0CDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text22 />
        <Icon7 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[5px] relative size-full">
        <Text21 />
        <Container30 />
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-white col-1 drop-shadow-[0px_2px_5px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[16px] row-3 self-stretch shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container28 />
        <Heading8 />
        <Paragraph7 />
        <Container29 />
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="bg-[#eef0f3] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
        <div className="relative shrink-0 size-[16px]" data-name="article">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[12.5%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
                <g id="Vector">
                  <path d={svgPaths.p26f92c80} fill="#2C415E" />
                  <path d={svgPaths.p4aa5c80} fill="#2C415E" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#2c415e] text-[10px] whitespace-nowrap">Article</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text23 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#2c415e] text-[14px] whitespace-pre">
          {`Effects of Screen Time & `}
          <br aria-hidden />
          Children’s Mental Health
        </p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#717182] text-[12px] w-[254px]">Explore the impact on kid;s mental health and set limits</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="bg-[#f9f4f1] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#90b3b6] text-[10px] whitespace-nowrap">Parenting</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#b0b8c1] text-[10px] whitespace-nowrap">8 min read</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p7f8ed00} id="Vector" stroke="#C0CDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text25 />
        <Icon8 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[5px] relative size-full">
        <Text24 />
        <Container33 />
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-white col-2 drop-shadow-[0px_2px_5px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[16px] row-3 self-stretch shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container31 />
        <Heading9 />
        <Paragraph8 />
        <Container32 />
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="bg-[#e8f1f1] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
        <div className="relative shrink-0 size-[16px]" data-name="play_circle">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333" width="13.3333">
                <path d={svgPaths.p308c8130} fill="#59797D" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#59797d] text-[10px] whitespace-nowrap">Video</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="bg-[#59797d] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">New</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text26 />
        <Text27 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[19.25px] not-italic relative shrink-0 text-[#2c415e] text-[14px] whitespace-nowrap">
          Emotional Regulation - Part 1:
          <br aria-hidden />
          Recognizing What’s Wrong
        </p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#717182] text-[12px] w-[254px]">Guide your child in mastering emotional regulation and balance</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="bg-[#f9f4f1] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#90b3b6] text-[10px] whitespace-nowrap">Teen Health</p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#b0b8c1] text-[10px] whitespace-nowrap">12 min</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p7f8ed00} id="Vector" stroke="#C0CDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text29 />
        <Icon9 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[5px] relative size-full">
        <Text28 />
        <Container36 />
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-white col-3 drop-shadow-[0px_2px_5px_rgba(0,0,0,0.05)] justify-self-stretch relative rounded-[16px] row-3 self-stretch shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container34 />
        <Heading10 />
        <Paragraph9 />
        <Container35 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[___293.33px_293.33px_293.34px] grid-rows-[___200.75px_200.50px_200.75px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#90b3b6] relative rounded-[14px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#90b3b6] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[33px] py-[13px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Show all resources</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[70px] relative shrink-0 w-[912px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pt-[24px] relative size-full">
        <Button7 />
      </div>
    </div>
  );
}

function ResourceLibrary() {
  return (
    <div className="relative shrink-0 w-full" data-name="ResourceLibrary">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container4 />
        <Container8 />
        <ContainerMargin1 />
        <Container37 />
      </div>
    </div>
  );
}

function Container40() {
  return <div className="bg-[#90b3b6] h-[21.257px] relative rounded-[10627.402px] shrink-0 w-[4.251px]" data-name="Container" />;
}

function Paragraph10() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[29.76px] not-italic relative shrink-0 text-[#2c415e] text-[19.131px] whitespace-nowrap">Monthly Calendar</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8.503px] items-center relative size-full">
        <Container40 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#59797d] text-[12.754px] whitespace-nowrap">View all events</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[13.817px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.817" preserveAspectRatio="none" viewBox="0 0 13.817 13.817" width="13.817">
        <g id="Icon">
          <path d={svgPaths.pa8e2f80} id="Vector" stroke="#59797D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.15141" />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="relative rounded-[14.88px] shrink-0" data-name="Link">
      <div aria-hidden className="absolute border-[#90b3b6] border-[1.063px] border-solid inset-0 pointer-events-none rounded-[14.88px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8.503px] items-center px-[23.383px] py-[10.629px] relative size-full">
        <Text30 />
        <Icon10 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container39 />
        <Link9 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[14.88px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.8799" preserveAspectRatio="none" viewBox="0 0 14.8799 14.8799" width="14.8799">
        <g id="Icon">
          <path d={svgPaths.p1899d620} id="Vector" stroke="#2C415E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.23999" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[10.628px] shrink-0 size-[34.011px]" data-name="Button">
      <div aria-hidden className="absolute border-[#e0e0e0] border-[1.063px] border-solid inset-0 pointer-events-none rounded-[10.628px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.063px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="min-w-[191.3123779296875px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center min-w-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[21.257px] not-italic relative shrink-0 text-[#2c415e] text-[14.88px] text-center whitespace-nowrap">July 2025</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[14.88px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.8799" preserveAspectRatio="none" viewBox="0 0 14.8799 14.8799" width="14.8799">
        <g id="Icon">
          <path d={svgPaths.p17951d00} id="Vector" stroke="#2C415E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.23999" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[10.628px] shrink-0 size-[34.011px]" data-name="Button">
      <div aria-hidden className="absolute border-[#e0e0e0] border-[1.063px] border-solid inset-0 pointer-events-none rounded-[10.628px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.063px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12.754px] items-center relative size-full">
        <Button8 />
        <Text31 />
        <Button9 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[8.503px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12.754px] py-[6.377px] relative size-full">
        <p className="[word-break:break-word] capitalize font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] text-center whitespace-nowrap">day</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[8.503px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12.754px] py-[6.377px] relative size-full">
        <p className="[word-break:break-word] capitalize font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] text-center whitespace-nowrap">week</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white drop-shadow-[0px_1.063px_1.594px_rgba(0,0,0,0.1)] relative rounded-[8.503px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12.754px] py-[6.377px] relative size-full">
        <p className="[word-break:break-word] capitalize font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#2c415e] text-[12.754px] text-center whitespace-nowrap">month</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#f0f0f0] relative rounded-[10.628px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2.126px] items-center p-[2.126px] relative size-full">
        <Button10 />
        <Button11 />
        <Button12 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-[826.895px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[10.628px] relative size-full">
          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#b0b8c1] text-[12.754px] text-center tracking-[0.6377px] uppercase whitespace-nowrap">Sun</p>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[10.628px] relative size-full">
          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#b0b8c1] text-[12.754px] text-center tracking-[0.6377px] uppercase whitespace-nowrap">Mon</p>
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[10.628px] relative size-full">
          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#b0b8c1] text-[12.754px] text-center tracking-[0.6377px] uppercase whitespace-nowrap">Tue</p>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[10.628px] relative size-full">
          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#b0b8c1] text-[12.754px] text-center tracking-[0.6377px] uppercase whitespace-nowrap">Wed</p>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="col-5 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[10.628px] relative size-full">
          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#b0b8c1] text-[12.754px] text-center tracking-[0.6377px] uppercase whitespace-nowrap">Thu</p>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="col-6 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[10.628px] relative size-full">
          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#b0b8c1] text-[12.754px] text-center tracking-[0.6377px] uppercase whitespace-nowrap">Fri</p>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="col-7 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[10.628px] relative size-full">
          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#b0b8c1] text-[12.754px] text-center tracking-[0.6377px] uppercase whitespace-nowrap">Sat</p>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#f0f0f0] border-b-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[_______121.46px_121.46px_121.46px_121.48px_121.46px_121.46px_121.46px] grid-rows-[_38.26px] pb-[1.063px] relative size-full">
        <Container45 />
        <Container46 />
        <Container47 />
        <Container48 />
        <Container49 />
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[#fafafa] col-1 justify-self-stretch min-h-[85.02772521972656px] relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#fafafa] col-2 justify-self-stretch min-h-[85.02772521972656px] relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text32() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="col-3 justify-self-stretch min-h-[85.02772521972656px] relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text32 />
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="col-4 justify-self-stretch min-h-[85.02772521972656px] relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text33 />
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="col-5 justify-self-stretch min-h-[85.02772521972656px] relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text34 />
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="col-6 justify-self-stretch min-h-[85.02772521972656px] relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text35 />
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="col-7 justify-self-stretch min-h-[85.02772521972656px] relative row-1 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text36 />
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">6</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="col-1 justify-self-stretch min-h-[85.02772521972656px] relative row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text37 />
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">7</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="col-2 justify-self-stretch min-h-[85.02772521972656px] relative row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text38 />
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">8</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="col-3 justify-self-stretch min-h-[85.02772521972656px] relative row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text39 />
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">9</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="col-4 justify-self-stretch min-h-[85.02772521972656px] relative row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text40 />
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">10</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#90b3b6] h-[19.131px] relative rounded-[10.628px] shrink-0 w-[107.646px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[6.377px] py-[2.126px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[14.88px] not-italic relative shrink-0 text-[10.628px] text-white whitespace-nowrap">Understanding Anxiety in Children</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="col-5 justify-self-stretch min-h-[85.02772521972656px] relative row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.251px] items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text41 />
        <Button13 />
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">11</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="col-6 justify-self-stretch min-h-[85.02772521972656px] relative row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text42 />
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">12</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="col-7 justify-self-stretch min-h-[85.02772521972656px] relative row-2 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text43 />
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">13</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="col-1 justify-self-stretch min-h-[85.02772521972656px] relative row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text44 />
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">14</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="col-2 justify-self-stretch min-h-[85.02772521972656px] relative row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text45 />
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">15</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#223143] h-[19.131px] relative rounded-[10.628px] shrink-0 w-[107.646px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[6.377px] py-[2.126px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[14.88px] not-italic relative shrink-0 text-[10.628px] text-white whitespace-nowrap">{`Mindfulness & Stress Tools for Parents`}</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="col-3 justify-self-stretch min-h-[85.02772521972656px] relative row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.251px] items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text46 />
        <Button14 />
      </div>
    </div>
  );
}

function Text47() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">16</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="col-4 justify-self-stretch min-h-[85.02772521972656px] relative row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text47 />
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">17</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#90b3b6] h-[19.131px] relative rounded-[10.628px] shrink-0 w-[107.646px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[6.377px] py-[2.126px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[14.88px] not-italic relative shrink-0 text-[10.628px] text-white whitespace-nowrap">Emotional Resilience – Module 2 Launch</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="col-5 justify-self-stretch min-h-[85.02772521972656px] relative row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.251px] items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text48 />
        <Button15 />
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">18</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="col-6 justify-self-stretch min-h-[85.02772521972656px] relative row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text49 />
      </div>
    </div>
  );
}

function Text50() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">19</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="col-7 justify-self-stretch min-h-[85.02772521972656px] relative row-3 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text50 />
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">20</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="col-1 justify-self-stretch min-h-[85.02772521972656px] relative row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text51 />
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">21</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="col-2 justify-self-stretch min-h-[85.02772521972656px] relative row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text52 />
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">22</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="col-3 justify-self-stretch min-h-[85.02772521972656px] relative row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text53 />
      </div>
    </div>
  );
}

function Text54() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">23</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#223143] h-[19.131px] relative rounded-[10.628px] shrink-0 w-[107.663px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[6.377px] py-[2.126px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[14.88px] not-italic relative shrink-0 text-[10.628px] text-white whitespace-nowrap">Parent Support Circle</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="col-4 justify-self-stretch min-h-[85.02772521972656px] relative row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.251px] items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text54 />
        <Button16 />
      </div>
    </div>
  );
}

function Text55() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">24</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="col-5 justify-self-stretch min-h-[85.02772521972656px] relative row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text55 />
      </div>
    </div>
  );
}

function Text56() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">25</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="col-6 justify-self-stretch min-h-[85.02772521972656px] relative row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text56 />
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">26</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="col-7 justify-self-stretch min-h-[85.02772521972656px] relative row-4 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text57 />
      </div>
    </div>
  );
}

function Text58() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">27</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="col-1 justify-self-stretch min-h-[85.02772521972656px] relative row-5 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text58 />
      </div>
    </div>
  );
}

function Text59() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">28</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="col-2 justify-self-stretch min-h-[85.02772521972656px] relative row-5 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text59 />
      </div>
    </div>
  );
}

function Text60() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">29</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="col-3 justify-self-stretch min-h-[85.02772521972656px] relative row-5 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text60 />
      </div>
    </div>
  );
}

function Text61() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">30</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="col-4 justify-self-stretch min-h-[85.02772521972656px] relative row-5 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text61 />
      </div>
    </div>
  );
}

function Text62() {
  return (
    <div className="relative rounded-[35663176px] shrink-0 size-[25.508px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[17.006px] not-italic relative shrink-0 text-[#717182] text-[12.754px] whitespace-nowrap">31</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="col-5 justify-self-stretch min-h-[85.02772521972656px] relative row-5 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pb-[7.44px] pl-[6.377px] pr-[7.44px] pt-[6.377px] relative size-full">
        <Text62 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-[#fafafa] col-6 justify-self-stretch min-h-[85.02772521972656px] relative row-5 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container87() {
  return (
    <div className="bg-[#fafafa] col-7 justify-self-stretch min-h-[85.02772521972656px] relative row-5 self-stretch shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#f5f5f5] border-b-[1.063px] border-r-[1.063px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid grid grid-cols-[_______121.46px_121.46px_121.46px_121.48px_121.46px_121.46px_121.46px] grid-rows-[_____85.03px_85.03px_85.03px_85.03px_85.03px] relative size-full">
        <Container53 />
        <Container54 />
        <Container55 />
        <Container56 />
        <Container57 />
        <Container58 />
        <Container59 />
        <Container60 />
        <Container61 />
        <Container62 />
        <Container63 />
        <Container64 />
        <Container65 />
        <Container66 />
        <Container67 />
        <Container68 />
        <Container69 />
        <Container70 />
        <Container71 />
        <Container72 />
        <Container73 />
        <Container74 />
        <Container75 />
        <Container76 />
        <Container77 />
        <Container78 />
        <Container79 />
        <Container80 />
        <Container81 />
        <Container82 />
        <Container83 />
        <Container84 />
        <Container85 />
        <Container86 />
        <Container87 />
      </div>
    </div>
  );
}

function MonthView() {
  return (
    <div className="bg-white h-[464.464px] relative rounded-[17.006px] shadow-[0px_2.126px_12.754px_0px_rgba(0,0,0,0.06)] shrink-0 w-[850.277px]" data-name="MonthView">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container44 />
        <Container52 />
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="h-[536.738px] relative shrink-0 w-full" data-name="Calendar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12.754px] items-center pt-[25.508px] relative size-full">
        <Container41 />
        <MonthView />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="h-[590px] relative shrink-0 w-[970px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center relative size-full">
        <Container38 />
        <Calendar />
      </div>
    </div>
  );
}

function Container90() {
  return <div className="bg-[#90b3b6] h-[20px] relative rounded-[33554400px] shrink-0 w-[4px]" data-name="Container" />;
}

function Heading11() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#2c415e] text-[18px] whitespace-nowrap">Upcoming Events</p>
      </div>
    </div>
  );
}

function Text63() {
  return (
    <div className="bg-[#e8f1f1] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90b3b6] text-[12px] whitespace-nowrap">8 total</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container90 />
        <Heading11 />
        <Text63 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container89 />
      </div>
    </div>
  );
}

function Text64() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#59797d] text-[20px] whitespace-nowrap">10</p>
      </div>
    </div>
  );
}

function TextMargin() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#90b3b6] text-[10px] tracking-[0.25px] uppercase whitespace-nowrap">July</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="bg-[#e8f1f1] content-stretch flex flex-col items-center justify-center min-w-[60px] px-[16px] py-[12px] relative rounded-[14px] shrink-0" data-name="Container">
      <Text64 />
      <TextMargin />
    </div>
  );
}

function AutoAddedFrame() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0" data-name="Auto-added frame">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
          <Container93 />
        </div>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2c415e] text-[14px] whitespace-nowrap">Understanding Anxiety in Children</p>
      </div>
    </div>
  );
}

function Text65() {
  return (
    <div className="bg-[#90b3b6] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">Session</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Heading12 />
        <Text65 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90b3b6] text-[12px] whitespace-nowrap">4:00 PM – 5:00 PM</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24.75px] relative shrink-0 w-[679px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[22.75px] not-italic relative shrink-0 text-[#717182] text-[14px] whitespace-nowrap">{`Live Q&A with a licensed child therapist. Bring your questions.`}</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="flex-[679.969_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container95 />
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#90b3b6] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#59797d] text-[12px] text-center whitespace-nowrap">Register</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_5px_rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 w-[912px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center px-[24px] py-[20px] relative size-full">
        <AutoAddedFrame />
        <Container94 />
        <Button17 />
      </div>
    </div>
  );
}

function Text66() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#223143] text-[20px] whitespace-nowrap">15</p>
      </div>
    </div>
  );
}

function TextMargin1() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#6b7c8d] text-[10px] tracking-[0.25px] uppercase whitespace-nowrap">July</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[#eef0f3] content-stretch flex flex-col items-center justify-center min-w-[60px] px-[16px] py-[12px] relative rounded-[14px] shrink-0" data-name="Container">
      <Text66 />
      <TextMargin1 />
    </div>
  );
}

function AutoAddedFrame1() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0" data-name="Auto-added frame">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
          <Container97 />
        </div>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2c415e] text-[14px] whitespace-nowrap">{`Mindfulness & Stress Tools for Parents`}</p>
      </div>
    </div>
  );
}

function Text67() {
  return (
    <div className="bg-[#223143] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">Workshop</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Heading13 />
        <Text67 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90b3b6] text-[12px] whitespace-nowrap">12:00 PM – 1:00 PM</p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24.75px] relative shrink-0 w-[679px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[22.75px] not-italic relative shrink-0 text-[#717182] text-[14px] whitespace-nowrap">Interactive workshop on breathing and grounding techniques you can share with your kids.</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="flex-[679.969_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container99 />
        <Paragraph13 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#223143] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#223143] text-[12px] text-center whitespace-nowrap">Register</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_5px_rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 w-[912px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center px-[24px] py-[20px] relative size-full">
        <AutoAddedFrame1 />
        <Container98 />
        <Button18 />
      </div>
    </div>
  );
}

function Text68() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#59797d] text-[20px] whitespace-nowrap">17</p>
      </div>
    </div>
  );
}

function TextMargin2() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[#90b3b6] text-[10px] tracking-[0.25px] uppercase whitespace-nowrap">July</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-[#e8f1f1] content-stretch flex flex-col items-center justify-center min-w-[60px] px-[16px] py-[12px] relative rounded-[14px] shrink-0" data-name="Container">
      <Text68 />
      <TextMargin2 />
    </div>
  );
}

function AutoAddedFrame2() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="h-full relative shrink-0" data-name="Auto-added frame">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
          <Container101 />
        </div>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2c415e] text-[14px] whitespace-nowrap">Emotional Resilience – Module 2 Launch</p>
      </div>
    </div>
  );
}

function Text69() {
  return (
    <div className="bg-[#90b3b6] relative rounded-[33554400px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[15px] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">Session</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Heading14 />
        <Text69 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#90b3b6] text-[12px] whitespace-nowrap">All day</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[24.75px] relative shrink-0 w-[679px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[22.75px] not-italic relative shrink-0 text-[#717182] text-[14px] whitespace-nowrap">New module now available in your dashboard.</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="flex-[679.969_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container103 />
        <Paragraph15 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#90b3b6] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[17px] py-[9px] relative size-full">
        <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#59797d] text-[12px] text-center whitespace-nowrap">Register</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_5px_rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 w-[912px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-center px-[24px] py-[20px] relative size-full">
        <AutoAddedFrame2 />
        <Container102 />
        <Button19 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[374.25px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pt-[24px] relative size-full">
        <Container92 />
        <Container96 />
        <Container100 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p15341480} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#90b3b6] h-full relative rounded-[14px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#90b3b6] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[33px] py-[13px] relative size-full">
          <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Load more events</p>
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[70px] relative shrink-0 w-[912px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pt-[24px] relative size-full">
        <Button20 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container88 />
        <Container91 />
        <Container104 />
      </div>
    </div>
  );
}

function ContentPage1() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center max-w-[1024px] px-[56px] py-[48px] relative shrink-0 w-[1024px]" data-name="ContentPage">
      <ResourceLibrary />
      <Section />
      <Section1 />
    </div>
  );
}

function ContentPageMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="ContentPage:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <ContentPage1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f9f4f1] min-h-[896px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center min-h-[inherit] relative size-full">
        <ContentPage />
        <ContentPageMargin />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[28.409px] relative shrink-0 w-[117.188px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="28.4089" preserveAspectRatio="none" viewBox="0 0 117.188 28.4089" width="117.188">
        <g id="Group 2">
          <path d={svgPaths.p23de9500} fill="#A1BFB9" id="Vector" />
          <path d={svgPaths.p2d0057f0} fill="#58595B" id="Vector_2" />
          <path d={svgPaths.p53a0dc0} fill="#58595B" id="Vector_3" />
          <path d={svgPaths.p1db09d00} fill="#58595B" id="Vector_4" />
          <path d={svgPaths.p30f51e80} fill="#58595B" id="Vector_5" />
          <path d={svgPaths.p12d56200} fill="#58595B" id="Vector_6" />
          <path d={svgPaths.p163dd400} fill="#58595B" id="Vector_7" />
          <path d={svgPaths.p2daeb230} fill="#58595B" id="Vector_8" />
          <path d={svgPaths.p26c12980} fill="#58595B" id="Vector_9" />
          <path d={svgPaths.pb673200} fill="#58595B" id="Vector_10" />
          <path d={svgPaths.p19cdd800} fill="#58595B" id="Vector_11" />
          <path d={svgPaths.pbf01600} fill="#58595B" id="Vector_12" />
          <path d={svgPaths.p310e1000} fill="#58595B" id="Vector_13" />
          <path d={svgPaths.p321a3a00} fill="#58595B" id="Vector_14" />
          <path d={svgPaths.p3b105f00} fill="#8A9695" id="Vector_15" />
          <path d={svgPaths.p29bbe980} fill="#58595B" id="Vector_16" />
          <path d={svgPaths.p11bd1ec0} fill="#58595B" id="Vector_17" />
          <path d={svgPaths.p33948680} fill="#58595B" id="Vector_18" />
          <path d={svgPaths.p108a7c00} fill="#58595B" id="Vector_19" />
          <path d={svgPaths.pbb23600} fill="#58595B" id="Vector_20" />
        </g>
      </svg>
    </div>
  );
}

function AppStore() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="app store">
      <div className="h-[24px] relative shrink-0 w-[79.61px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[130.16%] left-[-0.74%] max-w-none top-[-15.08%] w-[101.47%]" src={imgImage5} />
        </div>
      </div>
      <div className="h-[24px] relative shrink-0 w-[82px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[178px] items-start relative shrink-0 w-[467.356px]">
      <Group1 />
      <AppStore />
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start py-[7.102px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#58595b] text-[12.429px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Contact Us
      </p>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start py-[7.102px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#58595b] text-[12.429px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cookie Policy
      </p>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-start py-[7.102px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#58595b] text-[12.429px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Consent Documents
      </p>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-start py-[7.102px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#58595b] text-[12.429px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cook Center for Human Connection
      </p>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link10 />
      <Link11 />
      <Link12 />
      <Link13 />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col gap-[14.205px] items-start overflow-clip relative shrink-0 w-[199.752px]" data-name="Column">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#58595b] text-[14.205px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Our Company
      </p>
      <FooterLinks />
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-start py-[7.102px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#58595b] text-[12.429px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Mental Health Series
      </p>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-start py-[7.102px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#58595b] text-[12.429px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Parent Coaching
      </p>
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-start py-[7.102px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#58595b] text-[12.429px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        On-Demand Courses
      </p>
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex items-start py-[7.102px] relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[1.5] min-w-px relative text-[#58595b] text-[12.429px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ask a Therapist
      </p>
    </div>
  );
}

function FooterLinks1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Links">
      <Link14 />
      <Link15 />
      <Link16 />
      <Link17 />
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col gap-[14.205px] items-start overflow-clip relative shrink-0 w-[235.264px]" data-name="Column">
      <p className="[word-break:break-word] font-['Roboto:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#58595b] text-[14.205px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Mental Health Resources
      </p>
      <FooterLinks1 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[177.558px] items-center justify-center min-w-px relative" data-name="Links">
      <Column />
      <Column1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[177.558px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Links />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="absolute content-stretch flex gap-[12.117px] inset-[3.17%_89.71%_3.17%_-0.23%] items-end justify-end" data-name="social media">
      <div className="relative shrink-0 size-[21.541px]" data-name="facebook">
        <div className="absolute inset-[8.33%]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="17.9509" preserveAspectRatio="none" viewBox="0 0 17.9509 17.9509" width="17.9509">
            <path d={svgPaths.p327f8b00} fill="#2C415E" id="vector" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[21.541px]" data-name="instagram">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.1558" preserveAspectRatio="none" viewBox="0 0 16.1558 16.1558" width="16.1558">
            <g id="vector">
              <path clipRule="evenodd" d={svgPaths.p35d8fa00} fill="#2C415E" fillRule="evenodd" />
              <path d={svgPaths.p3238c200} fill="#2C415E" />
              <path clipRule="evenodd" d={svgPaths.p20c8c700} fill="#2C415E" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[21.541px]" data-name="youtube">
        <div className="absolute inset-[20.8%_8.33%]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="12.5817" preserveAspectRatio="none" viewBox="0 0 17.9509 12.5817" width="17.9509">
            <path clipRule="evenodd" d={svgPaths.p3c318700} fill="#2C415E" fillRule="evenodd" id="vector" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[21.541px]" data-name="linkedin">
        <div className="absolute inset-[12.5%]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.1558" preserveAspectRatio="none" viewBox="0 0 16.1558 16.1558" width="16.1558">
            <path d={svgPaths.p397a0780} fill="#2C415E" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Credits1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[323.155px]" data-name="Credits">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#2c415e] text-[14.205px] whitespace-nowrap">© 2026 ParentGuidance.org. All rights reserved.</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[56.818px] items-center justify-end relative shrink-0 w-full" data-name="Row">
      <SocialMedia />
      <Credits1 />
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex flex-col gap-[28.409px] items-start relative shrink-0 w-full" data-name="Credits">
      <div className="bg-[#a1bfb9] h-[0.888px] relative shrink-0 w-full" data-name="Divider">
        <div aria-hidden className="absolute border-[#a1bfb9] border-[0.888px] border-solid inset-0 pointer-events-none" />
      </div>
      <Row />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col gap-[71.023px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame />
      <Credits />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#f9f4f1] h-[466px] relative shrink-0 w-[1278px]" data-name="Footer / 6 /">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[40px] items-center justify-end px-[56.818px] py-[32px] relative size-full">
        <div className="bg-[#a1bfb9] h-[0.888px] relative shrink-0 w-full" data-name="Divider">
          <div aria-hidden className="absolute border-[#a1bfb9] border-[0.888px] border-solid inset-0 pointer-events-none" />
        </div>
        <Container105 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[717px] relative shrink-0 w-[1280px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container />
        <Footer />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_0_0.02%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[105px_24px]" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.9962" preserveAspectRatio="none" viewBox="0 0 105 23.9962" width="105">
        <g id="Group">
          <path d={svgPaths.p37d85f80} fill="#90B4B6" id="Vector" />
          <path d={svgPaths.p336c2a30} fill="#FAF5F1" id="Vector_2" />
          <path d={svgPaths.p32c63380} fill="#FAF5F1" id="Vector_3" />
          <path d={svgPaths.p1e05f500} fill="#FAF5F1" id="Vector_4" />
          <path d={svgPaths.p847a600} fill="#FAF5F1" id="Vector_5" />
          <path d={svgPaths.p168e6c00} fill="#FAF5F1" id="Vector_6" />
          <path d={svgPaths.p2b3a1d00} fill="#FAF5F1" id="Vector_7" />
          <path d={svgPaths.p3fa63800} fill="#FAF5F1" id="Vector_8" />
          <path d={svgPaths.pf80fc40} fill="#FAF5F1" id="Vector_9" />
          <path d={svgPaths.p6808200} fill="#FAF5F1" id="Vector_10" />
          <path d={svgPaths.p2166ae80} fill="#FAF5F1" id="Vector_11" />
          <path d={svgPaths.p29ca9340} fill="#FAF5F1" id="Vector_12" />
          <path d={svgPaths.p49f4100} fill="#FAF5F1" id="Vector_13" />
          <path d={svgPaths.p97f3000} fill="#FAF5F1" id="Vector_14" />
          <path d={svgPaths.p32da5e00} fill="#FAF5F1" id="Vector_15" />
          <path d={svgPaths.p38b34680} fill="#FAF5F1" id="Vector_16" />
          <path d={svgPaths.p2bca3000} fill="#FAF5F1" id="Vector_17" />
          <path d={svgPaths.p26a7d100} fill="#FAF5F1" id="Vector_18" />
          <path d={svgPaths.p161a88c0} fill="#FAF5F1" id="Vector_19" />
          <path d={svgPaths.p38cd2100} fill="#FAF5F1" id="Vector_20" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-[105px]" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function Logo() {
  return (
    <div className="relative shrink-0" data-name="Logo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Home</p>
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Mental Health Series</p>
      </div>
    </div>
  );
}

function Link20() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Parent Coaching</p>
      </div>
    </div>
  );
}

function Link21() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">On-Demand Courses</p>
      </div>
    </div>
  );
}

function Link22() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Ask A Therapist</p>
      </div>
    </div>
  );
}

function Link23() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Get Help</p>
      </div>
    </div>
  );
}

function Text70() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#97b4b5] text-[12px] whitespace-nowrap">English</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p31eb1700} fill="#97B4B5" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Navbar() {
  return (
    <div className="relative shrink-0" data-name="Navbar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text70 />
        <Icon15 />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Link18 />
        <Link19 />
        <Link20 />
        <Link21 />
        <Link22 />
        <Link23 />
        <Navbar />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-[#223143] h-[56px] left-0 top-0 w-[1280px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[40px] relative size-full">
        <Logo />
        <Container106 />
      </div>
    </div>
  );
}

export default function MentalHealthPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Mental health page">
      <Body />
      <Navigation />
    </div>
  );
}