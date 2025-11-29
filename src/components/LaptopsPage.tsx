import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-mrsliac75g";
import imgRectangle1 from "figma:asset/cb64a56084a0011172f1feb2817d917055633d71.png";
import imgRectangle2 from "figma:asset/ac68bcf75ac616f59e93ba212a5532f949aa83f7.png";
import imgRectangle3 from "figma:asset/90cea300be88094643a439067c4e8c7a5adf891c.png";
import imgRectangle4 from "figma:asset/47a4dea5731b5fec1b995f6e17ee1b600a952a95.png";
import imgRectangle5 from "figma:asset/ef7872ca97cb9cfb68be2df46bebe21d9817087e.png";
import imgRectangle6 from "figma:asset/a18f2520341f45ced77008841193517815b5c1a9.png";
import imgProfile from "figma:asset/a2be33f2af00d31d5f413a534fb987e372815c37.png";
import BottomNavBar from "./BottomNavBar";

function IOsIcon24SearchMagnifyingGlass() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iOS / icon / 24 / search-magnifying-glass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iOS / icon / 24 / search-magnifying-glass">
          <path d={svgPaths.p18a01470} fill="var(--fill-0, #0077CA)" id="icon" stroke="var(--stroke-0, #0077CA)" />
        </g>
      </svg>
    </div>
  );
}

function Searcg() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Searcg">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start p-[10px] relative w-full">
          <IOsIcon24SearchMagnifyingGlass />
          <div className="capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-[dimgrey] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Laptops</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[4px_6px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0">$500</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">Toronto, ON</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Macbook Pro 2012</p>
      <Frame />
    </div>
  );
}

function ListingSmall() {
  const navigate = useNavigate();
  
  return (
    <div onClick={() => navigate('/product')} className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="Listing Small">
      <div className="relative rounded-[10px] shrink-0 size-[150px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle1} />
      </div>
      <Text />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0">$600</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">Oshawa, ON</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Macbook Air M2</p>
      <Frame1 />
    </div>
  );
}

function ListingSmall1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="Listing Small">
      <div className="relative rounded-[10px] shrink-0 size-[150px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle2} />
      </div>
      <Text1 />
    </div>
  );
}

function ListingGroup() {
  return (
    <div className="content-stretch flex gap-[40px] items-start justify-center relative shrink-0 w-[410px]" data-name="Listing Group">
      <ListingSmall />
      <ListingSmall1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0">$700</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">Markham, ON</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Dell XPS 15 2020</p>
      <Frame2 />
    </div>
  );
}

function ListingSmall2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="Listing Small">
      <div className="relative rounded-[10px] shrink-0 size-[150px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle3} />
      </div>
      <Text2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0">$400</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">Toronto, ON</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Dell XPS 13 2017</p>
      <Frame3 />
    </div>
  );
}

function ListingSmall3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="Listing Small">
      <div className="relative rounded-[10px] shrink-0 size-[150px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle4} />
      </div>
      <Text3 />
    </div>
  );
}

function ListingGroup1() {
  return (
    <div className="content-stretch flex gap-[40px] items-start justify-center relative shrink-0 w-[410px]" data-name="Listing Group">
      <ListingSmall2 />
      <ListingSmall3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0">$200</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">Whitby, ON</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Rare Macbook 2012</p>
      <Frame4 />
    </div>
  );
}

function ListingSmall4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="Listing Small">
      <div className="relative rounded-[10px] shrink-0 size-[150px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle5} />
      </div>
      <Text4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0">$654</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">Toronto, ON</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">{`Macbook Pro `}</p>
      <Frame5 />
    </div>
  );
}

function ListingSmall5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="Listing Small">
      <div className="relative rounded-[10px] shrink-0 size-[150px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle6} />
      </div>
      <Text5 />
    </div>
  );
}

function ListingGroup2() {
  return (
    <div className="content-stretch flex gap-[40px] items-start justify-center relative shrink-0 w-[410px]" data-name="Listing Group">
      <ListingSmall4 />
      <ListingSmall5 />
    </div>
  );
}

function FeaturedListings() {
  return (
    <div className="relative shrink-0 w-full" data-name="Featured Listings">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-center p-[10px] relative w-full">
          <div className="capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ff6a39] text-[24px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Listings for "Laptops"</p>
          </div>
          <ListingGroup />
          <ListingGroup1 />
          {[...Array(2).keys()].map((_, i) => (
            <ListingGroup2 key={i} />
          ))}
          <ListingGroup />
          <ListingGroup />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[20px] h-[775px] items-start left-0 overflow-x-clip overflow-y-auto px-[20px] py-[10px] top-[108px] w-[438px]" data-name="Content">
      <Searcg />
      <FeaturedListings />
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute left-[367px] size-[51px] top-[44px] cursor-pointer hover:opacity-90 transition-opacity" data-name="Profile">
      <img alt="" className="block max-w-none size-full" height="51" src={imgProfile} width="51" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[23px] top-[44px]">
      <div className="absolute capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[122.5px] not-italic text-[#0077ca] text-[32px] text-center text-nowrap top-[72.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">
          Campus<span className="text-[#ff6a39]">Cart</span>
        </p>
      </div>
      <Profile />
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
      <Group1 />
      <TopIcons />
    </div>
  );
}

export default function LaptopsPage() {
  return (
    <div className="bg-white overflow-clip relative rounded-[20px] size-full" data-name="5 - Shopping">
      <BottomNavBar />
      <Content />
      <TopSection />
    </div>
  );
}
