import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-2oh1kbo84q";
import imgImage2 from "figma:asset/66c553538024fe6aabdd360778f261919718a634.png";
import BottomNavBar from "./BottomNavBar";

function Image() {
  return (
    <div className="h-[550px] overflow-clip relative rounded-[20px] shrink-0 w-full" data-name="Image">
      <div className="absolute h-[731px] left-[-46px] top-[-65px] w-[489px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Dot() {
  return <div className="bg-[#0077ca] rounded-[50px] shrink-0 size-[8px]" data-name="Dot 1" />;
}

function Dot1() {
  return <div className="bg-black opacity-30 rounded-[50px] shrink-0 size-[8px]" data-name="Dot 2" />;
}

function Dot2() {
  return <div className="bg-black opacity-30 rounded-[50px] shrink-0 size-[8px]" data-name="Dot 3" />;
}

function Frame() {
  return (
    <div className="absolute backdrop-blur-[20px] backdrop-filter box-border content-stretch flex gap-[8px] items-center justify-center left-[calc(50%-1px)] px-[12px] py-[8px] rounded-[50px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Frame">
      <Dot />
      <Dot1 />
      <Dot2 />
    </div>
  );
}

function PageControl() {
  return (
    <div className="h-[10px] relative shrink-0 w-[402px]" data-name="Page Control">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic relative shrink-0 text-black text-nowrap">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[20px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Macbook Pro m3 2024</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">$900 | Toronto, ON</p>
      </div>
    </div>
  );
}

function Button() {
  const navigate = useNavigate();
  
  return (
    <div onClick={() => navigate('/message')} className="bg-[#ff6a39] box-border content-stretch flex flex-col gap-[5px] items-center justify-center overflow-clip p-[10px] relative rounded-[20px] shrink-0 w-[200px] cursor-pointer hover:opacity-90 transition-opacity" data-name="Button">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">Message User</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full">
      <Button />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[20px] items-start left-0 overflow-x-clip overflow-y-auto px-[20px] py-[10px] top-[108px] w-[438px] h-[775px]" data-name="Content">
      <Image />
      <PageControl />
      <Frame1 />
      <div className="capitalize flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">
        <p className="leading-[normal]">{`Hey there! I'm selling my MacBook Pro M3. This thing is a powerhouse! The M3 chip means super-fast performance and awesome graphics. The Retina display is gorgeous for streaming or working on projects. It's lightweight and perfect for on-the-go! Plus, the battery life lasts all day. If you're looking for a reliable laptop that looks great too, this is it. Shoot me a message if you're interested!`}</p>
      </div>
      <Frame2 />
    </div>
  );
}

function EditCloseCircle() {
  const navigate = useNavigate();
  
  return (
    <div onClick={() => navigate('/laptops')} className="relative shrink-0 size-[40px] cursor-pointer hover:opacity-70 transition-opacity" data-name="Edit / Close_Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Edit / Close_Circle">
          <path d={svgPaths.p15d68300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function InterfaceSearchMagnifyingGlass() {
  return (
    <div className="relative shrink-0 size-[40px] cursor-pointer hover:opacity-70 transition-opacity" data-name="Interface / Search_Magnifying_Glass">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Interface / Search_Magnifying_Glass">
          <path d={svgPaths.p138d3b80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[20px] top-[44px] w-[398px]" data-name="Icons">
      <EditCloseCircle />
      <InterfaceSearchMagnifyingGlass />
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
      <TopIcons />
    </div>
  );
}

export default function ProductPage() {
  return (
    <div className="bg-white overflow-clip relative rounded-[20px] size-full" data-name="6 - Product Page - 2">
      <Content />
      <TopSection />
      <BottomNavBar />
    </div>
  );
}
