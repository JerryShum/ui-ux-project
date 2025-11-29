import { useNavigate } from 'react-router-dom';
import svgPaths from "../imports/svg-6sd3dirsui";
import imgFreestocksRgKmrxpIraYUnsplash1 from "figma:asset/801a1f736e0e6dd11cf8f2dfc2ae504754b7b6f6.png";

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
    <div className="h-[44px] relative shrink-0 w-[402px]" data-name="Page Control">
      <Frame />
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#ff6a39] box-border content-stretch flex flex-col gap-[5px] items-center justify-center overflow-clip p-[10px] relative rounded-[20px] shrink-0 w-[210px] cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="Button"
    >
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">Next</p>
    </button>
  );
}

function Content({ onNext }: { onNext: () => void }) {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[20px] items-center left-0 overflow-clip px-[10px] py-[40px] rounded-[20px] size-[440px] top-[516px]" data-name="Content">
      <div className="h-[51px] relative shrink-0 w-[60px]" data-name="􀍩">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 51">
          <path d={svgPaths.pf320c80} fill="var(--fill-0, #0077CA)" id="ô©" />
        </svg>
      </div>
      <div className="capitalize flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#0077ca] text-[24px] text-center w-[min-content]">
        <p className="leading-[normal]">Your Campus Marketplace</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-[370px]">
        <p className="leading-[normal]">Navigate our intuitive platform designed for students. List your items in minutes or browse a curated selection of university essentials with ease.</p>
      </div>
      <PageControl />
      <Button onClick={onNext} />
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
              <path d={svgPaths.pdd38d00} fill="white" />
              <path d={svgPaths.p4dcf300} fill="white" />
              <path d={svgPaths.p12ffd800} fill="white" />
              <path d={svgPaths.p35c50d00} fill="white" />
            </g>
            <path d={svgPaths.p254fc400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <g id="Group 12">
              <path d={svgPaths.p186cc200} fill="var(--fill-0, white)" id="Vector (Stroke)" />
              <path clipRule="evenodd" d={svgPaths.p31b47400} fillRule="evenodd" id="Vector (Stroke)_2" stroke="var(--stroke-0, white)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function TopIcons() {
  return (
    <div className="absolute bg-[#0077ca] box-border content-stretch flex items-start justify-between left-0 overflow-clip px-[20px] py-[9px] top-0 w-[440px]" data-name="Top Icons">
      <div className="capitalize flex flex-col font-['League_Spartan:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">16:04</p>
      </div>
      <Group />
    </div>
  );
}

export default function Onboarding1() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/onboarding-2');
  };

  return (
    <div className="bg-white overflow-clip relative rounded-[20px] size-full" data-name="2 - Onboarding">
      <div className="absolute h-[567px] left-[-205px] top-0 w-[850px]" data-name="freestocks-RgKmrxpIraY-unsplash 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFreestocksRgKmrxpIraYUnsplash1} />
      </div>
      <Content onNext={handleNext} />
      <TopIcons />
    </div>
  );
}
