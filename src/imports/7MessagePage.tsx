import svgPaths from "./svg-btdyvdxtrj";
import imgImageProduct from "figma:asset/66c553538024fe6aabdd360778f261919718a634.png";
import imgImageWithFallback from "figma:asset/f49f766e6923e0e11314a7601342aebbab43f76d.png";

function Bar() {
  return (
    <div className="absolute h-[72px] left-0 top-[884px] w-[440px]" data-name="Bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 440 72">
        <g id="Bar">
          <path d={svgPaths.pe955b30} fill="var(--fill-0, #0077CA)" />
          <g id="iOS / icon / 36 / message">
            <path d={svgPaths.p2ba91200} fill="var(--fill-0, white)" id="ô´" stroke="var(--stroke-0, white)" />
          </g>
          <path d={svgPaths.p130afa80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3d274b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2a4a2400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <g id="Vector_4">
            <path d={svgPaths.p33d7fb00} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2ac17f80} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[21px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Type a message...</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.5">
          <path d={svgPaths.p92c4c00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 bg-[#f0f0f0] grow h-[45px] min-h-px min-w-px relative rounded-[25px] shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[45px] items-center px-[20px] py-0 relative w-full">
          <TextInput />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p281373c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ff6a39] relative rounded-[3.35544e+07px] shrink-0 size-[44px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[44px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[45px] items-center relative shrink-0 w-full" data-name="Container">
      <Container />
      <Button />
    </div>
  );
}

function MessageInput() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[70px] items-start left-0 p-[10px] top-[814px] w-[440px]" data-name="MessageInput">
      <Container1 />
    </div>
  );
}

function ImageProduct() {
  return (
    <div className="aspect-[60/60] relative shrink-0 w-full" data-name="Image (Product)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageProduct} />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-[80px]">
        <ImageProduct />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[239px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-start relative w-[239px]">
        <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black">Macbook Pro M3 2024</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15px] relative shrink-0 w-[239px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-[239px]">
        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">$900 | Toronto, ON</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[36px] items-start relative w-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function ProductPreview() {
  return (
    <div className="bg-neutral-100 relative rounded-[15px] shrink-0 w-full" data-name="ProductPreview">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[10px] relative w-full">
          <Container2 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.594px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.6px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">Hi! Is this still available?</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 bg-[#0077ca] grow min-h-px min-w-px relative rounded-[20px] shrink-0 w-[187.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[12px] px-[16px] relative w-[187.75px]">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[14px] opacity-50 relative shrink-0 w-[49.344px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start px-[4px] py-0 relative w-[49.344px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-black text-nowrap whitespace-pre">2:15 PM</p>
      </div>
    </div>
  );
}

function MessageBubble() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[61.594px] items-end relative shrink-0 w-full" data-name="MessageBubble">
      <Container4 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[39.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.6px] left-0 not-italic text-[14px] text-black top-0 w-[198px]">{`Yes! It's still available. Are you interested?`}</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 bg-[#f0f0f0] grow min-h-px min-w-px relative rounded-[20px] shrink-0 w-[280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[12px] px-[16px] relative w-[280px]">
        <Paragraph4 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[14px] opacity-50 relative shrink-0 w-[49.438px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start px-[4px] py-0 relative w-[49.438px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-black text-nowrap whitespace-pre">2:18 PM</p>
      </div>
    </div>
  );
}

function MessageBubble1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[81.188px] items-start relative shrink-0 w-full" data-name="MessageBubble">
      <Container5 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[58.781px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.6px] left-0 not-italic text-[14px] text-white top-0 w-[227px]">Great! Can you tell me more about the condition? Any scratches or issues?</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 bg-[#0077ca] grow min-h-px min-w-px relative rounded-[20px] shrink-0 w-[280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[12px] px-[16px] relative w-[280px]">
        <Paragraph6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[14px] opacity-50 relative shrink-0 w-[51.078px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start px-[4px] py-0 relative w-[51.078px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-black text-nowrap whitespace-pre">2:20 PM</p>
      </div>
    </div>
  );
}

function MessageBubble2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[100.781px] items-end relative shrink-0 w-full" data-name="MessageBubble">
      <Container6 />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[58.781px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.6px] left-0 not-italic text-[14px] text-black top-0 w-[218px]">{`It's in excellent condition! No scratches, always kept in a case. Battery health is at 95%.`}</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f0f0f0] h-[92px] relative rounded-[20px] shrink-0 w-[280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[92px] items-start pb-0 pt-[12px] px-[16px] relative w-[280px]">
        <Paragraph8 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[14px] opacity-50 relative shrink-0 w-[50.859px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start px-[4px] py-0 relative w-[50.859px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-black text-nowrap whitespace-pre">2:22 PM</p>
      </div>
    </div>
  );
}

function MessageBubble3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="MessageBubble">
      <Container7 />
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[39.188px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.6px] left-0 not-italic text-[14px] text-white top-0 w-[247px]">That sounds perfect! Would you be willing to meet in downtown Toronto?</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 bg-[#0077ca] grow min-h-px min-w-px relative rounded-[20px] shrink-0 w-[280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[12px] px-[16px] relative w-[280px]">
        <Paragraph10 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[14px] opacity-50 relative shrink-0 w-[51.094px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[14px] items-start px-[4px] py-0 relative w-[51.094px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[11px] text-black text-nowrap whitespace-pre">2:24 PM</p>
      </div>
    </div>
  );
}

function MessageBubble4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[81.188px] items-end relative shrink-0 w-full" data-name="MessageBubble">
      <Container8 />
      <Paragraph11 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute bg-[rgba(0,119,202,0.18)] box-border content-stretch flex flex-col gap-[20px] h-[846px] items-center left-0 overflow-clip px-[20px] py-[10px] rounded-[20px] top-[110px] w-[440px]" data-name="Content">
      <ProductPreview />
      <MessageBubble />
      <MessageBubble1 />
      <MessageBubble2 />
      <MessageBubble3 />
      <MessageBubble4 />
    </div>
  );
}

function ArrowBack() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="arrow_back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="arrow_back">
          <path d={svgPaths.p1e263f00} fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-start left-[20px] top-[44px]" data-name="Icons">
      <ArrowBack />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#d1d5dc] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-[40px]">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-start relative">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">John Smith</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[15px] opacity-60 relative shrink-0 w-[88.406px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-[88.406px]">
        <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-black">Active now</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[35px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[35px] items-start relative">
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function MessageHeader() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[138px] top-[44px]" data-name="MessageHeader">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[11px] relative shrink-0 w-[56px]">
      <div className="absolute bottom-[-4.55%] left-0 right-[-0.89%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 12">
          <g id="Group 13">
            <g id="Vector">
              <path d={svgPaths.pdd38d00} fill="#1E1E1E" />
              <path d={svgPaths.p4dcf300} fill="#1E1E1E" />
              <path d={svgPaths.p12ffd800} fill="#1E1E1E" />
              <path d={svgPaths.p35c50d00} fill="#1E1E1E" />
            </g>
            <path d={svgPaths.p254fc400} id="Vector_2" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeWidth="2" />
            <g id="Group 12">
              <path d={svgPaths.p186cc200} fill="var(--fill-0, #1E1E1E)" id="Vector (Stroke)" />
              <path clipRule="evenodd" d={svgPaths.p31b47400} fillRule="evenodd" id="Vector (Stroke)_2" stroke="var(--stroke-0, #1E1E1E)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function TopIcons() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-between left-0 overflow-clip px-[20px] py-[9px] top-0 w-[440px]" data-name="Top Icons">
      <div className="capitalize flex flex-col font-['League_Spartan:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1e1e1e] text-[14px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">16:04</p>
      </div>
      <Group />
    </div>
  );
}

function TopSection() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Top Section">
      <Icons />
      <MessageHeader />
      <TopIcons />
    </div>
  );
}

export default function Component7MessagePage() {
  return (
    <div className="bg-white overflow-clip relative rounded-[20px] size-full" data-name="7 - Message Page">
      <Bar />
      <MessageInput />
      <Content />
      <TopSection />
    </div>
  );
}