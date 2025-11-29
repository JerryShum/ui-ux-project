import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-o1dbqmu3q5";
import imgImageWithFallback from "figma:asset/558286c0329d0a3bc803cfbbbf3fdaeb6ba29095.png";
import imgImageProduct from "figma:asset/24abc5b4522d3b9286316be489eef75eb2667fac.png";
import imgImage3 from "figma:asset/8b7f96b8ef749583eff05519c1bc7a72d0047751.png";
import imgImageProduct1 from "figma:asset/dfbb92a91decc0329dbea0c2487a971d970d0340.png";
import imgImage4 from "figma:asset/261a3f7fb3f884520102a6a0d722724ad8a3c158.png";
import imgImageProduct2 from "figma:asset/b6ce6b3645f3b3d97d8c494cb69d258d2b54e274.png";
import BottomNavBar from "./BottomNavBar";

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
      <TopIcons />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex h-[34px] items-start relative shrink-0 w-full" data-name="Header">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#0077ca] text-[28px]">Messages</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon" opacity="0.5">
          <path d="M17.5 17.5L13.8833 13.8833" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pcddfd00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[21px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Search messages...</p>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-[#f0f0f0] h-[41px] relative rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="SearchBar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[41px] items-center px-[16px] py-0 relative w-full">
          <Icon />
          <TextInput />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute left-0 size-[60px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[#ff6a39] border-2 border-solid border-white left-[46px] rounded-[3.35544e+07px] size-[18px] top-[-4px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="bg-[#d1d5dc] overflow-clip relative rounded-[3.35544e+07px] shrink-0 size-[60px]" data-name="Container">
      <ImageWithFallback />
      <Container />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 overflow-clip top-0 w-[88.406px]" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">John Smith</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[158.23px] opacity-80 top-[4px] w-[46.766px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">2:22 PM</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[17px] opacity-70 overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[14px] text-black top-0 w-[271px]">{`It's in excellent condition! No scratches...`}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[50px] relative shrink-0 w-[205px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[50px] items-start relative w-[205px]">
        <Container2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function ImageProduct() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Image (Product)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageProduct} />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[50px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-[50px]">
        <ImageProduct />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[20px] h-[50px] items-start relative shrink-0" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function ConversationItem() {
  const navigate = useNavigate();
  
  return (
    <div onClick={() => navigate('/message')} className="relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" data-name="ConversationItem">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-between px-[20px] py-[12px] relative w-full">
          <Container1 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute left-0 overflow-clip size-[60px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
      <div className="absolute h-[113px] left-[-32px] top-[-27px] w-[123px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#d1d5dc] overflow-clip relative rounded-[3.35544e+07px] shrink-0 size-[60px]" data-name="Container">
      <ImageWithFallback1 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 overflow-clip top-0" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">Jessica Jules</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[158.23px] opacity-80 top-[4px] w-[46.766px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">2:22 PM</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[17px] opacity-70 overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[14px] text-black top-0 w-[271px]">Hello, is this available?</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[50px] relative shrink-0 w-[205px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[50px] items-start relative w-[205px]">
        <Container7 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function ImageProduct1() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Image (Product)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageProduct1} />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[50px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-[50px]">
        <ImageProduct1 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[20px] h-[50px] items-start relative shrink-0" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function ConversationItem1() {
  return (
    <div className="relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" data-name="ConversationItem">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-between px-[20px] py-[12px] relative w-full">
          <Container6 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute left-0 overflow-clip size-[60px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
      <div className="absolute h-[255px] left-[-78px] top-[-97px] w-[216px]" data-name="image 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#d1d5dc] overflow-clip relative rounded-[3.35544e+07px] shrink-0 size-[60px]" data-name="Container">
      <ImageWithFallback2 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 overflow-clip top-0" data-name="Paragraph">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">Akshan Singh</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[158.23px] opacity-80 top-[4px] w-[46.766px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">2:22 PM</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[17px] opacity-70 overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[14px] text-black top-0 w-[271px]">Laptop is indeed for sale sir.</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[50px] relative shrink-0 w-[205px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[50px] items-start relative w-[205px]">
        <Container12 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function ImageProduct2() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Image (Product)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageProduct2} />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[50px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-[50px]">
        <ImageProduct2 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[20px] h-[50px] items-start relative shrink-0" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function ConversationItem2() {
  return (
    <div className="relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" data-name="ConversationItem">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-between px-[20px] py-[12px] relative w-full">
          <Container11 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col h-[672px] items-start relative shrink-0 w-full" data-name="Container">
      <ConversationItem />
      <ConversationItem1 />
      <ConversationItem2 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[853px] items-center left-0 overflow-clip p-[20px] top-[31px] w-[440px]" data-name="Content">
      <Header />
      <SearchBar />
      <Container16 />
    </div>
  );
}

export default function MessageListPage() {
  return (
    <div className="bg-white overflow-clip relative rounded-[20px] size-full" data-name="7 - Message Page - List">
      <BottomNavBar />
      <TopSection />
      <Content />
    </div>
  );
}
