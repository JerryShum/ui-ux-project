import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-y697pnm2ku";
import imgProfile from "figma:asset/a2be33f2af00d31d5f413a534fb987e372815c37.png";
import BottomNavBar from "./BottomNavBar";

const imgRectangle1 = "https://images.unsplash.com/photo-1588912914017-923900a34710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0Ym9vayUyMGFsZ2VicmF8ZW58MXx8fHwxNzY0MzczNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgRectangle2 = "https://images.unsplash.com/flagged/photo-1576697010739-6373b63f3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMGRlc2t8ZW58MXx8fHwxNzY0MzYzOTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgRectangle3 = "https://images.unsplash.com/photo-1588912914017-923900a34710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0Ym9vayUyMGFsZ2VicmF8ZW58MXx8fHwxNzY0MzczNDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgRectangle4 = "https://images.unsplash.com/flagged/photo-1576697010739-6373b63f3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMGRlc2t8ZW58MXx8fHwxNzY0MzYzOTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

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
            <p className="leading-[normal] whitespace-pre">Search...</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[4px_6px_4px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function FileNotebook() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="File / Notebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="File / Notebook">
          <path d={svgPaths.p1f601600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Textbooks() {
  return (
    <div className="bg-[#0077ca] box-border content-stretch flex flex-col gap-[10px] items-center p-[5px] relative rounded-[10px] shrink-0 w-[70px] cursor-pointer hover:opacity-90 transition-opacity" data-name="Textbooks">
      <FileNotebook />
      <div className="capitalize flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Textbooks</p>
      </div>
    </div>
  );
}

function EditEditPencilLine() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Edit / Edit_Pencil_Line_01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Edit / Edit_Pencil_Line_01">
          <path d={svgPaths.p33895180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Textbooks1() {
  return (
    <div className="bg-[#0077ca] box-border content-stretch flex flex-col gap-[10px] items-center p-[5px] relative rounded-[10px] shrink-0 w-[70px] cursor-pointer hover:opacity-90 transition-opacity" data-name="Textbooks">
      <EditEditPencilLine />
      <div className="capitalize flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Stationery</p>
      </div>
    </div>
  );
}

function SystemDesktopTower() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="System / Desktop_Tower">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="System / Desktop_Tower">
          <path d={svgPaths.p17d43700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Textbooks2() {
  const navigate = useNavigate();
  
  return (
    <div onClick={() => navigate('/laptops')} className="bg-[#0077ca] box-border content-stretch flex flex-col gap-[10px] items-center p-[5px] relative rounded-[10px] shrink-0 w-[70px] cursor-pointer hover:opacity-90 transition-opacity" data-name="Textbooks">
      <SystemDesktopTower />
      <div className="capitalize flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Laptops</p>
      </div>
    </div>
  );
}

function MediaHeadphones() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Media / Headphones">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Media / Headphones">
          <path d={svgPaths.p5650280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Textbooks3() {
  return (
    <div className="bg-[#0077ca] box-border content-stretch flex flex-col gap-[10px] items-center p-[5px] relative rounded-[10px] shrink-0 w-[70px] cursor-pointer hover:opacity-90 transition-opacity" data-name="Textbooks">
      <MediaHeadphones />
      <div className="capitalize flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Audio</p>
      </div>
    </div>
  );
}

function InterfaceGift() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Interface / Gift">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Interface / Gift">
          <path d={svgPaths.p12272d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Textbooks4() {
  return (
    <div className="bg-[#0077ca] box-border content-stretch flex flex-col gap-[10px] items-center p-[5px] relative rounded-[10px] shrink-0 w-[70px] cursor-pointer hover:opacity-90 transition-opacity" data-name="Textbooks">
      <InterfaceGift />
      <div className="capitalize flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Misc.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full">
      <Textbooks />
      <Textbooks1 />
      <Textbooks2 />
      <Textbooks3 />
      <Textbooks4 />
    </div>
  );
}

function Categories() {
  return (
    <div className="relative shrink-0 w-full" data-name="Categories">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
          <div className="capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ff6a39] text-[24px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Categories</p>
          </div>
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0">$60</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">Oshawa, ON</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Linear Algebra Textbook</p>
      <Frame />
    </div>
  );
}

function Listing() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="Listing">
      <div className="relative rounded-[10px] shrink-0 size-[200px]">
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
      <p className="relative shrink-0">Toronto, ON</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Dell Laptop</p>
      <Frame1 />
    </div>
  );
}

function Listing1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="Listing">
      <div className="relative rounded-[10px] shrink-0 size-[200px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle2} />
      </div>
      <Text1 />
    </div>
  );
}

function ListingGroup() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[410px]" data-name="Listing Group">
      <Listing />
      <Listing1 />
    </div>
  );
}

function FeaturedListings() {
  return (
    <div className="relative shrink-0 w-full" data-name="Featured Listings">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
          <div className="capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ff6a39] text-[24px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Featured Listings</p>
          </div>
          <ListingGroup />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0">$60</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">Oshawa, ON</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Linear Algebra Textbook</p>
      <Frame2 />
    </div>
  );
}

function Listing2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="Listing">
      <div className="relative rounded-[10px] shrink-0 size-[200px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle3} />
      </div>
      <Text2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0">$600</p>
      <p className="relative shrink-0">|</p>
      <p className="relative shrink-0">Toronto, ON</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Dell Laptop</p>
      <Frame3 />
    </div>
  );
}

function Listing3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-90 transition-opacity" data-name="Listing">
      <div className="relative rounded-[10px] shrink-0 size-[200px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle4} />
      </div>
      <Text3 />
    </div>
  );
}

function ListingGroup1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[410px]" data-name="Listing Group">
      <Listing2 />
      <Listing3 />
    </div>
  );
}

function FeaturedListings1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Featured Listings">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
          <div className="capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#ff6a39] text-[24px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Listings in your Area</p>
          </div>
          <ListingGroup1 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[20px] h-[775px] items-start left-0 overflow-clip px-[20px] py-[10px] top-[108px] w-[438px]" data-name="Content">
      <Searcg />
      <Categories />
      <FeaturedListings />
      <FeaturedListings1 />
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

export default function HomePage() {
  return (
    <div className="bg-white overflow-clip relative rounded-[20px] size-full" data-name="4 - Home">
      <BottomNavBar />
      <Content />
      <TopSection />
    </div>
  );
}
